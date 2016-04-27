import json
import mysql.connector
import re

try:
    connection = mysql.connector.connect(user='root',password='root',host='33.33.33.1',database='librarebook')
    crsr = connection.cursor(dictionary=True)

    query = "SELECT * FROM publishers";
    crsr.execute(query)
    query = "UPDATE publishers SET email=%s WHERE id=%s"
    rows = crsr.fetchall()
    for row in rows:
        emailParts = row['email'].split('@')
        print(emailParts)
        email = emailParts[0]
        email = re.sub(r"[^a-zA-Z0-9]", "", email)
        email = email + "@" + emailParts[1]
        print(email)
        crsr.execute(query, (email, row['id']))
        print("success")

    crsr.close()
    connection.commit()
    connection.close()
except mysql.connector.Error as err:
    print(err)
