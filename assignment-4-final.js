function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || income < expenses ) {
        return "Invalid Input";
    }
    const earningBeforeTax = income - expenses;
    const TaxCost = earningBeforeTax * .20;
    return TaxCost;
}


function sendNotification(email) {

    if(email.includes('@') === false){
        return "Invalid Email"
    }
    const cutUpEmail = email.split('@');
    const userName = cutUpEmail[0];
    const domainName = cutUpEmail[1];
    return userName + ' sent you an email from ' + domainName; 
}


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


function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || Array.isArray(obj)) {
        return "Invalid Input";
    }
    else if (typeof obj.name !== 'string' ||
        typeof obj.testScore !== 'number' ||
        typeof obj.schoolGrade !== 'number' ||
        typeof obj.isFFamily !== "boolean" ||
        obj.testScore > 50 || obj.schoolGrade > 30) {
        return "Invalid Input";
    }

    let finalScore = obj.testScore + obj.schoolGrade;

    if (obj.isFFamily === true) {
        finalScore += 20;
    }

    if (finalScore >= 80) {
        return true;
    }
    else {
        return false;
    }
}


function waitingTime(waitingTimes, serialNumber) {
    if(!Array.isArray(waitingTimes) === true) {
        return "Invalid Input"
    }
    else if(typeof serialNumber !== 'number'){
        return "Invalid Input";
    }

    let sum = 0;
    for (const waitingTime of waitingTimes) {
        sum += waitingTime;
    }
    const interviewed = waitingTimes.length;
    const averageWaitingTime = Math.round(sum / interviewed);
    const beforeIsrat = serialNumber - 1;

    const finalWaitingTime = (beforeIsrat - interviewed) * averageWaitingTime;
    return finalWaitingTime;
}

