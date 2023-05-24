from models.homes import Homes
from config.mysqlconnection import connectToMySQL
mydb = 'groupproject'
from flask import flash



class user:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']


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

    @classmethod
    def register(cls, data):
        query ="""INSERT 
        INTO users 
            (first_name, last_name, email, 
            password) 
        VALUES 
            (%(first_name)s, %(last_name)s, %(email)s, 
            %(password)s);
        """
        return connectToMySQL(mydb).query_db(query, data)

    @classmethod
    def update_homes(cls, data):
        query = """UPDATE users
        SET 
            first_name = %(first_name)s,
            last_name = %(last_name)s,
            email = %(email)s,
            password = %(password)s,
        WHERE 
            id = %(id)s
        """
        results = connectToMySQL(mydb).query_db(query, data)
        print(results)
        return results
