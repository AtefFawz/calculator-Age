let btn = document.querySelector("button");

btn.onclick = function () {
  let year = document.getElementById("year").value;
  let month = document.getElementById("month").value;
  let day = document.getElementById("day").value;

  // Use DOM
  let today = new Date();
  let birthDay = new Date(year, month - 1, day);
  let full = today.getFullYear() - birthDay.getFullYear();
  let sumMonth = today.getMonth() - birthDay.getMonth();
  let sumDay = today.getDate() - birthDay.getDate();
  // Cheek on Days

  if (sumDay < 0) {
    sumMonth--;
    sumDay += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  // Cheek Month
  if (sumMonth < 0) {
    full--;
    sumMonth += 12;
  }

  // =====================================================
  // styling Day
  let stDay = document.querySelector("#day");
  let stDayLe = document.querySelector(".lableDay");
  let spanDays = document.querySelector(".spanDays");
  //  Cheek Input Day
  let edit = parseInt(day);
  if (day.length == "" || day.length >= 3 || isNaN(edit)) {
    stDay.style.borderColor = "red";
    stDayLe.style.color = "red";
    spanDays.style.display = "block";
  } else {
    stDay.style.borderColor = "#99999997";
    stDayLe.style.color = "#4e4c4c";
    spanDays.style.display = "none";
    document.querySelector(".spanDay").innerHTML = `${sumDay} `;
  }

  // DOM month
  let stMonth = document.querySelector("#month");
  let stMonthLe = document.querySelector(".lableMonth");
  let spanMonths = document.querySelector(".spanMonths");

  //  Cheek Input Month
  let editMonth = parseInt(month);
  if (month.length == "" || month.length >= 3 || isNaN(editMonth)) {
    stMonth.style.borderColor = "red";
    stMonthLe.style.color = "red";
    spanMonths.style.display = "block";
  } else {
    stMonth.style.borderColor = "#99999997";
    stMonthLe.style.color = "#4e4c4c";
    spanMonths.style.display = "none";
    document.querySelector(".spanMonth").innerHTML = `${sumMonth} `;
  }
  // DOM Years
  let stYear = document.querySelector("#year");
  let stYearLe = document.querySelector(".lableYear");
  let spanYears = document.querySelector(".spanYears");
  //  Cheek Input Month
  let editYear = parseInt(year);
  if (
    year.length == "" ||
    year.length > 4 ||
    year.length < 4 ||
    isNaN(editYear)
  ) {
    stYear.style.borderColor = "red";
    stYearLe.style.color = "red";
    spanYears.style.display = "block";
  } else {
    stYear.style.borderColor = "#99999997";
    stYearLe.style.color = "#4e4c4c";
    spanYears.style.display = "none";
    document.querySelector(".spanYear").innerHTML = `${full} `;
  }
  console.log();
};
