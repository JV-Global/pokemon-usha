1.)import the project 
2.) run npx ts-node src/index.ts
🚀 Server is running on http://localhost:3000

3.)in postman test the post endpoint
http://localhost:3000/battle
[
  {
    "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "img": "",
    "type": ["Grass", "Poison"],
    "height": "0.71 m",
    "weight": "6.9 kg"
  },
  {
    "id": 3,
    "num": "003",
    "name": "Venusaur",
    "img": "",
    "type": ["Grass", "Poison"],
    "height": "2.01 m",
    "weight": "100.0 kg"
  }
]

result : {
    "result": "Venusaur wins by both height and weight. 🏆"
}


4.) to start UI-  npm run and npm start
