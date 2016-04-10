import json

bookArray = []
with open('booksJSON.json', 'r') as data_file:
    bookArray = json.load(data_file)

print(len(bookArray))
