import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
 
const app = express();
 mongoose.connect('mongodb://syifarahma:syifadaffa@ac-ifigzcd-shard-00-00.wrwgu11.mongodb.net:27017,ac-ifigzcd-shard-00-01.wrwgu11.mongodb.net:27017,ac-ifigzcd-shard-00-02.wrwgu11.mongodb.net:27017/?ssl=true&replicaSet=atlas-ijx9k2-shard-0&authSource=admin&retryWrites=true&w=majority',{   
    useNewUr1Parser: true,
    
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));
 
app.use(cors());
app.use(express.json());
app.use(UserRoute);
 
app.listen(process.env.PORT || 5000, ()=> console.log('Server up and running...'));