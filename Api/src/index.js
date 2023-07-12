const expres= require("express");
const  v1WorkoutRouter= require("./v1/routes/workoutRoutes")

const app= expres();
const PORT= 3000;

app.use(expres.json())
app.use( '/' ,v1WorkoutRouter)

app.listen(PORT,()=>{
    console.log(`Server listen on port ${PORT}`);
});