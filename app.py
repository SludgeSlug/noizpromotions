import os
import json
from flask import Flask, Response, render_template, send_from_directory, request
import server.email_sender as email_sender

app = Flask(__name__, template_folder='dist')
app.config['MAX_CONTENT_LENGTH'] = 1024 * 1024

@app.route('/api/email', methods=['POST'])
def send_email():
    email_json = request.get_json(force=True)
    result = email_sender.sendMail(email_json, request.remote_addr)
    if result == 'failed':
        return 'Bad request', 400
    return 'OK'

@app.route('/')
def root():
    return render_template('index.html')

@app.route('/<path:path>')
def get_resource(path):
    return send_from_directory('dist', path)

if __name__ == '__main__':
    port = int(os.getenv('PORT', 8080))
    host = os.getenv('IP', '0.0.0.0')
    app.run(port=port, host=host)