const data=document.getElementById("data");
data.innerHTML="Loading...";
axios.get("/city.list.min.json")
  .then((res)=>{
	 if(res.status>=200 && res.status<400) {
	  var html="<thead class='thead-light'><tr><th rowspan='2'>S.No.</th><th rowspan='2'>City / Country</th><th rowspan='2'>City / Country ID</th><th colspan=2>City / Country Coordinates</th><tr><th> lat</th><th> lon</th></tr></thead><tbody>";
	  html+=`<tr><td>1</td><td>${res.data[0].name} ( ${res.data[0].country} )</td><td>${res.data[0].id}</td><td>${res.data[0].coord.lat}</td><td>${res.data[0].coord.lon}</td></tr>`;
	  html+=`<tr><td>1</td><td>${res.data[1].name} ( ${res.data[1].country} )</td><td>${res.data[1].id}</td><td>${res.data[1].coord.lat}</td><td>${res.data[1].coord.lon}</td></tr>`;
	  data.innerHTML=html+"</tbody>";
}
 	else{ 
	data.innerHTML="<div class=\"text-danger\">Failed to Load<br/>Status:"+res.status+"</div>";

}

	
});
