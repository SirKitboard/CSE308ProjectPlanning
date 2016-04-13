from pyramid.view import view_config
from pyramid.response import Response

import pyramid.httpexceptions as exc

import mysql.connector


@view_config(route_name='apiGetBook', renderer='json')
def apiGetBook(request):
    itemISBN = request.matchdict['isbn']

    try:
        query = ("SELECT * FROM books WHERE isbn=%s")

        cnx = mysql.connector.connect(user='root', password='password', host='127.0.0.1', database='nile')
        cursor = cnx.cursor(dictionary=True)

        cursor.execute(query, (str(itemISBN),))
        book = cursor.fetchone()


        if(book):
            query = ("SELECT * FROM items_authors WHERE items=%s")
            itemID = book['id']
            cursor.execute(query, (itemID,))
            # return (itemISBN,)
            authors = []
            query = ("SELECT * FROM authors WHERE id=%s")
            # one = cursor.fetchone()
            for row in cursor:
                cursor1 = cnx.cursor(dictionary=True)
                authorID = row['authors']
                cursor1.execute(query, (str(authorID),))
                author = cursor1.fetchone()
                # return(author)
                authors.append(author)
            query = ("SELECT * FROM publishers WHERE id=%s")
            cursor.execute(query, (str(book['publisher']),))

            book['authors'] = authors
            book['publisher'] = cursor.fetchone()
            book['date_added'] = str(book['date_added'])

        else:
            raise exc.HTTPNoContent()

        cursor.close()
        cnx.commit()
        cnx.close()
    except mysql.connector.Error as err:
        cursor.close()
        cnx.close()
        return Response("Something went wrong: {}".format(err))

    return book
    raise exc.HTTPOk()
