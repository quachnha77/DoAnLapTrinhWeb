document.addEventListener("DOMContentLoaded", function() {
    var currentIndex = 0;
    var imageSources = [
        "assets/images/banner-main.png", 
        "assets/images/banner - 5.jpg",
        "assets/images/banner1.jpg"
    ];
    var imageElement = document.getElementById('banner-image');
    var prevButton = document.getElementById('prev-slide');
    var nextButton = document.getElementById('next-slide');

    function changeSlide(newIndex) { // index: length-1 -> 0
        if (newIndex < 0) {
            newIndex = imageSources.length - 1;
        } else if (newIndex >= imageSources.length) {
            newIndex = 0;
        }
        imageElement.src = imageSources[newIndex];
        currentIndex = newIndex;
    }

    // Function to handle the left arrow click
    prevButton.addEventListener('click', function() {
        changeSlide(currentIndex - 1);
    });

    // Function to handle the right arrow click
    nextButton.addEventListener('click', function() {
        changeSlide(currentIndex + 1);
    });

    setInterval(function() { // 3 giây sẽ chuyễn ảnh
        changeSlide(currentIndex + 1);
    }, 3000);
});