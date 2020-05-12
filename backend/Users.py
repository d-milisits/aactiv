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
      conn.row_factory = sqlite3.Row
      cursor = conn.cursor()
      sql = """SELECT * FROM users WHERE username=? AND password_hash=?;"""
      cursor.execute(sql, (username, password_hash))
      user = cursor.fetchone()
      if user:
        return cls(**user)
      return None

  # Adds favorite workout to user_favorites.
  @classmethod
  def add_to_favorites(cls, username, favorite):
    with sqlite3.connect(cls.dbpath) as conn:
      conn.row_factory = sqlite3.Row
      cursor = conn.cursor()
      sql = """INSERT INTO user_favorites(
        fk_username, favorite
      ) VALUES(?, ?);"""
      values = (username, favorite)
      cursor.execute(sql, values)

  @classmethod 
  def remove_from_favorites(cls, username, favorite):
    with sqlite3.connect(cls.dbpath) as conn:
      cursor = conn.cursor()
      sql = """DELETE FROM user_favorites WHERE fk_username=? AND favorite=?;"""
      values = (username, favorite)
      cursor.execute(sql, values)
  
  # Retrieves favorite list from a given username.
  @classmethod 
  def get_favorites(cls, username):
    with sqlite3.connect(cls.dbpath) as conn:
      cursor = conn.cursor()
      sql = """SELECT favorite FROM user_favorites WHERE fk_username=?;"""
      cursor.execute(sql, (username,))
      favorites = cursor.fetchall()
      return favorites