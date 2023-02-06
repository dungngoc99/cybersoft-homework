// Mảng chứa danh sách nhân viên
let staffList = getStaffList();

// Hiển thị danh sách nhân viên ra table khi mở trang web
renderTable(staffList);

// Hàm thêm nhân viên
function createStaff() {
  // DOM
  let id = getElement("#tknv").value;
  let name = getElement("#name").value;
  let email = getElement("#email").value;
  let password = getElement("#password").value;
  let datePicker = getElement("#datepicker").value;
  let basicSalary = +getElement("#luongCB").value;
  let service = getElement("#chucvu").value;
  let workHour = getElement("#gioLam").value;

  console.log(workHour);
  console.log(typeof workHour);

  // Kiểm tra các input có hợp lệ không
  let isValid = validate();

  // isValid là false => dữ liệu không hợp lệ
  if (!isValid) {
    return;
  }

  // Khởi tạo object staff
  const staff = new Staff(
    id,
    name,
    email,
    password,
    datePicker,
    basicSalary,
    service,
    workHour
  );

  // Thêm object staff vào mảng staffList
  staffList.push(staff);

  // Gọi hàm rederTable để hiển thị danh sách staffList ra table
  renderTable(staffList);

  // Reset lại các input khi đã thêm mới
  resetInput();

  // Lưu staffList xuống localStorage
  storeStaffList();
}

// Hàm chỉnh sửa thông tin nhân viên (cần xem lại phần giwof lầm)
function selectStaffToUpdate(staffId) {
  let selectedStaff = staffList.find((staff) => {
    return staff.id === staffId;
  });

  getElement("#tknv").value = selectedStaff.id;
  getElement("#name").value = selectedStaff.name;
  getElement("#email").value = selectedStaff.email;
  getElement("#password").value = selectedStaff.password;
  getElement("#datepicker").value = selectedStaff.datePicker;
  getElement("#luongCB").value = selectedStaff.basicSalary;
  getElement("#chucvu").value = selectedStaff.service;
  getElement("#gioLam").value = selectedStaff.workHoursMonth;

  getElement("#tknv").disabled = true;
  // getElement("#btnThemNV").disabled = true;
}

// Hàm xóa nhân viên
function deleteStaff(staffId) {
  staffList = staffList.filter((staff) => {
    return staff.id !== staffId;
  });

  renderTable(staffList);

  storeStaffList();
}

// Hàm tìm nhân viên theo loại
function searchStaff() {
  let search = getElement("#searchName").value;

  let newStaffList = staffList.filter((staff) => {
    let type = staff.calcRank().toLowerCase();
    search = search.toLowerCase();
    return type.indexOf(search) !== -1;
  });

  renderTable(newStaffList);
}

// Hàm cập nhật
function updateStaff() {
  let id = getElement("#tknv").value;
  let name = getElement("#name").value;
  let email = getElement("#email").value;
  let password = getElement("#password").value;
  let datePicker = getElement("#datepicker").value;
  let basicSalary = +getElement("#luongCB").value;
  let service = getElement("#chucvu").value;
  let workHour = getElement("#gioLam").value;

  // Kiểm tra các input có hợp lệ không
  let isValid = validate();

  // isValid là false => dữ liệu không hợp lệ
  if (!isValid) {
    return;
  }

  const staff = new Staff(
    id,
    name,
    email,
    password,
    datePicker,
    basicSalary,
    service,
    workHour
  );

  // B3: Cập nhật thông tin mới của student
  let index = staffList.findIndex((staff) => {
    return staff.id === id;
  });
  staffList[index] = staff;

  renderTable(staffList);
  resetInput();
  storeStaffList();
}

// Hàm reset thông tin khi đã thêm mới
function resetInput() {
  getElement("#tknv").value = "";
  getElement("#name").value = "";
  getElement("#email").value = "";
  getElement("#password").value = "";
  getElement("#datepicker").value = "";
  getElement("#luongCB").value = "";
  getElement("#chucvu").value = "Chọn chức vụ";
  getElement("#gioLam").value = "";

  getElement("#tknv").disabled = false;
}

// Hiển thị danh sách staff ra table
function renderTable(staffList) {
  let html = staffList.reduce((output, staff) => {
    return (
      output +
      `
            <tr>
                <td>${staff.id}</td>
                <td>${staff.name}</td>
                <td>${staff.email}</td>
                <td>${staff.datePicker}</td>
                <td>${staff.service}</td>
                <td>${Intl.NumberFormat("vn-VN").format(
                  staff.calcTotalSalary()
                )}</td>
                <td>${staff.calcRank()}</td>
                <td>
                    <button class="btn btn-primary" onclick="selectStaffToUpdate('${
                      staff.id
                    }')" data-toggle="modal"
                    data-target="#myModal">
                        Chỉnh sửa
                    </button>
                    <button class="btn btn-danger" onclick="deleteStaff('${
                      staff.id
                    }')">
                        Xóa
                    </button>
                </td>
            </tr>
        `
    );
  }, "");

  getElement("#tableDanhSach").innerHTML = html;
}

function getElement(selector) {
  return document.querySelector(selector);
}

