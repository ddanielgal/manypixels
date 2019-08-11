from rest_framework import viewsets
from rest_framework import mixins
from django.http import JsonResponse, HttpResponse

from .models import Canvas
from .serializers import CanvasSerializer


class CanvasViewSet(
    viewsets.GenericViewSet,
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin):
    
    queryset = Canvas.objects.all()
    serializer_class = CanvasSerializer

    def create(self, request, *args, **kwargs):
        x = int(request.data.get('size_x'))
        y = int(request.data.get('size_y'))
        new_canvas = {
            'size_x': x,
            'size_y': y,
            'name': request.data.get('name'),
            'content': '0' * x * y
        }
        serializer = CanvasSerializer(data=new_canvas)
        serializer.is_valid()
        serializer.save()
        return JsonResponse(serializer.data, status=201)

    def update(self, request, *args, **kwargs):
        x = int(request.data.get('x'))
        y = int(request.data.get('y'))
        color = request.data.get('color')
        instance = self.get_object()
        old_content = list(instance.content)
        old_content[y*instance.size_x+x] = color
        new_content = ''.join(old_content)
        new_data = { 'content': new_content }
        serializer = self.get_serializer(instance, new_data, partial=True)
        serializer.is_valid()
        serializer.save()
        return HttpResponse(status=200)
