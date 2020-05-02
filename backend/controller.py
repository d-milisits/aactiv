from flask import Flask, jsonify, request
from flask_cors import CORS
from Exercise import Exercise
from Quote import Quote
from random import randint

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

@app.route("/api/generate", methods=["POST"])
def generate_workout():
  workout_list = []
  # Get JSON values from Post Request sent from Workout.js.
  data = request.get_json()
  main = data.get("main")
  secondary = data.get("secondary")
  # Select workout by random PK(ID) where name=main and secondary. Main=4 Exercises. Secondary=2 Exercises.
  for i in range(4):
    if (main=="shoulders"):
      rand_num = randint(1,15)
      lift = Exercise.exercise_by_name(rand_num, main)
      if lift not in workout_list:
        workout_list.append(lift)
    elif (main=="biceps"):
      rand_num = randint(16,27)
      lift = Exercise.exercise_by_name(rand_num, main)
      if lift not in workout_list:
        workout_list.append(lift)
    elif (main=="triceps"):
      rand_num = randint(28,40)
      lift = Exercise.exercise_by_name(rand_num, main)
      if lift not in workout_list:
        workout_list.append(lift)
    elif (main=="back"):
      rand_num = randint(41,55)
      lift = Exercise.exercise_by_name(rand_num, main)
      if lift not in workout_list:
        workout_list.append(lift)
    elif (main=="chest"):
      rand_num = randint(56,70)
      lift = Exercise.exercise_by_name(rand_num, main)
      if lift not in workout_list:
        workout_list.append(lift)
    elif (main=="quads"):
      rand_num = randint(71,83)
      lift = Exercise.exercise_by_name(rand_num, main)
      if lift not in workout_list:
        workout_list.append(lift)
    elif (main=="hams"):
      rand_num = randint(84,94)
      lift = Exercise.exercise_by_name(rand_num, main)
      if lift not in workout_list:
        workout_list.append(lift)
    elif (main=="forearms"):
      rand_num = randint(95,100)
      lift = Exercise.exercise_by_name(rand_num, main)
      if lift not in workout_list:
        workout_list.append(lift)
    elif (main=="calves"):
      rand_num = randint(101,106)
      lift = Exercise.exercise_by_name(rand_num, main)
      if lift not in workout_list:
        workout_list.append(lift)
  for i in range(2):
    if (secondary=="shoulders"):
      rand_num = randint(1,15)
      lift = Exercise.exercise_by_name(rand_num, secondary)
      if lift not in workout_list:
        workout_list.append(lift)
    elif (secondary=="biceps"):
      rand_num = randint(16,27)
      lift = Exercise.exercise_by_name(rand_num, secondary)
      if lift not in workout_list:
        workout_list.append(lift)
    elif (secondary=="triceps"):
      rand_num = randint(28,40)
      lift = Exercise.exercise_by_name(rand_num, secondary)
      if lift not in workout_list:
        workout_list.append(lift)
    elif (secondary=="back"):
      rand_num = randint(41,55)
      lift = Exercise.exercise_by_name(rand_num, secondary)
      if lift not in workout_list:
        workout_list.append(lift)
    elif (secondary=="chest"):
      rand_num = randint(56,70)
      lift = Exercise.exercise_by_name(rand_num, secondary)
      if lift not in workout_list:
        workout_list.append(lift)
    elif (secondary=="quads"):
      rand_num = randint(71,83)
      lift = Exercise.exercise_by_name(rand_num, secondary)
      if lift not in workout_list:
        workout_list.append(lift)
    elif (secondary=="hams"):
      rand_num = randint(84,94)
      lift = Exercise.exercise_by_name(rand_num, secondary)
      if lift not in workout_list:
        workout_list.append(lift)
    elif (secondary=="forearms"):
      rand_num = randint(95,100)
      lift = Exercise.exercise_by_name(rand_num, secondary)
      if lift not in workout_list:
        workout_list.append(lift)
    elif (secondary=="calves"):
      rand_num = randint(101,106)
      lift = Exercise.exercise_by_name(rand_num, secondary)
      if lift not in workout_list:
        workout_list.append(lift)
  print(workout_list)
  return jsonify({"workout":workout_list})

@app.route("/api/exercises")
def view_exercises():
  exercise_list = Exercise.view_exercises()
  return jsonify({"exercises":exercise_list})

@app.route("/api/quote")
def view_quote():
  quote = Quote.select_random_quote()
  return jsonify({"quote":quote})

if __name__ == "__main__":
  app.run(debug=True)