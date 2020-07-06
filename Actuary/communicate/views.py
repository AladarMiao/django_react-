from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from requests_toolbelt.multipart import decoder
import pandas as pd
import csv
from requests_toolbelt.multipart import decoder
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
import os.path
import requests


# Create your views here.
import json
from django.http import HttpResponse
import ast

csv_data=''
name_list=[] #list of 因子
columns=''

@csrf_exempt
def index(request):
	#received_json_data = json.loads(request.body)
	data = {
		'message':"Hello, this is django",
		'echo': request.GET.get('message')
	}
	dump = json.dumps(data)
	return HttpResponse(dump,content_type='application/json')

@csrf_exempt
def getName(request):

	# incoming_data = json.loads(request.GET)
	# print(incoming_data)
	# name = incoming_data['user']['name']
	# if name not in name_list:
	# 	name_list.append(name)
	# data ={
	# 	'message': 'Hello, you added a name',
	# 	'name': name
	# }
	#
	# filename = handle_uploaded_csv(incoming_data)
	# df = pd.read_csv(filename)
	#print(default_storage.open('incomingData').read())
	# df = pd.read_csv(csv_data)
	# for x in ll:
	# 	condition = df[x]==ll[x]
	# 	df = df[condition]
	# print(df.head())
	ll=ast.literal_eval(request.body.decode('utf-8'))


	print(ll)
	# print(default_storage.exists('path'))
	df = pd.read_csv('temp.csv', engine='python')
	temp=df.copy()
	for x,y in ll.items():
	   if x=='id':
		   toint=int(y)
		   temp = temp.loc[temp[x]==toint]


	data ={
		'message': "hekko",
		'id': 'lul'

	}

	url='http://localhost:3000/'

	dataa = temp.head().to_json(orient='split', index=False)
	#print(dataa)
	# requests.post(url, data=dataa)

	#dump = json.dumps(data)
	return HttpResponse(dataa, content_type='application/json')


def get_columns(filename):
	df = pd.read_csv(filename)
	return list(df.columns)


def handle_uploaded_csv(f, filename):
	temp = 'temp.csv'

	with open(filename, 'wb+') as destination:
		destination.write(f)

	return filename


@csrf_exempt
def getCSV(request):
	str1=str(request.body, encoding = "utf-8")
	data=eval(str1)

	csv_data = str.encode(data['file'])
	filename = data['filename']
	print(filename)


	# for filename, file in request.FILES.items():
	#
	# 	file_reader = csv.reader(file, delimiter=',')
	#
	# 	name = request.FILES[filename].name
	# 	print(request.FILES[filename].read())
	# 	for row in file_reader:
	# 		print(row)

	filename = handle_uploaded_csv(csv_data, filename)

	#print({part.get_param('name', header='content-disposition'): part.get_payload(decode=True)for part in msg.get_payload()})
	#print(incoming_data)


	data ={
		'message': 'Hello, you sent me a CSV file. Here are its columns.',
		'columns': []
	}
	dump = json.dumps(data)
	return HttpResponse(dump,content_type='application/json')


@csrf_exempt
def query(request):
	incoming_data = request.body



	print(incoming_data)
	for filename, file in request.FILES.items():
		file_reader = csv.reader(file, delimiter=',')
		name = request.FILES[filename].name
		print(request.FILES[filename].read())
		for row in file_reader:
			print(row)


	#print({part.get_param('name', header='content-disposition'): part.get_payload(decode=True)for part in msg.get_payload()})
	#print(incoming_data)
	#filename = handle_uploaded_csv(incoming_data)
	#columns = get_columns(filename)
	data ={
		'message': 'Hello, you sent me a CSV file. Here are its columns.',
		'columns': []
	}

	dump = json.dumps(data)
	return HttpResponse(dump,content_type='application/json')
