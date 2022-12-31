// Bài 1: Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập đúng, không cần kiểm tra hợp lệ). Tìm ngày, tháng, năm của ngày tiếp theo. Tương tự tìm ngày tháng năm của ngày trước đó.

function ex1_1() {
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
  let ex1El = document.getElementById("result1_1");
  ex1El.innerHTML = `Ngày mai là: ${day} tháng ${month} năm ${year}`;
}
function ex1_2() {
  let day = +document.getElementById("day").value;
  let month = +document.getElementById("month").value;
  let year = +document.getElementById("year").value;
  if (day === 1 && month === 1) {
    day = 31;
    month = 12;
    year--;
  } else if (month === 3) {
    if (day === 1) {
      day = 28;
      month--;
    } else {
      day--;
    }
  } else if (
    month === 1 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    if (day === 1) {
      day = 30;
      month--;
    } else {
      day--;
    }
  } else {
    if (day === 1) {
      day = 31;
      month--;
    } else day--;
  }
  let ex1El2 = document.getElementById("result1_2");
  ex1El2.innerHTML = `Hôm qua là: ${day} tháng ${month} năm ${year}`;
}
// Bài 2:Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày. (bao gồm tháng của năm nhuận).
function ex2() {
  let day2 = 0;
  let month2 = +document.getElementById("month2").value;
  let year2 = +document.getElementById("year2").value;
  year2 = year2 % 4;
  if (year2 === 0) {
    if (month2 === 2) {
      day2 = 29;
    } else if (
      month2 === 1 ||
      month2 === 3 ||
      month2 === 5 ||
      month2 === 7 ||
      month2 === 8 ||
      month2 === 10 ||
      month2 === 12
    ) {
      day2 = 31;
    } else {
      day2 = 30;
    }
  } else {
    if (month2 === 2) {
      day2 = 28;
    } else if (
      month2 === 1 ||
      month2 === 3 ||
      month2 === 5 ||
      month2 === 7 ||
      month2 === 8 ||
      month2 === 10 ||
      month2 === 12
    ) {
      day2 = 31;
    } else {
      day2 = 30;
    }
  }
  const ex2El = document.getElementById("result1_3");
  ex2El.innerHTML = `Tháng ${month2} có ${day2} ngày`;
}
