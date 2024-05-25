const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalInfo = document.getElementById("modalInfo");

function showModal(img) {
    const imageInfo = getImageInfo(img.id);
    modalImage.src = img.src;
    modalTitle.textContent = imageInfo.title;
    modalInfo.textContent = imageInfo.info;
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function getImageInfo(imageId) {
    const imageInfo = {
        "Daddy": {
            title: "Daddy Yankee",
            info: "Daddy Yankee es un cantante, rapero, compositor, actor y productor discográfico puertorriqueño. Es considerado uno de los pioneros del reguetón y uno de los artistas más influyentes del género."
        },
        "DonOmar": {
            title: "Don Omar",
            info: "Don Omar es un cantante, rapero y compositor puertorriqueño. Es considerado uno de los artistas más importantes del reguetón y ha sido pionero en la expansión del género a nivel mundial."
        },
        "Vico": {
            title: "Vico C",
            info: "Vico C es un rapero y compositor puertorriqueño, considerado uno de los pioneros del reguetón y uno de los artistas más influyentes del género en sus inicios."
        },
        "Tego": {
            title: "Tego Calderón",
            info: "Tego Calderón es un cantante, rapero y compositor puertorriqueño. Es considerado uno de los artistas más importantes del reguetón y ha contribuido a la expansión del género a nivel mundial."
        }
    };

    return imageInfo[imageId];
}
