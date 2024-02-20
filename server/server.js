const express = require('express');
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "Hello from server!" })
  console.log(`Recv at /`)
})

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

  console.log(`Recv at /new-entry`)
  res.json({ message: "Post created successfully" })

 });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})