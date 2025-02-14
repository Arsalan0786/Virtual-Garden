from flask import Flask
from flask_cors import CORS
from routes import api_routes  # Import routes

app = Flask(__name__)
CORS(app)

# Register API routes
app.register_blueprint(api_routes, url_prefix='/api')

@app.route('/')
def home():
    return {"message": "Flask Backend for Virtual Herbal Garden"}

if __name__ == '__main__':
    app.run(debug=True, port=5000)
