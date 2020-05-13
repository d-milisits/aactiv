import sqlite3 

class Exercise:

  dbpath = "data.db"

  def __init__(self, **kwargs):
    self.pk = kwargs.get("pk")
    self.name = kwargs.get("name")
    self.part = kwargs.get("part")
    self.equipment = kwargs.get("equipment")
    self.prep = kwargs.get("prep")
    self.instruction = kwargs.get("instruction")
    self.video = kwargs.get("video")
    self.targets = kwargs.get("targets")

  def insert(self):
    with sqlite3.connect(self.dbpath) as conn:
      cur = conn.cursor()
      sql = """INSERT INTO exercises(
        name, part, equipment, prep, instruction, video, targets
      ) VALUES (?, ?, ?, ?, ?, ?, ?);"""
      values = (self.name, self.part, self.equipment, self.prep, self.instruction, self.video, self.targets)
      cur.execute(sql, values)

  @classmethod
  def view_exercises(cls):
    with sqlite3.connect(cls.dbpath) as conn:
      cur=conn.cursor()
      sql = """SELECT * FROM exercises;"""
      cur.execute(sql)
      exercises = cur.fetchall()
      return exercises
  
  @classmethod 
  def exercise_by_name(cls, pk, part):
    with sqlite3.connect(cls.dbpath) as conn:
      cur=conn.cursor()
      sql = """SELECT * FROM exercises WHERE pk=? AND part=?;"""
      cur.execute(sql, (pk,part))
      exercise = cur.fetchone()
      return exercise
  
  @classmethod
  def exercise_by_name_and_equip(cls, pk, part, equip):
    with sqlite3.connect(cls.dbpath) as conn:
      cur=conn.cursor()
      sql = """SELECT * FROM exercises WHERE pk=? AND part=? AND equipment=?;"""
      cur.execute(sql, (pk, part, equip))
      exercise = cur.fetchone()
      return exercise

# if __name__ == "__main__":
#   test = Exercise(name="Shoulder Press", part="back", equipment="cables", prep="Just do it", instruction="Here are the instructions", video="Here's the video", targets="Targets")
#   test.insert()