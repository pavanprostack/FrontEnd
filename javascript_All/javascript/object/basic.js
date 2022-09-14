
//  in object we cant use for(of) statement, we use only for(in) statement.
//  object is not iterable object.
//  object does not allow duplicates.
//  object allows heterogenous values.

/*


// 1.

let employee={

    id:107,
    name:"Pavan",
    salary:75000

}

for(emp in employee){

    console.log(employee[emp]);
     
}     


// 2.

let members={

    id:102,
    name:"sai",
    salary:85000

}
console.log(members);

for(staff in members){

    console.log(members[staff]);
}  



// 3.

let employees={

    id:101,
    name:"vamsi",
    sal:58000
}

console.log(employees);
console.log(employees.sal);
employees.loc="andhra"           // it is adding.
employees.age=25                 // it is adding.
employees.name="vamsi krishna"   // it is updated.

console.log(employees);

delete employees.id              // it is deleted.

console.log(employees);





// 4.

var emp={
    id:101,
    name:"subbu",
    sal:94000
}

console.log(emp);
console.log(emp.id);
console.log(emp.name);
console.log(emp.sal);







// 5. Array Objet using for(of) Loop.

var employee=[
    {id:101, name:"pavan", sal:45000},
    {id:102, name:"sai", sal:55000},
    {id:103, name:"vamsi", sal:65000}
]

for(emp of employee){
    
    console.log(emp.id);
   
}    */




// 6. Array Objet using for Loop.


var employee=[
    {id:101, name:"pavan", sal:45000},
    {id:102, name:"sai", sal:55000},
    {id:103, name:"vamsi", sal:65000}
]

for(i=0; i<=employee.length-1; i++){
    console.log(employee[i].id);
}






