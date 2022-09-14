
let student_Details =[{id:101, marks:10, percentage:"10%"},
                      {id:102, marks:20, percentage:"20%"},
                      {id:103, marks:30, percentage:"30%"},
                      {id:104, marks:40, percentage:"40%"},
                      {id:105, marks:50, percentage:"50%"},
                      {id:106, marks:60, percentage:"60%"},
                      {id:107, marks:70, percentage:"70%"},
                      {id:108, marks:80, percentage:"80%"},
                      {id:109, marks:90, percentage:"90%"},
                      {id:110, marks:100, percentage:"100%"}]




function student_Data(){
    let rows = ""
    let i=0;
    while(i <= student_Details.length - 1){
        rows = rows + `<tr>
                           <td>${student_Details[i].id}</td>
                           <td>${student_Details[i].marks}</td>
                           <td>${student_Details[i].percentage}</td>
                       </tr>`
                    
                       i++;
    }
    document.getElementById('student_Details').innerHTML= rows
}