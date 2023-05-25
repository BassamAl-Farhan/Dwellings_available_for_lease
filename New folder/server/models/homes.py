
from config.mysqlconnection import connectToMySQL
mydb = 'groupproject'
from flask import flash
from models import users


class Homes:
    def __init__(self, data):
        self.id = data['id']
        self.numberOfRooms = data['numberOfRooms']
        self.priceRange = data['priceRange']
        self.city = data['city']
        self.state = data['state']
        self.description = data['description']
        self.created_at = data['created_at']


    @classmethod
    def get_all(cls):
        query = 'SELECT * FROM homes'
        results = connectToMySQL(mydb).query_db(query)
        return [cls(row) for row in results]


    @classmethod
    def get_one(cls, data):
        query ="SELECT * FROM homes WHERE id = %(id)s"    ;
        result = connectToMySQL(mydb).query_db(query,data)
        return cls(result[0])
    
    @classmethod
    def delete(cls, data):
        query = 'DELETE FROM homes WHERE id =%(id)s'
        return connectToMySQL(mydb).query_db(query, data)

    # Homes.register() method in the models
    @classmethod
    def register(cls, data):
        # number_of_rooms = data.get('numberOfRooms')
        # price_range = data.get('priceRange')
        # city = data.get('city')
        # description = data.get('description')
        # state = data.get('state')

        query = """
        INSERT INTO homes 
            (numberOfRooms, priceRange, city, state, description) 
        VALUES 
            (%(numberOfRooms)s, %(priceRange)s, %(city)s, %(state)s, %(description)s);
        """
        return connectToMySQL(mydb).query_db(query, data)


    @classmethod
    def updateHome(cls, data):
        # number_of_rooms = data.get('numberOfRooms')
        # price_range = data.get('priceRange')
        # city = data.get('city')
        # description = data.get('description')
        # state = data.get('state')
        # id = data.get('id')
        query = """UPDATE homes
        SET 
            numberOfRooms = %(numberOfRooms)s,
            priceRange = %(priceRange)s,
            city = %(city)s,
            state = %(state)s,
            description = %(description)s
            
        WHERE 
            id = %(id)s
        """
        results = connectToMySQL(mydb).query_db(query, data)
        print(results)
        return results


