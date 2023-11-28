const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const port = 3000;

app.use(cors());
 
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/offer', (req, res) => {
  fs.readFile('./menus.json', (error, data) => {
    if (error) res.send ('Gagal dalam memuat data');
    const menus = JSON.parse(data)
    res.status(200).send(menus);
  })  
});

app.all('*', (req, res) => {
    res.status(404).send('404 routes not found');
});
 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});





// const PORT = process.env.PORT || 6000;
// const IP = '127.0.0.1';
//     // change 127etc to all zero to deploy in Railway
// server.listen(PORT, IP, () => {
//     console.log('server is working')
// });