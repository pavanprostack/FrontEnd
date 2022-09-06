

let Students=[{id:101,name:"pavan",marks:99},
{id:102,name:"sai",marks:88},
{id:103,name:"vamsi",marks:77},
{id:104,name:"seenu",marks:66} ]



function student(){
   let rows= "";
   let i=0;
   for(i=0; i<=Students.length-1; i++){
    rows=rows+ `<tr>
                   <td>${Students[i].id}</td>
                   <td>${Students[i].name}</td>
                   <td>${Students[i].marks}</td>
              </tr>`
   }
   document.getElementById("student_Details").innerHTML=rows;
}