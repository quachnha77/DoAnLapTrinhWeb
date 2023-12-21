document.addEventListener("DOMContentLoaded", function() {
    const next = document.querySelector('.bot2 .fa-caret-right');
    const prev = document.querySelector('.bot2 .fa-caret-left');
    const imageElements = document.querySelectorAll('.bot2 .icon img');

    // Khởi tạo hàng đợi với tất cả hình ảnh
    let imageQueue = Array.from(imageElements);

    function updateImageDisplay() {
        // Ẩn tất cả hình ảnh
        imageElements.forEach(img => img.style.display = 'none');

        // Hiển thị 5 hình ảnh đầu tiên trong hàng đợi
        for (let i = 0; i < Math.min(5, imageQueue.length); i++) {
            imageQueue[i].style.display = 'block';
        }
    }

    next.addEventListener('click', function() {
        // Di chuyển 5 hình ảnh từ đầu hàng đợi và thêm vào cuối
        for (let i = 0; i < 5 && imageQueue.length > 5; i++) {
            let img = imageQueue.shift();
            imageQueue.push(img);
        }
        updateImageDisplay();
    });

    prev.addEventListener('click', function() {
        // Di chuyển 5 hình ảnh từ cuối hàng đợi và thêm vào đầu
        for (let i = 0; i < 5 && imageQueue.length > 5; i++) {
            let img = imageQueue.pop();
            imageQueue.unshift(img);
        }
        updateImageDisplay();
    });

    updateImageDisplay();
});
