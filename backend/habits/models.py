from django.db import models
from django.contrib.auth.models import PermissionsMixin

# Create your models here.
class MyHabitManager(models.Model):
    def create_habit(self, nameHabit, idUser, meta, **extra_fields):        
        habit = self.model(nameHabit=nameHabit, **extra_fields)

        habit.save(using=self._db)
        return habit
    
class Habit(models.Model):
    nameHabit = models.CharField(max_length=255)
    idUser = models.IntegerField()
    meta = models.CharField(max_length=255)
    objects = MyHabitManager()

    def __str__(self):
        return self.nameHabit