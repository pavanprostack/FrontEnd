
class Methods{
    name="pavan"
 
    get_employee(id){
        console.log(id);
       console.log("Parent");
    }
}

class Method extends Methods {
   get_employees(){
        console.log("Child");
    }
}
let a=new Method()
console.log(a.name);
a.get_employee(102)
a.get_employees()


class Student{
      name="kalyan"
    constructor(id,marks){
        this.sId=id;
        this.smarks=marks;

    }
}
class Students extends Student{
    
    constructor(RoleNo,grade,id,marks){
        super(id,marks);
        this.sRollNo=RoleNo;
        this.sGrade=grade;

    }
} 
let s1=new Students(109,"B",110,45)
console.log(s1);


class Std extends Student {
    constructor(status,id,marks,RoleNo,grade){
       super(id,marks,RoleNo,grade)
       this.sStatus=status;
       this.sRollNo=RoleNo;
       this.sGrade=grade;
    }
}
let s2= new Std("pass",105,55,143,"A")
console.log(s2);





