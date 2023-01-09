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
  const num3 = document.getElementById("num3").value;
}
