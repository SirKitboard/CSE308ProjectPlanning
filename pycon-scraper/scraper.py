import requests
import json
import multiprocessing
from multiprocessing.dummy import Pool as ThreadPool
# ISBN = 1000000000
isbns = []
isbnsDict = [[]]

isbnsComplete = []

baseURL = "https://openlibrary.org/api/books?bibkeys=%s&format=json&jscmd=data"

start =  999899999
end   = 1000000000
# end = 1000000100

allISBNS = list(range(start, end))

for isbn in allISBNS:
    if(len(isbnsDict[-1]) == 20):
        isbnsDict.append([])
    isbnsDict[-1].append(isbn)

# print(isbnsDict)

pool = ThreadPool(16)

def printFile():
    print(len(isbns))
    with open('booksJSON.json', 'w') as outfile:
        json.dump(isbns, outfile)

def getBook(inputISBN):
    urlString = []
    for isbn in inputISBN:
        urlString.append("ISBN:%010d" % isbn)
        isbnsComplete.append(isbn)

    isbnURL = ','.join(urlString)
    # print(baseURL % isbnURL)
    r = requests.get(baseURL % isbnURL);
    print("%.3f%% %d" % ((len(isbnsComplete) * 100 / (end - start)), r.status_code))
    jsonBook = r.json()
    print(len(isbns))
    for isbn in inputISBN:
        if(("ISBN:%010d" % isbn) in jsonBook):
            isbns.append(jsonBook["ISBN:%010d" % isbn])

results = pool.map(getBook, isbnsDict)

#
# for i in range(start, end):
#     r = requests.get(baseURL % i);
#     print("%.3f%% %d" % (((i - start) * 100 / (end - start)), r.status_code))
#     jsonBook = r.json()
#     if(("ISBN:%d" % i) in jsonBook):
#         isbns.append(jsonBook)
#
#

printFile()
