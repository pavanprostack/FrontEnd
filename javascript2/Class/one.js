

class student{
    student_id=107;
    stdnt(){
       return "Gm"                        // here method is expecting return.

    }
}

let r=new student();
let r1=new student();

console.log(r.student_id);
console.log(r.stdnt());

console.log(r1.student_id);
console.log(r1.stdnt());





class student_Details{
    student_Id=101;
    student_name="pavan";
    student_Marks(a,b){
        return a+b+"marks";
        
    }
    
   
}
b=new student_Details();
console.log(b.student_Marks(45,50));
console.log(b.student_Id);
console.log(b.student_name);         



class job_Details{
    job_Id=102;
    emp_Name="pavan"
    emp_Salary=80000;
    employee(a){
        return  100+a;

    }

}
let r3=new job_Details();
console.log(r3.emp_Salary);
console.log(r3.employee(200));
console.log(r3.emp_Name);
console.log(r3.job_Id);