// Validate input trước khi cho phép thêm/cập nhật sinh viên
function validate() {
  let isValid = true;

  // Kiểm tra mã nhân viên
  let id = getElement("#tknv").value;

  // Vì dòng thông báo là trong main.css để display none nên cần có đoạn này để hiển thị thông báo
  getElement("#tbTKNV").style.display = "block";

  if (!id.trim()) {
    isValid = false;
    getElement("#tbTKNV").innerHTML = "Mã nhân viên không được để trống";
  } else if (!/\b[?=\d]{4,6}\b/.test(id)) {
    isValid = false;
    getElement("#tbTKNV").innerHTML = "Mã nhân viên cần có 4-6 ký số";
  } else {
    getElement("#tbTKNV").innerHTML = "";
  }

  // Kiểm tra tên nhân viên
  let name = getElement("#name").value;
  getElement("#tbTen").style.display = "block";

  if (!name.trim()) {
    isValid = false;
    getElement("#tbTen").innerHTML = "Tên nhân viên không được để trống";
  } else if (
    !/(^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$)/.test(
      name
    )
  ) {
    isValid = false;
    getElement("#tbTen").innerHTML = "Tên nhân viên phải là chữ";
  } else {
    getElement("#tbTen").innerHTML = "";
  }

  // Kiểm tra email
  let email = getElement("#email").value;
  getElement("#tbEmail").style.display = "block";

  if (!email.trim()) {
    isValid = false;
    getElement("#tbEmail").innerHTML = "Email nhân viên không được để trống";
  } else if (!/^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
    isValid = false;
    getElement("#tbEmail").innerHTML = "Email nhân viên không hợp lệ";
  } else {
    getElement("#tbEmail").innerHTML = "";
  }

  // Kiểm tra mật khẩu
  let password = getElement("#password").value;
  getElement("#tbMatKhau").style.display = "block";

  if (!password.trim()) {
    isValid = false;
    getElement("#tbMatKhau").innerHTML = "Mật khẩu không được để trống";
  } else if (
    !/(?=.{6,10})((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s])).*$/.test(
      password
    )
  ) {
    isValid = false;
    getElement("#tbMatKhau").innerHTML =
      "Mật khẩu không hợp lệ.  Cần 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)";
  } else {
    getElement("#tbMatKhau").innerHTML = "";
  }

  // Kiểm tra ngày làm
  let datePicker = getElement("#datepicker").value;
  getElement("#tbNgay").style.display = "block";

  if (!datePicker.trim()) {
    isValid = false;
    getElement("#tbNgay").innerHTML = "Ngày vào làm không được để trống";
  } else if (
    !/^(((0[13-9]|1[012])[\/]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-/]?31|02[-/]?(0[1-9]|1[0-9]|2[0-8]))[-/]?[0-9]{4}|02[-/]?29[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/.test(
      datePicker
    )
  ) {
    isValid = false;
    getElement("#tbNgay").innerHTML = "Ngày vào làm không hợp lệ (mm/dd/yyyy)";
  } else {
    getElement("#tbNgay").innerHTML = "";
  }

  // Kiểm tra lương cơ bản
  let basicSalary = getElement("#luongCB").value;
  getElement("#tbLuongCB").style.display = "block";

  if (!basicSalary.trim()) {
    isValid = false;
    getElement("#tbLuongCB").innerHTML = "Lương cơ bản không được để trống";
  } else if (!(basicSalary >= 1_000_000 && basicSalary <= 20_000_000)) {
    isValid = false;
    getElement("#tbLuongCB").innerHTML =
      "Lương cơ bản phải từ 1.000.000 -> 20.000.000";
  } else {
    getElement("#tbLuongCB").innerHTML = "";
  }

  // Kiểm tra chọn chức vụ
  let service = getElement("#chucvu").value;
  getElement("#tbChucVu").style.display = "block";

  if (!service.trim()) {
    isValid = false;
    getElement("#tbChucVu").innerHTML = "Chức vụ không được để trống";
  } else if (service === "Chọn chức vụ") {
    isValid = false;
    getElement("#tbChucVu").innerHTML = "Vui lòng chọn chức vụ";
  } else {
    getElement("#tbChucVu").innerHTML = "";
  }

  // Kiểm tra số giờ làm
  let workHour = getElement("#gioLam").value;
  getElement("#tbGiolam").style.display = "block";

  if (!workHour.trim()) {
    isValid = false;
    getElement("#tbGiolam").innerHTML = "Số giờ làm không được để trống";
  } else if (!(workHour >= 80 && workHour <= 200)) {
    isValid = false;
    getElement("#tbGiolam").innerHTML = "Số giờ làm trong tháng 80 -> 200 giờ";
  } else {
    getElement("#tbGiolam").innerHTML = "";
  }

  return isValid;
}

// Hàm xử lý lưu/lấy thông tin danh sách nhân viên từ localStorage
function storeStaffList() {
  // Chuyển array staffList thành JSON
  const json = JSON.stringify(staffList);
  // Lưu xuống localStorage với key staffList
  localStorage.setItem("staffList", json);
}

function getStaffList() {
  // Lấy data từ localStorage với key là staffList
  const json = localStorage.getItem("staffList");

  if (!json) {
    return [];
  }

  // Chuyển JSON thành array
  const staffList = JSON.parse(json);

  for (let index = 0; index < staffList.length; index++) {
    const staff = staffList[index];

    staffList[index] = new Staff(
      staff.id,
      staff.name,
      staff.email,
      staff.password,
      staff.datePicker,
      staff.basicSalary,
      staff.service,
      staff.workHoursMonth
    );
  }
  return staffList;
}
