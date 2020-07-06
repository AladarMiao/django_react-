from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView
from articles.models import Article
from .serializers import ArticleSerializer

class ArticleListView(ListAPIView):
    queryset=Model.objects.all()
    serializer_class=ArticleSerializer
    

class ArticleDetailView(RetrieveAPIView):
    queryset=Model.objects.all()
    serializer_class=ArticleSerializer
