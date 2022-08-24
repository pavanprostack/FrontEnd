

function add(msg){
   return "Hello"+ msg;              // normal function.
}
let r1=add("GM")
console.log(r1);



function guru(village){
    return "it's"+ village;          // normal function.
}
let r2=guru("my village");
console.log(r2);

               
                                        // Fat Arrow gives alternative way to write function.
let adding = (msg) => {                // fat Arrow function.
    return "Hello" + msg;
}
let r3=adding("Buddy");
console.log(r3);


