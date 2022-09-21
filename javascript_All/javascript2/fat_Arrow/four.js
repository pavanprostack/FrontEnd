

function add(a,b,c=2){              // Normal Function.
    return a+b+c;
}
let r1 = add(10,20,67);
console.log(r1);



function Adding(a,b,c=4){                  // Normal Function.
    return a+b+1;
}
let r2=Adding(20,30,40);
console.log(r2);



let arrow=(a,b,c) => {                   // Fat Arrow Function.
     return a+b+c;     
}
let d=arrow(12,22,33);
console.log(d);


let fat=(a,b,c) => a+b+c;                 // Fat Arrow short method.
console.log(fat(1,2,3));