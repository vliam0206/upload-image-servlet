const fileUploader = document.getElementById('file-uploader');

const imageGrid = document.getElementById('image-grid');

fileUploader.addEventListener('change', (event) => {
    imageGrid.innerHTML = "";
    const files = event.target.files;
    for (i = 0; i < files.length; i++) {
        var file = files[i];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener('load', (event) => {
            const img = document.createElement('img');
            img.className = "uploaded-img";
            imageGrid.appendChild(img);
            img.src = event.target.result;
            img.alt = file.name;
        });
    }
});
