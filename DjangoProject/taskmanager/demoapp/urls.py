
from django.urls import path
from . import views
from .views import tabview

app_name = "demoapp"
urlpatterns = [
    # по адресу «news/» в файле news/views.py выполнять метод index
    path('views/', views.index),
    path('tabs/', tabview.as_view()),
]