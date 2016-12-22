import smtplib
import config as config
import db as db
from email.MIMEMultipart import MIMEMultipart
from email.MIMEText import MIMEText

def sendMail(emailData, ipAddress):
    db.clear_old_log()
    emailCount = db.get_email_count(ipAddress)

    if emailCount > 20:
        return "failed"

    fromaddr = config.EMAIL_FROM_ADDRESS
    toaddr = getToAddr(emailData['subject'])
    if toaddr == '':
        return "failed"

    msg = MIMEMultipart()
    msg['From'] = fromaddr
    msg['To'] = toaddr
    msg['Subject'] = 'WEB MESSAGE FROM ' + emailData['from']

    body = 'FROM: ' + emailData['from']
    if emailData['subject'] != 'mailinglist':
        body += '<br>MESSAGE: ' + emailData['body']
    msg.attach(MIMEText(body, 'html'))

    server = smtplib.SMTP(config.SMTP_ADDRESS, config.SMTP_PORT)
    server.starttls()
    server.login(config.SMTP_USERNAME, config.SMTP_PASSWORD)
    
    text = msg.as_string()
    server.sendmail(fromaddr, toaddr, text)
    server.quit()
    db.log_email(ipAddress)
    return "ok"

def getToAddr(subject):
    if subject == 'mailinglist':
        return config.EMAIL_MAILINGLIST_ADDRESS
    if subject == 'bookings':
        return config.EMAIL_BOOKING_ADDRESS
    if subject == 'enquiry':
        return config.EMAIL_INFO_ADDRESS
    return ''