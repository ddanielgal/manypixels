from django.contrib import admin
from django.urls import path, include

urlpatterns = [

    # Server Side Rendering
    path('admin/', admin.site.urls),
    path('api/v1/', include('canvas.urls'))
]
