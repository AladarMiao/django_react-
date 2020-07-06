from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('getName/', views.getName, name='getName'),
    path('getCSV/', views.getCSV, name='getCSV')

]