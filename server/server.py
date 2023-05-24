from flask import Flask, jsonify
from models.homes import Homes

app = Flask(__name__)

@app.route('/home')
def members():
    homes = Homes.get_all()
    homes_json = [home.__dict__ for home in homes]  # Convert objects to dictionaries
    return jsonify(homes_json)

if __name__ == "__main__":
    app.run(debug=True)
