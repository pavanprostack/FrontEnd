
let students = [{"id":59,"name":"Bethina","email":"bchastang1m@photobucket.com","gender":"Polygender"},
{"id":60,"name":"Ben","email":"bdaudray1n@pen.io","gender":"Male"},
{"id":61,"name":"Miles","email":"mtoombs1o@tiny.cc","gender":"Male"},
{"id":62,"name":"Trudey","email":"talastair1p@1und1.de","gender":"Female"},
{"id":63,"name":"Tad","email":"tcase1q@simplemachines.org","gender":"Non-binary"},
{"id":64,"name":"Nappie","email":"nmcgeachie1r@freewebs.com","gender":"Male"},
{"id":65,"name":"Imelda","email":"isolomonides1s@princeton.edu","gender":"Female"},
{"id":66,"name":"Gisella","email":"ghabbin1t@istockphoto.com","gender":"Female"},
{"id":67,"name":"Mil","email":"mcasserly1u@bing.com","gender":"Female"}]


let add_Student = (std, callback)=>{
    setTimeout(() => {
        students.push(std);
        callback();  
    }, 3000);
    
}

let get_Student = ()=>{
    setTimeout(() => {
        let rows = "";
        students.forEach((student)=>{
            rows= rows+`<tr>
                            <td>${student.id}</td>
                            <td>${student.name}</td>
                            <td>${student.email}</td>
                            <td>${student.gender}</td>
                        </tr>`
                document.getElementById('table_Data').innerHTML=rows
        })
    }, 1000);
   
}

add_Student({id:69,name:"wow",email:"pkbs1o@tiny.cc",gender:"Male"}, get_Student)