import json
import mysql.connector
import re

try:
    connection = mysql.connector.connect(user='root',password='password',host='127.0.0.1',database='librarebook')
    crsr = connection.cursor(dictionary=True)

    query = "SELECT * FROM publishers";
    crsr.execute(query)
    query = "UPDATE publishers SET email=%s WHERE id=%s"
    rows = crsr.fetchall()
    for row in rows:
        emailParts = row['email'].split('@')
        email = emailParts[0]
        email = re.sub(r"[\s.\\/]", "", email)
        email = email + "@" + emailParts[1]
        print(email)
        crsr.execute(query, (email, row['id']))

    crsr.close()
    connection.commit()
    connection.close()
except mysql.connector.Error as err:
    print(err)
