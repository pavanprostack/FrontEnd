let users= [{"id":80,"name":"Aubine","email":"ajaggar27@washington.edu","gender":"Bigender"},
{"id":81,"name":"Sarene","email":"scarbett28@reference.com","gender":"Female"},
{"id":82,"name":"Ozzie","email":"ojost29@princeton.edu","gender":"Agender"},
{"id":83,"name":"Solomon","email":"sswalwell2a@dion.ne.jp","gender":"Male"},
{"id":84,"name":"Alysa","email":"akamen2b@twitter.com","gender":"Female"},
{"id":85,"name":"Viola","email":"vstutter2c@psu.edu","gender":"Female"},
{"id":86,"name":"Natalee","email":"nseeds2d@example.com","gender":"Female"},
{"id":87,"name":"Van","email":"vdelahunt2e@theatlantic.com","gender":"Female"},
{"id":88,"name":"Val","email":"vhember2f@printfriendly.com","gender":"Male"},
{"id":89,"name":"Leigha","email":"lsedge2g@com.com","gender":"Female"}]

createUser = (usr)=>{
    return new Promise((reslove, failure)=>{
       setTimeout(() => {
        users.push(usr);
        let flag = true;
        flag ? reslove("Successfully Entered") : failure("Entered Fail");
       }, 4000);
    })
}

getUser =()=>{
    setTimeout(() => {
        let rows= "";
        users.forEach((user)=>{
            rows = rows + `<tr>
                                <td>${user.id}</td>
                                <td>${user.name}</td>
                                <td>${user.email}</td>
                                <td>${user.gender}</td>
                           </tr>`
        })
        document.getElementById('table_Data').innerHTML = rows;
    }, 1000);
}

let details = async ()=>{
   await createUser({"id":90,"name":"Rosette","email":"roverland2h@timesonline.co.uk","gender":"Female"}),
   getUser();
}
details();