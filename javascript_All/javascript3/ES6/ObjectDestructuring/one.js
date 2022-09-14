
 arr = {id:102, name:"pavan", salary:45000}

 console.log(arr.name);                  // this is normal

 let {id,salary,name}=arr                 // this is Object Destructuring.

console.log( id );
console.log(salary);
console.log(name);



let state = {
    product:{name:"vivo Z1 pro",
             price:100000,
             color:"Black"}
}
console.log(state.product.name);

let{product} = state

console.log(product.price);