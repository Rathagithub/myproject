const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/Routes');
const app = express();
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use(bodyParser.json());
app.use('/api', routesHandler);

app.listen(4001, () => {
 console.log("Server is running on port 4001.");
});