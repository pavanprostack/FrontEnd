let employees = [{"id":1,"name":"Alicea","sal":"$48179.92"},
{"id":2,"name":"Evered","sal":"$58402.54"},
{"id":3,"name":"Rice","sal":"$23091.14"},
{"id":4,"name":"Jewelle","sal":"$47376.42"},
{"id":5,"name":"Ramsey","sal":"$53099.98"},
{"id":6,"name":"Siouxie","sal":"$65845.78"},
{"id":7,"name":"Donni","sal":"$38921.46"},
{"id":8,"name":"Julie","sal":"$25374.59"},
{"id":9,"name":"Rory","sal":"$68149.42"},
{"id":10,"name":"Averell","sal":"$55843.73"},
{"id":11,"name":"Nettle","sal":"$35238.74"},
{"id":12,"name":"Mandi","sal":"$58484.72"},
{"id":13,"name":"Malissa","sal":"$61041.17"},
{"id":14,"name":"Karla","sal":"$51611.73"},
{"id":15,"name":"Concordia","sal":"$48243.77"},
{"id":16,"name":"Drud","sal":"$55057.07"},
{"id":17,"name":"Nananne","sal":"$10293.84"},
{"id":18,"name":"Arlen","sal":"$46628.66"},
{"id":19,"name":"Nikoletta","sal":"$54723.15"},
{"id":20,"name":"Katie","sal":"$25440.38"},
{"id":21,"name":"Tyrone","sal":"$30543.57"},
{"id":22,"name":"Boone","sal":"$65562.20"},
{"id":23,"name":"Alexi","sal":"$25948.30"},
{"id":24,"name":"Anneliese","sal":"$15287.38"},
{"id":25,"name":"Emmie","sal":"$12718.38"},
{"id":26,"name":"Allyn","sal":"$22718.68"},
{"id":27,"name":"Sigismundo","sal":"$42285.45"},
{"id":28,"name":"Nonnah","sal":"$55112.33"},
{"id":29,"name":"Ezri","sal":"$42556.70"},
{"id":30,"name":"Collie","sal":"$68121.96"},
{"id":31,"name":"Rafa","sal":"$51558.01"},
{"id":32,"name":"Yasmin","sal":"$27639.31"},
{"id":33,"name":"Lulita","sal":"$23858.44"},
{"id":34,"name":"Gibb","sal":"$18334.18"},
{"id":35,"name":"Nettle","sal":"$31226.31"},
{"id":36,"name":"Dennie","sal":"$25043.94"},
{"id":37,"name":"Cinderella","sal":"$20435.03"},
{"id":38,"name":"Mahalia","sal":"$56945.04"},
{"id":39,"name":"Bret","sal":"$13839.49"},
{"id":40,"name":"Noellyn","sal":"$67933.51"},
{"id":41,"name":"Dori","sal":"$69115.88"},
{"id":42,"name":"Mersey","sal":"$18406.95"},
{"id":43,"name":"Dominick","sal":"$19369.83"},
{"id":44,"name":"Fallon","sal":"$14896.11"},
{"id":45,"name":"Ninnette","sal":"$49856.27"},
{"id":46,"name":"Giraud","sal":"$10553.77"},
{"id":47,"name":"Marvin","sal":"$41845.35"},
{"id":48,"name":"Phaidra","sal":"$57955.15"},
{"id":49,"name":"Geneva","sal":"$52121.48"},
{"id":50,"name":"Hattie","sal":"$40910.27"}]




function employees_Data(){
    let rows = ""
    for( emp of employees){
        rows = rows + `<tr>
                           <td>${emp.id}</td>
                           <td>${emp.name.toUpperCase()}</td>  
                           <td>${emp.sal.slice(1)}</td>
                       </tr>`
    }
    document.getElementById('tableData').innerHTML=rows
}