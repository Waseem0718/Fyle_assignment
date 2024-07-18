function changeImage(imageSrc) {
    const imageElement = document.getElementById('project-image-id');
    imageElement.style.opacity = 0;

    setTimeout(() => {
        imageElement.src = imageSrc;
        imageElement.style.opacity = 1;
    }, 500);
}

function openModal() {
    document.getElementById("contactModal").style.display = "block";
}

function closeModal() {
    document.getElementById("contactModal").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("contactModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

