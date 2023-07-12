const express= require("express");
const router= express.Router();

const product= require("./productRoute.js");
const user = require("./usersRute");
const venta= require('./ventasRouter')

router.use('/product', product);
router.use('/user', user);
router.use('/venta', venta)
     
module.exports=router;