
// This calculates student grades
function calculateGrade(marks){
    if (marks >= 0 && marks <= 100){
        if (marks > 79 ){
            return "Your grade is: A"
        
        } else if (marks >= 60 && marks <= 79){
            return "Your grade is: B"
        } else if (marks >= 50 && marks <= 59){
            return "Your grade is: C"
        } else if (marks >= 40 && marks <= 49){
            return "Your grade is: D"
        } else {return "You have an: E"}
    } else{
        return "Oups!!! Invalid marks"
    }
}