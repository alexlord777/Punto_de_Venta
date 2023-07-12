const express= require("express");
const router= express.Router();

const {ventas}= require("../../controllers/workoutControllers")

router
     .get("/", ventas.all)
     .get("/:productID",)
     .post("/",)
     .patch("/:productID")
     .delete("/:productID")

module.exports=router;