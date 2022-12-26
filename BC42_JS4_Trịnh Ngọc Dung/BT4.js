// //Bài 1: Cho người dùng nhập vào 3 số nguyên. Viết phương trình 3 số xuất theo thứ tự tăng dần
//Input:
//- Nhập vào 3 số nguyên
//Logic:
//- Sử dụng hàm function
//- Đặt tên cho 3 số nguyên đã nhập vào
//- Tìm giá trị lớn nhất, nhỏ nhất trong 3 số rồi đặt tên lần lượt là min, max
//- Sử dụng trừ chuỗi để tìm ra số ở giữa (middle)
//Ouput:
//- Xuất ra thứ tự các số từ nhỏ đến lớn
function resultExp1() {
  const num_1 = +document.getElementById("number1").value;
  const num_2 = +document.getElementById("number2").value;
  const num_3 = +document.getElementById("number3").value;
  const ex1El = document.getElementById("ex1");
  const min = Math.min(num_1, num_2, num_3);
  const max = Math.max(num_1, num_2, num_3);
  const middle = num_1 + num_2 + num_3 - min - max;
  ex1El.innerHTML = `Sắp xếp các số theo thứ tự giảm dần: ${min} , ${middle} , ${max}`;
}

//Bài 2:Viết chương trình “Chào hỏi” các thành viên trong gia đình với các đặc điểm. Đầu tiên máy sẽ hỏi ai sử dụng máy. Sau đó dựa vào câu trả lời và đưa ra lời chào phù hợp. Giả sử trong gia đình có 4 thành viên: Bố (B), Mẹ (M), anh Trai (A) và Em gái (E)
//Input:
//-  Người đang sử dụng máy
//Logic:
//- Đặt tên cho lựa chọn mà người dùng chọn
//- Sử dụng hàm function để hiện kết quả khi nhấn nút
//- Sử dụng if-else để hiển thị lời chào với các lựa chọn tương ứng của người dùng
//Output:
//- Xuất ra lời chào tương ứng với lựa chọn của người dùng

function resultExp2() {
  const selWho = document.getElementById("selWho").value;
  const ex2El = document.getElementById("ex2");
  if (selWho === "B") {
    ex2El.innerHTML = "Chào bố";
  } else if (selWho === "M") {
    ex2El.innerHTML = "Chào mẹ";
  } else if (selWho === "A") {
    ex2El.innerHTML = "Chào anh trai";
  } else if (selWho === "E") {
    ex2El.innerHTML = "Chào em gái";
  } else {
    ex2El.innerHTML = "";
  }
}
//Bài 3: Cho 3 số nguyên. Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn.
//Input:
//- 3 số nguyên
//Logic:
//- Sử dụng hàm function để kết quả hiện ra khi bấm nút
//- Gọi tên biến cho các giá trị người dùng nhập vào, gán tên các biến đếm số số chẵn và số các số lẻ bằng 0
// - Dùng hàm if-else:chia có dư các số mà ngừơi dùng nhập vào cho 2, nếu số dư là 0 thì số các số chẵn +1, nếu không thì số các số lẻ +1
//Output:
// - Xuất ra màn hình số các số chẵn và lẻ
function resultExp3() {
  const num_A = +document.getElementById("numA").value;
  const num_B = +document.getElementById("numB").value;
  const num_C = +document.getElementById("numC").value;
  const ex3El = document.getElementById("ex3");
  const numA_El = num_A % 2;
  const numB_El = num_B % 2;
  const numC_El = num_C % 2;
  let evenNum = 0;
  let oddNum = 0;
  if (numA_El === 0) {
    evenNum = evenNum + 1;
  } else oddNum = oddNum + 1;
  if (numB_El === 0) {
    evenNum = evenNum + 1;
  } else oddNum = oddNum + 1;
  if (numC_El === 0) {
    evenNum = evenNum + 1;
  } else oddNum = oddNum + 1;
  ex3El.innerHTML = "Có " + evenNum + " số chẵn và " + oddNum + " số lẻ";
}

//Bài 4: Viết chương trình cho nhập 3 cạnh của tam giác. Hãy cho biết đó là tam giác gì?
function resultExp4(params) {
  const side_A = +document.getElementById("side_1").value;
  const side_B = +document.getElementById("side_2").value;
  const side_C = +document.getElementById("side_3").value;
  const ex4El = document.getElementById("ex4");
  const sumAandB = side_A + side_B;
  const sumBandC = side_C + side_B;
  const sumAandC = side_A + side_C;
  const sq_A = Math.pow(side_A, 2);
  const sq_B = Math.pow(side_B, 2);
  const sq_C = Math.pow(side_C, 2);
  if (sumAandB > side_C && sumBandC > side_A && sumAandC > side_B) {
    if (sq_A === sq_B + sq_C || sq_B === sq_A + sq_C || sq_C === sq_B + sq_A) {
      ex4El.innerHTML = "Đây là tam giác vuông!";
    } else {
      if (side_A === side_B || side_A === side_C || side_C === side_B) {
        if (side_A === side_B && side_A === side_C) {
          ex4El.innerHTML = "Đây là tam giác đều!";
        } else {
          ex4El.innerHTML = "Đây là tam giác cân!";
        }
      } else {
        ex4El.innerHTML = "Đây là tam giác thường!";
      }
    }
  } else {
    ex4El.innerHTML = "3 cạnh trên không tạo thành một tam giác!";
  }
}
// • Ví dụ: a=2, b=2, c=1 => Tam giác cân
// • a = 3, b=3 c=3 => Tam giác đều
// • a = 3, b = 4, c=5 => Tam giác vuông (đinh lý Pytago)
