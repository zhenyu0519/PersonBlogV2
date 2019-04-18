from myBlog.models import Category
from myBlog.models import Post
from rest_framework import viewsets, permissions
from .serializers import CategorySerializer, PostSerializer


# Categery Viewset
class CategeryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = CategorySerializer


# Post Viewset
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = PostSerializer
