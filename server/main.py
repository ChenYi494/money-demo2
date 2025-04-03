from flask import Flask, jsonify
from waitress import serve
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # 允許所有來源的請求


@app.route("/api/spec")
def spec():
    res = '測試：取得正確資訊'
    return res


if __name__ == "__main__":
    print('server run on port:9003')
    serve(app, host='0.0.0.0', port=9003)

