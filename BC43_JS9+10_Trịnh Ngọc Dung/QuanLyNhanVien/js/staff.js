function Staff(
  id,
  name,
  email,
  password,
  datePicker,
  basicSalary,
  service,
  workHoursMonth
) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.password = password;
  this.datePicker = datePicker;
  this.basicSalary = basicSalary;
  this.service = service;
  this.workHoursMonth = workHoursMonth;
}

// Hàm tính tổng lương nhân viên
Staff.prototype.calcTotalSalary = function () {
  if (this.service === "Sếp") {
    return this.basicSalary * 3;
  }

  if (this.service === "Trưởng phòng") {
    return this.basicSalary * 2;
  }

  return this.basicSalary;
};

// Hàm xếp loại nhân viên
Staff.prototype.calcRank = function () {
  if (this.workHoursMonth >= 192) {
    return "Nhân viên xuất sắc";
  }

  if (this.workHoursMonth >= 176 && this.workHoursMonth < 192) {
    return "Nhân viên giỏi";
  }

  if (this.workHoursMonth >= 160 && this.workHoursMonth < 176) {
    return "Nhân viên khá";
  }

  if (this.workHoursMonth < 160) {
    return "Nhân viên trung bình";
  }
};
