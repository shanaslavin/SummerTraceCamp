from django.shortcuts import render, redirect, HttpResponse
from free.serviceObjects.GoogleApi import GoogleAPI
import pickle
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import Flow
from google.auth.transport.requests import Request


def google_sign_in(request):
  flow = Flow.from_client_secrets_file(
    '/Users/bekkblando/Documents/github/SummerTraceCamp/week3/final_proj/food/free/serviceObjects/gmail_credentials.json', 
    ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/gmail.readonly'],
    redirect_uri='http://localhost:8000/food/google_call_back/')
  auth_url, state = flow.authorization_url()
  request.session['code_verifier'] = pickle.dumps(flow.code_verifier)
  return redirect(auth_url)

def google_call_back(request):
  state = request.GET.get('state')
  code = request.GET.get('code')
  flow = Flow.from_client_secrets_file(
    '/Users/bekkblando/Documents/github/SummerTraceCamp/week3/final_proj/food/free/serviceObjects/gmail_credentials.json', 
    ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/gmail.readonly'],
    redirect_uri='http://localhost:8000/food/google_call_back/', state = state)
  flow.code_verifier = pickle.loads(request.session['code_verifier'])
  flow.fetch_token(code = code)
  request.session['creds'] = pickle.dumps(flow.credentials)
  return redirect('/food/emails/')


def get_emails(request):
  google_api = GoogleAPI(request)
  user_email = request.user.email
  print(google_api.get_emails(user_email))
  return HttpResponse("hell0")
  # google_api.create_event(msg_ids, user_email)