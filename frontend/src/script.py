from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/generate', methods=['POST'])
def generate():
    data = request.get_json()
    output = {'message': 'Hello ' + data['text']}
    return jsonify(output)

if __name__ == '__main__':
    app.run(debug=True)
