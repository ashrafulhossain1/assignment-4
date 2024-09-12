
// // Admission test

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

const studentInfo = { name: "Rajib", testScore: 5,  schoolGrade: 25, isFFamily : 'true'  };

const gotChance = calculateFinalScore(studentInfo);
console.log(gotChance);

