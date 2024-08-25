from rest_framework import viewsets
from .models import user
from .serializers import user_serializer

class userViewSet(viewsets.ModelViewSet):
    serializer_class: user_serializer
    def get_queryset(self):
        return user.objects.all()

    def get_serializer_class(self):
        return user_serializer