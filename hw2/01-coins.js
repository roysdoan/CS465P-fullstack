/** Exercise 01 - Coins **/

function calculateChange(amount) {
  if (typeof amount !== "number" || !Number.isFinite(amount) || amount < 0) {
    return "Error: enter a valid nonnegative amount";
  }

  if (amount > 100) {
    return "Error: the number is too large";
  }

  let cents = Math.round(amount * 100);

  const dollars = Math.floor(cents / 100);
  cents %= 100;

  const quarters = Math.floor(cents / 25);
  cents %= 25;

  const dimes = Math.floor(cents / 10);
  cents %= 10;

  const nickels = Math.floor(cents / 5);
  cents %= 5;

  const pennies = cents;

  const change = [];

  if (dollars > 0)
    change.push(`${dollars} ${dollars === 1 ? "dollar" : "dollars"}`);
  if (quarters > 0)
    change.push(`${quarters} ${quarters === 1 ? "quarter" : "quarters"}`);
  if (dimes > 0) change.push(`${dimes} ${dimes === 1 ? "dime" : "dimes"}`);
  if (nickels > 0)
    change.push(`${nickels} ${nickels === 1 ? "nickel" : "nickels"}`);
  if (pennies > 0)
    change.push(`${pennies} ${pennies === 1 ? "penny" : "pennies"}`);

  return change.length > 0 ? change.join(", ") : "no coins";
}

// Sample test cases
console.log(calculateChange(4.62));
console.log(calculateChange(0.16));
console.log(calculateChange(150.11));

// Additional test cases
console.log(calculateChange(-150.11));
console.log(calculateChange(0));
console.log(calculateChange(0.01));
console.log(calculateChange(100));
console.log(calculateChange(100.01));
console.log(calculateChange(NaN));
console.log(calculateChange("4.62"));
