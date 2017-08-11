import waitress
import time

from flask import Flask, jsonify, send_from_directory, request

app = Flask(__name__, static_url_path='')

game_state = {
    "unit": "The thingo brigade",
    "subunits": [
        "1st regiment",
        "2nd regiment",
        "3rd regiment"
    ],
    "theatre": "West Germany",
    "date": "1984-03-18",
    "time": "1300 hours",
    "weather": "Foggy",
    "viewDistance": "200m",
    "conditions": "rainy",
    "air": [
        {"name": "1st Squad", "model": "MIG"},
        {"name": "2nd Squad", "model": "MIG21"},
        {"name": "3rd Squad", "model": "Some Other plane"}
    ],
    "artillery": [
        {"name": "1st regiment", "model": "Howitzers"},
        {"name": "2nd regiment", "model": "Some other gun, idk"}
    ]
}

@app.route("/")
def main():
    print("Recieved request at " + time.strftime('%Y-%m-%d %H:%M:%S', time.localtime()))
    return app.send_static_file('index.html')

@app.route("/api/state")
def api_state():
    print(game_state)
    return jsonify(game_state)

@app.route("/api/update", methods=['POST'])
def update_state():
    # print(request.json)
    # print(game_state)
    global game_state
    game_state = request.json
    print(game_state)
    return "hello world"

if __name__ == "__main__":
    waitress.serve(app, port=5000)
