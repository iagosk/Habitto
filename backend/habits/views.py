from django.shortcuts import render
from rest_framework import generics, viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Habit
from .serializers import HabitSerializer

# # Create your views here.
class HabitView(viewsets.ModelViewSet):
    queryset = Habit.objects.all()
    serializaer_class = HabitSerializer

    def get_serializer_class(self):
        if self.action in ['list', 'retrieve']:
            return HabitSerializer
        return HabitSerializer