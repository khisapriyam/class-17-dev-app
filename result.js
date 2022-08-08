
function Result(){
    this.result = function(marks){
        let gpa;
        let grade;

        if(marks >=0 && marks <33){
            gpa = 0
            grade = "F"
        }
        else if(marks >=33 && marks <40){
            gpa = 1
            grade = "D"
        }
        else if(marks >=40 && marks <50){
            gpa = 2
            grade = "C"
        }
        else if(marks >=50 && marks <60){
            gpa = 3
            grade = "B"
        }
        else if(marks >=60 && marks <70){
            gpa = 3.5
            grade = "A-"
        }
        else if(marks >=70 && marks <80){
            gpa = 4
            grade = "A"
        }
        else if(marks >=80 && marks <=100){
            gpa = 5
            grade = "A+"
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
    this.finalResult= function(bn, en, Math,sci,ss){
        let cgpa;
        let finalGrade;

        let totalGpa = 
        this.result(bn).gpaCal + 
        this.result(en).gpaCal + 
        this.result(Math).gpaCal + 
        this.result(sci).gpaCal + 
        this.result(ss).gpaCal  
        // this.result(rel).gpaCal;

        cgpa = totalGpa / 5;

        if(bn < 33 || en < 33 || Math < 33 ){
            //cgpa = 0;//also add this line for case-2 and 3
            cgpa = 0
            finalGrade = "F"
        }
        else if(cgpa >=0 && cgpa <1){
            finalGrade = "F"
        }
        else if(cgpa >=1 && cgpa <2){
            finalGrade = "D"
        }
        else if(cgpa >=2 && cgpa <3){
            finalGrade = "C"
        }
        else if(cgpa >=3 && cgpa <3.5){
            finalGrade = "B"
        }
        else if(cgpa >=3.5 && cgpa <4){
            finalGrade = "A-"
        }
        else if(cgpa >=4 && cgpa <5){
            finalGrade = "A"
        }
        else if(cgpa == 5){
            finalGrade = "A+"
        }
    
        return {
            // finalCgpa : (finalGrade == "F") ? "Failed": cgpa.toFixed(2),
            //finalCgpa : (cgpa == 0.00) ? " ": cgpa.toFixed(2), //use this line if you want to see blank in CGPA
            finalCgpa : cgpa.toFixed(2),//use this line if you want to show 0.00 in CGPA
            finalResults: finalGrade
        }
    }
}