function validateForm() {
  var x = document.forms["myform"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  
if(!this.myform.course1.checked && !this.myform.course2.checked && !this.myform.course3.checked && !this.myform.course4.checked)
 {
alert ("Please choose atleast one course." ); 
return false;
}
}