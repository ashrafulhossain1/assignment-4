// TAX Calculator

function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || income < expenses ) {
        return "Invalid Input";
    }
    const earningBeforeTax = income - expenses;
    const TaxCost = earningBeforeTax * .20;
    return TaxCost;
}

const tax = calculateTax(13000, 3000);
console.log(tax);


