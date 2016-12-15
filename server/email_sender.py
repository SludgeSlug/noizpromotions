import smtplib
from email.MIMEMultipart import MIMEMultipart
from email.MIMEText import MIMEText

def sendMail(emailData):
    print emailData
    fromaddr = FROM_ADDRESS
    toaddr = TO_ADDRESS
    msg = MIMEMultipart()
    msg['From'] = fromaddr
    msg['To'] = toaddr
    msg['Subject'] = emailData['subject']

    body = emailData['body']
    msg.attach(MIMEText(body, 'plain'))

    server = smtplib.SMTP('smtp.mailgun.org', 587)
    server.starttls()
    server.login(SMTP_USERNAME, SMTP_PASSWORD)
    
    text = msg.as_string()
    server.sendmail(fromaddr, toaddr, text)
    server.quit()