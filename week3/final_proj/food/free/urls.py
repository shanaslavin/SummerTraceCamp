from django.contrib import admin
from django.urls import path, include
import free.views as views
from django.conf import settings
from django.views.generic.base import TemplateView

urlpatterns = [
    path('google_sign_in/', views.google_sign_in, name = "google_sign_in"),
    path('google_call_back/', views.google_call_back, name = "google_call_back"),
    path('add_queries/', TemplateView.as_view(template_name = "free/queries_form.html"), name = "add_queries"),
    path('emails/', views.get_emails, name = "emails"),

]
