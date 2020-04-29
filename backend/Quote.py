import sqlite3
from random import randint

class Quote:

  dbpath = "data.db"

  def __init__(self, **kwargs):
    self.pk = kwargs.get("pk")
    self.quote = kwargs.get("quote")
  
  def insert(self):
    with sqlite3.connect(self.dbpath) as conn:
      cur = conn.cursor()
      sql = """INSERT INTO quotes(
        quote) VALUES (?);"""
      values = (self.quote)
      cur.execute(sql, (values,))
  
  @classmethod
  def select_random_quote(cls):
    with sqlite3.connect(cls.dbpath) as conn:
      cur = conn.cursor()
      random_id = randint(1,500)
      sql = """SELECT quote FROM quotes WHERE pk=?;"""
      cur.execute(sql, (random_id,))
      quote = cur.fetchone()
      return quote

# if __name__ == "__main__":
#   test = Quote(quote="Test quote")
#   test.insert()