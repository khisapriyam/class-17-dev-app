const student_form = document.getElementById('student_form');
const data_list = document.getElementById('data-list');

student_form.addEventListener('submit',function(e){
    e.preventDefault();

    let name = student_form.querySelector('input[placeholder = "Student Name"]');
    let roll = student_form.querySelector('input[placeholder = "Roll Number"]');
    let student_class = student_form.querySelector('input[placeholder = "Class"]');
    let photo = student_form.querySelector('input[placeholder = "Photo"]');

    //gender dhorar niyom holo checked use korte hobe
    let gender = student_form.querySelector('input[type="radio"]:checked');

    let ban = student_form.querySelector('input[placeholder = "Bangla"]');
    let eng = student_form.querySelector('input[placeholder = "English"]');
    let math = student_form.querySelector('input[placeholder = "Math"]');
    let sci = student_form.querySelector('input[placeholder = "Science"]');
    let ss = student_form.querySelector('input[placeholder = "Social Science"]');
    let pe = student_form.querySelector('input[placeholder = "Phy Edu"]');

    //step 2: add validation

    if(name.value == '' || roll.value =='' || student_class.value == ''){
        alert("all fields are required");
    }
    else{
        let storage_data = [];
        if(dataGet("result_apps")){
            storage_data = dataGet("result_apps")

        }
        storage_data.push({
            name: name.value, 
            roll : roll.value,
            className : student_class.value,
            gender : gender.value,
            photo : photo.value,
            ban : ban.value,
            eng :eng.value,
            math: math.value,
            sci: sci.value,
            ss: ss.value,
            pe : pe.value
        });

        dataSend('result_apps', storage_data);

          //making the form empty. but this process is not recommended

          student_form.querySelector('input[placeholder = "Student Name"]').value = '';
          student_form.querySelector('input[placeholder = "Roll Number"]').value = '';
          student_form.querySelector('input[placeholder = "Class"]').value = '';
          student_form.querySelector('input[placeholder = "Photo"]').value = '';
  
          student_form.querySelector('input[placeholder = "Bangla"]').value = '';
          student_form.querySelector('input[placeholder = "English"]').value = '';
          student_form.querySelector('input[placeholder = "Math"]').value = '';
          student_form.querySelector('input[placeholder = "Science"]').value = '';
          student_form.querySelector('input[placeholder = "Social Science"]').value = '';
          student_form.querySelector('input[placeholder = "Phy Edu"]').value = '';

        //   student_form.querySelector('input[type="radio"]:checked').removeAttribute('checked');

          allStudentsData()
        
      
    }

});

allStudentsData()
function allStudentsData(){

    let all_data = dataGet('result_apps');

    let data = '';

    all_data.map((student, index)=>{

        data += `
        <tr>
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.roll}</td>
            <td>${student.className}</td>
            <td>${student.gender}</td>
            <td> A </td>
            <td> 4 </td>
            <td><img style = "width:50px; height:50px; object-fit:cover"src="${student.photo}"></td>
            <td>
            
                <button class="btn btn-info btn-sm" data-bs-toggle="modal" onclick="getSingleResult(${index})" data-bs-target="#student_single_modal" >View</button>
                <button onclick="deleteStudent(${index})"class="btn btn-danger btn-sm">Delete</button>
            </td>
        </tr> 
        `;
    });
    data_list.innerHTML = data;

}

/**
 * Delete student data
 */

function deleteStudent(id){
    let conf = confirm('Are you sure you want to delete');

    if(conf){
        let storage_data = dataGet('result_apps');
        storage_data.splice(id, 1);
        dataSend('result_apps', storage_data);
        allStudentsData();
    }
    else{
        return false;
    }
    
}

/**
 * 17.2
 * 
 */
//  const subject_box = document.getElementById('subject_box');
//  const s_box = document.querySelector('.science-box')
//  const a_box = document.querySelector('.arts-box')
//  const c_box = document.querySelector('.comm-box')
 
//  subject_box.addEventListener('change',function(){
//      //checking
//      //console.log(subject_box.value);
 
//      if(subject_box.value == 'Science'){
//          s_box.style.display = 'block';
//      }
//      else{
//          s_box.style.display = 'none';
//      }

//      if(subject_box.value == 'Arts'){
//         a_box.style.display = 'block';
//     }
//     else{
//         a_box.style.display = 'none';
//     }

