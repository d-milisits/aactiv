import sqlite3 

def schema(dbpath="data.db"):
  with sqlite3.connect(dbpath) as conn:
    cursor = conn.cursor()

    sql = """CREATE TABLE exercises(
      pk INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(50),
      part VARCHAR(25),
      equipment VARCHAR(25),
      prep TEXT,
      instruction TEXT,
      video VARCHAR(50),
      targets VARCHAR(50),
      UNIQUE(name)
    );"""

    cursor.execute(sql)

    sql2 = """CREATE TABLE quotes(
      pk INTEGER PRIMARY KEY AUTOINCREMENT,
      quote TEXT
    );"""

    cursor.execute(sql2)
  
if __name__ == "__main__":
  schema()
