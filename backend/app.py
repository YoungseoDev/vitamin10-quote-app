from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)  # 모든 요청에 대해 CORS 허용

QUOTES = [
    "The future depends on what you do today.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Do one thing every day that scares you.",
    "Success is the sum of small efforts, repeated day in and day out.",
]

@app.route("/quote", methods=["GET"])
def get_quote():
    quote = random.choice(QUOTES)
    return jsonify({"quote": quote})

@app.route("/")
def home():
    return "Quote Backend is running!"

if __name__ == "__main__":
    # 개발용
    app.run(host="0.0.0.0", port=5000, debug=True)
