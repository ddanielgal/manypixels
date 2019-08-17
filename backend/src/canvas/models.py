from django.db import models


class Canvas(models.Model):
    name = models.CharField(max_length=50)
    size_x = models.IntegerField()
    size_y = models.IntegerField()
    content = models.TextField()


class Entry(models.Model):
    canvas = models.ForeignKey(Canvas, on_delete=models.CASCADE, related_name='history')
    x = models.IntegerField()
    y = models.IntegerField()
    color = models.CharField(max_length=1)
    name = models.CharField(max_length=30)
    timestamp = models.DateTimeField(auto_now_add=True)
