const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

// app.use(fn: '/api/auth', require('./routes/auth.routes')); //middleware (роутеры)
const PORT = config.get('port') || 5000;

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true, //
      useUnifiedTopology: true, //
      useCreateIndex: true //
    })       //адресс БД и набор опций

    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`)); //подключаем сервер
  } catch (error) {
    console.log('Server Error: ', error.message);
    process.exit(1);
  }

}

start();



