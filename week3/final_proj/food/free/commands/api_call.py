from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

def api_call():

  results = service.users().messages()

  return results.list(userId="birydanddoggy@gmail.com", q="food").execute()