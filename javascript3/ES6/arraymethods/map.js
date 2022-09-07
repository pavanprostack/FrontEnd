
let a= [1,2,3,4,5]

a.map(()=>{

    console.log(a);

})



let b=[2,4,6,8]

b.map((ele)=>{

    console.log(ele);

})


let c=[12,34,56,78,90]

let f = c.map((ele)=>{
   return ele+2;
})
console.log(f);


let students = [{"id":1,"name":"Ugo","email":"uemeline0@ftc.gov","gender":"Male"},
{"id":2,"name":"Jehu","email":"jdellabbate1@sakura.ne.jp","gender":"Male"},
{"id":3,"name":"Caren","email":"cbradbeer2@tuttocitta.it","gender":"Female"},
{"id":4,"name":"Janene","email":"jbernardt3@phpbb.com","gender":"Female"},
{"id":5,"name":"Loni","email":"larnatt4@slashdot.org","gender":"Female"}]


students.map((student)=>{                       // it returns only elements. not array.
      console.log(student.name);
})



let Employees = [{"id":1,"name":"Ugo","email":"uemeline0@ftc.gov","gender":"Male"},
{"id":2,"name":"Jehu","email":"jdellabbate1@sakura.ne.jp","gender":"Male"},
{"id":3,"name":"Caren","email":"cbradbeer2@tuttocitta.it","gender":"Female"},
{"id":4,"name":"Janene","email":"jbernardt3@phpbb.com","gender":"Female"},
{"id":5,"name":"Loni","email":"larnatt4@slashdot.org","gender":"Female"}]


let emp= Employees.map((Employee)=>{           //it returns in the form of Array.
    return Employee.email
})
console.log(Employees);
console.log(emp);