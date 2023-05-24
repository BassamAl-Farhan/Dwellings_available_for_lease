from flask import Flask, jsonify, request
from models.homes import Homes
from models.homes import user

app = Flask(__name__)

@app.route('/home')
def members():
    homes = Homes.get_all()
    homes_json = [home.__dict__ for home in homes]  # Convert objects to dictionaries
    return jsonify(homes_json)


@app.route('/get_one/<int:id>')
def get_one(id):
    data = {'id': id}
    home = Homes.get_one(data)
    homes_json = home.__dict__
    return jsonify(homes_json)


@app.route("/delete/home/<int:id>")
def delete(id):
    data = {'id': id}
    Homes.delete(data)
    return "Deleted"


@app.route('/create/home', methods=['POST'])
def create_home():
    data = {
    "numberOfRooms" :request.form.get('numberOfRooms'),
    "priceRange" :request.form.get('priceRange'),
    "city": request.form.get('city'),
    "description" : request.form.get('description'),
    "user_id": request.form.get("user_id")
    }
    Homes.register(data)

    response = {'message': 'Home created successfully'}
    return jsonify(response)

@app.route('/update/home', methods=['PUT'])
def update_home():
    data = {
    "numberOfRooms" :request.form.get('numberOfRooms'),
    "priceRange" :request.form.get('priceRange'),
    "city": request.form.get('city'),
    "description" : request.form.get('description'),
    "user_id": request.form.get("user_id"),
    "id": request.form.get("id") # This is the id of the home that is being updated
    }
    Homes.register(data)

    response = {'message': 'Home created successfully'}
    return jsonify(response)









@app.route('/home')
def members_user():
    homes = user.get_all()
    homes_json = [home.__dict__ for home in homes]  # Convert objects to dictionaries
    return jsonify(homes_json)


@app.route('/get_one/<int:id>')
def get_one_user(id):
    data = {'id': id}
    home = user.get_one(data)
    homes_json = home.__dict__
    return jsonify(homes_json)


@app.route("/delete/home/<int:id>")
def delete_user(id):
    data = {'id': id}
    user.delete(data)
    return "Deleted"


@app.route('/create/home', methods=['POST'])
def create_home_user():
    data = {
    "numberOfRooms" :request.form.get('numberOfRooms'),
    "priceRange" :request.form.get('priceRange'),
    "city": request.form.get('city'),
    "description" : request.form.get('description'),
    "user_id": request.form.get("user_id")
    }
    user.register(data)

    response = {'message': 'Home created successfully'}
    return jsonify(response)

@app.route('/update/home', methods=['PUT'])
def update_home_user():
    data = {
    "numberOfRooms" :request.form.get('numberOfRooms'),
    "priceRange" :request.form.get('priceRange'),
    "city": request.form.get('city'),
    "description" : request.form.get('description'),
    "user_id": request.form.get("user_id"),
    "id": request.form.get("id") # This is the id of the home that is being updated
    }
    user.register(data)

    response = {'message': 'Home created successfully'}
    return jsonify(response)













if __name__ == "__main__":
    app.run(debug=True)



