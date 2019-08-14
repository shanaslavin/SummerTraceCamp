from django.urls import path
from authentication.views import CreateUser

urlpatterns = [
    path('create', CreateUser.as_view())
]
