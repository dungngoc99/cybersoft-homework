// Bài 1
// Input:điểm chuẩn, điểm 3 môn, khu vực (A, B, C, X), loại đối tượng (1,2,3,0)
// *Process:
// *   1. Lấy input (UI)
// *   2. Tính điểm ưu tiên
// *     2.1 Tính điểm ưu tiên theo khu vực
// *     2.2 Tính điểm ưu tiên theo đối tượng
// *   3. Tính tổng điểm = điểm 3 môn + điểm ưu tiên
// *   4. Kiểm tra kết quả:(if else)
// *Output: tính tổng điểm, kết quả
// */
function ex1() {
  let txtStandartGrade = document.getElementById("txtStandartGrade").value;
  let txtSubject1 = +document.getElementById("txtSubject1").value;
  let txtSubject2 = +document.getElementById("txtSubject2").value;
  let txtSubject3 = +document.getElementById("txtSubject3").value;
  let ex1El = document.getElementById("result1");
  let pointArea = +document.getElementById("area").value;
  let pointType = +document.getElementById("type").value;
  let sumGrade =
    txtSubject1 + txtSubject2 + txtSubject3 + pointArea + pointType;
  if (
    sumGrade >= txtStandartGrade &&
    txtSubject1 > 0 &&
    txtSubject2 > 0 &&
    txtSubject3 > 0
  ) {
    ex1El.innerHTML = `Tổng điểm là: ${sumGrade} - Đậu`;
  } else {
    ex1El.innerHTML = `Tổng điểm là: ${sumGrade} - Rớt`;
  }
}

// Bài 2: tính tiền điện

function ex2() {
  const count = +document.getElementById("count").value;
  let sum = 0;
  if (count <= 50) {
    sum = count * 500;
  } else if (count > 50 && count <= 100) {
    sum = 50 * 500 + (count - 50) * 650;
  } else if (count > 100 && count <= 200) {
    sum = 50 * (500 + 650) + (count - 100) * 850;
  } else if (count > 200 && count <= 350) {
    sum = 50 * (500 + 650) + 100 * 850 + (count - 200) * 1100;
  } else {
    sum = 50 * (500 + 650) + 100 * 850 + 150 * 1100 + (count - 350) * 1300;
  }
  const result2 = document.getElementById("result2");
  result2.innerHTML = `Số tiền điện phải trả là: ${sum}`;
}
