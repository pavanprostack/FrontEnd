

class Employee{

    ename;
    eid;
    constructor(name,id){
        this.ename=name;
        this.eid=id;
        console.log("Parent");
    }
}
let a= new Employee("pavankalyan",101);
console.log(a);




class Details extends Employee {               // here invoking parent class using extends Keyword, super() Keyword.
   
    constructor(name,id,sal,Address){
        super(name,id)
        this.esal=sal;
        this.eAddress=Address;
        console.log("Child");

    }
}
let b= new Details("sai",102,45000,"Mudigedu")
console.log(b);


/*

class Employees{
    eid;
    ename;
    constructor(id, name){
        this.eid = id;
        this.ename = name;
    }
}


class list extends Employees {
    constructor(id, name, address, pincode){
        super(id, name);
        this.address = address;
        this.pincode = pincode;
    }
}

let r = new list(101, "kalyan", "Mudigedu", "524409")
console.log(r);

*/