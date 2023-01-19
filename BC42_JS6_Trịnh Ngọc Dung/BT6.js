// Bài 1: Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + … + n > 10000
function result1() {
  const ex1 = document.getElementById("ex1");
  let n = 0;
  let sum = 0;
  while (sum < 10000 - n) {
    sum += n;
    n++;
  }
  ex1.innerHTML = `Số nguyên dương nhỏ nhất: ${n - 1}`;
}
// Bài 2: Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2+ x^3 + … + x^n (Sử dụng vòng lặp và hàm)
function result2() {
  const ex2 = document.getElementById("ex2");
  const x = document.getElementById("num1").value;
  const n = document.getElementById("num2").value;
  let i = 1;
  let sum = 0;
  while (i <= n) {
    sum += Math.pow(x, i);
    i++;
    console.log(sum);
  }
  ex2.innerHTML = `Tổng là: ${sum}`;
}
// Bài 3: Nhập vào n. Tính giai thừa 1*2*...n
function result3() {
  const ex3 = document.getElementById("ex3");
  const n = document.getElementById("num3").value;
  let sum = 1;
  let i = 1;
  while (i <= n) {
    sum *= i;
    i++;
  }
  ex3.innerHTML = `n! là ${sum}`;
}
// Bài 4: Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div. Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì background màu xanh.

function result4() {
  let divs = document.getElementsByTagName("div");
  for (let i = 0; i < divs.length; i++) {
    if (i % 2 === 0) {
      divs[i].style.background = "blue";
      divs[i].style.color = "white";
      divs[i].innerHTML = `Div lẻ`;
    } else {
      divs[i].style.background = "red";
      divs[i].innerHTML = `Div chẵn`;
      divs[i].style.color = "white";
    }
  }
}
