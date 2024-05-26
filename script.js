const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalInfo = document.getElementById("modalInfo");
var graphCanvas = document.getElementById('graph')
var ctx = graphCanvas.getContext('2d');
var graphCanvas1 = document.getElementById('graph1')
var ctx1 = graphCanvas.getContext('2d');
var graphCanvas2 = document.getElementById('graph2')
var ctx2 = graphCanvas.getContext('2d');
var graphCanvas3 = document.getElementById('graph3')
var ctx3 = graphCanvas.getContext('2d');
var charts = {};
function showModal(img) {
    var imageInfo = getImageInfo(img.id);
    modalImage.src = img.src;
    modalTitle.textContent = imageInfo.title;
    modalInfo.textContent = imageInfo.info;
    modal.style.display = "block";
    var chartId = 'chart-' + element.id;


    if (charts[chartId]) {
        charts[chartId].destroy();
    }


    if (img.id === "Daddy") {
        generateGraph(ctx, dataDaddy)
    } else if (img.id === 'DonOmar') {
        generateGraph(ctx1, dataDonOmar)
    } else if (img.id === 'Vico') {
        generateGraph(ctx2, dataVico)
    } else if (img.id === 'Tego') {
        generateGraph(ctx3, dataTego)

    }

}

function closeModal() {
    modal.style.display = "none";
    Object.values(charts).forEach(chart => chart.destroy());
    charts = {};
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

function generateGraph(ctx, data) {
    return new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
var dataDaddy = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [{
        label: 'Ventas de Daddy Yankee',
        data: [11242, 11249, 3, 5, 13, 4213],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }]
};
var dataVico = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [{
        label: 'Ventas de Vico',
        data: [1152, 1951, 315, 55, 52, 133],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }]
};
var dataTego = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [{
        label: 'Ventas de Tego',
        data: [122, 192, 333, 544, 22, 3441],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
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
