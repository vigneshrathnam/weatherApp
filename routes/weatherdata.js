const express=require("express");
const router=express.Router();
const fetch=require("node-fetch");
const dotenv=require("dotenv");


dotenv.config()
const appid=process.env.APP_ID;


router.get("/weather",(req,res)=>{
  var { q,id,lat,lon }=req.query;
  var query;
  if(lat && lon){                                                                                        query=`lat=${lat}&lon=${lon}`;
  }
  else if(id){
    query=`id=${id}`
  }
  else{
    query=`q=${q}`;
                                                                                                       }                                                            const url="https://api.openweathermap.org/data/2.5/weather?"+query+"&appid="+appid+"&metric=auto";
  fetch(url).then(async function(response) {
   var data=await response.json();
   res.json(data);
}, function(error) {
   console.log(error);
});
});
router.get("/forecast",(req,res)=>{           
	var { q,id,lat,lon }=req.query;       
	var query;                        
	if(lat && lon){                                          query=`lat=${lat}&lon=${lon}`;
  }
  else if(id){
    query=`id=${id}`                    
  }                                                        else{
    query=`q=${q}`;                                         }
  const url="https://api.openweathermap.org/data/2.5/forecast?"+query+"&appid="+appid+"&metric=auto";
  fetch(url).then(async function(response) {
   var data=await response.json();
   res.json(data);
}, function(error) {
   console.log(error);
});
});


router.get("/uvi",(req,res)=>{         
  var { lat,lon }=req.query;     
  var query;
  if(lat && lon){
    query=`lat=${lat}&lon=${lon}`
  }
  if(lat && lon){
  const url=`http://api.openweathermap.org/data/2.5/uvi/forecast?appid=${appid}&${query}`;                                  
  fetch(url).then(async function(response) {              var data=await response.json();      
    res.json(data);          
    }, function(error) {            
	 console.log(error);     
    });           
     }
    else{
     res.status(400).json({ cod:404, message: "Bad query" });

    }
    });

module.exports=router;
