import numpy as np
import pandas as pd
import os
from flask import Flask, request, jsonify, render_template,url_for
import pickle
# load quotes in memory
BASE_DIR = os.path.dirname(os.path.abspath(__file__))


app = Flask(__name__)
model = pickle.load(open('/home/swaralipathak23/Diabetes_pred/model.pkl', 'rb'))

dataset = pd.read_csv(os.path.join(BASE_DIR, 'diabetes.csv'))

dataset_X = dataset.iloc[:,[1, 2, 5, 7]].values

from sklearn.preprocessing import MinMaxScaler
sc = MinMaxScaler(feature_range = (0,1))
dataset_scaled = sc.fit_transform(dataset_X)


@app.route('/')
def home():
    return render_template('diabet.html')

@app.route('/predict',methods=['POST'])
def predict():
    '''
    For rendering results on HTML GUI
    '''
    float_features = [float(x) for x in request.form.values()]
    final_features = [np.array(float_features)]
    prediction = model.predict( sc.transform(final_features) )

    if prediction == 1:
        pred = "You might have chances of Diabetes, please consult a Doctor."
    elif prediction == 0:
        pred = "You don't have risk of Diabetes!!!!!"
    output = pred

    return render_template('diabet.html', prediction_text='{}'.format(output))

