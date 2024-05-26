const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalInfo = document.getElementById("modalInfo");
let graphCanvas = document.getElementById('graph')
let ctx = graphCanvas.getContext('2d');
const ctx1 = document.getElementById('wordFrequencyChart').getContext('2d');
let char;
document.addEventListener('click', function (event) {
    let dropdownContent = document.getElementById('dropdown-content');
    let dropbtn = document.getElementById('dropbtn');
    if (event.target !== dropbtn && !dropbtn.contains(event.target)) {
        dropdownContent.style.display = 'none';
    }
});
function showModal(img) {
    let imageInfo = getImageInfo(img.id);
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
function graph1(ctx1, words, counts) {
    eliminarGraph()
    return char = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: words,
            datasets: [{
                label: 'Frecuencia de palabras (Antes)',
                data: counts,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
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
let dataDaddy = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [{
        label: 'Ventas de Daddy Yankee',
        data: [11242, 11249, 3, 5, 13, 4213],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};
let dataVico = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [{
        label: 'Ventas de Vico',
        data: [1152, 1951, 315, 55, 52, 133],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};
let dataTego = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [{
        label: 'Ventas de Tego',
        data: [122, 192, 333, 544, 22, 3441],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

let dataDonOmar = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [{
        label: 'Ventas de Don Omar',
        data: [8, 15, 5, 10, 4, 6],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};


//Json
fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
        const song = []
        for (const dict of Object.values(data)) {
            for (const lyrics of dict) {
                if ("letra" in lyrics) {
                    song.push(lyrics["letra"])
                }
            }
        }

        const song1 = []
        for (const dict1 of Object.values(data)) {
            for (const lyrics1 of dict1) {
                if ("letra1" in lyrics1) {
                    song.push(lyrics1["letra1"])
                }
            }
        }
        const song2 = []
        for (const dict2 of Object.values(data)) {
            for (const lyrics2 of dict2) {
                if ("letra2" in lyrics2) {
                    song.push(lyrics2["letra2"])
                }
            }
        }
        const letras0 = song.join(" ")
        const letras1 = song1.join(" ")
        const letras2 = song2.join(" ")
        const letras = (letras0 + letras1) + letras2
        util(letras)

        function util(text) {
            const stopwords = ["vamos", 'toma', 'dale', 'dame', 'alaba', 'dónde', 'habríais', 'estéis', 'fueron', 'tuvieses', 'yo', 'tendréis', 'vuestro', 'tuviésemos', 'algo', 'una', 'fuiste', 'tendré', 'tu', 'hayamos', 'estábamos', 'sentido', 'nada', 'sentidos', 'antes', 'ya', 'como', 'siente', 'mi', 'hubiera', 'habrías', 'habíamos', 'fuesen', 'fui', 'los', 'tuviéramos', 'tengas', 'estos', 'tendrías', 'tanto', 'estuvieras', 'tened', 'habiendo', 'fuerais', 'te', 'fueras', 'estuviéramos', 'o', 'al', 'habían', 'fuimos', 'habido', 'tuvieras', 'tenidas', 'habrían', 'su', 'estaban', 'teniendo', 'tus', 'del', 'tuviste', 'que', 'estáis', 'unos', 'estuvieses', 'habéis', 'estaré', 'serías', 'estaríamos', 'tenemos', 'estuvieran', 'estados', 'mía', 'fuisteis', 'porque', 'nosotros', 'esta', 'cual', 'tuvieran', 'algunas', 'estarán', 'vuestra', 'nos', 'seas', 'tengamos', 'tenida', 'erais', 'serían', 'sería', 'estuviste', 'tuve', 'mías', 'de', 'eras', 'estaríais', 'ese', 'han', 'habrán', 'habidos', 'estuvieron', 'eres', 'muchos', 'cuando', 'tenían', 'ellos', 'estando', 'tenía', 'tú', 'estuvieseis', 'tienen', 'con', 'el', 'nuestros', 'esos', 'tendrás', 'ellas', 'tenidos', 'habidas', 'esté', 'fueses', 'sobre', 'pero', 'hay', 'estaréis', 'suyos', 'seáis', 'tienes', 'hubo', 'durante', 'un', 'algunos', 'estuvimos', 'tuvieseis', 'tuvimos', 'seremos', 'ha', 'estarás', 'estará', 'otro', 'más', 'estuvo', 'qué', 'todos', 'habremos', 'estabas', 'somos', 'habida', 'estuvierais', 'era', 'sentida', 'sea', 'tengo', 'le', 'ti', 'eran', 'donde', 'él', 'tuvieron', 'tuviera', 'todo', 'serás', 'fue', 'hubieses', 'teníamos', 'e', 'la', 'has', 'estén', 'estaría', 'vuestros', 'seré', 'muy', 'habías', 'nuestra', 'para', 'tenías', 'hubiéramos', 'tendríais', 'estar', 'tuvo', 'por', 'he', 'teníais', 'estemos', 'fueseis', 'uno', 'fueran', 'sintiendo', 'estuviesen', 'fuéramos', 'hubiste', 'tuviese', 'sin', 'hubierais', 'tendríamos', 'tuyo', 'habréis', 'será', 'tenéis', 'sean', 'otra', 'les', 'nuestro', 'soy', 'contra', 'las', 'también', 'mío', 'estado', 'hayan', 'son', 'éramos', 'esa', 'están', 'ante', 'y', 'tengan', 'vuestras', 'poco', 'estadas', 'tuviesen', 'estás', 'esas', 'nosotras', 'hubieran', 'no', 'desde', 'sus', 'haya', 'hubiese', 'ni', 'os', 'estad', 'tuvisteis', 'este', 'sí', 'mí', 'estamos', 'estuvisteis', 'estuve', 'vosotras', 'mis', 'habrá', 'serán', 'hubieseis', 'fuera', 'se', 'hubieras', 'tendrían', 'estarían', 'hayas', 'a', 'fuésemos', 'sois', 'habré', 'sentid', 'hemos', 'tendremos', 'tendrán', 'nuestras', 'habrás', 'vosotros', 'estaremos', 'hubiesen', 'seamos', 'míos', 'seréis', 'lo', 'suyas', 'estés', 'tenga', 'eso', 'tengáis', 'está', 'habríamos', 'tuyas', 'esto', 'quienes', 'estarías', 'tuyos', 'otras', 'quien', 'entre', 'estuviese', 'estoy', 'estaba', 'estabais', 'es', 'tendrá', 'seríamos', 'hube', 'mucho', 'tenido', 'había', 'tiene', 'sentidas', 'tuvierais', 'hasta', 'estuviera', 'suya', 'estada', 'tendría', 'hubisteis', 'suyo', 'estuviésemos', 'habría', 'en', 'hayáis', 'hubimos', 'habíais', 'hubiésemos', 'tuya', 'otros', 'seríais', 'hubieron', 'fuese', 'estas', 'ella', 'me'];
            function tokenizeAndFilter(text) {
                return text.toLowerCase()
                    .replace(/[^a-záéíóúñ\s]/g, '') // Eliminar caracteres no alfabéticos
                    .split(/\s+/)
                    .filter(word => word.length > 3 && !stopwords.includes(word)); // Filtrar stopwords y palabras cortas
            }
            // Contar la frecuencia de cada palabra
            var wordFrequency = tokenizeAndFilter(text).reduce((freq, word) => {
                freq[word] = (freq[word] || 0) + 1;
                return freq
            }, {});
            // Ordenar las palabras por frecuencia
            const sortedWords = Object.entries(wordFrequency)
                .sort((a, b) => b[1] - a[1])
                .map(([word, count]) => ({ word, count }));
            // las 15 palabras más repetidas
            const topWords = sortedWords.slice(0, 15);
            const words = topWords.map(item => item.word);
            const counts = topWords.map(item => item.count);
            graph1(ctx1, words, counts)
        }

    })
    .catch(error => {
        console.error("error al cargar el Json " + error)
    });



