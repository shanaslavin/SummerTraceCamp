from django.db import models

# Create your models here.
class Free(models.Model):
  id = models.CharField(max_length = 100)
  thread_id = models.CharField(max_length = 100)
