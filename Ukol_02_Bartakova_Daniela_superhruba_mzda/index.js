'use strict'
const numberOfWorkingDays = 21;
const fullTimeWorkingHours = 8;
const healthInsurancePercentageEmployer = 0.09;
const healthInsurancePercentageEmployee = 0.045;
const socialInsurancePercentageEmployer = 0.248;
const socialInsurancePercentageEmployee = 0.065;
const incomeTaxPercentage = 0.15;
const taxDiscount = 2070;

const grossWagePerHour = Number(prompt('Zadejte hrubou hodinovou mzdu zaměstnance v Kč:'));
const workingTimePercentage = Number(prompt('Zadejte výši úvazku zaměstnance v procentech:')) / 100;

const workingHours = fullTimeWorkingHours * workingTimePercentage;
const grossWage = Math.round(grossWagePerHour * workingHours * numberOfWorkingDays);
document.write('Výše hrubé mzdy zaměstnance činí: ' + grossWage + ' Kč.');

const healthInsuranceEmployer = grossWage * healthInsurancePercentageEmployer;
const socialInsuranceEmployer = grossWage * socialInsurancePercentageEmployer;
const superGrossWage = Math.ceil(grossWage + healthInsuranceEmployer + socialInsuranceEmployer);
document.write('Výše superhrubé mzdy zaměstnance činí: ' + superGrossWage + ' Kč.');

const healthInsuranceEmployee = grossWage * healthInsurancePercentageEmployee;
const socialInsuranceEmployee = grossWage * socialInsurancePercentageEmployee;
const roundedSuperGrossWage = Math.ceil(superGrossWage / 100) * 100;
const IncomeTax = roundedSuperGrossWage * incomeTaxPercentage;
const netWage = Math.floor(grossWage - healthInsuranceEmployee - socialInsuranceEmployee - IncomeTax + taxDiscount);
document.write('Výše čisté mzdy zaměstnance činí: ' + netWage + ' Kč.');
