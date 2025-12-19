// 1. Dates & constants
const currentDate = new Date();
const startDate = new Date("2025/11/03");
const millisecondsPerDay = 1000 * 60 * 60 * 24;

// 2. Calculations
const difference = currentDate - startDate;
const daysSober = difference / millisecondsPerDay;
const fullDaysSober = Math.floor(daysSober);

// 3. DOM elements
const startDateElement = document.getElementById("start-date");
const daysSoberElement = document.getElementById("days-sober");

// 4. Display
startDateElement.innerText = startDate.toDateString();
daysSoberElement.innerText = fullDaysSober;

// 5. Logic (future use)
if (fullDaysSober > 0) {
  // to be continued :D
}
