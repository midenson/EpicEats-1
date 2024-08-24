from rest_framework import viewsets
from .models import user
from .serializers import user_serializer

class userViewSet(viewsets.ModelViewSet):
    queryset: user.objects.all()
    serializer_class: user_serializer