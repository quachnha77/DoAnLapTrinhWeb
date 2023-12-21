//khai báo use strict thì tất cả các dòng code ở phía dưới dòng khai báo use strict sẽ được quản lý một cách nghiêm ngặt hơn về cú pháp
"use strict"

// Lấy tham chiếu đến nút "Đăng ký" bằng cách sử dụng id của nó
var btnDangKy = document.getElementById("btn-dangky");

// Gán sự kiện "click" vào nút "Đăng ký"
btnDangKy.addEventListener("click", function() {
    // Ngăn chặn sự kiện mặc định (tải lại trang)
    event.preventDefault();
    // Gọi hàm validateForm() khi nút được nhấn
    validateForm();
});

function validateForm() {
    let isValid = true;
    var fullnameErrorSpan = document.querySelector('.form-message.fullname');
    var emailErrorSpan = document.querySelector('.form-message.email');
    var passwordErrorSpan = document.querySelector('.form-message.pass');

    // Kiểm tra fullname
    var fullname = document.forms["registerForm"]["fullname"].value;
    if(fullname.length < 2 || fullname.length > 30) {
        fullnameErrorSpan.innerText = "Họ và tên phải có từ 2 đến 30 kí tự!";
        isValid = false;
    }else{
        fullnameErrorSpan.innerText = '';
    }

  

    // Kiểm tra Email
    var email = document.forms["registerForm"]["email"].value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        emailErrorSpan.innerText = "Email không hợp lệ!";
        isValid = false;
    }else{
        emailErrorSpan.innerText = '';
    }

    // Kiểm tra Password
    var password = document.forms["registerForm"]["password"].value;
    var hasUpperCase = /[A-Z]/.test(password);
    var hasLowerCase = /[a-z]/.test(password);
    var hasNumbers = /\d/.test(password);
    var hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!hasUpperCase) {
        passwordErrorSpan.innerText = "Mật khẩu cần ít nhất 1 chữ cái in hoa!";
        isValid = false;
    } else if (!hasLowerCase) {
        passwordErrorSpan.innerText = "Mật khẩu cần ít nhất 1 chữ cái thường!";
        isValid = false;
    } else if (!hasNumbers) {
        passwordErrorSpan.innerText = "Mật khẩu cần ít nhất 1 số!";
        isValid = false;
    } else if (!hasSpecialChar) {
        passwordErrorSpan.innerText = "Mật khẩu cần ít nhất 1 kí tự đặc biệt!";
        isValid = false;
    } else if (password.length < 8 || password.length > 20) {
        passwordErrorSpan.innerText = "Mật khẩu phải từ 8 đến 20 kí tự!";
        isValid = false;
    } else {
        passwordErrorSpan.innerText = '';
    }

    
    // Kiểm tra dữ liệu và xác định rằng tạo tài khoản thành công
    if (isValid) {
        // Tạo một đối tượng chứa thông tin người dùng mới
        let user = {
            fullname: document.forms["registerForm"]["fullname"].value,
            email: document.forms["registerForm"]["email"].value,
            password: document.forms["registerForm"]["password"].value,
            role: 'none',
        };

        // Kiểm tra xem đã có danh sách tài khoản trong localStorage chưa
        let accounts = localStorage.getItem("accounts") ? JSON.parse(localStorage.getItem("accounts")) : [];

        // Thêm đối tượng thông tin người dùng mới vào danh sách tài khoản
        accounts.push(user);

        // Lưu danh sách tài khoản đã được cập nhật vào localStorage
        localStorage.setItem("accounts", JSON.stringify(accounts));


        alert("Tạo tài khoản thành công!");

        // Reset the input fields
        document.forms["registerForm"]["fullname"].value = "";
        document.forms["registerForm"]["email"].value = "";
        document.forms["registerForm"]["password"].value = "";

        // Optionally, you can clear the error messages as well
        fullnameErrorSpan.innerText = "";
        emailErrorSpan.innerText = "";
        passwordErrorSpan.innerText = "";


        console.log("Tạo tài khoản thành công!", user);
    }

    // Nếu dữ liệu hợp lệ, gọi hàm gửi dữ liệu lên máy chủ
    return isValid;
}


