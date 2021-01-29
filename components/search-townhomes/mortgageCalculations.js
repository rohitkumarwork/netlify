export function landTransferTax(homePrice, city) {
  const disableNegative = (number) => Math.max(0, number);
  let firstTaxRate = 0;
  let secondTaxRate = 0;
  let thirdTaxRate = 0;
  let lastTaxRate = 0;

  if (homePrice > 55000) {
    firstTaxRate = 55000 * 0.005;
  } else {
    firstTaxRate = homePrice * 0.005;
  }

  if (homePrice > 250000) {
    secondTaxRate = (250000 - 55000) * 0.01;
  } else {
    secondTaxRate = (homePrice - 55000) * 0.01;
  }

  if (homePrice > 400000) {
    thirdTaxRate = (400000 - 250000) * 0.015;
    lastTaxRate = (homePrice - 400000) * 0.02;
  } else {
    thirdTaxRate = (homePrice - 250000) * 0.02;
  }

  const subTotal = disableNegative(firstTaxRate) + disableNegative(secondTaxRate) + disableNegative(thirdTaxRate) + disableNegative(lastTaxRate);

  return city.includes('Toronto') ? subTotal * 2 : subTotal;
}

export function monthlyMortgage(interestRate, monthlyTotal, termPeriod) {
  const rate = interestRate / 100;
  const monthylMortgageRate = (1 + rate / 2) ** (1 / 6) - 1;
  const adjustments = (1 + monthylMortgageRate) ** (12 * termPeriod);
  return ((monthlyTotal * monthylMortgageRate * adjustments) / (adjustments - 1));
}

export function mortgageInsurance(downPayment, homePrice) {
  let cmhc = 0;
  if (downPayment >= 5 && downPayment < 10) {
    cmhc = 4;
  } else if (downPayment >= 10 && downPayment < 15) {
    cmhc = 3.1;
  } else if (downPayment >= 15 && downPayment < 20) {
    cmhc = 2.8;
  }
  return ((homePrice - downPayment) * cmhc) / 100;
}