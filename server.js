import cors from 'cors'
import dotenv from "dotenv";
dotenv.config();
import express from 'express'
const app=express();
const port = 5000 || process.env.PORT;

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get('/data',(req,res)=>{
res.json({
  msg: "Great power comes from great mind"
});
})

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});


app.listen(port,()=>{
    console.log(`app is listening on ${port}  ...`);
})