
function validation(){
    let event=document.getElementById('ename').value 
    if(event==""){
        document.getElementById('eename').innerHTML="Please Enter User Name"
    }
     
    let events=document.getElementById('email').value
    if(events==""){
        document.getElementById('eemail').innerHTML="Please Enter Email"
    }
    return false
}