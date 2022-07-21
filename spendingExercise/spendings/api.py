from multiprocessing.spawn import import_main_path
from spendings.models import Spending
from rest_framework import viewsets, permissions
from .serializers import SpendingSerializer

#Spendings viewset
class SpendingViewSet(viewsets.ModelViewSet):
    queryset = Spending.objects.all()
    permission_class = [
        permissions.AllowAny
    ]
    serializer_class= SpendingSerializer
