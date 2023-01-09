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
// Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2+ x^3 + … + x^n (Sử dụng vòng lặp và hàm)
