import bodyParser from "body-parser";
import express from "express";
import cors from "cors"
import dbConfig from "./db/dbConfig.js";
import customerRoute from "./routes/customer.router.js"

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use("/",customerRoute);


app.listen(3000,()=>{
    console.log("server started on 3000");
})