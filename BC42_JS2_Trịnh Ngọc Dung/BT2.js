//Bài tập 1: Tính tiền lương nhân viên
//Input:
//- Lương 1 ngày
//- Số ngày làm việc
//Xử lí
//- Lập hàm function mô tả hành động khi bấm vào button
//- Lấy giá trị nhập vào input (số ngày làm việc) rồi gán vào workingday
//- Lập công thức tính lương: lương 1 ngày * số ngày làm việc = salaryPerDay * workingDay
//Output: Xuất ra tiền lương
let salaryPerDay = 100000;
function salary() {
  let workingDay = +document.getElementById("workingDay").value;
  let result = workingDay * salaryPerDay;
  let ex1El = document.getElementById("ex1");
  ex1El.innerHTML = "Tổng tiền lương là:" + result + "(đồng)";
}

//Bài tập 2: Tính giá trị trung bình
//Input:
//- 5 số thực
//Xử lí:
//- Xử dụng hàm function
//- Gọi tên cho 5 giá trị nhập vào input
//- Tính tổng 5 giá trị đó
//- Tính trung bình cộng bằng cách chia tổng trên cho 5
//Output: In ra trung bình cộng của 5 giá trị nhập vào
function average() {
  let number1 = +document.getElementById("number1").value;
  let number2 = +document.getElementById("number2").value;
  let number3 = +document.getElementById("number3").value;
  let number4 = +document.getElementById("number4").value;
  let number5 = +document.getElementById("number5").value;
  let sumAllNumber = number1 + number2 + number3 + number4 + number5;
  let averageOfTotal = sumAllNumber / 5;
  let ex2El = document.getElementById("ex2");
  ex2El.innerHTML = "Trung bình cộng 5 số vừa nhập là:" + averageOfTotal;
}

//Bài tập 3: Quy đổi tiền
//Input:
//- Số USD
//- 1 dollar = 23500 VNĐ
//Xử lí:
//- Sử dụng hàm function
//- Gán số tiền mà người dùng nhập vào
//- Tính số tiền theo đơn vị VNĐ
//Output:
//- Gán và xuất ra số tiền quy đổi sang VNĐ
let dollarInVnd = 23500;
function changeMoney() {
  let numberOfDollar = document.getElementById("numberOfDollar").value;
  let totalInVnd = numberOfDollar * dollarInVnd;
  let ex3El = document.getElementById("ex3");
  ex3El.innerHTML = "Chuyển sang VNĐ:" + totalInVnd + "(đồng)";
}
//Bài tập 4: Tính diện tích, chu vi hình chữ nhật
//Input:
//- Chiều dài
//- Chiều rộng
//Xử lí:
//- Chu vi HCN tính theo công thức: CV = (dài + rộng)*2
//- Gọi perimeter là chu vi hình chữ nhật
//- Tính chu vi hình chữ nhật: perimeter = (widthOfRectangle + heightOfRectangle)*2
//- Diện tích HCN tính theo công thức: S = dài * rộng
//- Gọi square là diện tích hình chữ nhật
//- Tính diện tích HCN: square = widthOfRectangle * heightOfRectangle
//Output:
//- Xuất chu vi và diện tích HCN ra màn hình

//Bài tập 5: Tính tổng 2 ký số
//Input
//- Số có hai chữ số
//Xử lý
//- Chia lấy dư số ban đầu (inputNumber) và gán giá trị này vào secondNumber để được số hàng đơn vị
//- Lấy số ban đầu (inputNumber) trừ cho số ở hàng đơn vị (secondNumber), sau đó chia cho 10 để được số hàng chục
//- Gán giá trị của số ở hàng chục vào firstNumber
//- Gọi totalOfNumber = 0 là tổng 2 ký số
//- Công thức tính tổng 2 ký số: (số ở hàng chục) + (số ở hàng đơn vị) => totalOfNumber = firstNumber + secondNumber
//Output:
//- Xuất ra tổng 2 ký số
