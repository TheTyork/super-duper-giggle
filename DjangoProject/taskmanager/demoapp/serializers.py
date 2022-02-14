from rest_framework import serializers



class TABSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=120)
