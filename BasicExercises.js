//Diference
function difference(n1,n2){
    return n1-n2;
}
console.log(difference(2,2));
console.log(difference(0,2));
//Product
function product(n1,n2){
    return n1*n2;
}
console.log(product(2,2));
console.log(product(0,2));
//PrintDay
function printDay(day){
    if(day < 1 || day > 7)
        return undefined;
    switch(day) {
        case 2:
            return "Monday"
        break;
        case 3:
            return "Tuesday"
            break;
        case 4:
            return "Wednesday"
            break;
        case 5:
            return "Thursday"
            break;
        case 6:
            return "Friday"
            break;
        case 7  :
            return "Saturday"
            break;
        case 1:
            return "Sunday"
            break;
        default:
            return undefined
    } 
}

console.log(printDay(4));
console.log(printDay(41));

//LastElement
function lastElement(arr){
    if(!arr.length)
        return undefined;
    return arr[(arr.length-1)]
}
console.log(lastElement([1,2,3,4]));
console.log(lastElement([]));

//numberCompare
function numberCompare(n1,n2){
    if(n1 === n2)
        return "Numbers are equal";
    else if(n1>n2)
        return "First is greater";
    else
        return "Second is greater";
}
console.log(numberCompare(1,1));
console.log(numberCompare(2,1));
console.log(numberCompare(1,2));

//SingleLetterCount
function singleLetterCount(word, letter){
    let count = 0;
    for(i=0;i<word.length;i++){
        if(word[i].toUpperCase() == letter.toUpperCase())
            count++
    }
    return count
}

console.log(singleLetterCount('amazing','A'));
console.log(singleLetterCount('Rithm School','o'));
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();