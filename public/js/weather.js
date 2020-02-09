//output field
const data=document.getElementById("result");
var flag=0;
var selectedType=document.getElementById("selectedType");

//Form input
var { myForm: form }=document;


//Form onSubmit event

form.addEventListener("submit",function(e)
{
  data.innerHTML="Loading...";
  e.preventDefault();
  var params="";
  if(form["type"].value == 1) params=`q=${form["val1"].value}`;
  else if(form["type"].value == 2) params=`lat=${form["val1"].value}&lon=${form["val2"].value}`;
  else params=`id=${form["val1"].value}`;
  data.innerHTML=`Parameters: ${params}`;
});

//Trigger when an event occurs
form["type"].addEventListener(("change"),()=>{ 
  form["btn"].setAttribute("disabled","true");
  if(form["type"].value == 1){
selectedType.innerHTML=`<label class="text-bold">Enter the City/ Country Name:</label>          <input name="val1" placeholder="Enter your City / Country" class="form-control" type="text"/>`;
form["val1"].addEventListener(("input"),()=>{
  if(form["val1"].value.length>1) flag=1;
  else flag=0;
  alert(this);
  if(flag)  form["btn"].removeAttribute("disabled");

else form["btn"].setAttribute("disabled","true");

});
}
else if(form["type"].value == 2){ 
	form["btn"].setAttribute("disabled","true");
	selectedType.innerHTML=`<label class="text-bold">Enter the Coordinates:</label>       <div class="input-group"><input name="val1" step="0.01" placeholder="Latitude" class="form-control" type="number"/><input name="val2" step="0.01" placeholder="Longitude" class="form-control" type="number"/></div>`;
form["val1"].addEventListener(("input"),()=>{
  if(form["val1"].value && form["val2"].value) flag=1;
  else flag=0;
  if(flag)  form["btn"].removeAttribute("disabled");
  else form["btn"].setAttribute("disabled","true");
});

form["val2"].addEventListener(("input"),()=>{                if(form["val1"].value && form["val2"].value) flag=1; 
  else flag=0;                                               if(flag)  form["btn"].removeAttribute("disabled");         else form["btn"].setAttribute("disabled","true");
});
}
else{
	form["btn"].setAttribute("disabled","true");
	selectedType.innerHTML=`<label class="text-bold">Enter the City/ Country Id:</label>          <input name="val1" placeholder="Enter your City / Country Id" class="form-control" type="number"/>`;
form["val1"].addEventListener(("input"),()=>{
  if(form["val1"].value) flag=1;
  else flag=0;                                           
  if(flag)  form["btn"].removeAttribute("disabled");

else form["btn"].setAttribute("disabled","true");

});

}

});


//Setting default trigger for text input when form.type does'nt occur
form["val1"].addEventListener(("input"),()=>{
  if(form["val1"].value.length>1) flag=1;
  else flag=0;                                           
  if(flag)  form["btn"].removeAttribute("disabled");       
  else form["btn"].setAttribute("disabled","true");

});


