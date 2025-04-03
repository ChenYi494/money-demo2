from flask import Flask, jsonify
from waitress import serve

app = Flask(__name__)


@app.route("/api/spec")
def spec():
    res = '測試：取得正確資訊'
    return res


if __name__ == "__main__":
    print('server run on port:9003')
    serve(app, host='0.0.0.0', port=9003)

