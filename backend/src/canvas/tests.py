from rest_framework.test import APITestCase
from rest_framework import status
import json

from .models import Canvas

class CanvasTestCase(APITestCase):

    def test_post_canvas_10x10(self):
        url = '/api/v1/canvas/'
        request_data = {
            'size_x': 10,
            'size_y': 10,
            'name': 'Test1'
        }

        response = self.client.post(url, request_data)

        # Assert db
        self.assertEqual(Canvas.objects.all().count(), 1)

        # Assert response
        response_data = json.loads(response.content)
        expected = {
            'id': Canvas.objects.all()[0].pk,
            'size_x': 10,
            'size_y': 10,
            'name': 'Test1',
            'content': [[255,255,255] for x in range(0,10*10)]
        }

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response_data, expected)
        
    def test_post_canvas_1000x1000(self):
        url = '/api/v1/canvas/'
        request_data = {
            'size_x': 1000,
            'size_y': 1000,
            'name': 'Test2'
        }

        response = self.client.post(url, request_data)

        # Assert db
        self.assertEqual(Canvas.objects.all().count(), 1)

        # Assert response
        response_data = json.loads(response.content)
        expected = {
            'id': Canvas.objects.all()[0].pk,
            'size_x': 1000,
            'size_y': 1000,
            'name': 'Test2',
            'content': [[255,255,255] for x in range(0,1000*1000)]
        }

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response_data, expected)
