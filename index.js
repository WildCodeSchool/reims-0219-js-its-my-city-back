/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const app = express();
const port = 3001;

const user = require('./routes/user/route');
const poi = require('./routes/pointofinterest/route');

app.use('/user', user);
app.use('/poi', poi);


app.listen(port, (err) => {
  if (err) {
    throw new Error(`Something bad happened, server is not listening ${err}`);
  }else{
  console.log(`Server is listening on ${port}...`)};
});
