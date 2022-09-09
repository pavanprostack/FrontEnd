let employees = [{"id":1,"name":"Ugo","email":"uemeline0@ftc.gov","gender":"Male"},
{"id":2,"name":"Jehu","email":"jdellabbate1@sakura.ne.jp","gender":"Male"},
{"id":3,"name":"Caren","email":"cbradbeer2@tuttocitta.it","gender":"Female"}]


let create_Data = (emp)=>{
    setTimeout(() => {
        employees.push(emp);
    }, 3000);
}

let get_Data = ()=>{
    setTimeout(() => {
        let rows="";
        employees.forEach((employee)=>{
            rows+=`<tr>
                        <td>${employee.id}</td>
                        <td>${employee.name}</td>
                        <td>${employee.email}</td>
                        <td>${employee.gender}</td>
                  </tr>`
        })
        document.getElementById("table_Data").innerHTML=rows
    }, 1000);
    
}
create_Data({id:4, name:"pavan", email:"pavan@gmail.com", gender:"male"})
get_Data();
