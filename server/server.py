from flask import Flask, jsonify, request
from models.homes import Homes
from models.users import User
from flask import flash, redirect, session, url_for
from flask_bcrypt import bcrypt

app = Flask(__name__)
app.secret_key = 'vdwfdf'

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

@app.route("/delete/<int:id>", methods=["DELETE"])
def delete(id):
    data = {"id": id}
    result = Homes.delete(data)
    if result:
        return "Deleted"
    else:
        return "Failed to delete"


# Backend route
@app.route('/create/home', methods=['POST'])
def create_home():
    data = request.get_json()

    # Call Homes.register() method with the form data
    Homes.register(data)

    response = {'message': 'Home created successfully'}
    return jsonify(response)


@app.route('/updateHome', methods=['PUT'])
def update_home():
    data = request.get_json()
    Homes.updateHome(data)

    response = {'message': 'Home created successfully'}
    return jsonify(response)
    # return jsonify(response, home = Homes.register)

@app.route('/logout',methods=['GET', 'POST'])
def logout():
    session.clear()
    return 'done'

@app.route('/create/user', methods=['POST'])
def create_user():
    data = request.get_json()

    # Call Homes.register() method with the form data
    User.register(data)

    response = {'message': 'User created successfully'}
    return jsonify(response)

from flask import request, jsonify, session


@app.route('/login/user', methods=['POST'])
def login():
    data = request.get_json()  # Get JSON data from the request body

    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Missing email or password'}), 400

    user_in_db = User.get_by_email(email)
    if not user_in_db:
        return jsonify({'error': 'Invalid email or password'}), 401

    if user_in_db.password != password:
        return jsonify({'error': 'Invalid email or password'}), 401

    return jsonify({'message': 'Login successful'})





    # @classmethod
    # def join_user_to_building_update(cls, data):
    #     query = """UPDATE applications
    #     SET 
    #         building_id = %(building_id)s,
    #         applicant_id = %(applicant_id)s,
    #         last_address = %(last_address)s,
    #         birthday = %(birthday)s,
    #         income = %(income)s,
    #         moving_date = %(moving_date)s
    #     WHERE 
    #         id = %(id)s
    #     """
    #     results = connectToMySQL(mydb).query_db(query, data)
    #     print(results)
    #     return results


















@app.route('/home')
def members_User():
    homes = User.get_all()
    homes_json = [home.__dict__ for home in homes]  # Convert objects to dictionaries
    return jsonify(homes_json)


@app.route('/get_one/<int:id>')
def get_one_User(id):
    data = {'id': id}
    home = User.get_one(data)
    homes_json = home.__dict__
    return jsonify(homes_json)


@app.route("/delete/home/<int:id>")
def delete_User(id):
    data = {'id': id}
    User.delete(data)
    return "Deleted"


@app.route('/create/home', methods=['POST'])
def create_home_User():
    data = {
    "first_name" :request.form.get('first_name'),
    "last_name" :request.form.get('last_name'),
    "email": request.form.get('email'),
    "password" : request.form.get('password')
    }
    User.register(data)

    response = {'message': 'Home created successfully'}
    return jsonify(response)

@app.route('/update/home', methods=['PUT'])
def update_home_User():
    data = {
    "first_name" :request.form.get('first_name'),
    "last_name" :request.form.get('last_name'),
    "email": request.form.get('email'),
    "password" : request.form.get('password')
    }
    User.register(data)

    response = {'message': 'Home created successfully'}
    return jsonify(response)













@app.route('/register/form', methods=["POST"])
def register_form():
    banana = bcrypt.generate_password_hash(request.form['password'])
    data = {
        'first_name': request.form['first_name'], 
        'last_name': request.form['last_name'],
        'email': request.form['email'],
        'password':banana,
    }
    if User.is_valid(request.form):
        id = User.register(data)
        session['user_id']= id    
        return redirect("/main")
    return redirect('/')

@app.route('/login/form', methods = ['POST'])
def login_form():
    data = {'email': request.form['email']}
    user_in_db = User.get_by_email(data)
    if not user_in_db:
        flash("Invalid Email/Password")
        return redirect('/')
    if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
        flash("Invalid Email/ Password")
        return redirect('/')
    session['user_id'] = user_in_db.id
    return redirect("/main")












if __name__ == "__main__":
    app.run(debug=True)










