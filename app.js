const dev_form = document.getElementById('dev_form');
const devs = document.querySelector('.devs');

dev_form.addEventListener('submit', function(e) {
    e.preventDefault();

    let name = this.querySelector('input[name="name"]');
    let skill = this.querySelectorAll('input[name="skill"]:checked');
    let gender = this.querySelector('input[name="gender"]:checked');
    let photo = this.querySelector('input[name="photo"]');

    let skill_arr = [];
    for (let i = 0; i < skill.length; i++) {
        skill_arr.push(skill[i].value); 
    }

    let data_arr;
    if(dataGet('devs')){
        data_arr = dataGet('devs');
    }else{
        data_arr = [];
    }
    data_arr.push({
        name : name.value,
        skill: skill_arr,
        gender : gender.value,
        photo : photo.value
    })

    dataSend('devs', data_arr)
    allDevs()
});

allDevs()

function allDevs(){
    let all_devs = dataGet('devs');
    
    let data = '';

    all_devs.map(d => {

        let lists = '';

        d.skill.map(list => {
            lists += '<li class="list-group-item">' +list+ '</li>'
        })

        data += `
        <div class="col-md-4">
            <div class="card">
                <img style="width: 100%; height:250px; object-fit:cover;"src=${d.photo} alt="">
                <div class="card-body">
                    <h3>${d.name}</h3>
                    <p>Gender: ${d.gender}</p>
                    Skills
                    <ul class="list-group">
                    ${lists}
                        
                    </ul>

                </div>
            </div>
        </div>
        `;

    })
    devs.innerHTML = data;

}
