// Calculating the net salary of an individual

//NSSF
function calculatePensionablePayTier(pay) {

    return pay * 0.06

  }

 //NHIF
function calculateDeduction(salary) {

    let deduction = 0;
    if (salary >= 6000 && salary <= 7999) {
      deduction = 300;
    } else if (salary >= 8000 && salary <= 11999) {
      deduction = 400;
    } else if (salary >= 12000 && salary <= 14999) {
      deduction = 500;
    } else if (salary >= 15000 && salary <= 19999) {
      deduction = 600;
    } else if (salary >= 20000 && salary <= 24999) {
      deduction = 750;
    } else if (salary >= 25000 && salary <= 29999) {
      deduction = 850;
    } else if (salary >= 30000 && salary <= 34999) {
      deduction = 900;
    } else if (salary >= 35000 && salary <= 39999) {
      deduction = 950;
    } else if (salary >= 40000 && salary <= 44999) {
      deduction = 1000;
    } else if (salary >= 45000 && salary <= 49999) {
      deduction = 1100;
    } else if (salary >= 50000 && salary <= 59999) {
      deduction = 1200;
    } else if (salary >= 60000 && salary <= 69999) {
      deduction = 1300;
    } else if (salary >= 70000 && salary <= 79999) {
      deduction = 1400;
    } else if (salary >= 80000 && salary <= 89999) {
      deduction = 1500;
    } else if (salary >= 90000 && salary <= 99999) {
      deduction = 1600;
    } else if (salary >= 100000) {
      deduction = 1700;
    }
    return deduction;
  }


 //Tax rates

function calculateTaxRate(monthlyTaxablePay) {
    let rate = 0;
    if (monthlyTaxablePay <= 24000) {
      rate = 10;
    } else if (monthlyTaxablePay >= 24001 && monthlyTaxablePay <= 32333) {
      rate = 25;
    } else if (monthlyTaxablePay > 32333) {
      rate = 30;
    }
    return rate;
  }


  // net salary
function calculateNetSalary(salary, profit){

    let monthlyTaxablePay = salary

    let deductTax = calculateTaxRate(monthlyTaxablePay)// %

    let grossPay = salary - ((deductTax / 100) * salary)

    let deductNhif = calculateDeduction(grossPay)

    let pay = salary - ((deductTax / 100) * salary) - deductNhif

    let deductNssf = calculatePensionablePayTier(pay)

    let netSalaryCalculation = () =>{var netSalaryValue = (pay - deductNhif) ; return netSalaryValue}

    let netSalary = netSalaryCalculation()

    console.log(netSalary)

    return netSalary

    }

 

 let salary = parseInt("7000")// gross salary

 let profit = parseInt("800")// profit

 calculateNetSalary(salary, profit);