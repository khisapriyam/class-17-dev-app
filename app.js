const add_form = document.getElementById('add_form');
const data_list = document.getElementById('data_list');

add_form.addEventListener('submit',function(e) {
    e.preventDefault()

    let name = add_form.querySelector('input[placeholder="Name"]');
    let roll = add_form.querySelector('input[placeholder="Roll"]');
    let class_name = add_form.querySelector('input[placeholder="Class"]');
    let gender = add_form.querySelector('input[type="radio"]:checked');
    let photo = add_form.querySelector('input[placeholder="Photo"]');

    let ban = add_form.querySelector('input[placeholder="Bangla"]');
    let eng = add_form.querySelector('input[placeholder="English"]');
    let math = add_form.querySelector('input[placeholder="Math"]');
    let ss = add_form.querySelector('input[placeholder="Social Science"]');
    let sci = add_form.querySelector('input[placeholder="Science"]');

    let stu_arr = [];

    if(dataGet('result_apps')){
        stu_arr = dataGet('result_apps')

    }else{
        stu_arr = [];
    }

    stu_arr.push({
        name : name.value,
        roll : roll.value, 
        class_name : class_name.value,
        gender : gender.value,
        photo : photo.value,

        ban: ban.value,
        eng:eng.value,
        math: math.value,
        ss :ss.value,
        sci : sci.value,
    })

    dataSend('result_apps', stu_arr);
    studentData()

})

studentData()
function studentData(){

    let all_data = dataGet('result_apps');

    let data = '';

    all_data.map((student, index) =>{

        data += `
            <tr>
                <td>${index +1}</td>
                <td>${student.name}</td>
                <td>${student.roll}</td>
                <td>${student.class_name}</td>
                <td>${student.gender}</td>
                <td>4</td>
                <td>Fail</td>
                <td>
                    <img style="width:40px; height:40px; object-fit:cover;" src="${student.photo}" alt="">
                </td>
                <td>
                    <button onclick="studentModal(${index})"class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#student_modal">View</button>
                    <button onclick= "deleteStudent(${index})" class="btn btn-danger btn-sm">Delete</button>
                </td>

            </tr>
        `;

    })

    data_list.innerHTML = data;

}

function deleteStudent(id){

    let con = confirm('Are you sure you want to delete')
    if(con == true){
        let data_arr = dataGet('result_apps')
        data_arr.splice(id, 1);

        dataSend('result_apps', data_arr);
        studentData()

    }else{
        return false;
    }
 
}

const student_result_data = document.querySelector('.student-result-data');

function studentModal(index){

    let storage_data = dataGet('result_apps');

    student_result_data.innerHTML = `
        <img class="shadow" style="width: 420px; height: 250px; object-fit:cover"src="${storage_data[index].photo}" alt="">
        <h3>Minguk</h3>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Marks</th>
                    <th>GPA</th>
                    <th>Grade</th>
                    <th>CGPA</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Bangla</td>
                    <td>88</td>
                    <td>88</td>
                    <td>88</td>
                    <td>88</td>
                    <td>F</td>
                    
                </tr>
                <tr>
                    <td>English </td>
                    <td>88</td>
                    <td>88</td>
                    <td>88</td>
                    
                    
                </tr>
                <tr>
                    <td>Math</td>
                    <td>88</td>
                    <td>88</td>
                    <td>88</td>
                    
                    
                </tr>
                <tr>
                    <td>Social Science</td>
                    <td>88</td>
                    <td>88</td>
                    <td>88</td>
                    
                    
                </tr>
                <tr>
                    <td>Science</td>
                    <td>88</td>
                    <td>88</td>
                    <td>88</td>
                    
                    
                </tr>
            </tbody>
        </table>
    `


}

