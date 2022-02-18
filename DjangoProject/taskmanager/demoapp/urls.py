
from django.urls import path
from . import views
from .views import tabview

app_name = "demoapp"
urlpatterns = [
    # по адресу «news/» в файле news/views.py выполнять метод index

    path('tabs/', views.tabview.as_view()),
    path('pages/', views.pageview.as_view()),
    path('params/', views.paramview.as_view()),
    path('groups/', views.groupview.as_view()),
]