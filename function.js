
function loader(start_val, current_val){
    return (current_val * 100)/start_val;
}


function dataSend(key, arr){
    let data = JSON.stringify(arr);
    localStorage.setItem(key,data)
}

function dataGet(key){
    let obj = localStorage.getItem(key);

    if(obj){
        return JSON.parse(obj)
    }else{
        return false;
    }

    
}

