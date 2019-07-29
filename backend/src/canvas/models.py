from django.db import models
from django.contrib.postgres.fields import JSONField


class Canvas(models.Model):
    name = models.CharField(max_length=50)
    size_x = models.IntegerField()
    size_y = models.IntegerField()
    content = JSONField()


class HexCanvas(Canvas):
    pass
    