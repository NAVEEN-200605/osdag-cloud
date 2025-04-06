from rest_framework import serializers
from .models import BeamToBeamSplice

class BeamToBeamSpliceSerializer(serializers.ModelSerializer):
    class Meta:
        model = BeamToBeamSplice
        fields = '__all__'
