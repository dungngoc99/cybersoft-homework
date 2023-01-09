//Input:Thu nhập cá nhân, số người phụ thuộc, họ và tên người dùng
//Logic:
//- Dom đến giá trị mà người dùng nhập vào rồi gọi tên cho chúng
//- Sử dụng hàm if để chia ra các trường hợp, sau đó tính toán theo các mức giá đã được đề ra
//Output: Xuất ra số tiền
function result1() {
  const perIn = +document.getElementById("perIn").value;
  const staff = +document.getElementById("staff").value;
  let vat = perIn - 4e6 - staff * 1.6e6;
  if (vat <= 60e6) {
    vat *= 0.05;
  } else if (vat > 60e6 && vat <= 120e6) {
    vat *= 0.1;
  } else if (vat > 120e6 && vat <= 210e6) {
    vat *= 0.15;
  } else if (vat > 210e6 && vat <= 384e6) {
    vat *= 0.2;
  } else if (vat > 384e6 && vat <= 624e6) {
    vat *= 0.25;
  } else if (vat > 624e6 && vat <= 960e6) {
    vat *= 0.3;
  } else {
    vat *= 0.35;
  }
  const ex1 = document.getElementById("ex1");
  ex1.innerHTML = `Thuế thu nhập cá nhân là : ${vat} VNĐ`;
}
// Bài 2:
//Input:loại khách hàng, mã khách hàng, số kênh cao cấp
//Logic:
//- Dom đến giá trị mà người dùng nhập vào rồi gọi tên cho chúng
//- Sử dụng addEventListener để thêm bớt nội dung hiển thị trên màn hình
//- Sử dụng hàm if để chia ra các trường hợp, sau đó tính toán theo các mức giá đã được đề ra
//Output: Xuất ra số tiền
const form = document.getElementById("form");
const user = document.getElementById("user");
const ex2 = document.getElementById("ex2");

user.addEventListener("change", function (event) {
  const typeCustomer = event.target.value;
  if (typeCustomer === "company") {
    const phoneNumberNode = document.createElement("input");
    phoneNumberNode.setAttribute("placeholder", "Số kết nối");
    phoneNumberNode.setAttribute("type", "text");
    phoneNumberNode.setAttribute("id", "phoneNumber");
    form.appendChild(phoneNumberNode);
  } else {
    const phoneNumberNode = document.getElementById("phoneNumber");
    form.removeChild(phoneNumberNode);
  }
});

function result2() {
  let phoneNumber = document.getElementById("phoneNumber");
  const phoneNumberValue = +phoneNumber.value;
  let sum = 0;
  const chanelId = document.getElementById("chanelId").value;
  if (user === "company") {
    if (phoneNumberValue <= 10) {
      sum = 15 + 7.5 * phoneNumberValue;
    } else {
      sum = 75 + (phoneNumberValue - 10) * 5;
    }
  } else {
    sum = 4.5 + 20.5 + chanelId * 7.5;
  }
  console.log("sum:", sum);
  ex2.innerHTML = `Số tiền cáp là: ${sum}$`;
}
