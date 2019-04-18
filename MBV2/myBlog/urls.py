from rest_framework import routers
from .api import CategeryViewSet, PostViewSet

router = routers. DefaultRouter()
router.register('api/category', CategeryViewSet, 'myBlog')
router.register('api/posts', PostViewSet, 'myBlog')

urlpatterns = router.urls
