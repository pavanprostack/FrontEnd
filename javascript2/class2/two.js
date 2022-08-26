class Student{
    sid;
    sname;
    setSid(id){
        this.sid=id;
    }
    getSid(){
        return this.sid;
    }
    setSname(name){
        this.sname=name;
    }
    getSname(){
        return this.sname;
    }
}

let s1=new Student();
s1.setSid(101);
s1.setSname("Seenu");
console.log(s1);
console.log(s1.getSid());
console.log(s1.getSname());

let s2=new Student();
s2.setSid(102);
s2.setSname("Anand");
console.log(s2);
console.log(s2.getSid());
console.log(s2.getSname());


let s3=new Student();
s3.setSid(103);
s3.setSname("Subbu");
console.log(s3);
console.log(s3.getSid());
console.log(s3.getSname());
