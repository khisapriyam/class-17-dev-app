let res = new Result();


student.map((data, index) => {
    console.log(`
        ID      : ${data.id}
        Name    : ${data.name}
        Age     : ${data.age}
        Gender  : ${data.gender}
        Location: ${data.location}

        Subject     Marks           GPA                             Grade   
        Bangla      ${data.bn}      ${res.result(data.bn).gpaCal}   ${res.result(data.bn).gradeCal}
        English     ${data.en}      ${res.result(data.en).gpaCal}   ${res.result(data.en).gradeCal}
        Math        ${data.Math}    ${res.result(data.Math).gpaCal} ${res.result(data.Math).gradeCal}
        --------------------------------------------------------------------------------------
        Final Grade =${res.finalResult(data.bn,data.en,data.Math).finalCgpa} Final Result = ${res.finalResult(data.bn,data.en,data.Math).finalResult} 
    `)
})