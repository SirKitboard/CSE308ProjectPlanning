import json
import mysql.connector
from random import randint

bookArray = []
bookSelectQuery = "SELECT * from items LEFT JOIN books ON items.id = books.id;"
bookAddQuery = "INSERT INTO books (num_pages,id) VALUES (%s, %s);"
lastItemQuery = "SELECT id from items ORDER BY id DESC LIMIT 1;"
itemAddQuery = "INSERT INTO items (item_type, cover_image_url, language, status, title,total_licenses,year_published,publisher,date_added,isbn)\
                    VALUES ('book', %s, %s, 'Available',%s, %s, %s, %s,NOW(),%s);"
itemSelectQuery = "SELECT * from items;"
publisherSelectQuery = "SELECT * from publishers where name = %s LIMIT 1;"
publisherAddQuery = "INSERT INTO publishers (name, email, phone_number) VALUES (%s, %s, %s);"
authorSelectQuery = "SELECT * FROM authors where first_name = %s AND last_name = %s;"
authorAddQuery = "INSERT INTO authors (first_name, last_name) VALUES (%s, %s);"
itemAuthorAddQuery = "INSERT INTO items_authors (items, authors) VALUES (%s, %s);"
updateBookQuery = "UPDATE items SET isbn = %s, cover_image_url = %s WHERE title = %s"
def generateNumber():
    i = 0
    number = ""
    while i<11:
        if (i == 3) or (i==7):
            number = number + "-"
        number = number + str(randint(1,9))
        i = i + 1
    return number

try:
    connection = mysql.connector.connect(user='root',password='password',host='127.0.0.1',database='librarebook')
    crsr = connection.cursor(dictionary=True)

    with open('booksJSON_3.json','r') as data:
        bookArray = json.load(data)

        for book in bookArray:
            publisherID = 1
            authorIds = []
            itemID = -1
            description = ""
            language = "English"
            totalLicenses = randint(1,50)
            numPages = randint(30,400)
            title = ""
            publishYear = randint(1800,2015)
            coverImg = None
            isbn = None

            if "publishers" in book:
                name = book["publishers"][0]['name']
                crsr.execute(publisherSelectQuery, tuple([name]))
                publisher = crsr.fetchone()
                if publisher:
                    publisherID = publisher["id"]
                else:
                    phone = generateNumber()
                    email = "".join(name.lower().split(r'[@,.\s-]')) + "@gmail.com"
                    print(email,"\n")
                    crsr.execute(publisherAddQuery, tuple([name,email,phone]))

            if "authors" in book:
                authors = book["authors"]
                for author in authors:
                    split = author["name"].split(" ")
                    firstName = split[0]
                    if len(split) > 1:
                        lastName = split[-1]
                    else:
                        lastName = ""
                    crsr.execute(authorSelectQuery,tuple([firstName,lastName]))
                    existingAuthor = crsr.fetchone()
                    if existingAuthor:
                        authorIds.append(existingAuthor["id"])
                    else:
                        crsr.execute(authorAddQuery, tuple([firstName, lastName]))
                        authorIds.append(crsr.lastrowid)

            if "details" in book:
                if "number_of_pages" in book["details"]:
                    numPages = book["details"]["number_of_pages"]
            elif "number_of_pages" in book:
                numPages = book["number_of_pages"]

            if "details" in book:
                if "title" in book["details"]:
                    title = book["details"]["title"]
            elif "title" in book:
                title = book["title"]

            if "details" in book:
                if "publish_date" in book["details"]:
                    publishYear = book["details"]["publish_date"].split(" ")[-1]
            elif "publish_date" in book:
                publishYear = book["publish_date"].split(" ")[-1]

            if "cover" in book:
                if "large" in book["cover"]:
                    coverImg = book["cover"]["large"]
                elif "medium" in book["cover"]:
                    coverImg = book["cover"]["medium"]
                elif "small" in book["cover"]:
                    coverImg = book["cover"]["small"]

            if "identifiers" in book:
                if "isbn_13" in book["identifiers"]:
                    isbn = str(book["identifiers"]["isbn_13"][0])


            crsr.execute(updateBookQuery,tuple([isbn,coverImg,title]))
            if len(authorIds) > 0:
                # crsr.execute(itemAddQuery,tuple([coverImg, language,title,str(totalLicenses),str(publishYear),str(publisherID), str(isbn)]))
                itemID = crsr.lastrowid
                if itemID != -1:
                    crsr.execute(bookAddQuery,tuple([str(numPages),str(itemID)]))
                for authorId in authorIds:
                    crsr.execute(itemAuthorAddQuery, tuple([str(itemID), str(authorId)]))

    crsr.close()
    connection.commit()
    connection.close()
except mysql.connector.Error as err:
    print(err)
