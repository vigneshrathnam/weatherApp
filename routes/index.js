const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
  res.render("index");
});

router.get("/weather",(req,res)=>{
	res.render("weather");
});

router.get("/forecast",(req,res)=>{                      res.render("forecast");
});

router.get("/uvindex",(req,res)=>{                      res.render("uvindex");
});

router.get("/citylist",(req,res)=>{                      res.render("citylist");
});

module.exports=router;
