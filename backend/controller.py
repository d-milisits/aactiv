from flask import Flask, jsonify, request
from flask_cors import CORS
from Exercise import Exercise
from Quote import Quote
from util import hash_password
from Users import Users
from random import randint
from sqlite3 import IntegrityError

"""
***ID RANGES***
Shoulders: 1-15
Biceps: 16-27
Triceps: 28-40
Back: 41-55
Chest: 56-70
Quads: 71-83
Hams: 84-94
Forearms: 95-100
Calves: 101-106
"""

app = Flask(__name__)
CORS(app)

@app.route("/api/exercises")
def view_exercises():
  exercise_list = Exercise.view_exercises()
  return jsonify({"exercises":exercise_list})

@app.route("/api/quote")
def view_quote():
  quote = Quote.select_random_quote()
  return jsonify({"quote":quote})

@app.route("/api/create", methods=["POST"])
def create_account():
  data = request.get_json()
  username = data.get("username")
  password = data.get("password")
  password_hash = hash_password(password)
  new_user = Users(username=username, password_hash=password_hash)
  try: 
    new_user.add_user()
    return jsonify({"created":"success"})
  except IntegrityError:
    print("Account already exists!")
    return jsonify({"created":"failed"})

@app.route("/api/login", methods=["POST"])
def login():
  data = request.get_json()
  username = data.get("username")
  password = data.get("password")
  password_hash = hash_password(password)
  account = Users.login(username, password_hash)
  print(username)
  print(password_hash)
  print(account)
  if account == None:
    print("Account not found")
    return jsonify({"status":"failed"})
  return jsonify({"status":"success", "username":username})

@app.route("/api/favorite", methods=["POST"])
def add_to_favorites():
  data = request.get_json()
  username = data.get("username")
  favorite = data.get("favorite")
  try: 
    Users.add_to_favorites(username, favorite)
    return jsonify({"status":"success"})
  except:
    return jsonify({"status":"failed"})

@app.route("/api/remove", methods=["POST"])
def remove():
  data = request.get_json()
  username = data.get("username")
  favorite = data.get("favorite")
  try:
    Users.remove_from_favorites(username, favorite)
    return jsonify({"status":"success"})
  except:
    return jsonify({"status":"failed"})

@app.route("/api/profile", methods=["POST"])
def get_profile_data():
  data = request.get_json()
  username = data.get("username")
  favorites = Users.get_favorites(username)
  if favorites:
    return jsonify({"favorites":favorites})
  return jsonify({"favorites":"none"})

