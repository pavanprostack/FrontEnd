

class Employee{
    constructor(){
        console.log("Subbu");

    }
}
let e=new Employee();            //with the help of object ony it will print console.
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

