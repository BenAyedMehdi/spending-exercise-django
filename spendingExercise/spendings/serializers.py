from rest_framework import serializers
from spendings.models import Spending

#Spending serializer
class SpendingSerializer(serializers.ModelSerializer):
  class Meta:
    model = Spending 
    fields = '__all__'