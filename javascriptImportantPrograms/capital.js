


// increment value
let a = 18           
a++
console.log(a)


// find length of the string.
let str = "pavankalyan"
console.log(str.length)



// 1. find the length of the string.
var length = (name) => {
    var length = 0;
    while (name[length] !== undefined)
        length++;
    return length;

}
console.log(length("kalyan"))



// 2. change first letter in string to Capital Letter.
var capital = (str) => {
   return str.charAt(0).toUpperCase()+str.slice(1)
}
console.log(capital("pavankalyan"))




var pavan = (name) => {
    var length = 0;
    while(name[length]!==undefined)
    length++;
    return length;
}
console.log(pavan("friends"))



var letter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1)
}
console.log(letter("prostack"))

