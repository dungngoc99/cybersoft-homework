// Nhập mảng n
let arrNumber = [];

function getNumberN() {
  let numberN = document.getElementById("numbern").value;
  arrNumber.push(+numberN);
  return arrNumber;
}

document.getElementById("btn-add").onclick = function () {
  let output = document.getElementById("btn-output");
  output.innerHTML = getNumberN();
};

// Bài tập 1: Tổng số dương
document.getElementById("btn-sum").onclick = function () {
  let sum = 0;

  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] <= 0) {
      continue;
    } else {
      sum += arrNumber[i];
    }
  }

  let output = document.getElementById("result-bt1");
  output.classList.add("d-block");
  output.innerHTML = "Tổng số dương: " + sum;
};
// Kết thúc bài tập 1

// Bài tập 2: Đếm số dương
document.getElementById("btn-count").onclick = function () {
  let count = 0;

  for (let index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] <= 0) {
      continue;
    } else {
      count += 1;
    }
  }

  let output = document.getElementById("result-bt2");
  output.classList.add("d-block");
  output.innerHTML = "Số dương: " + count;
};
// Kết thúc bài tập 2

// Bài tập 3: Tìm số nhỏ nhất
document.getElementById("btn-search").onclick = function () {
  let searchMin = arrNumber[0];

  for (let index = 0; index < arrNumber.length; index++) {
    if (searchMin > arrNumber[index]) {
      searchMin = arrNumber[index];
    }
  }

  let output = document.getElementById("result-bt3");
  output.classList.add("d-block");
  output.innerHTML = "Số nhỏ nhất: " + searchMin;
};
// Kết thúc bài tập 3

// Bài tập 4: Tìm số dương nhỏ nhất
document.getElementById("btn-smallpositive").onclick = function () {
  let smallPositive = 0;

  for (let index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] > 0) {
      smallPositive = arrNumber[index];
      break;
    } else if (arrNumber[index] > 0 && arrNumber[index] < smallPositive) {
      smallPositive = arrNumber[index];
    }
  }

  let output = document.getElementById("result-bt4");
  output.classList.add("d-block");
  output.innerHTML = "Số dương nhỏ nhất: " + smallPositive;
};
// Kết thúc bài tập 4

// Bài tập 5: Tìm số chẵn cuối cùng
document.getElementById("btn-lasteven").onclick = function () {
  let lastEven = 0;

  for (let index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] % 2 === 0) {
      lastEven = arrNumber[index];
    }
  }

  let output = document.getElementById("result-bt5");
  output.classList.add("d-block");
  output.innerHTML = "Số chẵn cuối cùng: " + lastEven;
};
// Kết thúc bài tập 5

// Bài tập 6: Đổi chỗ
document.getElementById("btn-change").onclick = function () {
  let number01 = +document.getElementById("number01").value;
  let number02 = +document.getElementById("number02").value;

  let temp = [];

  temp = arrNumber[number01];
  arrNumber[number01] = arrNumber[number02];
  arrNumber[number02] = temp;

  let output = document.getElementById("result-bt6");
  output.classList.add("d-block");
  output.innerHTML = "Mảng sau khi đổi: " + arrNumber;
};
// Kết thúc bài tập 6

// Bài tập 7: Sắp xếp tăng dần
document.getElementById("btn-sortup").onclick = function () {
  let sortUp = [];

  sortUp = arrNumber.sort(function (a, b) {
    return a - b;
  });

  let output = document.getElementById("result-bt7");
  output.classList.add("d-block");
  output.innerHTML = "Mảng sau khi sắp xếp: " + sortUp;
};
// Kết thúc bài tập 7

// Bài tập 8: Tìm số nguyên tố đầu tiên
function checkPrime(number) {
  let isPrime = true;

  if (number < 2) {
    isPrime = false;
  } else if (number === 2) {
    isPrime = true;
  } else if (number % 2 === 0) {
    isPrime = false;
  } else {
    for (let index = 3; index <= Math.sqrt(number); index += 2) {
      if (number % index === 0) {
        isPrime = false;
      }
    }
  }

  return isPrime;
}

document.getElementById("btn-searchprime").onclick = function () {
  let result = 0;

  for (let index = 0; index < arrNumber.length; index++) {
    if (checkPrime(arrNumber[index]) === true) {
      result = arrNumber[index];
      break;
    } else {
      result = -1;
    }
  }

  let output = document.getElementById("result-bt8");
  output.classList.add("d-block");
  output.innerHTML = "Số nguyên tố đầu tiên của mảng: " + result;
};
// Kết thúc bài tập 8

// Bài tập 9: Đếm số nguyên
let arrNumberBT9 = [];

function getNumberBT9() {
  let numberN = document.getElementById("numbern-bt9").value;
  arrNumberBT9.push(+numberN);

  return arrNumberBT9;
}

let getValue = (document.getElementById("btn-bt9").onclick = function () {
  let output = document.getElementById("btn-outputbt9");
  output.classList.add("d-block");
  output.innerHTML = getNumberBT9();
});

document.getElementById("btn-countinteger").onclick = function () {
  let count = 0;

  for (let index = 0; index < arrNumberBT9.length; index++) {
    if (Number.isInteger(arrNumberBT9[index]) === true) {
      count++;
    }
  }

  let output = document.getElementById("result-bt9");
  output.classList.add("d-block");
  output.innerHTML = "Số nguyên: " + count;
};
// Kết thúc bài tập 9

// Bài tập 10: So sánh số lượng số âm và dương
document.getElementById("btn-compare").onclick = function () {
  let countPositive = 0; // đếm số dương
  let countNegative = 0; // đếm số âm
  let result = "";

  for (let index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] > 0) {
      countPositive++;
    } else if (arrNumber[index] < 0) {
      countNegative++;
    }
  }

  if (countPositive === countNegative) {
    result = "Số dương = Số âm";
  } else if (countPositive > countNegative) {
    result = "Số dương > Số âm";
  } else if (countPositive < countNegative) {
    result = "Số dương < Số âm";
  }

  let output = document.getElementById("result-bt10");
  output.classList.add("d-block");
  output.innerHTML = result;
};
// Kết thúc bài tập 10
