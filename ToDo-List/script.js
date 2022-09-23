let form=document.getElementById('addform');
let listItem=document.getElementById('list');

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let newItem=document.getElementById("item").value ;
   // console.log(newItem);

   let li = document.createElement("li")
   li.className="list-group-item";
   li.innerHTML=newItem;

   let button = document.createElement("button");
   button.className="btn btn-warning float-right";
   button.innerHTML="X"

   li.appendChild(button);
   listItem.appendChild(li)
})


listItem.addEventListener("click", (event)=>{
    //console.log(event.target);  
    if(event.target.classList.contains("btn")){
        let li = event.target.parentElement;
        listItem.removeChild(li)
    }
})


