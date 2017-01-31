import datetime
import calendar
import json, requests

def main():
	url = "https://graph.facebook.com/v2.8/noizpromo/events"
	params = dict(
		access_token='185095361963610|JADO9ClJonhjiMzEIcgOhRO5iFo',
		fields='fields=id,start_time,cover,description,name,place',
		since=str(getUtc())
	)
	result = requests.get(url, params)
	print result.json()
	print url

def getUtc():
    utcnow = datetime.datetime.utcnow()
    return calendar.timegm(utcnow.utctimetuple())
	
if __name__ == "__main__": main()