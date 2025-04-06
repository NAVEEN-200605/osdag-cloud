from rest_framework import viewsets
from .models import BeamToBeamSplice
from .serializers import BeamToBeamSpliceSerializer

class BeamToBeamSpliceViewSet(viewsets.ModelViewSet):
    queryset = BeamToBeamSplice.objects.all()
    serializer_class = BeamToBeamSpliceSerializer
