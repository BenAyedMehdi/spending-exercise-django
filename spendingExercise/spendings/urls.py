from rest_framework import routers
from .api import SpendingViewSet

router = routers.DefaultRouter()
router.register('api/spendings', SpendingViewSet, 'spendings')

urlpatterns = router.urls 