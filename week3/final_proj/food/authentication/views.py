from django.shortcuts import render
from django.views.generic.edit import CreateView
from django.contrib.auth.models import User
from django.urls import reverse_lazy
from authentication.forms import CreateUserForm

# Create your views here.
class CreateUser(CreateView):
    form_class = CreateUserForm
    success_url = reverse_lazy('login')
    template_name = 'signup.html'