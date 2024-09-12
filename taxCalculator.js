// TAX Calculator

function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || income < expenses ) {
        return "Invalid Input";
    }
    const earningBeforeTax = income - expenses;
    const TaxCost = earningBeforeTax * .20;
    return TaxCost;
}

const tax = calculateTax(5000, 15000);
console.log(tax);


