function factorial() {
 var inputValue = 0;
 var factValue = 1;
 inputValue = document.getElementById("num").value;
 for(var i=1;i<=inputValue;i++){
     factValue = factValue*i;
 }
 document.getElementById("ansValue").value = factValue;
}