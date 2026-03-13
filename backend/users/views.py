from django.shortcuts import render
from rest_framework import generics
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from .models import User
from .serializers import UserReadSerializer, UserWriteSerializer, UserUpdateSerializer

# Registro de usuários.
class UserRegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserWriteSerializer

# View para listagem de  usuários *Ação permitida apenas para usuários Admin.
class UserAdminViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAdminUser]
    queryset = User.objects.all()
    
    def get_serializer_class(self):
        if self.action in ['list', 'retrieve']:
            return UserReadSerializer
        return UserWriteSerializer
    
# View para deletar usuário *Ação permitida apenas para usuários Admin.
class UserDeleteViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAdminUser]
    queryset = User.objects.all()
    serializer_class = UserReadSerializer
    

# View para dashboard de usuário *Ação permitida para todos os usuários autenticados.
class UserCustomerViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return User.objects.filter(id=self.request.user.id)

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return UserReadSerializer
        return UserWriteSerializer

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()

    def get_serializer_class(self):
        if self.action in ['update', 'partial_update']:
            return UserUpdateSerializer
        return UserReadSerializer
    
    def get_permissions(self):
        if self.action in ['update', 'partial_update']:
            return [permissions.IsAuthenticated()]
        return [permissions.IsAuthenticated()]
    
    def get_object(self):
        if self.action in ['updata', 'partial_update'] and not self.request.user.is_staff:
            return self.request.user
        return super().get_object()