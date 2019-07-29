from django.urls import path
from rest_framework import routers

from . import views


router = routers.DefaultRouter()
router.register(r"canvas", views.CanvasViewSet)
router.register(r"hexcanvas", views.HexCanvasViewSet)

urlpatterns = router.urls
