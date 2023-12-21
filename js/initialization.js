// Hàm để tạo tài khoản admin
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            id: 1,
            fullname: "ADMIN",
            email: "admin@gmail.com",
            password: "@Abc123456789",
            role: "Admin",
        });
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}