const express = require('express');
const app = express();
const cors = require('cors');

const mapRouter = require('./routes/mapRoute');
const userRouter = require('./routes/userRoute');
const characterRouter = require('./routes/characterRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', mapRouter);
app.use('/', userRouter);
app.use('/', characterRouter);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
