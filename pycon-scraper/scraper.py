import requests
import json
import multiprocessing
from multiprocessing.dummy import Pool as ThreadPool
# ISBN = 1000000000
isbns = []
isbnsDict = [[]]

isbnsComplete = []
pageCount = 1
queryURL = "http://openlibrary.org/search.json?q=apple&page=%d"
baseURL = "https://openlibrary.org/api/books?bibkeys=%s&format=json&jscmd=data"

# allISBNS = list(range(start, end))

# for isbn in allISBNS:
#     if(len(isbnsDict[-1]) == 20):
#         isbnsDict.append([])
#     isbnsDict[-1].append(isbn)

# print(isbnsDict)
found = 200
start = 0
pool = ThreadPool(16)
pages = list(range(1, 40))
allISBNS = []
def getISBNS(pageCount):
    rw = requests.get(queryURL % pageCount);
    jsonResponse = rw.json()
    docs = jsonResponse['docs']
    print(len(docs))
    for doc in docs:
        if('isbn' in doc):
            isbns = doc['isbn']
            # print(isbns)
            isbn = isbns[0]
            count = 0
            try:
                int(isbn)
            except:
                isbn = None
            try:
                while(len(isbn) != 10):
                    isbn = isbns[count]
                    try:
                        int(isbn)
                    except:
                        isbn = None
                    count = count+1
                allISBNS.append(isbn)
            except:
                a = 0

    print(pageCount)

pool.map(getISBNS, pages)
for isbn in allISBNS:
    if(len(isbnsDict[-1]) == 20):
        isbnsDict.append([])
    isbnsDict[-1].append(isbn)

print(allISBNS)
totalCount = len(allISBNS)

def printFile():
    print(len(isbns))
    with open('booksJSON.json', 'w') as outfile:
        json.dump(isbns, outfile)

def getBook(inputISBN):
    urlString = []
    for isbn in inputISBN:
        isbn = int(isbn)
        urlString.append("ISBN:%010d" % isbn)
        isbnsComplete.append(isbn)
    isbnURL = ','.join(urlString)
    # print(baseURL % isbnURL)
    r = requests.get(baseURL % isbnURL);
    print("%.3f%% %d" % ((len(isbnsComplete) * 100 / totalCount), r.status_code))
    jsonBook = r.json()
    print(len(isbns))
    for isbn in inputISBN:
        isbn = int(isbn)
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
