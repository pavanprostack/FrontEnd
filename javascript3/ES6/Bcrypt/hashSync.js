
const bcrypt = require('bcryptjs')     // using bcryptjs we can change our personal data into the hashed foramat.

let user = {id:102, name:"pavan", password:"12345", creditCardNo:"1111222233334444"};

 let salt = bcrypt.genSaltSync(10);

 let new_password = bcrypt.hashSync(user.password, salt)
 let new_creditCardNo = bcrypt.hashSync(user.creditCardNo, salt)

 console.log(new_password);
console.log(new_creditCardNo);


let new_User = {...user, password:new_password, creditCardNo:new_creditCardNo}

console.log(user);
console.log(new_User);