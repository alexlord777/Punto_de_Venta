//const workoutServices= require

const product= require("./productController.js");
const ventas = require("./VentasControllers.js");
const users  = require("./usersControllers.js");

module.exports={
    product:product,
    ventas:ventas,
    users:users
}