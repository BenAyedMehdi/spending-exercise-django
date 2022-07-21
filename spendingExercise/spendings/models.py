from django.db import models

class Spending(models.Model):
    description = models.CharField(max_length=100, blank=True)
    amount = models.IntegerField()
    spent_at = models.DateTimeField(auto_now_add=True)
    currency = models.CharField(max_length=50)
