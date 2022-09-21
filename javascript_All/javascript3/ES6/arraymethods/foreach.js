
let arr = [23,45,56,67]

let v = arr.forEach((a)=>{       // Foreach does n't return value
    console.log(a);
})
console.log(v);



let array =  [{"id":1,"name":"Ugo","email":"uemeline0@ftc.gov","gender":"Male"},
{"id":2,"name":"Jehu","email":"jdellabbate1@sakura.ne.jp","gender":"Male"},
{"id":3,"name":"Caren","email":"cbradbeer2@tuttocitta.it","gender":"Female"},
{"id":4,"name":"Janene","email":"jbernardt3@phpbb.com","gender":"Female"},
{"id":5,"name":"Loni","email":"larnatt4@slashdot.org","gender":"Female"}]


array.forEach((arr)=>{
     
      if(arr.gender=="Male"){
        console.log(arr);
      }
})
console.log(arr.name);






let arrays =  [{"id":1,"name":"Ugo","email":"uemeline0@ftc.gov","gender":"Male"},
{"id":2,"name":"Jehu","email":"jdellabbate1@sakura.ne.jp","gender":"Male"},
{"id":3,"name":"Caren","email":"cbradbeer2@tuttocitta.it","gender":"Female"},
{"id":4,"name":"Janene","email":"jbernardt3@phpbb.com","gender":"Female"},
{"id":5,"name":"Loni","email":"larnatt4@slashdot.org","gender":"Female"}]


arrays.forEach((arr)=>{
  console.log(arr);
})

