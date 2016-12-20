import config as config

from pymongo import MongoClient
from datetime import datetime, timedelta

def clear_old_log():
    expiredTimestamp = datetime.now() - timedelta(days=1)
    collection = get_collection("emails")
    collection.remove({"timestamp":{"$lt":expiredTimestamp}})

def get_email_count(ipAddress):
    collection = get_collection("emails")
    results = collection.find({"ipAddress":ipAddress})
    return results.count()

def log_email(ipAddress):
    logEntry = {
        "ipAddress": ipAddress,
        "timestamp": datetime.now()
    }
    collection = get_collection("emails")
    collection.insert(logEntry)

def get_collection(collectioName):
    connection = MongoClient(config.DB_SERVER, config.DB_PORT)
    db = connection[config.DB_NAME]
    db.authenticate(config.DB_USERNAME, config.DB_PASSWORD)
    return db[collectioName]