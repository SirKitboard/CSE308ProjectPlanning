from pyramid.view import view_config
from pyramid.response import Response

import pyramid.httpexceptions as exc
import crypt
import uuid

import mysql.connector


@view_config(route_name='apiGetTokenForUser', renderer='json')
def getAPIToken(request):
    requiredKeys = ['clientID', 'userID', 'first_name', 'last_name']
    postVars = request.POST
    acceptedKeys = []

    for key in requiredKeys:
        if(key in postVars):
            acceptedKeys.append(postVars[key])
        else:
            raise exc.HTTPBadRequest()

    try:
        query = ("SELECT name FROM clients WHERE id=%s")

        cnx = mysql.connector.connect(user='root', password='password', host='127.0.0.1', database='nile')
        cursor1 = cnx.cursor(dictionary=True)

        # return postVars

        # return (str(postVars['clientID']),)

        cursor1.execute(query, (str(postVars['clientID']),))
        client = cursor1.fetchone()


        if(client):
            query = ("SELECT * FROM users WHERE id=%s")
            userID = postVars['clientID'] + postVars['userID']
            cursor1.execute(query, (userID,))
            user = cursor1.fetchone()
            if(user == None):
                query = ("INSERT INTO users(id, first_name, last_name) VALUES(%s, %s, %s)")
                cursor1.execute(query, (userID, postVars['first_name'], postVars['last_name']))

            accessToken = str(uuid.uuid1()).replace('-', '')
            query = ("INSERT INTO sessions(sessionID, userID, expires_on) VALUES(%s, %s, DATE_ADD(NOW(), INTERVAL 5 MINUTE))")
            cursor1.execute(query, (accessToken, userID))

        else:
            raise exc.HTTPUnauthorized()

        cursor1.close()
        cnx.commit()
        cnx.close()
    except mysql.connector.Error as err:
        cursor1.close()
        cnx.close()
        return Response("Something went wrong: {}".format(err))

    return accessToken
    raise exc.HTTPOk()



@view_config(route_name='apiAuthorize', renderer='json')
def apiAuthorize(request):
    postVars = request.POST
    session = request.session
    if('currentUser' in session):
        return session['currentUser']

    if('sessionID' not in postVars):
        raise exc.HTTPBadRequest()
    try:
        cnx = mysql.connector.connect(user='root', password='password', host='127.0.0.1', database='nile')
        cursor1 = cnx.cursor(dictionary=True)

        query = ("DELETE FROM sessions WHERE expires_on < NOW()")
        cursor1.execute(query)
        # cnx.commit()

        query = ("SELECT userID FROM sessions WHERE sessionID=%s")
        cursor1.execute(query, (postVars['sessionID'],))
        sessionID = cursor1.fetchone()
        # return sessionID
        if(sessionID == None):
            raise exc.HTTPUnauthorized()

        query = ("SELECT * FROM users WHERE id=%s")
        cursor1.execute(query, (sessionID['userID'],))
        user = cursor1.fetchone()

        session['currentUser'] = user

        cnx = mysql.connector.connect(user='root', password='password', host='127.0.0.1', database='nile')
        cursor1 = cnx.cursor(dictionary=True)

        cursor1.close()
        cnx.commit()
        cnx.close()
    except mysql.connector.Error as err:
        cursor1.close()
        cnx.close()
        return Response("Something went wrong: {}".format(err))
    raise exc.HTTPOk()
