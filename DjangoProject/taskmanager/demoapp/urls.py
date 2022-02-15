
from django.urls import path
from . import views
from .views import tabview

app_name = "demoapp"
urlpatterns = [
    # по адресу «news/» в файле news/views.py выполнять метод index
    path('views/', views.index),
    path('tabs/', views.tabview.as_view()),
    path('page/', views.pageview.as_view()),
    path('param/', views.paramview.as_view()),
    path('group/', views.groupview.as_view()),
]