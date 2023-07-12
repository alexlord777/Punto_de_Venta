const express= require("express");
const router= express.Router();

const workoutCotrollers= require("../../controllers/workoutControllers")

router
     .get("/",workoutCotrollers.product.all)
     .get("/:productID",)
     .post("/",)
     .patch("/:productID")
     .delete("/:productID")

module.exports=router;