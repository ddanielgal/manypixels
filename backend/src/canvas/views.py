from rest_framework import viewsets
from rest_framework import mixins
from django.http import JsonResponse

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
            'content': [[255,255,255] for x in range(0,(x*y))]
        }
        serializer = CanvasSerializer(data=new_canvas)
        serializer.is_valid()
        serializer.save()
        return JsonResponse(serializer.data, status=201)
