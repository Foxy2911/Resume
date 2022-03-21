function daysBetweenDates(day1, day2) {
  let oneDay = 24 * 60 * 60 * 1000;
  return (day2 - Date.parse(day1)) / oneDay;
};

function calculateAge() {
  let ageDiv =  document.getElementById("myAge");
  let yearsOld = daysBetweenDates('Nov 29, 2001 21:00:00', new Date()) / 365;
  ageDiv.textContent = yearsOld.toFixed(8);
};

setInterval(calculateAge, 1);
