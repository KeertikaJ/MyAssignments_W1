
function gradeCalculation(score) {
    
    switch(true) {
        case score>=90:
            return "A";
            break;
        case score>=80:
            return "B";
            break;
        case score>=70:
            return "C";
            break;
        case score>=60:
            return "D";
            break;
        case score>=50:
            return "E";
            break;
        default:
            return "F";
            break;
    }
}

console.log(gradeCalculation(90));