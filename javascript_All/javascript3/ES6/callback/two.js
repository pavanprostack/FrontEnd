

let employees = [{"id":55,"name":"Alexandre","email":"atoth1i@seattletimes.com","gender":"Male"},
{"id":56,"name":"Berri","email":"bmilsap1j@google.com.br","gender":"Non-binary"},
{"id":57,"name":"Olivette","email":"ohacket1k@xinhuanet.com","gender":"Genderqueer"},
{"id":58,"name":"Barny","email":"btumilty1l@mediafire.com","gender":"Male"},
{"id":59,"name":"Bethina","email":"bchastang1m@photobucket.com","gender":"Polygender"},
{"id":60,"name":"Ben","email":"bdaudray1n@pen.io","gender":"Male"},
{"id":61,"name":"Miles","email":"mtoombs1o@tiny.cc","gender":"Male"},
{"id":62,"name":"Trudey","email":"talastair1p@1und1.de","gender":"Female"},
{"id":63,"name":"Tad","email":"tcase1q@simplemachines.org","gender":"Non-binary"},
{"id":64,"name":"Nappie","email":"nmcgeachie1r@freewebs.com","gender":"Male"},
{"id":65,"name":"Imelda","email":"isolomonides1s@princeton.edu","gender":"Female"},
{"id":66,"name":"Gisella","email":"ghabbin1t@istockphoto.com","gender":"Female"},
{"id":67,"name":"Mil","email":"mcasserly1u@bing.com","gender":"Female"},
{"id":68,"name":"Amata","email":"amithan1v@de.vu","gender":"Female"},
{"id":69,"name":"Lynnett","email":"lburmingham1w@cafepress.com","gender":"Female"}]


let create_Employee = (emp, callback)=>{
    setTimeout(() => {
        employees.push(emp);
         callback();
        
    }, 4000);
}

let get_Employee = ()=>{
    setTimeout(() => {
        let rows="";
        employees.forEach((employee)=>{
             rows+=`<tr>
                        <td>${employee.id}</td>
                        <td>${employee.name.toUpperCase()}</td>
                        <td>${employee.email}</td>
                        <td>${employee.gender.substring(0,1)}</td>
                    </tr>`
        })
        document.getElementById('table_Data').innerHTML=rows
    }, 1000);

}

create_Employee({"id":71,"name":"vamsi","email":"vamsi@cafepress.com","gender":"Male"}, get_Employee)
