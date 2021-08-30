const express=require('express');
const app=express();
const port=process.env.PORT||3000;
app.use(express.static(__dirname+'/dist/my1stng'));
app.listen(3000,function()
{
    console.log("app is started at port ");
})

app.get("/",function(req,res)
{
    res.sendFile(__dirname+'/dist/my1stng/index.html')
});