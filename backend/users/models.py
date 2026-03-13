from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# Regras para a criação do usuário e criptografia de senha.
class MyUserManager(BaseUserManager):
    def create_user(self, nameUser, password=None, **extra_fields):
        if not nameUser:
            raise ValueError('Usuário deve conter nome de usuário.')

        user = self.model(nameUser=nameUser, **extra_fields)
        
        if password:
            user.set_password(password) # Criptografia da senha
        
        user.save(using=self._db)
        return user
    def create_superuser(self, nameUser, password=None, **extra_fields):
        
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_admin', True)
        return self.create_user(nameUser, password, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):   
    nameUser = models.CharField(max_length=255, unique=True)
    # Campo password será criado pela classe 'AbstractBaseUser'
    fullName = models.CharField(max_length=255)
    age = models.IntegerField()
    objects = MyUserManager()
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'nameUser' 
    REQUIRED_FIELDS = ['age']

    def __str__(self):
        return self.nameUser