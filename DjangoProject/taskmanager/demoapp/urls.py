
from django.urls import path
from . import views

urlpatterns = [
    # по адресу «news/» в файле news/views.py выполнять метод index
    path('views/', views.index),
    path('views/', views.index_1),
    path('views/', views.index_2),
    path('views/', views.index_3),
]