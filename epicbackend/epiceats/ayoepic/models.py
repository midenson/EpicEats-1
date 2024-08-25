from django.db import models

# Create your models here.
class user(models.Model):
    username = models.CharField(max_length= 12)
    email = models.EmailField(max_length = 35)
    password = models.CharField(max_length = 15)
    first_name = models.CharField(max_length = 15)
    last_name = models.CharField(max_length = 15) 

    def __str__(self):
        return self.username