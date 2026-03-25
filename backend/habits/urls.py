from rest_framework.routers import DefaultRouter
from .views import HabitView
from django.urls import path, include

router = DefaultRouter()

router.register(r'habits-list', HabitView, basename='habits-list')

urlpatterns = router.urls