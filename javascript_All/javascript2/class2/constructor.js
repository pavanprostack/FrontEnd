

class Employee{
    constructor(){
        console.log("Subbu");

    }
}
let e=new Employee();            //with the help of object only it will print console.
console.log(e);






class Student{
    sId;
    sName;
    sFee;
    constructor(id,name,fee){
        this.sId=id;
        this.sName=name;
        this.sFee=fee;
    }
    getDetails(){
        return "pavankalyan"
    }
}

let s=new Student(101,"pavan",30000);
console.log(s);
let s1=new Student(102,"sai",40000);
console.log(s1);
console.log( s.getDetails());




class Users{
    uId;
    uName;
    uSalary;
    constructor(id,name,salary){
        this.uId=id;
        this.uName=name;
        this.uSalary=salary;
    }
    getMethod(msg){
        return "Hello"+msg
    }
}
let object = new Users(107,"pavan",45000)
console.log(object);
console.log(object.getMethod("Buddies"));
