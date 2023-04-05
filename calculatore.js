let totalBill = 527; //thats good soup
function calculateTip(amount) {
  let tip = amount * 0.2;
  return tip;
}
function getBillTotal(amount) {
  let tip = calculateTip(totalBill);
  let billTotal = amount + tip;
  return billTotal.toFixed(2);//omg it worked!
}
console.log(`The tip is: $${calculateTip(totalBill)}`);
console.log(`The total bill (including tip) is: $${getBillTotal(totalBill)}`);//sheesh