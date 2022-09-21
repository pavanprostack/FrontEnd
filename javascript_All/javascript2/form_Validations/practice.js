function formValidation(){
   let name=document.getElementById('king').value
   if(name==""){
    document.getElementById('eval').innerHTML="Please Enter Your Name"
   }


   let ename = document.getElementById('pavan').value
   if(ename==""){
    document.getElementById('kalyan').innerHTML="Please Enter Your Name"
   }
   return false
}