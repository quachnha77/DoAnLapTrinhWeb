"use strict"

// Lấy tham chiếu đến nút "Đăng nhập" bằng cách sử dụng id của nó
var btnDangNhap = document.getElementById("btn-dangnhap");

// Gán sự kiện "click" vào nút "Đăng nhập"
btnDangNhap.addEventListener("click", function() {
    // Ngăn chặn sự kiện mặc định (tải lại trang)
    event.preventDefault();
    // Gọi hàm validateForm() khi nút được nhấn
    validateForm();
});

function validateForm() {
    let isValid = true;
    var emailErrorSpan = document.querySelector('.form-message.email');
    var passwordErrorSpan = document.querySelector('.form-message.pass');
    
    var email = document.forms["loginForm"]["email"].value;    
    if(email.length==0) {
        emailErrorSpan.innerText = "Email không được để trống!";
        isValid = false;
    } else{
        emailErrorSpan.innerText = '';
    }

    var password = document.forms["loginForm"]["password"].value;
    if(password.length==0) {
        passwordErrorSpan.innerText = "Mật khẩu không được để trống!";
        isValid = false;
    } else {
        passwordErrorSpan.innerText = '';
    }

    // Lấy dữ liệu từ localStorage
    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    // Tìm kiếm tài khoản có email và mật khẩu khớp trong danh sách tài khoản
    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].email === email && accounts[i].password === password) {
            isValid = true;
            break;
        }else{
            isValid = false;
        }
    }
 
    if (isValid) {
        localStorage.setItem('login', accounts[i].fullname);
        console.log(accounts[i].fullname);
        // Sau khi toast biến mất, chuyển hướng trang
        const toast = document.getElementById("toast");
        toast.classList.remove("hidden");

        if(accounts[i].role =="Admin"){
            setTimeout(function() {
                toast.classList.add("hidden");
                // Sau khi toast biến mất, chuyển hướng trang
                window.location.href = "trangtongquan.html";
            }, 2500); // 2.5 giây sau đó ẩn toast đi và chuyển hướng trang
        }else{
            setTimeout(function() {
            toast.classList.add("hidden");
            // Sau khi toast biến mất, chuyển hướng trang
            window.location.href = "trangchu.html";
            }, 2500); // 2.5 giây sau đó ẩn toast đi và chuyển hướng trang
        }
        
    } else {
        const toast1 = document.getElementById("toast1");
        toast1.classList.remove("hidden");
        console.log("NULL");
        setTimeout(function() {
            toast1.classList.add("hidden");
        }, 3500);
    }
    return isValid;
}

var btnLayMK = document.getElementById("btn-laylaimk");
btnLayMK.addEventListener("click", function() {
    event.preventDefault();
    validateForm2();
});
function validateForm2() {
    let isValid = true;
    var emailErrorSpan = document.querySelector('.form-message.email1');
    
    var email = document.forms["layMK"]["email1"].value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if(email.length==0) {
        emailErrorSpan.innerText = "Email không được để trống!";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailErrorSpan.innerText = "Email không hợp lệ!";
        isValid = false;
    } else{
        emailErrorSpan.innerText = '';
    }

    if(isValid){
        sendEmail();
        //alert("Đăng nhập thành công!");

        // Reset the input fields
        document.forms["layMK"]["email1"].value = "";

        // Optionally, you can clear the error messages as well
        emailErrorSpan.innerText = "";



    }
    // Nếu dữ liệu hợp lệ, gọi hàm gửi dữ liệu lên máy chủ
    return isValid;
}

     

// Initialize Email.js with your user ID
emailjs.init('AnwtYnlsY8Wq68-pB');

// Function to send email
function sendEmail() {
    const recipientEmail = document.getElementById('email1').value;

    // Send the email
    emailjs.send('service_jtzlqja', 'template_694cz91', {
        from_name: "CAPHEVIET",
        message: "123",
        to_email: recipientEmail,
    }).then(function(response) {
        console.log('Email sent successfully', response);
        alert('Email sent successfully');
    }, function(error) {
        console.error('Email sending failed', error);
        alert('Email sending failed');
    });
}



function checkLoginStatus() { // nếu đang đăng nhập thì không vào đc trang đăng nhập
    // Lấy tên người dùng từ localStorage
    var username = localStorage.getItem('login');
    var accountList = document.querySelector('.account-ct');
    var logout = document.querySelector('.account-logout');
    // Kiểm tra nếu tên người dùng tồn tại
    if (username) {
        window.location.href = 'taikhoan.html';
    }else{
        logout.style.display = 'none';
    }
}
//đăng xuất
document.querySelector('.account-logout').addEventListener('click', function() {
    if(confirm('Đăng xuất!') == true){
        window.location.href = 'trangchu.html';
        localStorage.removeItem('login');
    }
});


checkLoginStatus();