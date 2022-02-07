from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.


def about(request):
    return render(request, 'main/about.html')

def diagram(request):
    return render(request, 'main/diagram.html')

def index(request):
    return render(request,'main/index.html')
