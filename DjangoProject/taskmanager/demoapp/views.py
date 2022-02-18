from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *

class tabview(APIView):
    def get(self, request):
        TAB = tab.objects.all()
        serializer = TABSerializer(TAB, many=True)
        return Response(serializer.data)

class pageview(APIView):
    def get(self, request):
        PAGE = page.objects.all()
        serializer = PAGESerializer(PAGE, many=True)
        return Response(serializer.data)

class groupview(APIView):
    def get(self, request):
        GROUP = group.objects.all()
        serializer = GROUPSerializer(GROUP, many=True)
        return Response(serializer.data)

class paramview(APIView):
    def get(self, request):
        PARAM = param.objects.all()
        serializer = PARAMSerializer(PARAM, many=True)
        return Response(serializer.data)