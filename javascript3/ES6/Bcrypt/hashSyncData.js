
const personelData = require('bcryptjs');

let employee = {id:107, name:"sai", password:"789576", creditCardNo:"1111222233334444"}

let salt = personelData.genSaltSync(10);

let newpswd = personelData.hashSync(employee.password, salt);
let newCC = personelData.hashSync(employee.creditCardNo, salt)

console.log(newpswd);
console.log(newCC);

let new_employee = {...employee, password:newpswd, creditCardNo:newCC}

console.log(employee);
console.log(new_employee);

//let comparision = personelData.compareSync("132343", newpswd.password )
//console.log(comparision);