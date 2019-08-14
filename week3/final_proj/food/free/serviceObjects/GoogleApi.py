from __future__ import print_function
import pickle
import os.path
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
import datefinder

class GoogleAPI:

    def __init__(self):
        self.authenticated = False
        self.auth_url = ""
        self.init_auth()




    def init_auth(self):
        self.creds = None
        # The file token.pickle stores the user's access and refresh tokens, and is
        # created automatically when the authorization flow completes for the first
        # time.
        if os.path.exists('token.pickle'):
            with open('token.pickle', 'rb') as token:
                print("Token found?")
                self.creds = pickle.load(token)
                print("Token is found and here is the creds", self.creds)
                self.authenticated = True
                return "Authenticated"
        # If there are no (valid) credentials available, let the user log in.
        if not self.creds or not self.creds.valid:
            print("do we get here")
            self.authenticated = False
            flow = InstalledAppFlow.from_client_secrets_file(
                '/Users/shana/Documents/trace_camp/trace_work/week3/final_proj/food/free/serviceObjects/gmail_credentials.json', 
                ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/gmail.readonly'],
                redirect_uri='http://localhost:8000/food/google_call_back/')      
            self.auth_url = flow.run_local_server(port = 65535)
            # Save the credentials for the next run
            with open('token.pickle', 'wb') as token:
                pickle.dump(self.creds, token)
            print("Or Maybe here?")
            return "Authenticated"

    def get_emails(self, email):
        print("These are the creds", self.creds)
        service = build('gmail', 'v1', credentials = self.creds)
        user_id = email
        query = "free food"
        query_results = service.users().messages().list(userId = user_id, q = query).execute()
        return query_results


        # def parse_for_dates(self, results):
        #     msg_ids = []
        #     for message in results:
        #         msg = results["messages"][message]
        #         msg_id = msg["id"]
        #         message = service.users().messages().get(userId=user_id, id=msg_id, format='raw').execute()
        #         snippet = message["snippet"]
        #         matches = datefinder.find_dates(snippet)
        #         for match in matches:
        #             msg_ids.append(msg_id)
        #     return msg_ids
        
        
        # def create_event(self, msg_ids, email):
        #     service = build('calendar', 'v3', credentials = self.creds)
        #     user_id = email
        #     for msg in msg_ids:
        #         created_event = service.events().quickAdd(
        #         calendarId = email,
        #         text = 
        #         )

            
        

