// Bài 1: Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập đúng, không cần kiểm tra hợp lệ). Tìm ngày, tháng, năm của ngày tiếp theo. Tương tự tìm ngày tháng năm của ngày trước đó.
//Input: ngày, tháng, năm nhập vào
//Logic:
//- Dom dữ liệu người dùng nhập vào và gọi tên
//- Dùng If-Else
//* Tìm ngày tháng năm của ngày tiếp theo
//- Nếu là ngày 31 tháng 12 => trả về ngày 1 tháng 1 năm cộng 1đv
//- Nếu là tháng 2
//+ Nếu là năm nhuận(số năm chia 4 dư 0):nếu là ngày 29 => trả về ngày 1 tháng 3, nếu là những ngày khác => trả về ngày thêm 1 đơn vị
//+ Nếu là năm không nhuận(số năm chia 4 dư khác 0):nếu là ngày 28 => trả về ngày 1 tháng 3, nếu là những ngày khác => trả về ngày thêm 1 đơn vị
//- Nếu tháng là một trong những tháng 1,3,5,7,8,10,12 => nếu ngày là 31 thì trả về ngày 1 và tháng cộng thêm 1đv, nếu là những ngày khác thì ngày cộng thêm 1 đv
//- Những trường hợp còn lại: nếu ngày là 30 thì trả về ngày 1 và tháng cộng thêm 1đv, nếu là những ngày khác thì ngày cộng thêm 1 đv
//*Tìm ngày tháng năm của ngày trước đó:
//- Nếu là ngày 1 tháng 1 => trả về ngày 31 tháng 1 năm trừ 1đv
//- Nếu là tháng 3
//+ Nếu là năm nhuận(số năm chia 4 dư 0):nếu là ngày 31 => trả về ngày 29 tháng 2, nếu là những ngày khác => trả về ngày trừ đi 1 đơn vị
//+ Nếu là năm không nhuận(số năm chia 4 dư khác 0):nếu là ngày 31 => trả về ngày 28 tháng 2, nếu là những ngày khác => trả về ngày trừ đi 1 đơn vị
//- Nếu tháng là một trong những tháng 1,3,5,7,8,10,12 => nếu ngày là 1 thì trả về ngày 30 và tháng trừ đi 1đv, nếu là những ngày khác thì ngày trừ đi 1 đv
//- Những trường hợp còn lại: nếu ngày là 1 thì trả về ngày 31 và tháng trừ đi 1đv, nếu là những ngày khác thì ngày trừ đi 1 đv
//Output: hiện ngày tháng năm của ngày mai và ngày trước đó
function ex1_1() {
  let day = +document.getElementById("day").value;
  let month = +document.getElementById("month").value;
  let year = +document.getElementById("year").value;
  let ex1El = document.getElementById("result1_1");

  if (day === 31 && month === 12) {
    day = 1;
    month = 1;
    year++;
  } else if (month === 2) {
    if (year % 4 === 0) {
      if (day === 29) {
        day = 1;
        month = 3;
      } else {
        day++;
      }
    } else {
      if (day === 28) {
        day = 1;
        month++;
      } else {
        day++;
      }
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
    if (day === 30) {
      day = 1;
      month++;
    } else day++;
  }
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
    if (year % 4 === 0) {
      if (day === 1) {
        day = 29;
        month--;
      } else {
        day--;
      }
    } else {
      if (day === 1) {
        day = 28;
        month--;
      } else {
        day--;
      }
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
//Input: Nhập vào tháng , năm
//Logic:
//- Dom giá trị người dùng nhập vào và gọi tên
//- Nếu là các tháng 1,3,5,7,8,10,12 => tháng đó có 31 ngày
//- Nếu là tháng 2: Nếu năm nhuận(số năm chia 4 dư 0) thì tháng đó có 29 ngày, nếu không thì có 28 ngày
//- Các trường hợp còn lại => tháng đó có 30 ngày
//Output: Hiển thị tháng đó có bao nhiêu ngày
function ex2() {
  let day2 = 0;
  let month2 = +document.getElementById("month2").value;
  let year2 = +document.getElementById("year2").value;
  year2 = year2 % 4;
  if (
    month2 === 1 ||
    month2 === 3 ||
    month2 === 5 ||
    month2 === 7 ||
    month2 === 8 ||
    month2 === 10 ||
    month2 === 12
  ) {
    day2 = 31;
  } else if (month2 === 2) {
    if (year2 === 0) {
      day2 = 29;
    } else {
      day2 = 28;
    }
  } else {
    day2 = 30;
  }
  const ex2El = document.getElementById("result2");
  ex2El.innerHTML = `Tháng ${month2} có ${day2} ngày`;
}
// Bài 3: Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó.
//Input: số nguyên 3 chữ số
//Logic:
//- Dom số người dùng nhập vào và gọi tên
//- Chia lấy dư số đó cho 10 => gán cho chữ số cuối cùng
//- Lấy số ban đầu trừ số cuối cùng, chia lấy dư cho 100 , sau đó chia cho 10 => gán cho chữ số ở giữa
//- Lấy số ban đầu chia cho 100 rồi làm tròn xuống => gán cho chữ số đầu tiên
//- Sử dụng switch case cho các chữ số đầu, giữa, cuối, để ứng với từng giá trị, chúng sẽ có tên gọi bằng chữ riêng
//- Dùng if để chia các trường hợp với tên gọi đặc biệt
//Output: Xuất ra màn hình tên gọi của các
function ex3() {
  const num = document.getElementById("num").value;
  let lastNum = num % 10;
  let midNum = ((num - lastNum) % 100) / 10;
  let firstNum = Math.floor(num / 100);
  const ex3El = document.getElementById("result3");
  switch (lastNum) {
    case 1:
      lastNum = "mốt";
      break;
    case 2:
      lastNum = "hai";
      break;
    case 3:
      lastNum = "ba";
      break;
    case 4:
      lastNum = "bốn";
      break;
    case 5:
      lastNum = "lăm";
      break;
    case 6:
      lastNum = "sáu";
      break;
    case 7:
      lastNum = "bảy";
      break;
    case 8:
      lastNum = "tám";
      break;
    case 9:
      lastNum = "chín";
      break;
  }
  switch (firstNum) {
    case 1:
      firstNum = "một";
      break;
    case 2:
      firstNum = "hai";
      break;
    case 3:
      firstNum = "ba";
      break;
    case 4:
      firstNum = "bốn";
      break;
    case 5:
      firstNum = "năm";
      break;
    case 6:
      firstNum = "sáu";
      break;
    case 7:
      firstNum = "bảy";
      break;
    case 8:
      firstNum = "tám";
      break;
    case 9:
      firstNum = "chín";
      break;
  }
  switch (midNum) {
    case 1:
      midNum = "một";
      break;
    case 2:
      midNum = "hai";
      break;
    case 3:
      midNum = "ba";
      break;
    case 4:
      midNum = "bốn";
      break;
    case 5:
      midNum = "năm";
      break;
    case 6:
      midNum = "sáu";
      break;
    case 7:
      midNum = "bảy";
      break;
    case 8:
      midNum = "tám";
      break;
    case 9:
      midNum = "chín";
      break;
  }
  if (midNum === 0 && lastNum === 0) {
    ex3El.innerHTML = `${firstNum} trăm`;
  } else if (lastNum === 0) {
    ex3El.innerHTML = `${firstNum} trăm ${midNum} mươi `;
  } else if (midNum === 0) {
    ex3El.innerHTML = `${firstNum} trăm linh ${lastNum} `;
  } else {
    ex3El.innerHTML = `${firstNum} trăm ${midNum} mươi ${lastNum}`;
  }
}
// Bài 4:Cho biết tên và tọa độ nhà của 3 sinh viên. Cho biết tọa độ của trường đại học. Viết chương trình in tên sinh viên xa trường nhất.
//Input: tên, tọa độ nhà của SV, tọa độ trường
//Logic:
//- Sử dụng công thức tính khoảng cách khi biết tọa độ điểm
//- Tính khoảng các từ nhà của 3 SV so với trường
//- Tìm giá trị max trong 3 khoảng cách
//Output: Xuất ra màn hình tên của SV xa trường nhất
function ex4() {
  const x1 = document.getElementById("x1").value;
  const y1 = document.getElementById("y1").value;
  const x2 = document.getElementById("x2").value;
  const y2 = document.getElementById("y2").value;
  const x3 = document.getElementById("x3").value;
  const y3 = document.getElementById("y3").value;
  const stu1 = document.getElementById("stu1").value;
  const stu2 = document.getElementById("stu2").value;
  const stu3 = document.getElementById("stu3").value;
  const xSchool = document.getElementById("xSchool").value;
  const ySchool = document.getElementById("ySchool").value;
  const ex4El = document.getElementById("result4");
  const dis1 = Math.sqrt(Math.pow(2, xSchool - x1) + Math.pow(2, ySchool - y1));
  const dis2 = Math.sqrt(Math.pow(2, xSchool - x2) + Math.pow(2, ySchool - y2));
  const dis3 = Math.sqrt(Math.pow(2, xSchool - x3) + Math.pow(2, ySchool - y3));
  if (dis1 === dis2 && dis2 === dis3) {
    ex4El.innerHTML = `Khoảng các từ nhà đến trường của 3 sinh viên là bằng nhau`;
  } else if (dis1 === dis2) {
    if (dis1 > dis3) {
      ex4El.innerHTML = `Sinh viên xa trường nhất: ${stu1} và ${stu2}`;
    } else {
      ex4El.innerHTML = `Sinh viên xa trường nhất: ${stu3}`;
    }
  } else if (dis3 === dis2) {
    if (dis3 > dis1) {
      ex4El.innerHTML = `Sinh viên xa trường nhất: ${stu3} và ${stu2}`;
    } else {
      ex4El.innerHTML = `Sinh viên xa trường nhất: ${stu1}`;
    }
  } else if (dis1 === dis3) {
    if (dis1 > dis2) {
      ex4El.innerHTML = `Sinh viên xa trường nhất: ${stu1} và ${stu3}`;
    } else {
      ex4El.innerHTML = `Sinh viên xa trường nhất: ${stu2}`;
    }
  } else {
    const longest = +math.max(dis1, dis2, dis3);
    if (longest === dis1) {
      ex4El.innerHTML = `Sinh viên xa trường nhất: ${stu1}`;
    } else if (longest === dis2) {
      ex4El.innerHTML = `Sinh viên xa trường nhất: ${stu2}`;
    } else {
      ex4El.innerHTML = `Sinh viên xa trường nhất: ${stu3}`;
    }
  }
}
