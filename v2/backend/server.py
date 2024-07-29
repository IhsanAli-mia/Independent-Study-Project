from flask import Flask,request,jsonify
import datetime
import mysql.connector
from flask_cors import CORS
 
x = datetime.datetime.now()
 
app = Flask(__name__)
CORS(app)


mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="password",
  database="loginDetails"
)

cursor = mydb.cursor()

@app.route('/register', methods=['POST'])
def signUp():
    # print("hi")
    data = request.get_json()
    username = data.get('s')
    position = data.get('position')
    password = data.get('password')
    
    
    sql = "INSERT INTO login_details (username, password, account_type) VALUES (%s, %s, %s)"
    values = (username,password,position)
    cursor.execute(sql,values)
    
    mydb.commit()
    
    return jsonify({"message": "User added successfully"}), 201
    
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    mail = data.get('email')
    password = data.get('password')
    
    sql = "SELECT * FROM login_details WHERE username = %s AND password = %s"
    val = (mail, password)
    cursor.execute(sql, val)
    # print(cursor)
    
    a = []
    for x in cursor:
        a.append(x)

    if a:
        return jsonify({"success": True}), 200
    else:
        return jsonify({"success": False}), 401
    
     
# Running app
if __name__ == '__main__':
    app.run(debug=True)
