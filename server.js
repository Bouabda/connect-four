const express = require("express")
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, "./client/dist")));









let port = 3000;

app.listen(port, function() {
  console.log(`Server Connexion Established, listening on http://localhost:${port}`);
});