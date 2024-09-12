
// // Admission test

function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || Array.isArray(obj)){
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

const studentInfo = { name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  };

const gotChance = calculateFinalScore(studentInfo);
console.log(gotChance);

