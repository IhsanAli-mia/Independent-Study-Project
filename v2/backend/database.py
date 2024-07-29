import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="password",
  database="loginDetails"
)

mycursor = mydb.cursor()

mycursor.execute('''SELECT COLUMN_NAME 
FROM INFORMATION_SCHEMA.COLUMNS 
WHERE TABLE_NAME = 'login_details';''')

for x in mycursor:
  print(x) 

# mycursor.execute("ALTER TABLE login_details DROP COLUMN id")  
username = 'ihsan@Student.com'
password = 'ihdojsaoi'

mycursor.execute("SELECT * FROM login_details;")

for x in mycursor:
  print(x) 

# mycursor.execute("SELECT * FROM login_details WHERE username = %s AND password = %s;",(username,password))

# for x in mycursor:
#   print(x) 
  
mycursor.execute("SELECT * FROM login_details WHERE account_type = %s;",(password,))
for x in mycursor:
  print(x) 