let employees = [{"id":1,"name":"Ugo","email":"uemeline0@ftc.gov","gender":"Male"},
{"id":2,"name":"Jehu","email":"jdellabbate1@sakura.ne.jp","gender":"Male"},
{"id":3,"name":"Caren","email":"cbradbeer2@tuttocitta.it","gender":"Female"}]


let create_Employee = (emp,callback)=>{
    setTimeout(()=>{
        employees.push(emp)
        callback()
    }, 3000)
}

let get_Employees = ()=>{
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
        document.getElementById('table_Data').innerHTML=rows
    }, 1000);
}

create_Employee({id:4, name:"pavan", email:"pavan@gmail.com", gender:"Male"}, get_Employees)
