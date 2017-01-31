import config as config
import datetime
import calendar
import json, requests

def get_events():
    url = "https://graph.facebook.com/v2.8/noizpromo/events"
    params = dict(
        access_token=config.FACEBOOK_API_KEY,
        fields='fields=id,start_time,cover,description,name,place',
        since=str(getUtc())
	)
    return requests.get(url, params)
    # url = "https://graph.facebook.com/v2.8/noizpromo/events?access_token=" + config.FACEBOOK_API_KEY
    # url += "&fields=id,start_time,cover,description,name,place&since=" + str(getUtc())
    # return json.load(urllib2.urlopen(url))

def getUtc():
    utcnow = datetime.datetime.utcnow()
    return calendar.timegm(utcnow.utctimetuple())