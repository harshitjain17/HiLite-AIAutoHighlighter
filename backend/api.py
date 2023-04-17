import json
import yfinance as yf
from flask import Flask, jsonify, request
from datetime import datetime
import pandas as pd

app = Flask(__name__)

@app.route("/summarize", methods=['POST'])
def get_summary():
    t = request.json['summarize']
    return jsonify(str(t))



    