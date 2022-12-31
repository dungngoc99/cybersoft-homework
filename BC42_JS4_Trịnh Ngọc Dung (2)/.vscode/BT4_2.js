// Bài 1

function ex1() {
  let day = +document.getElementById("day").value;
  let month = +document.getElementById("month").value;
  let year = +document.getElementById("year").value;
  if (day === 31 && month === 12) {
    day = 1;
    month = 1;
    year++;
  } else if (month === 2) {
    if (day === 28) {
      day = 1;
      month++;
    } else {
      day++;
    }
  } else if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    if (day === 31) {
      day = 1;
      month++;
    } else {
      day++;
    }
  } else {
    if (day === 31) {
      day = 1;
      month++;
    } else day++;
  }
  let ex1El = document.getElementById("result1");
  ex1El.innerHTML = `Mai là ngày ${day} tháng ${month} năm ${year}`;
}
