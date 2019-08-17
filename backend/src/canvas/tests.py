from rest_framework.test import APITestCase
from rest_framework import status
import json
import time

from .models import Canvas, Entry

class CanvasTestCase(APITestCase):


    def test_get_canvas_10x10(self):
        Canvas.objects.create(
            name='Test1',
            size_x=10,
            size_y=10,
            content='0'*100
        )
        pk = Canvas.objects.all()[0].pk
        url = '/api/v1/canvas/%d/' % pk

        start = time.time()
        response = self.client.get(url)
        end = time.time()
        print()
        print('10x10 get time: %f' % (end - start))

        response_data = json.loads(response.content)
        expected = {
            'id': pk,
            'size_x': 10,
            'size_y': 10,
            'name': 'Test1',
            'content': '0' * 100
        }

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response_data, expected)


    def test_post_canvas_10x10(self):
        url = '/api/v1/canvas/'
        request_data = {
            'size_x': 10,
            'size_y': 10,
            'name': 'Test1'
        }

        start = time.time()
        response = self.client.post(url, request_data)
        end = time.time()
        print()
        print('10x10 post time: %f' % (end - start))

        # Assert db
        self.assertEqual(Canvas.objects.all().count(), 1)

        # Assert response
        response_data = json.loads(response.content)
        expected = {
            'id': Canvas.objects.all()[0].pk,
            'size_x': 10,
            'size_y': 10,
            'name': 'Test1',
            'content': '0' * 100
        }

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response_data, expected)
        

    def test_get_canvas_1000x1000(self):
        Canvas.objects.create(
            name='Test1',
            size_x=1000,
            size_y=1000,
            content='0'*1000000
        )
        pk = Canvas.objects.all()[0].pk
        url = '/api/v1/canvas/%d/' % pk

        start = time.time()
        response = self.client.get(url)
        end = time.time()
        print()
        print('1000x1000 get time: %f' % (end - start))

        response_data = json.loads(response.content)
        expected = {
            'id': pk,
            'size_x': 1000,
            'size_y': 1000,
            'name': 'Test1',
            'content': '0' * 1000000
        }

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response_data, expected)
    

    def test_put_pixel(self):
        Canvas.objects.create(
            name='Test',
            size_x=100,
            size_y=100,
            content='0'*100*100
        )
        pk = Canvas.objects.all()[0].pk
        url = '/api/v1/canvas/%d/' % pk

        request_data = {
            'x': 5,
            'y': 15,
            'color': '6',
            'name': 'Victor'
        }

        response = self.client.put(url, request_data)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Canvas.objects.all()[0].content, '0'*1505 + '6' + '0'*8494)
    
    def test_history_2_puts(self):
        Canvas.objects.create(
            name='Test',
            size_x=100,
            size_y=100,
            content='0'*100*100
        )
        pk = Canvas.objects.all()[0].pk
        url = '/api/v1/canvas/%d/' % pk

        response = self.client.put(url, {'x': 5, 'y': 15, 'color': '6', 'name': 'Victor'})
        response = self.client.put(url, {'x': 54, 'y': 12, 'color': 'f', 'name': 'Victor'})

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Entry.objects.all().count(), 2)
        entries = [Entry.objects.all()[0], Entry.objects.all()[1]]
        self.assertEqual(entries[0].x, 5)
        self.assertEqual(entries[0].y, 15)
        self.assertEqual(entries[0].color, '6')
        self.assertEqual(entries[0].name, 'Victor')
        self.assertEqual(entries[1].x, 54)
        self.assertEqual(entries[1].y, 12)
        self.assertEqual(entries[1].color, 'f')
        self.assertEqual(entries[1].name, 'Victor')
        
