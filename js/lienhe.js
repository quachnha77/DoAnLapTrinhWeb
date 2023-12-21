"use strict"
/*
var index = 1;
changeImage = function()
{
    var imgs = ["/assets/images/rawkkim-ZDkTvbYIapg-unsplash 1.png","/assets/images/nafinia-putra-Kwdp-0pok-I-unsplash 1.png","/assets/images/duy-vo-_ozNkxQYNG4-unsplash 1.png"]
    document.getElementById('imgChange').src = imgs[index];
    index++;
    if(index == 3){
        index = 0;
    }
}
setInterval(changeImage,3000);
*/

function luuLienHe() {
    let thongTinLienHe = {
        hoTen: document.getElementById('ho_ten').value,
        email: document.getElementById('email').value,
        diaChi: document.getElementById('dia_chi').value,
        soDienThoai: document.getElementById('so_dien_thoai').value,
        noiDung: document.getElementById('noi_dung').value
    };
    let ttnds = localStorage.getItem("thongTinLienHe") ? JSON.parse(localStorage.getItem("thongTinLienHe")) : [];
    ttnds.push(thongTinLienHe);
    localStorage.setItem("thongTinLienHe", JSON.stringify(ttnds));
    alert('Thông tin liên hệ đã được lưu.');
    resetLienHe();
}

function resetLienHe() {
    document.getElementById('ho_ten').value = "";
    document.getElementById('email').value = "";
    document.getElementById('dia_chi').value = "";
    document.getElementById('so_dien_thoai').value = "";
    document.getElementById('noi_dung').value = "";
}