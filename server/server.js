const express = require('express');
const cors = require("cors");
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

let db = new sqlite3.Database('../var/modelcatalog.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

db.run('CREATE TABLE IF NOT EXISTS modelruns (id INTEGER PRIMARY KEY, datasetname VARCHAR(20) NOT NULL, rundatetime DATETIME  NOT NULL, modelmetric VARCHAR(40) NOT NULL, modelpath VARCHAR(40) NOT NULL, trainingloss INTEGER NOT NULL, validationloss INTEGER NOT NULL, notes VARCHAR(256), isfavorite BOOLEAN NOT NULL)', (err) => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Table created successfully.');
});

app.get('/', (req, res) => {
  db.all('SELECT * FROM modelruns', (err, rows) => {
    if (err) {
      res.status(500).send('Error retrieving model runs');
      return;
    }
    res.json(rows);
  });
});

// Route for post submission
app.post('/new-entry', (req, res) => {
    // Access submitted data from req.body
  const {
    datasetName,
    datetime,
    modelMetric,
    modelPath,
    trainingLoss,
    validationLoss,
    notes,
    isFavorite
  } = req.body;
  var stmt = db.prepare("INSERT INTO modelruns(datasetname, rundatetime,modelmetric,modelpath,trainingloss,validationloss,notes,isfavorite) VALUES(?,?,?,?,?,?,?,?)");
  stmt.run(
    datasetName,
    datetime,
    modelMetric,
    modelPath,
    trainingLoss,
    validationLoss,
    notes,
    isFavorite
  );
  
  stmt.finalize();

  res.json({ message: "Post created successfully" })

 });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})