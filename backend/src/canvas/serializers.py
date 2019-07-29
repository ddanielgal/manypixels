from rest_framework import serializers

from .models import Canvas, HexCanvas

class CanvasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Canvas
        fields = '__all__'
        
        
class HexCanvasSerializer(serializers.ModelSerializer):
    class Meta:
        model = HexCanvas
        fields = '__all__'
        