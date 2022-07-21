from django.contrib import admin
from django.urls import path, include

from spendings.models import Spending 

urlpatterns = [
    path('', include('spendings.urls')),
]