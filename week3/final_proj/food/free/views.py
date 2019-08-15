from django.shortcuts import render, redirect, HttpResponse
from free.serviceObjects.GoogleApi import GoogleAPI
import pickle
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import Flow
from google.auth.transport.requests import Request
from food.settings import BASE_DIR
from django.contrib.auth.decorators import login_required

CREDENTIALS_PATH = f'{BASE_DIR}/free/serviceObjects/gmail_credentials.json'

def google_sign_in(request):
  flow = Flow.from_client_secrets_file(
    CREDENTIALS_PATH, 
    ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/gmail.readonly'],
    redirect_uri='http://localhost:8000/food/google_call_back/')
  auth_url, state = flow.authorization_url()
  request.session['code_verifier'] = pickle.dumps(flow.code_verifier)
  return redirect(auth_url)

def google_call_back(request):
  state = request.GET.get('state')
  code = request.GET.get('code')
  flow = Flow.from_client_secrets_file(
    CREDENTIALS_PATH, 
    ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/gmail.readonly'],
    redirect_uri='http://localhost:8000/food/google_call_back/', state = state)
  flow.code_verifier = pickle.loads(request.session['code_verifier'])
  flow.fetch_token(code = code)
  request.session['creds'] = pickle.dumps(flow.credentials)
  return redirect('/food/emails/')

@login_required(redirect_field_name='/accounts/login/')
def get_emails(request):
  google_api = GoogleAPI(request)
  user_email = request.user.email
  emails = google_api.get_emails(user_email)
  if(emails.get("resultSizeEstimate") > 0):
    messages = google_api.appending_body(emails, user_email)
    filtered_messages = google_api.parse_for_dates(messages)
    created_event = google_api.create_event(user_email, filtered_messages)
    if(created_event):
      return HttpResponse("Free food has been added to your Google Calendar!")
    else:
      return HttpResponse("No free food has been found")
  else:
    return HttpResponse("No free food has been found")

    