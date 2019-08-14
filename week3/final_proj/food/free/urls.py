from django.contrib import admin
from django.urls import path, include
import free.views as views
from django.conf import settings

urlpatterns = [
    path('google_sign_in/', views.google_sign_in),
    path('emails/', views.get_emails),
    # path('google_call_back/', views.google_call_back),
]
