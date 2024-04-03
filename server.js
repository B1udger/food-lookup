const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));

const DATA_FILE = path.join(__dirname, 'data.json');

app.set('port', process.env.PORT || 3002);

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use((_, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

app.get('/foods/:searchInput', (req, res) => {
  const searchedInput = req.params.searchInput;

  fs.readFile(DATA_FILE, (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Error reading data file' });
      return;
    }
    res.setHeader('Cache-Control', 'no-cache');
    const filteredData = JSON.parse(data).filter((f) =>
      f.name.toLowerCase().includes(searchedInput.toLowerCase())
    );
    res.json(filteredData);
  });
});

app.post('/foods', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Error reading data file' });
      return;
    }
    const foods = JSON.parse(data);

    const newFood = {
      id: foods[foods.length - 1].id + 1,
      name: req.body.name,
      calories: req.body.calories,
      protein: req.body.protein,
      carbs: req.body.carbs,
      fat: req.body.fat,
      fiber: req.body.fiber,
    };

    foods.push(newFood);

    fs.writeFile(DATA_FILE, JSON.stringify(foods, null, 2), (writeErr) => {
      if (writeErr) {
        res.status(500).json({ message: 'Error writing data file' });
        return;
      }
      res.status(201).json(newFood);
    });
  });
});

app.listen(app.get('port'), () => {
  console.log(`Server running at: http://localhost:${app.get('port')}/`);
});
