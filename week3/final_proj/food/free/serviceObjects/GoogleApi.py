from __future__ import print_function
import pickle
import os.path
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import Flow
from google.auth.transport.requests import Request
from google.auth.credentials import Credentials

# import datefinder

class GoogleAPI:

    def __init__(self, request):

        self.creds = pickle.loads(request.session['creds'])
        if(self.creds.expired):
            self.creds.refresh(Request())
            request.session['creds'] = pickle.dumps(self.creds)

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

            
        

