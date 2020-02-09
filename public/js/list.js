const data=document.getElementById("data");
data.innerHTML="Loading...";
axios.get("/city")
  .then((res)=>{
	 if(res.status>=200 && res.status<400) {
	  var html="";
	  data.innerHTML="Please Wait for a while";
	  res.data.data.map((data,index)=>{
	  html+=`<tr><td>${index+1}</td><td>${data.name} ( ${data.country} )</td><td>${data.id}</td><td>${data.coord.lat}</td><td>${data.coord.lon}</td></tr>`;  
});
	 data.innerHTML=html;
}
 	else{ 
	data.innerHTML="<div class=\"text-danger\">Failed to Load<br/>Status:"+res.status+"</div>";

}

	
});
