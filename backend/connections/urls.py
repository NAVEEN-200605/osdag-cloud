from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BeamToBeamSpliceViewSet

router = DefaultRouter()
router.register(r'beam-splices', BeamToBeamSpliceViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
