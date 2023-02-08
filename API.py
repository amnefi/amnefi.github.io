import requests

url = "https://jsonplaceholder.typicode.com/comments"

response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print("Error al consumir la API")