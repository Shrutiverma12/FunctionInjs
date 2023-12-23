let tax;
function calculateTax(income) {
  if (income < 450000) {
    tax = income * 0.28;
    return tax;
  } else {
    tax = income * 0.32;
    return tax;
  }
}
console.log(calculateTax(30000));

console.log(calculateTax(1000000));
