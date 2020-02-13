const express=require("express");
const router=express.Router();
const axios=require("axios");

router.get("/",(req,res)=>{
  res.render("index");
});

router.get("/weather",(req,res)=>{
	res.render("weather");
});

router.get("/forecast",(req,res)=>{                
	res.render("forecast");
});

router.get("/uvindex",(req,res)=>{                   
	res.render("uvindex");
});

router.get("/citylist",(req,res)=>{                   
	res.render("citylist");
});

router.get("/city",(req,res)=>{
	var { limit,page }=req.query;
	limit=parseInt(limit) || 100;
	page=parseInt(page) || 1;
	var results={};
	var startIndex=(page-1)*limit;
	var endIndex=page*limit;

	axios.get("/city.list.min.json", { proxy: { host: '127.0.0.1', port: 5000 } }) 
        .then((data)=>{
		  results.size=data.data.length;
		  result=data.data.splice(startIndex,endIndex);
		if(startIndex<result.length){
		  results.next={ page: page+1,
			limit
		  }

		}

		if(endIndex>0){
                  results.previous={ page: page-1,
                        limit
                  }                                        
                }
		results.data=result;
		
		res.json(results);



	  })
	.catch((e)=>{
		console.log(e);
		res.json(e);
	}
	);
	
});


module.exports=router;
