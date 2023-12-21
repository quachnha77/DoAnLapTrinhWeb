document.addEventListener("DOMContentLoaded", function() {
    const btnLuu = document.getElementById('btn-luu');
    const btnDoiMk = document.getElementById('btn-doimk');

    function checkLoginStatus() {
        // Lấy tên người dùng từ localStorage
        var username = localStorage.getItem('login');
        var accountList = document.querySelector('.account-ct');

        // Kiểm tra nếu tên người dùng tồn tại
        if (username) {
            // Ẩn các liên kết đăng ký/đăng nhập
            accountList.style.display = 'none';

            // Cập nhật giao diện, thay thế icon bằng tên người dùng
            var userIcon = document.querySelector('.fa-userss');
            if (userIcon) {
                var userDiv = document.createElement('i');
                userDiv.textContent = username; // Thêm tên người dùng
                userIcon.parentNode.insertBefore(userDiv, userIcon.nextSibling);

                // load data
                var data = localStorage.getItem("accounts");
                var users = JSON.parse(data);
                // Lấy trường nhập liệu fullname và email
                var fullnameInput = document.getElementById('fullname');
                var emailInput = document.getElementById('email');

                var user = users.find(user => user.fullname === username);
                if (user) {
                    // Gán giá trị vào trường nhập liệu nếu có dữ liệu
                    fullnameInput.value = user.fullname;
                    emailInput.value = user.email; 
                }

                //đăng xuất
                document.querySelector('.account-logout').addEventListener('click', function() {
                    if(confirm('Đăng xuất!') == true){
                        window.location.href = 'trangchu.html';
                        localStorage.removeItem('login');
                    }
                });

            
                // của ông Vinh
                btnLuu.addEventListener("click", function(e) {
                    // Ngăn chặn sự kiện mặc định (tải lại trang)
                    e.preventDefault();
                    // Gọi hàm validateForm() khi nút được nhấn
                    validateForm();
                    //changeInformation();
                });
                btnDoiMk.addEventListener('click',function (e) {
                    e.preventDefault();
                    changePassWord();
            
                })
            
            }
        }
    }

    checkLoginStatus();
});


// Gán sự kiện "click" vào nút "Đăng lưu"
function validateForm() {
    let isValid = false;
    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    var currentaccounts = localStorage.getItem('login');
    var index = -1;
    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].fullname === currentaccounts) {
            console.log("Da tim");
            index = i;
            console.log(index);
            break; // Thêm break để dừng vòng lặp khi tìm thấy index
        }
    }

    var fullnameErrorSpan = document.querySelector('.form-message.fullname');
    var emailErrorSpan = document.querySelector('.form-message.email');
    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.length == 0) {
        emailErrorSpan.innerText = "Email không được để trống!";
        isValid = false;
    } else if(!emailRegex.test(email)){
        emailErrorSpan.innerText = "Email không hợp lệ!";
        isValid = false;
    }
    else {
        emailErrorSpan.innerText = '';
        isValid = true;
    }

    
    if (fullname.length < 2 || fullname.length > 30) {
        console.log("ten chua du");
        fullnameErrorSpan.innerText = "Họ và tên phải có từ 2 đến 30 kí tự!";
        isValid = false;
    } else {
        fullnameErrorSpan.innerText = '';
        isValid = true;
    }

    if (isValid) {
       
        let user = {
            fullname: document.getElementById('fullname').value,
            email: document.getElementById('email').value,
            password: accounts[index].password,
            role: accounts[index].role
        };

        // Lấy thông tin tài khoản từ local storage
        // accounts[index].fullname = user.fullname;
        // accounts[index].email = user.email;
        console.log(user);

        accounts[index] = user;
        localStorage.setItem('login',user.fullname);
        localStorage.setItem("accounts", JSON.stringify(accounts));
        alert('Thông tin đã được lưu');
    }

    
}


function changePassWord() {
    let valid = true;
    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    var currentaccounts = localStorage.getItem('login') || [];
    var index = -1;
    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].fullname === currentaccounts) {
            console.log("Da tim");
            index = i;
            console.log(index);
            break; // Thêm break để dừng vòng lặp khi tìm thấy index
        }
    }
    const currentPassword = document.getElementById('password').value;
    var passwordErrorSpan = document.getElementById('spanpassword');
    var newPasswordError = document.getElementById('newpasswordspan')
    var newPassword = document.getElementById('password-new').value;
    var confirmPassword = document.getElementById('password-new1').value;
    var confirmPasswordError = document.getElementById('confirmPasswordError');
    if(currentPassword !== accounts[index].password){
        console.log('khong hop le')
        passwordErrorSpan.innerHTML = "Mật khẩu không đúng";
        valid = false;
    }
    const hasUppercase = /[A-Z]/.test(newPassword);

    const isLongEnough = newPassword.length >= 8;
    if(!hasUppercase){
        newPasswordError.innerHTML = 'Mật khẩu phải có chữ in hoa';
        valid = false;
    }
    if(!isLongEnough){
        newPasswordError.innerHTML = 'Mật khẩu phải trên 8 kí tự';
        valid = false;
    }
    if(confirmPassword !== newPassword){
        confirmPasswordError.innerHTML = 'mật khẩu không khớp'
        valid = false;
    }

    if(valid){
        accounts[index].password = newPassword;
        localStorage.setItem("accounts", JSON.stringify(accounts[index]));
        alert('Thông tin đã được lưu');
    }
}



