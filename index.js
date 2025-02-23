const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

// middelware 
app.use(cors());
app.use(express.json());


const studentsinfo = [
  {
    "name": "Mehedi Hasan",
    "roll": 101,
    "gender": "male",
    "age": 22
  },
  {
    "name": "Asif Ikbal",
    "roll": 102,
    "gender": "Male",
    "age": 24
  },
  {
    "name": "Sazib Hasan",
    "roll": 103,
    "gender": "Male",
    "age": 21
  },
  {
    "name": "Nadia Islam",
    "roll": 104,
    "gender": "Female",
    "age": 20
  },
  {
    "name": "Al-Amin",
    "roll": 105,
    "gender": "Male",
    "age": 25
  }
];



app.get('/', (req, res) => {
  res.send("Live Server is Running successfully")
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);

});

app.get('/studentsinfo', (req, res)=>{
  res.send(studentsinfo)
});










