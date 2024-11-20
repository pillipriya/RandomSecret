import express from "express";
import axios from "axios";

const app=express();
const port=4000;
const API_URL="https://secrets-api.appbrewery.com/random";

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static('public'));


app.get("/",async(req,res)=>{
try{
    const result=await axios.get(API_URL);
    res.render("index.ejs",{
        secret:result.data.secret,
        username:result.data.username
    });
}catch(error){
    res.render("index.ejs",res.response.error);
}
});



app.listen(port,()=>{
    console.log(`running in port ${port}`);
});
