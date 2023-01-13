function kiem_tra_snt(n) {
  // Biến cờ hiệu
  var flag = true;
  // Nếu n bé hơn 2 tức là không phải số nguyên tố
  if (n < 2) {
    flag = false;
  } else if (n == 2) {
    flag = true;
  } else if (n % 2 == 0) {
    flag = false;
  } else {
    // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
    for (var i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i == 0) {
        flag = false;
        break;
      }
    }
  }
  return flag;
}

// Hàm in ra các số nguyên tố từ 1 tới n
function print() {
  // Lấy number
  var number = document.getElementById("number").value;

  // Lặp để in kết quả
  var html = "";
  for (var i = 1; i <= number; i++) {
    // Nếu là số nguyên tố thì in ra
    if (kiem_tra_snt(i) === true) {
      html += i + "&nbsp";
    }
  }
  document.getElementById("result").innerHTML = html;
}
