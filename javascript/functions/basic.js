
// Arrays can store group of values or elements as one entity.
// it allows Duplicates.
// it allows heterogeneous values.


function wish(){
    console.log("GoodMorning");
}

wish();
wish();
wish();
wish();
wish();    




function add(){
    console.log("Addition");
}

add();
add();
add();
add();    



function add(a,b){
 
    console.log(a+b);
}

add(10,20);
add('rahul','gandhi');
add("pavan",10)
add(1000)        



function add(a,b,c=1){
    console.log(a+b+c);
}

add(10,20);
add(10,20,30);      


function wish(msg) {
    return "Hello" + msg
}

let message1 = wish("Good Morning")
console.log(message1)  



function add(a, b) {           // Don't write anything after return.

    return a + b
}
let r1 = add(10, 20)
console.log(r1)

let pavan = add(100, 200)
console.log(pavan)         



function wish(mg){
    return "hello"+mg;


}

let village=wish("GoodEvening")
console.log(village);  

function wish(good){
    return "its" +good

}

let r2=wish("function practice")
console.log(r2);  

   



function wish(a,b){
    return a+b+"hi"
}

let g=wish(10,20)
console.log(g);     


function wish(a,b){
    return a+b;

}

var a=wish(100,200);
console.log(a);

var b=wish(99,88);
console.log(b); 




function cal_age(year){
    return 2022-year;
}
 let age=    cal_age(1997)
 console.log(age);

