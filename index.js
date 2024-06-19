import express from "express";
import cors from "cors";
import ConnectDB from "./Config/connectDB";

const app=express();
app.use(cors());

const port=3000;
const Database_URL="mongodb+srv://guptaaashi1605:aashi1+0=2@clusterdatasetcollectio.h6hnwqr.mongodb.net/?retryWrites=true&w=majority";
ConnectDB(Database_URL);
app.use(express.json());

//Load Routes
app.use();
 
//create server
app.listen(port,()=>console.log("Connected"));
