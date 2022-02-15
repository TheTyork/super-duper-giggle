from rest_framework import serializers

from . import models
from .models import *


class TABSerializer(serializers.ModelSerializer):
    # page = serializers.SlugRelatedField(slug_field='title',read_only=True)
    class Meta:
        model = tab
        fields = '__all__'

class PAGESerializer(serializers.ModelSerializer):
    class Meta:
        model = page
        fields = '__all__'

class GROUPSerializer(serializers.ModelSerializer):
    # tab = serializers.SlugRelatedField(slug_field='title',read_only=True)
    class Meta:
        model = group
        fields = '__all__'

class PARAMSerializer(serializers.ModelSerializer):
    # group = serializers.SlugRelatedField(slug_field='title',read_only=True)
    class Meta:
        model = param
        fields = '__all__'