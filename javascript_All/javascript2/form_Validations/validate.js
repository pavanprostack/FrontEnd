
function form_validation(){
    let name = document.getElementById('validation').value;
    if(name == ""){
        document.getElementById('ename').innerHTML="Please Enter UserName" 
    }

    let names=document.getElementById('evalidation').value;
    if(names == ""){
        document.getElementById('eename').innerHTML="Please Enter Email Id"

    }
    return false
}