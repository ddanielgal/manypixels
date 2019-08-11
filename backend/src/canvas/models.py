from django.db import models


class Canvas(models.Model):
    name = models.CharField(max_length=50)
    size_x = models.IntegerField()
    size_y = models.IntegerField()
    content = models.TextField()
