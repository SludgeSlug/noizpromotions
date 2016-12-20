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
    toaddr = config.EMAIL_BOOKING_ADDRESS
    msg = MIMEMultipart()
    msg['From'] = fromaddr
    msg['To'] = toaddr
    msg['Subject'] = emailData['subject']

    body = emailData['body']
    msg.attach(MIMEText(body, 'plain'))

    server = smtplib.SMTP(config.SMTP_ADDRESS, config.SMTP_PORT)
    server.starttls()
    server.login(config.SMTP_USERNAME, config.SMTP_PASSWORD)
    
    text = msg.as_string()
    server.sendmail(fromaddr, toaddr, text)
    server.quit()
    db.log_email(ipAddress)
    return "ok"