from rest_framework import serializers
from .models import User

class UserReadSerializer(serializers.ModelSerializer):
    # password = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields = ['id', 'nameUser','email', 'is_admin', 'password']

class UserWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['nameUser', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}
        
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email']
        read_only_fields = ['nameUser', 'password']