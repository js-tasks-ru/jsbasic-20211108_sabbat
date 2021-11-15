function sumSalary(salaries) {
  let allSalaries = [];

  for (let key in salaries) {

      if (typeof salaries[key] === 'number') 
      {
          allSalaries.push(salaries[key]);
      }
  }
  
  let sum = 0;
  for (let salary of allSalaries){
      if (salary !== "" && salary !== null && isFinite(salary)) {
          sum += salary;
      }
  }
  return sum;
}

let salaries = {
  John: NaN,
  Ann: 1000,
  Pete: 0,
  month: 'December',
  currency: 'USD',
  isPayed: false
}


alert( sumSalary(salaries) );
