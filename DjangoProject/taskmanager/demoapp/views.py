
from django.shortcuts import get_object_or_404, render
from .models import page, tab, group, param # импорт модели News из файла news/models.py

def index(request):
    PAGE = page.objects.all()

    p = page.objects.get(pk=11)
    TAB = p.tab_set.all()
    # return render(request, "demoapp/index.html", {})
    GROUP = group.objects.all()
    # return render(request, "demoapp/index.html", {})
    PARAM = param.objects.all()
    return render(request, "demoapp/index.html",{"PAGE": PAGE,"TAB": TAB,"GROUP": GROUP,"PARAM": PARAM})
