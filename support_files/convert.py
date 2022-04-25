import pandas as pd
import json

data = pd.read_csv('./mbta_q4_rel_hour.csv')
print(data.head())
print(data.head().to_json(orient='records'))
with open('./mbta.json', 'w+') as f:
  f.write(data.to_json(orient='records'))