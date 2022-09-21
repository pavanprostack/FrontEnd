class Parent{
    constructor(message){
        console.log(message);
       // console.log("hello World");

    }
}
//let d=new Parent("hi")



class Child extends Parent {
    constructor(message){
        super(message)
        console.log("hello");
    }
}
let c1=new Child("Welcome");
