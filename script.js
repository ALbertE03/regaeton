const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalInfo = document.getElementById("modalInfo");
var graphCanvas = document.getElementById('graph')
var ctx = graphCanvas.getContext('2d');
let char;
function showModal(img) {
    var imageInfo = getImageInfo(img.id);
    modalImage.src = img.src;
    modalTitle.textContent = imageInfo.title;
    modalInfo.textContent = imageInfo.info;
    modal.style.display = "block";

    if (img.id === "Daddy") {
        generateGraph(ctx, dataDaddy)
    } else if (img.id === 'DonOmar') {
        generateGraph(ctx, dataDonOmar)
    } else if (img.id === 'Vico') {
        generateGraph(ctx, dataVico)
    } else if (img.id === 'Tego') {
        generateGraph(ctx, dataTego)
    }
}

function closeModal() {
    modal.style.display = "none";
    eliminarGraph();
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        eliminarGraph();
    }
}

function getImageInfo(imageId) {
    const imageInfo = {
        "Daddy": {

            title: "Daddy Yankee",
            info: "Ramón Luis Ayala Rodríguez (San Juan, Puerto Rico; 3 de febrero de 1977), conocido artísticamente como Daddy Yankee, es un cantante, compositor, productor discográfico, filántropo, locutor de radio​ y empresario puertorriqueño.​ Es considerado por los críticos y fanáticos de la música, como uno de los exponentes más significativos e influyentes en la historia del género Urbano y Cristiano. reguetón.​ Yankee acuñó la palabra «reguetón» en 1991 para describir el género musical que estaba surgiendo en Puerto Rico y que posteriormente se expandiría internacionalmente.​\
                    Es uno uno de los artistas de música latina más vendidos de todos los tiempos con más de 30 millones de ventas. En 2022 el artista fue reconocido por Billboard como Salón de la Fama."
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

//gráficos
function eliminarGraph() {
    if (char) {
        char.destroy()
    }
}
function generateGraph(ctx, data) {
    return char = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}


// datos
var dataDaddy = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [{
        label: 'Ventas de Daddy Yankee',
        data: [11242, 11249, 3, 5, 13, 4213],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};
var dataVico = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [{
        label: 'Ventas de Vico',
        data: [1152, 1951, 315, 55, 52, 133],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};
var dataTego = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [{
        label: 'Ventas de Tego',
        data: [122, 192, 333, 544, 22, 3441],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

var dataDonOmar = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [{
        label: 'Ventas de Don Omar',
        data: [8, 15, 5, 10, 4, 6],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};



fetch('https://github.com/ALbertE03/regaeton/blob/main/data/data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        // Manejar el error
    });
