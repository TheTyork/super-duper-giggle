
from django.shortcuts import get_object_or_404, render
from .models import page, tab, group, param # импорт модели News из файла news/models.py

def index(request):
    PAGE = page.objects.all()
    return render(request, "demoapp/index.html", {"PAGE": PAGE})

def index_1(request):
    TAB = tab.objects.all()
    return render(request, "demoapp/index.html", {"TAB": PAGE})

def index_2(request):
    GROUP = group.objects.all()
    return render(request, "demoapp/index.html", {"GROUP": PAGE})

def index_3(request):
    PARAM = param.objects.all()
    return render(request, "demoapp/index.html", {"PARAM": PAGE})