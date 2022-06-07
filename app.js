const start = document.getElementById('start');
const h1 = document.getElementById('output');
const stop = document.getElementById('stop');
const count = document.getElementById('count');
const loaders = document.querySelector('.loader');



let counter_value;
let counter;


start.addEventListener('click', () => {
    counter_value = count.value;
    
    
    counter = setInterval(() => {
        h1.innerHTML = counter_value;

        let width = loader(count.value,counter_value);
        
        loaders.style.width = `${width}%`;

        //changing colors based on percentage
        if(width >50 && width <=100){
            loaders.style.backgroundColor = 'green';

        }else if(width >30 && width <=50){
            loaders.style.backgroundColor = 'orange';
        }
        else{
            loaders.style.backgroundColor = 'red';
        }

        if(counter_value == 0){
            clearInterval(counter);
        }
        counter_value--;

    },1000);
})



