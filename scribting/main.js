document.querySelector("button").onclick = function () {
  // Use DOM
  const dayInput = document.getElementById("day");
  const monthInput = document.getElementById("month");
  const yearInput = document.getElementById("year");

  const day = dayInput.value;
  const month = monthInput.value;
  const year = yearInput.value;

  const spanYear = document.querySelector(".spanYear");
  const spanMonth = document.querySelector(".spanMonth");
  const spanDay = document.querySelector(".spanDay");

  let isFormValid = true;

  // Cheek days
  if (day === "" || parseInt(day) < 1 || parseInt(day) > 31) {
    document.querySelector(".lableDay").style.color = "red";
    dayInput.style.borderColor = "red";
    document.querySelector(".spanDays").style.display = "block";
    isFormValid = false;
  } else {
    document.querySelector(".lableDay").style.color = "#4e4c4c";
    dayInput.style.borderColor = "initial";
    document.querySelector(".spanDays").style.display = "none";
  }

  //Cheek Month
  if (month === "" || parseInt(month) < 1 || parseInt(month) > 12) {
    document.querySelector(".lableMonth").style.color = "red";
    monthInput.style.borderColor = "red";
    document.querySelector(".spanMonths").style.display = "block";
    isFormValid = false;
  } else {
    document.querySelector(".lableMonth").style.color = "#4e4c4c";
    monthInput.style.borderColor = "initial";
    document.querySelector(".spanMonths").style.display = "none";
  }

  // Cheek Years
  const currentYear = new Date().getFullYear();
  if (year === "" || parseInt(year) > currentYear || year.length !== 4) {
    document.querySelector(".lableYear").style.color = "red";
    yearInput.style.borderColor = "red";
    document.querySelector(".spanYears").style.display = "block";
    isFormValid = false;
  } else {
    document.querySelector(".lableYear").style.color = "#4e4c4c";
    yearInput.style.borderColor = "initial";
    document.querySelector(".spanYears").style.display = "none";
  }
  // =====================================================
  // If Valid Form

  if (isFormValid) {
    const today = new Date();
    const birthDay = new Date(year, month - 1, day);

    // Check Day
    if (birthDay.getDate() != day || birthDay.getMonth() != month - 1) {
      document.querySelector(".lableDay").style.color = "red";
      dayInput.style.borderColor = "red";
      document.querySelector(".spanDays").textContent = "Must be a valid date";
      document.querySelector(".spanDays").style.display = "block";
      return; // Stop All App
    }

    let ageYears = today.getFullYear() - birthDay.getFullYear();
    let ageMonths = today.getMonth() - birthDay.getMonth();
    let ageDays = today.getDate() - birthDay.getDate();

    if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }
    // Result Spans
    spanYear.innerHTML = `${ageYears} `;
    spanMonth.innerHTML = `${ageMonths} `;
    spanDay.innerHTML = `${ageDays} `;
  } else {
    // Error Message
    spanYear.innerHTML = "- - ";
    spanMonth.innerHTML = "- - ";
    spanDay.innerHTML = "- - ";
  }
};
// CLASS Active
let allInput = document.querySelectorAll("input");
allInput.forEach(function (inp) {
  inp.addEventListener("click", function () {
    allInput.forEach(function (remove) {
      remove.classList.remove("active");
    });
    this.classList.add("active");
  });
});
