from rest_framework import routers
from .api import CategeryViewSet

router = routers. DefaultRouter()
router.register('api/myBlog', CategeryViewSet, 'myBlog')

urlpatterns = router.urls
