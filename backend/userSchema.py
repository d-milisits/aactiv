import sqlite3 

def schema(dbpath="users.db"):
  with sqlite3.connect(dbpath) as conn:
    cursor = conn.cursor()

    sql = """CREATE TABLE users(
      pk INTEGER PRIMARY KEY AUTOINCREMENT,
      username VARCHAR(50),
      password_hash VARCHAR(100),
      UNIQUE(username)
    );"""

    cursor.execute(sql)

    sql2 = """CREATE TABLE user_favorites(
      pk INTEGER PRIMARY KEY AUTOINCREMENT,
      fk_username VARCHAR(50),
      favorite TEXT,
      UNIQUE(favorite),
      FOREIGN KEY(fk_username) REFERENCES users(username)
    );"""

    cursor.execute(sql2)
  
if __name__ == "__main__":
  schema()
