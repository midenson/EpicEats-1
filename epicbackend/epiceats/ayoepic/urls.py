from django.contrib import admin
from django.urls import path, include
from .views import userViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'user', userViewSet, basename='userModel')

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls'))
]