import os
import json
from flask import Flask, Response, render_template, send_from_directory

app = Flask(__name__, template_folder='dist')

@app.route('/api/test')
def test():
    return 'Test'

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