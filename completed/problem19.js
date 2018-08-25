// "difference" is the number of milliseconds in a week
let difference = 604800000;

let firstSunday = Date.UTC(1900,0,7);

let year = 1900;
let month = 0;
let day = 1;

let sundays = 0;

while (year < 2001) {
  for (month = 0; month < 12; month++) {
    let timeSpan = Date.UTC(year, month, day) - firstSunday;
    if (timeSpan % difference === 0) {
      console.log(month + '/' + year)
      sundays++;
    }
  }
  year++;
}

console.log(sundays);
