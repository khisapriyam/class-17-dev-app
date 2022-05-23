
function Result(){
    this.result = function(marks){
        let gpa;
        let grade;

        if(marks >=0 && marks <33){
            gpa = 0
            grade = "F"
        }
        else if(marks >=33 && marks <60){
            gpa = 1
            grade = "D"
        }
        else if(marks >=60 && marks <70){
            gpa = 2
            grade = "C"
        }
        else if(marks >=70 && marks <80){
            gpa = 3
            grade = "D"
        }
        else if(marks >=80 && marks <=100){
            gpa = 4
            grade = "A"
        }
        else{
            gpa = "Invalid"
            grade = "Invalid"
        }
        return {
            gpaCal: gpa,
            gradeCal: grade
        }
    }
    this.finalResult= function(bn, en, Math){
        let cgpa;
        let finalGrade;

        let totalGpa = this.result(bn).gpaCal + this.result(en).gpaCal + this.result(Math).gpaCal;
        cgpa = totalGpa / 6;

        if(bn < 33 || en < 33 || Math < 33 ){
            finalGrade = "F"
        }
        else if(cgpa >=0 && cgpa <1){
            finalGrade = "F"
        }
        else if(cgpa >=1 && cgpa <2){
            finalGrade = "C"
        }
        else if(cgpa >=3 && cgpa <=4){
            finalGrade = "A"
        }

        return {
            finalCgpa : (finalGrade == "F") ? "Failed": cgpa.toFixed(2),
            finalResult: finalGrade
        }
    }
}