function showImage(src, description) {
    document.getElementById('main-image').src = src;
    document.getElementById('image-description').innerText = description;
}

function scrollThumbnails(amount) {
    document.getElementById('thumbnails').scrollBy(0, amount);
}