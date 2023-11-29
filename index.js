// import package express
const express = require('express');
// use express dengan cara ditampung dalam sebuah variabel "app"
const app = express();
// untuk latihan mengambil data dari folder data
const fs = require('fs');
// import cors
const cors = require('cors');
// define port
const port = 3000;

// use cors agar bisa share resource antara FE dan BE
app.use(cors());

// use middleware agar aplikasi express bisa membaca data dari request body
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// contoh mmiddleware buatan sendiri
const loggerMiddleware = (req, res, next) => {
  const now = new Date();
  const formattedTime = now.toLocaleDateString();
  const method = req.method;
  const url = req.url;
  const status = req.statusCode;
  console.log(`[${formattedTime}] ${method} ${url} - ${status}`);
  next();
};

// use middleware + diterapkan di seluruh aplikasi
app.use(loggerMiddleware);
 
// main route
app.get('/', (req, res) => {
  res.send('Welcome to Website Seribu Rasa!');
});

// route untuk tampilan default page menu
app.get('/menu', (req, res) => {
  const { type } = req.params;
  // tampilkan data secara acak
  // sekarang coba-coba dulu karena belum ada database
  fs.readFile('./data/menus.json', (error, data) => {
    if (error) res.send ('Gagal dalam memuat data');
    const menus = JSON.parse(data);
    if (!menus) {
      res.status(404).send('Menu not found');
    }
    res.status(200).send(menus);
  });  
});

// route untuk side bar per kategori menu di menu page 
app.get('/menu/category/:type', (req, res) => {
  const { type } = req.params;
  // filter data berdasarkan menu_type yang masuk melalui query params
  // sekarang coba-coba dulu karena belum ada database
  fs.readFile('./data/menus.json', (error, data) => {
    if (error) res.send ('Gagal dalam memuat data');
    const menus = JSON.parse(data);
    const menu = menus.filter((menu) => menu.menu_type === type);
    if (!menu) {
      res.status(404).send('Menu not found');
    }
    res.status(200).send(menu);
  });  
});

// route untuk menu rekpmendasi di recommendation page (tampilan defaultnya menampilkan top 5 menu rekomendasi)
app.get('/recommendation', (req, res) => {
  const { recommendation } = req.params;
  // filter data berdasarkan is_recommended yang masuk melalui query params
  // sekarang coba-coba dulu karena belum ada database
  fs.readFile('./data/menus.json', (error, data) => {
    if (error) res.send ('Gagal dalam memuat data');
    const menus = JSON.parse(data);
    const menu = menus.filter((menu) => menu.is_recommended === true);
    if (!menu) {
      res.status(404).send('Menu not found');
    }
    res.status(200).send(menu);
  });  
});

// route untuk mengirim data form pemesanan 
app.post('/detail-order/form', (req, res) => {
  // destructuring object dari request body
  const { first_name, last_name, email, phone, address } = req.body
  // kalo pake SQL nanti eksekusinya pake query (misal: INSERT INTO <nama tabel> dst...)
  // skrg masukin ke json dulu aja
  fs.readFile('./data/form-order.json', (err, data) => {
    if (err) res.send('Gagal dalam membaca json');
    const forms = JSON.parse(data);
    const newForm = {
      id: forms.length + 1,
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
      address: address
    };
    // push new product ke products
    forms.push(newForm);

    fs.writeFile('./data/form-order.json', JSON.stringify(forms, "", 2),
    (err) => {
      if (err) res.status(400).send('Gagal dalam memasukkan data');
      res.status(201).send({data: newForm});
    });
  });
});


// route untuk request yang tidak dikenal
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