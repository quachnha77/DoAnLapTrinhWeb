document.addEventListener("DOMContentLoaded", function() {
    function checkLoginStatus() {
        // Lấy tên người dùng từ localStorage
        var username = localStorage.getItem('login');
        var accountList = document.querySelector('.account-ct');
        var logout = document.querySelector('.account-logout');
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
            }
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
});


