const express = require('express');
const userRoute = require('./user.router');
const productRouter = require('./product.router');
const { Model } = require('sequelize');

function routerApi(app){
    const router = express.Router();
    app.use('/api/p', router);
    router.use('/user', userRoute);
    router.use('/product', productRouter);
}

module.exports = routerApi;