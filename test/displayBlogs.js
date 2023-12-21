// Kiểm tra xem dữ liệu có tồn tại trong Local Storage không
if (localStorage.getItem('Blog')) {
    // Lấy dữ liệu từ Local Storage
    const data = JSON.parse(localStorage.getItem('Blog'));

    // Tìm phần tử HTML để hiển thị dữ liệu
    const loai = document.getElementById('type');
    const tieude = document.getElementById('title');
    const noidung = document.getElementById('noidung');

    // Hiển thị dữ liệu trên trang web
    loai.innerText = data[3].loai;
    tieude.innerText = data[3].tieude;
    noidung.innerText = data[3].noidung;

} else {
    // Nếu không có dữ liệu trong Local Storage
    const localStorageDataElement = document.getElementById('localStorageData');
    localStorageDataElement.textContent = 'Không có dữ liệu trong Local Storage';
}
