let btn = document.querySelector("button");
let mons = document.createElement("span");
let days = document.createElement("span");

btn.onclick = function () {
  let year = document.getElementById("year").value;
  let month = document.getElementById("month").value;
  let day = document.getElementById("day").value;
  let nowDate = new Date();
  let birthDay = new Date(year, month, day);
  let full = nowDate.getFullYear() - birthDay.getFullYear();
  let sumMonth = nowDate.getMonth() - birthDay.getMonth() + 1;
  let sumDay = nowDate.getDate() - birthDay.getDate();
  document.querySelector(".spanYear").innerHTML = `${full} `;
  document.querySelector(".spanMonth").innerHTML = `${sumMonth} `;
  document.querySelector(".spanDay").innerHTML = `${sumDay} `;
};
