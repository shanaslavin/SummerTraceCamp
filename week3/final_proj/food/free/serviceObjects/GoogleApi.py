from __future__ import print_function
import pickle
import os.path
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

class GoogleAPI:

    def __init__(self):
        self.authenticated = False
        self.auth_url = ""




    def init_auth(self):
        self.creds = None
        # The file token.pickle stores the user's access and refresh tokens, and is
        # created automatically when the authorization flow completes for the first
        # time.
        if os.path.exists('token.pickle'):
            with open('token.pickle', 'rb') as token:
                print("Token found?")
                self.creds = pickle.load(token)
                self.authenticated = True
                return "Authenticated"
        # If there are no (valid) credentials available, let the user log in.
        if not self.creds or not self.creds.valid:
            if self.creds and self.creds.expired and self.creds.refresh_token:
                self.creds.refresh(Request())
                self.authenticated = True
                return "Authenticated"
            else:
                print("do we get here")
                self.authenticated = False
                flow = InstalledAppFlow.from_client_secrets_file(
                    '/Users/bekkblando/Documents/github/SummerTraceCamp/week3/final_proj/food/free/serviceObjects/gmail_credentials.json', 
                    ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/gmail.readonly'],
                    redirect_uri='http://localhost:8000/food/google_call_back/')      
                self.auth_url = flow.run_local_server(port = 65535)
                # Save the credentials for the next run
            with open('token.pickle', 'wb') as token:
                pickle.dump(self.creds, token)
            print("Or Maybe here?")
            return "Authenticated"
