from django.shortcuts import render, redirect, HttpResponse
from free.serviceObjects.GoogleApi import GoogleAPI



def google_sign_in(request):
  google_api = GoogleAPI()
  authenticated = google_api.init_auth()
  if(authenticated == "Authenticated"):
    return redirect('/food/emails/')
  else:
    return HttpResponse(authenticated)


def get_emails(request):
  google_api = GoogleAPI()
  
  user_email = request.user.email
  print(google_api.get_emails(user_email))
  return HttpResponse("hell0")
  # google_api.create_event(msg_ids, user_email)