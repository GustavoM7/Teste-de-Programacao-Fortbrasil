from flask import Flask, request, jsonify
from flask_cors import CORS

estabelecimentos = [
    {
        'id': 1,
        'nome': "Estabelecimento 1",
        'local': "X"
    },
    {
        'id': 2,
        'nome': "Estabelecimento 2",
        'local': "y"
    },
    {
        'id': 3,
        'nome': "Estabelecimento 3",
        'local': "z"
    },
]

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def home():
    return "Bem-vindo", 200


@app.route('/estabelecimentos', methods=['POST'])
def create():
    data = request.get_json()

    for estab in estabelecimentos:
        if estab['id'] == data['id']:
            return jsonify({'error': 'conflict'}), 409

    estabelecimentos.append(data)
    return jsonify(estabelecimentos), 201


@app.route('/estabelecimentos')
def readAll():
    return jsonify(estabelecimentos), 200

@app.route('/estabelecimentos/<int:id>', methods=['GET'])
def read(id):
    for estab in estabelecimentos:
        if estab['id'] == id:
            return jsonify(estab), 200

    return jsonify({'error':'not found'}), 404

@app.route('/estabelecimentos/<int:id>', methods=['PUT'])
def update(id):
    for estab in estabelecimentos:
        if estab['id'] == id:
            estab['nome'] = request.get_json().get('nome')
            estab['local'] = request.get_json().get('local')
            return jsonify(estab), 201

    return jsonify({'error':'not found'}), 404

@app.route('/estabelecimentos/<int:id>', methods=['DELETE'])
def delete(id):
    index = 0
    for estab in estabelecimentos:
        if estab['id'] == id:
            del estabelecimentos[index]
            return jsonify({'message' : 'deleted'}), 200
        index = index + 1

    return jsonify({'error':'not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)