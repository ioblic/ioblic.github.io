function handleImageClick(imagePath) {
    const colorThief = new ColorThief();
    const image = new Image();
    image.src = imagePath;

    image.onload = function () {
        const dominantColor = colorThief.getColor(image);
        setBackgroundColor(dominantColor);
        showDetailView(imagePath);
    };
}

function setBackgroundColor(color) {
    document.body.style.backgroundColor = `rgb(${color.join(', ')})`;
}

function showDetailView(imagePath) {
    const detailView = document.querySelector('.detail-view');
    const detailImage = detailView.querySelector('img');

    detailImage.src = imagePath;
    detailView.style.display = 'flex';
}

function closeDetailView() {
    const detailView = document.querySelector('.detail-view');
    detailView.style.display = 'none';
}
