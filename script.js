function showImage(src) {
    const displayImage = document.getElementById('display');
    displayImage.src = src;
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".gallery-item").forEach(item => {
        item.addEventListener("click", function() {
            showImage(this.src);
        });
    });
});