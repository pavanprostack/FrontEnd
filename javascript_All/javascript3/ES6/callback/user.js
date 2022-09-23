let users = [{ "id": 70, "name": "Almeda", "email": "aforri1x@smh.com.au", "gender": "Female" },
{ "id": 71, "name": "Urbano", "email": "utawse1y@delicious.com", "gender": "Male" },
{ "id": 72, "name": "Gavrielle", "email": "gchrisp1z@census.gov", "gender": "Female" },
{ "id": 73, "name": "Griswold", "email": "gcaen20@virginia.edu", "gender": "Male" },
{ "id": 74, "name": "Omar", "email": "ocockett21@mit.edu", "gender": "Male" },
{ "id": 75, "name": "Rutter", "email": "rwheatcroft22@cpanel.net", "gender": "Male" },
{ "id": 76, "name": "Holden", "email": "hribbon23@ucoz.com", "gender": "Agender" },
{ "id": 77, "name": "Debor", "email": "dhugues24@liveinternet.ru", "gender": "Bigender" },
{ "id": 78, "name": "Nady", "email": "ndiviny25@irs.gov", "gender": "Female" },
{ "id": 79, "name": "Alphonse", "email": "amallen26@arstechnica.com", "gender": "Male" },
{ "id": 80, "name": "Aubine", "email": "ajaggar27@washington.edu", "gender": "Bigender" },
{ "id": 81, "name": "Sarene", "email": "scarbett28@reference.com", "gender": "Female" }]


let createUser = (usr, callback) => {
    setTimeout(() => {
        users.push(usr);
        callback();
    }, 4000);
}

let getUser = () => {
    setTimeout(() => {
        let rows = "";
       users.forEach((user)=>{

            rows = rows + `<tr>
                                 
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.email}</td>
                            <td>${user.gender}</td>
            
                          </tr>`

        })
        document.getElementById('table_Data').innerHTML= rows
    }, 1000);

}
createUser({"id": 81, "name": "Sarene", "email": "scarbett28@reference.com", "gender": "Female"}, getUser)

