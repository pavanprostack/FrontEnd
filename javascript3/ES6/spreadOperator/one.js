
// Arrays.

let emp = [78,34,56,77]                //Spread Operator is applicable to both Arrays And objects.
let details = [99,34,56,78]            // Arrays does allows duplicates.
                                       // Objects does n't allow duplicates.

let Employees_Details=[...emp,...details,89,86,65]   // we can add extra values also.

console.log(Employees_Details);


// Objects.

let a={id:101, name:"pavan", salary:85000}               // Objects does n't allow duplicates.

let b= {age:25, gender:"Male", salary:79000}

let c= {...a, ...b}

console.log(c);



