from myBlog.models import Category
from rest_framework import viewsets, permissions
from .serializers import CategorySerializer


# Categery Viewset
class CategeryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = CategorySerializer
