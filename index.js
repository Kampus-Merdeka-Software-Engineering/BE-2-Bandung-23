const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const { error } = require('console');
const PORT = 3000;

app.use(cors());

// main route
app.get('/', (req, res) => {
    res.send('Welcomd to Our Web');
});

// route "Penawaran Kami"
app.get('/offer', (req, res) => {
    fs.readFile('/menu.json', (error, data) => {
        if (error) res.send ('Gagal memuat data');
        const menu = JSON.parse(data);
        res.status(200).send(menu);
    })
});

// wrong route 
app.all('*', (req, res) => {
    res.status(404).send('404 routes not found');
});

// server on
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});





// const PORT = process.env.PORT || 6000;
// const IP = '127.0.0.1';
//     // change 127etc to all zero to deploy in Railway
// server.listen(PORT, IP, () => {
//     console.log('server is working')
// });