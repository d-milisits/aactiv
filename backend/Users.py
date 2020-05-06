import sqlite3

class Users:

  dbpath = "users.db"

  def __init__(self, **kwargs):
    self.pk = kwargs.get("pk")
    self.username = kwargs.get("username")
    self.password_hash = kwargs.get("password_hash")
  
  def add_user(self):
    with sqlite3.connect(self.dbpath) as conn:
      cur = conn.cursor()
      sql = """INSERT INTO users(
        username, password_hash 
      ) VALUES (?, ?);"""
      values = (self.username, self.password_hash)
      cur.execute(sql, values)
  
  @classmethod
  def login(cls, username, password_hash):
    with sqlite3.connect(cls.dbpath) as conn:
      print("working")
      conn.row_factory = sqlite3.Row
      cursor = conn.cursor()
      sql = """SELECT * FROM users WHERE username=? AND password_hash=?;"""
      cursor.execute(sql, (username, password_hash))
      user = cursor.fetchone()
      if user:
        return cls(**user)
      return None
