from django.db import models

# Create your models here.
class user(models.Model):
    username = models.CharField(max_length= 12)
    email = models.CharField(max_length = 15)
    password = models.CharField(max_length = 15)
    first_name = models.CharField(max_length = 15)
    last_name = models.CharField(max_length = 15) 

    def __str__(self):
        return [ self.username, self.email, self.password, self.first_name, self.last_name ] 