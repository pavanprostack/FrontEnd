

class Employee{
    eid;
    ename;
    setEid(id){
         this.eid=id;
    }
    getEid(){
        return this.eid;
    }
    setEname(name){
        this.ename= name;
    }
    getEname(){
        return this.ename;
    }
}

let e1=new Employee();
console.log(e1);
e1.setEid(101);
e1.setEname("pavankalyan");
console.log(e1);
console.log(e1.getEid());
console.log(e1.getEname());

/*
let e2=new Employee();
e2.setEid(102);
e2.setEname("Saikumar");
console.log(e2);
console.log(e2.getEid());
console.log(e2.getEname());


let e3=new Employee();
e3.setEid(103);
e3.setEname("Vamsi");
console.log(e3);
console.log(e3.getEid());
console.log(e3.getEname());
*/