const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/PostRoutes');
const sequelize = require('./config/db');

const app = express();

app.use(cors());
app.use(bodyParser.json());
 
app.use('/api', postRoutes);
 
sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });
});
