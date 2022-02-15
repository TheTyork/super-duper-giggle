
from django.shortcuts import get_object_or_404, render
from .models import page, tab, group, param # импорт модели News из файла news/models.py

def index(request):
    PAGE = page.objects.all()
    p = page.objects.get(pk=11)
    TAB = p.tab_set.all()
    GROUP = group.objects.all()
    PARAM = param.objects.all()
    return render(request, "demoapp/index.html",{"PAGE": PAGE,"TAB": TAB,"GROUP": GROUP,"PARAM": PARAM})

from rest_framework.response import Response
from rest_framework.views import APIView
from .models import tab

from .serializers import *

class tabview(APIView):
    def get(self, request):
        TAB = tab.objects.all()
        serializer = PAGESerializer.TABSerializer(TAB, many=True)
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