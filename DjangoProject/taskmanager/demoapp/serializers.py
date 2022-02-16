from rest_framework import serializers
from . import models
from .models import *


class PARAMSerializer(serializers.ModelSerializer):
    class Meta:
        model = param
        fields = '__all__'

class GROUPSerializer(serializers.ModelSerializer):
    class Meta:
        model = group
        fields = '__all__'
    param = PARAMSerializer(many=True)

class TABSerializer(serializers.ModelSerializer):
    class Meta:
        model = tab
        fields = '__all__'
    group = GROUPSerializer(many=True)

class PAGESerializer(serializers.ModelSerializer):
    class Meta:
        model = page
        fields = '__all__'
    tab = TABSerializer(many=True)


