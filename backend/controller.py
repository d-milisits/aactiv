from flask import Flask, jsonify, request
from flask_cors import CORS
from Exercise import Exercise
from Quote import Quote

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

if __name__ == "__main__":
  app.run(debug=True)