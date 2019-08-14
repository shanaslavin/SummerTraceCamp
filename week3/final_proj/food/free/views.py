from django.shortcuts import render, redirect, HttpResponse
from free.serviceObjects.GoogleApi import GoogleAPI



google_api = GoogleAPI()

def google_sign_in(request):
  authenticated = google_api.init_auth()
  print(authenticated)
  if(authenticated == "Authenticated"):
    return redirect('/food')
  else:
    return HttpResponse(authenticated)


def google_call_back(request):
  print(request.GET)