let form = document.getElementById('addform')
let listItem = document.getElementById('list')


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newItem = document.getElementById('item').value;
    //console.log(newItem)
    let li = document.createElement("li")
    li.className = "list-group-item";
    li.innerHTML = newItem

    let button = document.createElement("button");
    button.className = "btn btn-danger float-right"
    button.innerHTML = "x"

    li.appendChild(button)
    listItem.appendChild(li)
})


listItem.addEventListener("click", (e) => {
    // console.log(e.target)
    if (e.target.classList.contains("btn")) {
        let li = e.target.parentElement;
        listItem.removeChild(li);
    }
})