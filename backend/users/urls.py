from rest_framework.routers import DefaultRouter
from .views import UserAdminViewSet, UserCustomerViewSet, UserProfileViewSet
from django.urls import path, include

router = DefaultRouter()
# Listagem de usuários sem permissão para modificações.
router.register(r'users-list', UserAdminViewSet, basename='user-list')
# Dashboard de usuário para visualização dos seus dados.
router.register(r'user-dashboard', UserCustomerViewSet, basename='user-dashboard')
router.register(r'user-profile', UserProfileViewSet, basename='user-profile')

urlpatterns = [
    path('user-customer/', include(router.urls)),
    path('user-admin/', include(router.urls)),
]