


let employee=[{id:101,name:"pavan",salary:55000},
              {id:102,name:"sai",salary:65000},
              {id:103,name:"vamsi",salary:75000},
              {id:104,name:"seenu",salary:85000} ]


function table_Data(){
 
    let rows=""
    for(let i=0; i <= employee.length - 1; i++){
        rows = rows + ` <tr>
        <td>${employee[i].id}</td>
        <td>${employee[i].name}</td>
        <td>${employee[i].salary}</td>
    </tr>` 
    }
    document.getElementById('employee_Data').innerHTML=rows
}