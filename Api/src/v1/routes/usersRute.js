const express= require("express");
const router= express.Router();

const workoutCotrollers= require("../../controllers/workoutControllers")

router
     .get("/",workoutCotrollers.users.all)
     .get("/:productID",)
     .post("/",)
     .patch("/:productID")
     .delete("/:productID")

module.exports=router;