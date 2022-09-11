

let students = (success, failure)=>{

    let movie_Ticket = 500;
    movie_Ticket > 600 ? success("congratulations you can go for movie!!") : failure("Hey, Buddy sorry you can't able to go for movie!!")
}
students((msg)=>{console.log(msg);}, (err)=>{console.log(err);})