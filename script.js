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
            info: "Ramón Luis Ayala Rodríguez (San Juan, Puerto Rico; 3 de febrero de 1977), conocido artísticamente como Daddy Yankee, es un cantante, compositor, productor discográfico, filántropo, locutor de radio​ y empresario puertorriqueño.​ Es considerado por los críticos y fanáticos de la música, como uno de los exponentes más significativos e influyentes en la historia del género Urbano y Cristiano. reguetón.​ Yankee acuñó la palabra «reguetón» en 1991 para describir el género musical que estaba surgiendo en Puerto Rico y que posteriormente se expandiría internacionalmente.​\
                    Es uno uno de los artistas de música latina más vendidos de todos los tiempos con más de 30 millones de ventas. En 2022 el artista fue reconocido por Billboard como Salón de la Fama"
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




//API

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
});

xhr.open('GET', 'https://spotify23.p.rapidapi.com/artists/?ids=2w9zwq3AktTeYYMuhMjju8');
xhr.setRequestHeader('x-rapidapi-key', '562c7281d4msh24bfb8276874a39p1bad78jsn99d1048ac0f4');
xhr.setRequestHeader('x-rapidapi-host', 'spotify23.p.rapidapi.com');

xhr.send(data);