@app.route("/api/generate", methods=["POST"])
def generate_workout():

  workout_list = []
  workout_list.clear()

  # Get JSON values from Post Request sent from Workout.js.
  data = request.get_json()
  main = data.get("main")
  secondary = data.get("secondary")
  equip = data.get("equip")
  # Select workout by random PK(ID) where name=main and secondary. Main=4 Exercises. Secondary=2 Exercises.
  while len(workout_list) < 4:
    if (main=="shoulders"):
      if (equip != "none"):
        while(len(workout_list) < 3):
          rand_num = randint(1,15)
          lift = Exercise.exercise_by_name_and_equip(rand_num, main, equip)
          if lift not in workout_list and lift != None:
            workout_list.append(lift)
      rand_num = randint(1,15)
      lift = Exercise.exercise_by_name(rand_num, main)
      if lift not in workout_list and lift != None:
        workout_list.append(lift)
      # checkGenerate(lift, workout_list, rand_num, pk_list)
    elif (main=="biceps"):
      if (equip != "none"):
        while(len(workout_list) < 3):
          rand_num = randint(16,27)
          lift = Exercise.exercise_by_name_and_equip(rand_num, main, equip)
          if lift not in workout_list and lift != None:
            workout_list.append(lift)
      rand_num = randint(16,27)
      lift = Exercise.exercise_by_name(rand_num, main)
      if lift not in workout_list and lift != None:
        workout_list.append(lift)
    elif (main=="triceps"):
      if (equip != "none"):
        while(len(workout_list) < 3):
          rand_num = randint(28,40)
          lift = Exercise.exercise_by_name_and_equip(rand_num, main, equip)
          if lift not in workout_list and lift != None:
            workout_list.append(lift)
      rand_num = randint(28,40)
      lift = Exercise.exercise_by_name(rand_num, main)
      if lift not in workout_list and lift != None:
        workout_list.append(lift)
    elif (main=="back"):
      if (equip != "none"):
        while(len(workout_list) < 3):
          rand_num = randint(41,55)
          lift = Exercise.exercise_by_name_and_equip(rand_num, main, equip)
          if lift not in workout_list and lift != None:
            workout_list.append(lift)
      rand_num = randint(41,55)
      lift = Exercise.exercise_by_name(rand_num, main)
      if lift not in workout_list and lift != None:
        workout_list.append(lift)
    elif (main=="chest"):
      if (equip != "none"):
        while(len(workout_list) < 3):
          rand_num = randint(56,70)
          lift = Exercise.exercise_by_name_and_equip(rand_num, main, equip)
          if lift not in workout_list and lift != None:
            workout_list.append(lift)
      rand_num = randint(56,70)
      lift = Exercise.exercise_by_name(rand_num, main)
      if lift not in workout_list and lift != None:
        workout_list.append(lift)
    elif (main=="quads"):
      if (equip != "none"):
        while(len(workout_list) < 3):
          rand_num = randint(71,83)
          lift = Exercise.exercise_by_name_and_equip(rand_num, main, equip)
          if lift not in workout_list and lift != None:
            workout_list.append(lift)
      rand_num = randint(71,83)
      lift = Exercise.exercise_by_name(rand_num, main)
      if lift not in workout_list and lift != None:
        workout_list.append(lift)
    elif (main=="hams"):
      if (equip != "none"):
        while(len(workout_list) < 3):
          rand_num = randint(84,94)
          lift = Exercise.exercise_by_name_and_equip(rand_num, main, equip)
          if lift not in workout_list and lift != None:
            workout_list.append(lift)
      rand_num = randint(84,94)
      lift = Exercise.exercise_by_name(rand_num, main)
      if lift not in workout_list and lift != None:
        workout_list.append(lift)
    elif (main=="forearms"):
      if (equip != "none"):
        while(len(workout_list) < 3):
          rand_num = randint(95,100)
          lift = Exercise.exercise_by_name_and_equip(rand_num, main, equip)
          if lift not in workout_list and lift != None:
            workout_list.append(lift)
      rand_num = randint(95,100)
      lift = Exercise.exercise_by_name(rand_num, main)
      if lift not in workout_list and lift != None:
        workout_list.append(lift)
    elif (main=="calves"):
      if (equip != "none"):
        while(len(workout_list) < 3):
          rand_num = randint(101,106)
          lift = Exercise.exercise_by_name_and_equip(rand_num, main, equip)
          if lift not in workout_list and lift != None:
            workout_list.append(lift)
      rand_num = randint(101,106)
      lift = Exercise.exercise_by_name(rand_num, main)
      if lift not in workout_list and lift != None:
        workout_list.append(lift)
  if len(workout_list) >= 4:
    while len(workout_list) < 6:
      if (secondary=="shoulders"):
        if (equip != "none"):
          rand_num = randint(1,15)
          lift = Exercise.exercise_by_name_and_equip(rand_num, main, equip)
          if lift not in workout_list and lift != None:
            workout_list.append(lift)
        rand_num = randint(1,15)
        lift = Exercise.exercise_by_name(rand_num, secondary)
        if lift not in workout_list and lift != None:
          workout_list.append(lift)
      elif (secondary=="biceps"):
        if (equip != "none"):
          rand_num = randint(16,27)
          lift = Exercise.exercise_by_name_and_equip(rand_num, main, equip)
          if lift not in workout_list and lift != None:
            workout_list.append(lift)
        rand_num = randint(16,27)
        lift = Exercise.exercise_by_name(rand_num, secondary)
        if lift not in workout_list and lift != None:
          workout_list.append(lift)
      elif (secondary=="triceps"):
        if (equip != "none"):
          rand_num = randint(28,40)
          lift = Exercise.exercise_by_name_and_equip(rand_num, main, equip)
          if lift not in workout_list and lift != None:
            workout_list.append(lift)
        rand_num = randint(28,40)
        lift = Exercise.exercise_by_name(rand_num, secondary)
        if lift not in workout_list and lift != None:
          workout_list.append(lift)
      elif (secondary=="back"):
        if (equip != "none"):
          rand_num = randint(41,55)
          lift = Exercise.exercise_by_name_and_equip(rand_num, main, equip)
          if lift not in workout_list and lift != None:
            workout_list.append(lift)
        rand_num = randint(41,55)
        lift = Exercise.exercise_by_name(rand_num, secondary)
        if lift not in workout_list and lift != None:
          workout_list.append(lift)
      elif (secondary=="chest"):
        if (equip != "none"):
          rand_num = randint(56,70)
          lift = Exercise.exercise_by_name_and_equip(rand_num, main, equip)
          if lift not in workout_list and lift != None:
            workout_list.append(lift)
        rand_num = randint(56,70)
        lift = Exercise.exercise_by_name(rand_num, secondary)
        if lift not in workout_list and lift != None:
          workout_list.append(lift)
      elif (secondary=="quads"):
        if (equip != "none"):
          rand_num = randint(71,83)
          lift = Exercise.exercise_by_name_and_equip(rand_num, main, equip)
          if lift not in workout_list and lift != None:
            workout_list.append(lift)
        rand_num = randint(71,83)
        lift = Exercise.exercise_by_name(rand_num, secondary)
        if lift not in workout_list and lift != None:
          workout_list.append(lift)
      elif (secondary=="hams"):
        if (equip != "none"):
          rand_num = randint(84,94)
          lift = Exercise.exercise_by_name_and_equip(rand_num, main, equip)
          if lift not in workout_list and lift != None:
            workout_list.append(lift)
        rand_num = randint(84,94)
        lift = Exercise.exercise_by_name(rand_num, secondary)
        if lift not in workout_list and lift != None:
          workout_list.append(lift)
      elif (secondary=="forearms"):
        if (equip != "none"):
          rand_num = randint(95,100)
          lift = Exercise.exercise_by_name_and_equip(rand_num, main, equip)
          if lift not in workout_list and lift != None:
            workout_list.append(lift)
        rand_num = randint(95,100)
        lift = Exercise.exercise_by_name(rand_num, secondary)
        if lift not in workout_list and lift != None:
          workout_list.append(lift)
      elif (secondary=="calves"):
        if (equip != "none"):
          rand_num = randint(101,106)
          lift = Exercise.exercise_by_name_and_equip(rand_num, main, equip)
          if lift not in workout_list and lift != None:
            workout_list.append(lift)
        rand_num = randint(101,106)
        lift = Exercise.exercise_by_name(rand_num, secondary)
        if lift not in workout_list and lift != None:
          workout_list.append(lift)

  print(workout_list)
  return jsonify({"workout":workout_list})

if __name__ == "__main__":
  app.run(host='127.0.0.1', port=5000)