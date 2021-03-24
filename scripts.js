function validate(){
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;

  var disp=document.getElementById("tbl");
        disp.style.display="block";
  var text;
  if(name.length < 3){
    alert("Please Enter valid Name");
    return false;
  }
  
  if(isNaN(phone) || phone.length != 10){
    alert("Please Enter valid Phone Number");
    return false;
  }

  if(email.lastIndexOf("@gmail.com")==-1){
    alert("Please Enter valid Email");
    return false;
  }

  return true;
   

}

function addRow()
{
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;

  var table = document.getElementsByTagName('table')[0];
        
  var newRow = table.insertRow(table.rows.length/2+1);
  
  var cel1 = newRow.insertCell(0);
  var cel2 = newRow.insertCell(1);
  var cel3 = newRow.insertCell(2);
  
  cel1.innerHTML = name;
  cel2.innerHTML = phone;
  cel3.innerHTML = email;
}