

function on_mouseOver(){
    document.getElementById('mouseOver').style.backgroundColor="blue"
}

function on_mouseOut(){
    document.getElementById('mouseOut').style.backgroundColor="green"
}

function on_Click(){
    document.getElementById("click_Handler").style.backgroundColor="red"
}

function onDoubleClick(){
    document.getElementById("doubleClick_Handler").style.backgroundColor="pink"
}

function onFocus(){
    document.getElementById("focus").style.backgroundColor="aqua"
}

function onBlur_Handler(){
    let name= document.getElementById("blur").value 
    console.log(name);
    name = name.touppercase();
}