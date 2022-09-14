
// this is the format of promise concept.

// promise expects two functions i,e: Resolve, Reject.

// here Resolve means .Then() & Reject means .Catch()

let employees = [];
let createEmployee = (emp) => {
    return new Promise();
}
createEmployee({ id: 103, name: 'priyanka', salary: 65000 }).then(() => { }).catch(() => { })


// 2nd format.

let employee = [];
let createEmployees = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            employee.push(emp);
        }, 4000);
    });
}
createEmployees({ id: 103, name: 'priyanka', salary: 65000 }).then(() => { }).catch(() => { })