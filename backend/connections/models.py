from django.db import models

class BeamToBeamSplice(models.Model):
    beam_length = models.FloatField()
    flange_thickness = models.FloatField()
    web_thickness = models.FloatField()
    bolt_diameter = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Splice - {self.id}"
