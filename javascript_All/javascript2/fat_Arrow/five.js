/*

function names(){                       // Here upper function is over ride by down function when using normal function.
    console.log("Pavankalyan");          // On that situation we prefer fat arrow function.
}
names();

                                      // This is Normal Function.
function names(){
    console.log("saikumar");
}

names();        */




let add = () => {
    console.log("pavankalyan");           
}
add();
                                          // This is Fat Arrow Function.

let adding = () => {
    console.log("saikumar");
}
adding();


