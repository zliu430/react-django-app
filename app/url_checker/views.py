from django.shortcuts import render
from django.http import HttpResponse
import urllib.request

def check_url(request):
    print(request.body)
    print(request.method)
    try:
        url_status = urllib.request.urlopen(request.body.decode("utf-8") ).getcode()
    except:
        return HttpResponse("invalid url format")
    print(url_status)
    return HttpResponse("can not access url")
