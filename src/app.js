const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')


dotenv.config();
const app = express();
const routerApi = require('./routes');
const router = require('./routes/user.router');
const routerProduct = require('./routes/product.router')


const port = process.env.PORT || 3000;
 app.use(cors());
 app.use(express.json());
 app.get('/', (req, res)=>{
    res.send('el back esta aqui');
 });

 routerApi(app);
 app.use('/api', router);
 app.use('/apip', routerProduct);

 app.listen(port, ()=>{
   console.log('se esta escuchando en el puerto: ', port);
 });
 