from django.shortcuts import render
from free.commands import api_call
from templates.free import load_api

# Create your views here.
class FreeView():
  render(load_api.html)