const express = require('express');
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "Hello from server!" })
  console.log(`Recv at endpoint /`)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})