from flask import Blueprint, jsonify

api_routes = Blueprint('api_routes', __name__)

plants = [
    {"id": 1, "name": "Aloe Vera", "uses": "Healing, Skincare"},
    {"id": 2, "name": "Tulsi", "uses": "Immunity, Cough Relief"},
    {"id": 3, "name": "Neem", "uses": "Antibacterial, Dental Care"}
]

@api_routes.route('/plants', methods=['GET'])
def get_plants():
    return jsonify(plants)
