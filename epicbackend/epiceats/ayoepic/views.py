from rest_framework import viewsets
from .models import user
from .serializers import user_serializer

class userViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        return user.objects.all()

    def get_serializer_class(self):
        return user_serializer