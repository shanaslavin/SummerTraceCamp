from __future__ import print_function
import pickle
import os.path
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import Flow
from google.auth.transport.requests import Request
from google.auth.credentials import Credentials
import datetime
import datefinder
import base64
import email

class GoogleAPI:

    def __init__(self, request):

        self.creds = pickle.loads(request.session['creds'])
        if(self.creds.expired):
            self.creds.refresh(Request())
            request.session['creds'] = pickle.dumps(self.creds)

    def get_emails(self, email):
        week_ago = datetime.date.today() - datetime.timedelta(days=7)
        service = build('gmail', 'v1', credentials = self.creds)
        user_id = email
        query = f'free food, in:inbox after:{week_ago}'
        query_results = service.users().messages().list(userId = user_id, q = query).execute()
        return query_results

    def parse_email(self, message):
        content = ""
        msg_str = base64.urlsafe_b64decode(message['raw'].encode('ASCII'))
        mime_msg = email.message_from_bytes(msg_str)
        for part in mime_msg.walk():
            if(part.get_content_type() == 'text/plain'):
                content = content + " " + part.get_payload()
        return content

    def read_email(self, email_id, email):
        service = build('gmail', 'v1', credentials= self.creds)
        message = service.users().messages().get(userId=email, id=email_id, format='raw').execute()
        return message

    def get_subject(self, email, email_id):
        service = build('gmail', 'v1', credentials= self.creds)
        message = service.users().messages().get(userId=email, id=email_id, format='full').execute()
        subject = message["payload"]["headers"][19]
        subject = subject.get("value")
        return subject


    def appending_body(self, messages, email):
        for message in messages["messages"]:
            email_obj = self.read_email(message["id"], email)
            message["body"] = self.parse_email(email_obj)
            message["subject"] = self.get_subject(email, message["id"])
        return messages

    def parse_for_dates(self, messages):
        msg_ids = []
        filtered_messages = []
        for message in messages['messages']:
            matches = datefinder.find_dates(message["body"])
            for match in matches:
                message['dates'] = match
                filtered_messages.append(message)
        return filtered_messages
    
    def create_event(self, email, filtered_messages):
        cal_service = build('calendar', 'v3', credentials = self.creds)
        for message in filtered_messages:
            created_event = cal_service.events().quickAdd(
                calendarId = email,
                text = f"{message['subject']} {message['dates'].strftime('%m/%d/%Y, %H:%M:%S')} "
            ).execute()
        if(created_event):
            return True
        else:
            return False
