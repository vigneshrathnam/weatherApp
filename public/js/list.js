const data=document.getElementById("data");
var xhr;
if ("XMLHttpRequest" in window) {
    // code for modern browsers
    xhr = new XMLHttpRequest();
 } else {
    // code for old IE browsers
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}

xhr.onreadystatechange=()=>{
  if(xhr.status == 200 && xhr.readyState == 4){
	  var html="<tbody><tr><th rowspan='2'>S.No.</th><th rowspan='2'>City / Country</th><th rowspan='2'>City / Country ID</th><th colspan=2>City / Country Coordinates</th><tr><th> lat</th><th> lon</th></tr>";
	  var response=JSON.parse(xhr.responseText);
	  html+=`<tr><td>1</td><td>${response[0].name} ( ${response[0].country} )</td><td>${response[0].id}</td><td>${response[0].coord.lat}</td><td>${response[0].coord.lon}</td></tr>`;
	  data.innerHTML=html+"</tbody>";
  }
  else{
	data.innerHTML="<div class=\"text-danger\">Failed to Load<br/>Status:"+xhr.status+"</div>";
}
	
};

xhr.open("GET","/city.list.min.json",false);
xhr.send();
