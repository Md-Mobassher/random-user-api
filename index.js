const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const usersRoutes = require('./routes/v1/users.route');
const errorHandler = require('./middleware/errorHandler');
const {dbConnect} = require("./utils/dbConnect");


app.use(cors());
app.use(express.json());

dbConnect()
  
app.use("/api/v1/user/all", usersRoutes);

app.get('/', (req, res) => {
    res.send('Server is running')
})

app.all("*", (req, res) => {
    res.send("NO route found.");
  });
  
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })
  
  
process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
      process.exit(1);
    });
  });