//     if(subject_box.value == 'Commerce'){
//         c_box.style.display = 'block';
//     }
//     else{
//         c_box.style.display = 'none';
//     }

     
//  })
 
/** Place holder */
// const subject_box = document.getElementById('subject_box');
// const ban = document.getElementById('ban');

// subject_box.addEventListener('change',function(){

//     if(subject_box.value == 'Science'){
//         ban.setAttribute('placeholder', 'Physics');
//     }
//     else if(subject_box.value == 'Arts'){
//         ban.setAttribute('placeholder', 'History');
//     }
//     else if(subject_box.value == 'Commerce'){
//         ban.setAttribute('placeholder', 'Management');
//     }
//     else{
//         ban.setAttribute('placeholder', 'Bangla');
//     }
// })

const student_result_data = document.querySelector('.student-result-data');//aita amra function er vitoreo dhorte pari


function getSingleResult(index){

    let result = new Result;
    // alert(index)
    let storage_data = dataGet('result_apps');

    //console.log(storage_data[index]);
    student_result_data.innerHTML = `
    <img class="shadow" src="${storage_data[index].photo}" alt="">
        <h2>${storage_data[index].name}</h2>
        <hr>
        <table class="table table-bordered table-striped ">
            <thead>
                <tr>
                    <td>Subject</td>
                    <td>Marks</td>
                    <td>GPA</td>
                    <td>Grade</td>
                    <td>CGPA</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Bangla</td>
                    <td>${storage_data[index].ban}</td>
                    <td>${result.result(storage_data[index].ban).gpaCal}</td>
                    <td>${result.result(storage_data[index].ban).gradeCal}</td>
                    <td rowspan="6">
                    ${result.finalResult( storage_data[index].ban, storage_data[index].eng, storage_data[index].math, storage_data[index].sci, storage_data[index].ss, storage_data[index].pe ).finalCgpa }
                    
                    </td>
                    <td rowspan="6">
                    ${result.finalResult( storage_data[index].ban, storage_data[index].eng, storage_data[index].math, storage_data[index].sci, storage_data[index].ss, storage_data[index].pe ).finalResult }
                    </td>
                </tr>
                <tr>
                    <td>English</td>
                    <td>${storage_data[index].eng}</td>
                    <td>${result.result(storage_data[index].eng).gpaCal}</td>
                    <td>${result.result(storage_data[index].eng).gradeCal}</td>
                </tr>
                <tr>
                    <td>Math</td>
                    <td>${storage_data[index].math}</td>
                    <td>${result.result(storage_data[index].math).gpaCal}</td>
                    <td>${result.result(storage_data[index].math).gradeCal}</td>
                </tr>
                <tr>
                    <td>Science</td>
                    <td>${storage_data[index].sci}</td>
                    <td>${result.result(storage_data[index].sci).gpaCal}</td>
                    <td>${result.result(storage_data[index].sci).gradeCal}</td>
                </tr>
                <tr>
                    <td>Social Science</td>
                    <td>${storage_data[index].ss}</td>
                    <td>${result.result(storage_data[index].ss).gpaCal}</td>
                    <td>${result.result(storage_data[index].ss).gradeCal}</td>
                </tr>
                <tr>
                    <td>Physical Education</td>
                    <td>${storage_data[index].pe}</td>
                    <td>${result.result(storage_data[index].pe).gpaCal}</td>
                    <td>${result.result(storage_data[index].pe).gradeCal}</td>
                </tr>
            </tbody>
        </table>
    `;
}
 
const search_box = document.getElementById('search_box');

search_box.addEventListener('keyup',function(){
    // console.log(search_box.value);

    let all_data = dataGet('result_apps');

    let data = '';

    all_data.map((student, index)=>{

        if(student.name == search_box.value){//for roll use student.roll == search_box.value
            data += `
            <tr>
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.roll}</td>
                <td>${student.className}</td>
                <td>${student.gender}</td>
                <td> A </td>
                <td> 4 </td>
                <td><img style = "width:50px; height:50px; object-fit:cover"src="${student.photo}"></td>
                <td>
                
                    <button class="btn btn-info btn-sm" data-bs-toggle="modal" onclick="getSingleResult(${index})" data-bs-target="#student_single_modal" >View</button>
                    <button onclick="deleteStudent(${index})"class="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr> 
            `;
        }  
  
    });
    data_list.innerHTML = data;
    
});