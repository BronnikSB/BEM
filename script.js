const startDate = new Date("2022-07-15T00:00:00Z");
const monthAndYearElem = document.getElementById("time-since-date");

function updateMonthAndYearSinceDate() {
  const currentDate = new Date();
  const diffInMilliseconds = currentDate - startDate;

  const months = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 30.4375));
  const years = Math.floor(months / 12);

  monthAndYearElem.textContent = ` ${years} год ${months % 12 === 0 ? 12 : months % 12} месяцев`;
}

setInterval(updateMonthAndYearSinceDate, 1000);