from models import homes
from config.mysqlconnection import connectToMySQL
mydb = 'groupproject'
from flask import flash



class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']


    @classmethod
    def register(cls, data):
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        email = data.get('email')
        password = data.get('password')

        query = """
        INSERT INTO users 
            (first_name, last_name, email, password) 
        VALUES 
            (%(first_name)s, %(last_name)s, %(email)s, %(password)s);
        """
        return connectToMySQL(mydb).query_db(query, data)
    
    

    @classmethod
    def get_by_email(cls, email):
        query = '''
        SELECT * FROM users WHERE email = %(email)s;
        '''
        data = {'email': email}
        result = connectToMySQL(mydb).query_db(query, data)
        if len(result) < 1:
            return False
        return cls(result[0])

    
    @staticmethod
    def is_valid(request_form_data):
        is_valid = True
        if len(request_form_data['first_name']) < 1:
            is_valid = False
            flash('First Name Required')
        elif len(request_form_data['first_name']) <= 1:
            is_valid = False
            flash('First Name must be at least 2 characters')
        if len(request_form_data['last_name']) < 1:
            is_valid = False
            flash('Last Name Required')
        elif len(request_form_data['last_name']) < 2:
            is_valid = False
            flash('Last Name must be at least 2 characters')
        return is_valid





    @classmethod
    def get_all(cls):
        query = 'SELECT * FROM users'
        results = connectToMySQL(mydb).query_db(query)
        return [cls(row) for row in results]


    @classmethod
    def get_one(cls, data):
        query ="SELECT * FROM users WHERE id = %(id)s"    ;
        result = connectToMySQL(mydb).query_db(query,data)
        return cls(result[0])
    
    @classmethod
    def delete(cls, data):
        query = 'DELETE FROM users WHERE id =%(id)s'
        return connectToMySQL(mydb).query_db(query, data)







