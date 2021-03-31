//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
var dateFormat = require('dateformat');

//write code below of app.use(cookieParser()) in server.js

app.use(bodyParser.json());

app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const bekList = [];
const devList= [];
const tamList= [];

const bekList2 = [];
const devList2= [];
const tamList2= [];

const userList=[{username:"test1",password:"123"},{username:"test2",password:"1234"}]

app.get("/main", function(req, res){

    if(req.query.username=="test1"){

        res.render("list", {
            bekList: bekList,
            devList: devList,
            tamList: tamList,
            username:req.query.username
        });

    }else if(req.query.username=="test2"){

        res.render("list", {
            bekList: bekList2,
            devList: devList2,
            tamList: tamList2,
            username:req.query.username
        });

    }

   
});

app.get("/", function(req, res){

    res.render("login");
});



app.post("/kaydet", function(req, res){
    
    if(req.body.username=="test1"){
        if(req.body.gdurum=="Beklemede"){
            bekList.push(req.body);
            bekList.sort(function(a, b)
        {
           if (a.gbit > b.gbit) return 1;
           if (a.gbit < b.gbit) return -1;
        })
        
           }else if(req.body.gdurum=="Devam Ediyor"){
            devList.push(req.body);
            devList.sort(function(a, b)
            {
               if (a.gbit > b.gbit) return 1;
               if (a.gbit < b.gbit) return -1;
            })
           }else{
            tamList.push(req.body);
            tamList.sort(function(a, b)
            {
               if (a.gbit > b.gbit) return 1;
               if (a.gbit < b.gbit) return -1;
            })
           }
    }
    else if(req.body.username=="test2"){
        if(req.body.gdurum=="Beklemede"){
            bekList2.push(req.body);
            bekList2.sort(function(a, b)
        {
           if (a.gbit > b.gbit) return 1;
           if (a.gbit < b.gbit) return -1;
        })
        
           }else if(req.body.gdurum=="Devam Ediyor"){
            devList2.push(req.body);
            devList2.sort(function(a, b)
            {
               if (a.gbit > b.gbit) return 1;
               if (a.gbit < b.gbit) return -1;
            })
           }else{
            tamList2.push(req.body);
            tamList2.sort(function(a, b)
            {
               if (a.gbit > b.gbit) return 1;
               if (a.gbit < b.gbit) return -1;
            })
           }
    }

   

    res.send(req.body.username);

});


app.post("/loginsave", function(req, res){

    if(req.body.username=="test1"){

       res.send(req.body.username);

    }else if(req.body.username=="test2"){

        res.send(req.body.username);

    }
 
    
 
 });




app.listen(3001, function(){
    console.log("Server started on port[:3001] at: localhost");
   
});

