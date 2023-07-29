import mongoose from "mongoose";

mongoose.connect("mongodb+srv://adityajhala23:Aditya123@cluster0.qunzcul.mongodb.net/Census?retryWrites=true&w=majority")
.then(result=>{
    console.log("database connected....");
}).catch(err=>{
    console.error('Error connecting to database', err);
})

export default mongoose.connection;