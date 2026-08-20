function numberType(number) {

    if(number>0) {
        return "Postive Number"
    } else if(number<0){
        return "Negative Number"
    } else{
        return "Neutral Number 0"
    }
}

let number = -0;
console.log(numberType(number))