
let Employees= [{"id":1,"name":"Ugo","email":"uemeline0@ftc.gov","gender":"Male"},
{"id":2,"name":"Jehu","email":"jdellabbate1@sakura.ne.jp","gender":"Male"},
{"id":3,"name":"Caren","email":"cbradbeer2@tuttocitta.it","gender":"Female"},
{"id":4,"name":"Janene","email":"jbernardt3@phpbb.com","gender":"Female"},
{"id":5,"name":"Loni","email":"larnatt4@slashdot.org","gender":"Female"}]



let Emp=Employees.filter((Employee)=>{

    if(Employee.gender=="Male"){
        return Employee
    }

    
})

console.log(Employees);
console.log(Emp);




let students = [{"id":1,"name":"Ugo","email":"uemeline0@ftc.gov","gender":"Male"},
{"id":2,"name":"Jehu","email":"jdellabbate1@sakura.ne.jp","gender":"Male"},
{"id":3,"name":"Caren","email":"cbradbeer2@tuttocitta.it","gender":"Female"},
{"id":4,"name":"Janene","email":"jbernardt3@phpbb.com","gender":"Female"},
{"id":5,"name":"Loni","email":"larnatt4@slashdot.org","gender":"Female"}]


 let std=students.filter((student)=>{

    if(student.gender=="Female"){
        return student;
    }

 })
 console.log(students);
 console.log(std);




 let workers=[{"id":1,"name":"Ugo","email":"uemeline0@ftc.gov","gender":"Male"},
 {"id":2,"name":"Jehu","email":"jdellabbate1@sakura.ne.jp","gender":"Male"},
 {"id":3,"name":"Caren","email":"cbradbeer2@tuttocitta.it","gender":"Female"},
 {"id":4,"name":"Janene","email":"jbernardt3@phpbb.com","gender":"Female"},
 {"id":5,"name":"Loni","email":"larnatt4@slashdot.org","gender":"Female"},
 {"id":6,"name":"Carroll","email":"chowieson5@newyorker.com","gender":"Male"},
 {"id":7,"name":"Alec","email":"aioan6@123-reg.co.uk","gender":"Male"},
 {"id":8,"name":"Abey","email":"asteers7@chron.com","gender":"Male"},
 {"id":9,"name":"Saunderson","email":"schoulerton8@parallels.com","gender":"Male"},
 {"id":10,"name":"Lemmie","email":"lsussams9@gnu.org","gender":"Male"},
 {"id":11,"name":"Vilma","email":"vhightowna@psu.edu","gender":"Female"},
 {"id":12,"name":"Gratiana","email":"gpaddenb@ning.com","gender":"Female"},
 {"id":13,"name":"Bobette","email":"bjillardc@bloglines.com","gender":"Female"},
 {"id":14,"name":"Ardra","email":"akerinsd@newyorker.com","gender":"Female"},
 {"id":15,"name":"Lambert","email":"ldeale@princeton.edu","gender":"Male"},
 {"id":16,"name":"Teena","email":"ttrinerf@shop-pro.jp","gender":"Female"},
 {"id":17,"name":"Urbano","email":"uollisg@a8.net","gender":"Male"},
 {"id":18,"name":"Farleigh","email":"fannotth@mac.com","gender":"Male"},
 {"id":19,"name":"Paolo","email":"pbreedei@techcrunch.com","gender":"Male"},
 {"id":20,"name":"Carol-jean","email":"chabertj@mashable.com","gender":"Female"},
 {"id":21,"name":"Greg","email":"goaksk@chronoengine.com","gender":"Male"},
 {"id":22,"name":"Zachary","email":"zmasurell@apache.org","gender":"Male"},
 {"id":23,"name":"Raynor","email":"rwiperm@un.org","gender":"Male"},
 {"id":24,"name":"Zacharie","email":"zmacririen@cnbc.com","gender":"Polygender"},
 {"id":25,"name":"Giana","email":"ggainforto@ameblo.jp","gender":"Female"},
 {"id":26,"name":"Brian","email":"bmathwenp@disqus.com","gender":"Male"},
 {"id":27,"name":"Stacee","email":"sgaylorq@odnoklassniki.ru","gender":"Polygender"},
 {"id":28,"name":"Joni","email":"jflannr@tumblr.com","gender":"Female"},
 {"id":29,"name":"Cirillo","email":"cwooldridges@oaic.gov.au","gender":"Male"},
 {"id":30,"name":"Clare","email":"cangert@cnn.com","gender":"Female"},
 {"id":31,"name":"Cindee","email":"cmcvickeru@eventbrite.com","gender":"Female"},
 {"id":32,"name":"Werner","email":"womullallyv@google.com.hk","gender":"Male"},
 {"id":33,"name":"Jodi","email":"jmunginw@netscape.com","gender":"Male"},
 {"id":34,"name":"Alisander","email":"asangx@arstechnica.com","gender":"Male"},
 {"id":35,"name":"Othilie","email":"ogreliky@eventbrite.com","gender":"Female"},
 {"id":36,"name":"Alanna","email":"amcgrottyz@zdnet.com","gender":"Female"},
 {"id":37,"name":"Yanaton","email":"yleith10@wikimedia.org","gender":"Male"},
 {"id":38,"name":"Ben","email":"bmarcoolyn11@mac.com","gender":"Male"},
 {"id":39,"name":"Leonard","email":"lweddeburnscrimgeour12@earthlink.net","gender":"Male"},
 {"id":40,"name":"Inna","email":"ihofton13@sohu.com","gender":"Female"},
 {"id":41,"name":"Alfred","email":"agrimoldby14@princeton.edu","gender":"Male"},
 {"id":42,"name":"Linda","email":"lhuccaby15@dion.ne.jp","gender":"Bigender"},
 {"id":43,"name":"Ralph","email":"rianizzi16@webmd.com","gender":"Male"},
 {"id":44,"name":"Leanora","email":"lmartell17@umich.edu","gender":"Female"},
 {"id":45,"name":"Mechelle","email":"mvanderweedenburg18@webs.com","gender":"Female"},
 {"id":46,"name":"Meryl","email":"mbirchall19@desdev.cn","gender":"Female"},
 {"id":47,"name":"Taite","email":"thartop1a@360.cn","gender":"Agender"}]



  let staff = workers.filter((worker)=>{

    if(worker.gender=="Polygender"){
          return worker
    }

  })

  console.log(staff);
