from flask import Flask, request, jsonify
import script

app = Flask(__name__)

@app.route('/generate_output', methods=['POST'])
def generate_output():
    input_text = request.get_json()['text']
    output_text = script.generate_output(input_text)
    response = {'output': output_text}
    return jsonify(response)

if __name__ == '__main__':
    app.run()
