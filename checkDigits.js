// //Check Digit of a string

function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return 'Invalid Input';
    }
    for (i = 0; i <= 9; i++) {
        let srtNumber = i.toString();
        if (name.includes(srtNumber)) {
            return true;
        }
    }
    return false;
}

const checkName = checkDigitsInName(["Raj"]);
console.log(checkName);





// let srtNumber = i.toString();
// console.log(srtNumber)
// console.log(typeof srtNumber)

// name.includes('1')