const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const port = 3000;

app.use(cors());
 
// main route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// route bagian penawaran kami di landing page
app.get('/home/offer', (req, res) => {
  fs.readFile('./menus.json', (error, data) => {
    if (error) res.send ('Gagal dalam memuat data');
    const menus = JSON.parse(data)
    res.status(200).send(menus);
  })  
});

// route side bar kategori menu di menu page (tampilan defaultnya nampilin menu random)
app.get('/menu/category', (req, res) => {
  fs.readFile('./menus.json', (error, data) => {
    if (error) res.send ('Gagal dalam memuat data');
    const menus = JSON.parse(data)
    res.status(200).send(menus);
  })  
});

// route side bar kategori menu makanan aceh di menu page
app.get('/menu/category/aceh', (req, res) => {
  fs.readFile('./menus.json', (error, data) => {
    if (error) res.send ('Gagal dalam memuat data');
    const menus = JSON.parse(data)
    res.status(200).send(menus);
  })  
});

// route side bar kategori menu makanan bali di menu page
app.get('/menu/category/bali', (req, res) => {
  fs.readFile('./menus.json', (error, data) => {
    if (error) res.send ('Gagal dalam memuat data');
    const menus = JSON.parse(data)
    res.status(200).send(menus);
  })  
});

// route side bar kategori menu makanan betawi di menu page
app.get('/menu/category/betawi', (req, res) => {
  fs.readFile('./menus.json', (error, data) => {
    if (error) res.send ('Gagal dalam memuat data');
    const menus = JSON.parse(data)
    res.status(200).send(menus);
  })  
});

// route side bar kategori menu makanan jawa di menu page
app.get('/menu/category/jawa', (req, res) => {
  fs.readFile('./menus.json', (error, data) => {
    if (error) res.send ('Gagal dalam memuat data');
    const menus = JSON.parse(data)
    res.status(200).send(menus);
  })  
});

// route side bar kategori menu makanan makassar di menu page
app.get('/menu/category/makassar', (req, res) => {
  fs.readFile('./menus.json', (error, data) => {
    if (error) res.send ('Gagal dalam memuat data');
    const menus = JSON.parse(data)
    res.status(200).send(menus);
  })  
});

// route side bar kategori menu makanan padang di menu page
app.get('/menu/category/padang', (req, res) => {
  fs.readFile('./menus.json', (error, data) => {
    if (error) res.send ('Gagal dalam memuat data');
    const menus = JSON.parse(data)
    res.status(200).send(menus);
  })  
});

// route side bar kategori menu makanan palembang di menu page
app.get('/menu/category/palembang', (req, res) => {
  fs.readFile('./menus.json', (error, data) => {
    if (error) res.send ('Gagal dalam memuat data');
    const menus = JSON.parse(data)
    res.status(200).send(menus);
  })  
});

// route side bar kategori menu makanan sunda di menu page
app.get('/menu/category/sunda', (req, res) => {
  fs.readFile('./menus.json', (error, data) => {
    if (error) res.send ('Gagal dalam memuat data');
    const menus = JSON.parse(data)
    res.status(200).send(menus);
  })  
});

// route side bar kategori menu minuman&lainnnya di page
app.get('/menu/category/others', (req, res) => {
  fs.readFile('./menus.json', (error, data) => {
    if (error) res.send ('Gagal dalam memuat data');
    const menus = JSON.parse(data)
    res.status(200).send(menus);
  })  
});

// route side bar artikel di menu page
app.get('/menu/article', (req, res) => {
  fs.readFile('./menus.json', (error, data) => {
    if (error) res.send ('Gagal dalam memuat data');
    const menus = JSON.parse(data)
    res.status(200).send(menus);
  })  
});

// route menu rekomendasi di recommendation page
app.get('/recommendation', (req, res) => {
  fs.readFile('./menus.json', (error, data) => {
    if (error) res.send ('Gagal dalam memuat data');
    const menus = JSON.parse(data)
    res.status(200).send(menus);
  })  
});

// route form konfirmasi pesanan setelah klik konfirmasi pesanan di detail order page
app.post('/detail-order/?orderId=123', (req, res) => {
  fs.readFile('./menus.json', (error, data) => {
    if (error) res.send ('Gagal dalam memuat data');
    const menus = JSON.parse(data)
    res.status(200).send(menus);
  })  
});

// wrong route 
app.all('*', (req, res) => {
    res.status(404).send('404 routes not found');
});
 
// server on
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});




// const PORT = process.env.PORT || 6000;
// const IP = '127.0.0.1';
//     // change 127etc to all zero to deploy in Railway
// server.listen(PORT, IP, () => {
//     console.log('server is working')
// });