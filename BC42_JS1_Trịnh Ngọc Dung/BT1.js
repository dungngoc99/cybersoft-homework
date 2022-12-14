//Bài tập 1: Tính tiền lương nhân viên
//Input:
//- Lương 1 ngày
//- Số ngày làm việc
let salaryPerDay = 100000;
let workingDay = 5;
//Xử lí
//- Gọi số tiền lương là salary
//- Lập công thức tính lương: lương 1 ngày * số ngày làm việc = salaryPerDay * workingDay
let salary = salaryPerDay * workingDay;
//Output: Kết quả tiền lương
console.log("Bài tập 1: Tiền lương là:", salary, "(đồng)");

//Bài tập 2: Tính giá trị trung bình
//Input:
//- 5 số thực
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
//Xử lí:
//- Gọi tổng 5 só thực nhập vào là total
//- Gọi averageOfTotal là giá trị trung bình của 5 số thực
//- Lập công thức tính giá trị trung bình: total/5
let total = a + b + c + d + e;
let averageOfTotal = total / 5;
//Output: Xuất ra giá trị trung bình của 5 số thực
console.log("Bài tập 2: Giá trị trung bình của 5 số thực là:", averageOfTotal);

//Bài tập 3: Quy đổi tiền
//Input:
//- Số USD
//- 1 dollar = 23500 VNĐ
let numberOfDollar = 2;
let dollarInVnd = 23500;
//Xử lí:
//- Gán số tiền sau khi quy đổi từ USD sang VNĐ là totalInVnd
//- Tính số tiền quy đổi sang VNĐ bằng công thức: (số USD)*(giá trị 1 USD sang VNĐ) = numberOfDolla * dollarInVnd
let totalInVnd = numberOfDollar * dollarInVnd;
//Output:
//- Xuất ra số tiền quy đổi sang VNĐ
console.log("Bài tập 3:Số tiền quy đổi sang VNĐ là:", totalInVnd, "(VNĐ)");

//Bài tập 4: Tính diện tích, chu vi hình chữ nhật
//Input:
//- Chiều dài
//- Chiều rộng
let widthOfRectangle = 12;
let heightOfRectangle = 22;
//Xử lí:
//- Chu vi HCN tính theo công thức: CV = (dài + rộng)*2
//- Gọi perimeter là chu vi hình chữ nhật
//- Tính chu vi hình chữ nhật: perimeter = (widthOfRectangle + heightOfRectangle)*2
//- Diện tích HCN tính theo công thức: S = dài * rộng
//- Gọi square là diện tích hình chữ nhật
//- Tính diện tích HCN: square = widthOfRectangle * heightOfRectangle
let perimeter = (widthOfRectangle + heightOfRectangle) * 2;
let square = widthOfRectangle * heightOfRectangle;
//Output:
//- Xuất chu vi và diện tích HCN ra màn hình
console.log("Bài tập 4: Chu vi hình chữ nhật là:", perimeter);
console.log("Bài tập 4: Diện tích hình chữ nhật là:", square);

//Bài tập 5: Tính tổng 2 ký số
//Input
//- Số có hai chữ số
let inputNumber = 56;
//Xử lý
//- Chia lấy dư số ban đầu (inputNumber) và gán giá trị này vào secondNumber để được số hàng đơn vị
//- Lấy số ban đầu (inputNumber) trừ cho số ở hàng đơn vị (secondNumber), sau đó chia cho 10 để được số hàng chục
//- Gán giá trị của số ở hàng chục vào firstNumber
//- Gọi totalOfNumber = 0 là tổng 2 ký số
//- Công thức tính tổng 2 ký số: (số ở hàng chục) + (số ở hàng đơn vị) => totalOfNumber = firstNumber + secondNumber
let secondNumber = inputNumber % 10;
let firstNumber = (inputNumber - secondNumber) / 10;
let totalOfNumber = firstNumber + secondNumber;
//Output:
//- Xuất ra tổng 2 ký số
console.log("Bài tập 5: Tổng hai ký số có hai chữ số là:", totalOfNumber);
