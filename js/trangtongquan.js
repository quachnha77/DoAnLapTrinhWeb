// đếm tài khoản
document.addEventListener('DOMContentLoaded', function () {
    if (typeof(Storage) !== "undefined") {
        var data = localStorage.getItem('accounts');
        if (data !== null) {
            try {
                var accounts = JSON.parse(data);
                var accountElement = document.querySelector('.sotaikhoan');
                if (accountElement) {
                    accountElement.textContent = accounts.length;
                }
            } catch (e) {
                console.error("Lỗi khi phân tích cú pháp JSON từ localStorage:", e);
            }
        } else {
            console.log("Không có dữ liệu tài khoản trong localStorage.");
        }
    } else {
        console.error("Local Storage không được hỗ trợ trong trình duyệt này.");
    }
});

// đếm blog
document.addEventListener('DOMContentLoaded', function () {
    if (typeof(Storage) !== "undefined") {
        var data = localStorage.getItem('Blog');
        if (data !== null) {
            try {
                var blogs = JSON.parse(data);
                var blogElement = document.querySelector('.sobaiviet');
                if (blogElement) {
                    blogElement.textContent = blogs.length;
                }
            } catch (e) {
                console.error("Lỗi khi phân tích cú pháp JSON từ localStorage:", e);
            }
        } else {
            console.log("Không có dữ liệu tài khoản trong localStorage.");
        }
    } else {
        console.error("Local Storage không được hỗ trợ trong trình duyệt này.");
    }
});

//đếm sothongtinlienhe
document.addEventListener('DOMContentLoaded', function () {
    if (typeof(Storage) !== "undefined") {
        var data = localStorage.getItem('thongTinLienHe');
        if (data !== null) {
            try {
                var tts = JSON.parse(data);
                var ttElement = document.querySelector('.sothongtinlienhe');
                if (ttElement) {
                    ttElement.textContent = tts.length;
                }
            } catch (e) {
                console.error("Lỗi khi phân tích cú pháp JSON từ localStorage:", e);
            }
        } else {
            console.log("Không có dữ liệu tài khoản trong localStorage.");
        }
    } else {
        console.error("Local Storage không được hỗ trợ trong trình duyệt này.");
    }
});



// quanlynguoidung
document.querySelector('.trangtongquan').addEventListener('click', function() {
    window.location.href = 'trangtongquan.html';
});
document.querySelector('.quanlythongtin').addEventListener('click', function() {
    window.location.href = 'quanlythongtin.html';
});
document.querySelector('.quanlynguoidung').addEventListener('click', function() {
    window.location.href = 'quanlynguoidung.html';
});
document.querySelector('.quanlybaiviet').addEventListener('click', function() {
    window.location.href = 'quanlybaiviet.html';
});


document.querySelector('.trangchu').addEventListener('click', function() {
    window.location.href = 'trangchu.html';
});
document.querySelector('.taikhoan').addEventListener('click', function() {
    window.location.href = 'taikhoan.html';
});
document.querySelector('.dangxuat').addEventListener('click', function() {
    if(confirm('Đăng xuất!') == true){
        window.location.href = 'trangchu.html';
        localStorage.removeItem('login');
    }
});