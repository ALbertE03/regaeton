const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalInfo = document.getElementById("modalInfo");
let graphCanvas = document.getElementById('graph')
let ctx = graphCanvas.getContext('2d');
const ctx1 = document.getElementById('wordFrequencyChart').getContext('2d');
const ctx2 = document.getElementById('actual').getContext('2d');
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
    } else if (img.id === "Bad") {
        generateGraph(ctx, dataBad)
    } else if (img.id === "Karol") {
        generateGraph(ctx, dataKarol)
    } else if (img.id === "Feid") {
        generateGraph(ctx, dataFeid)
    } else if (img.id === "Rauw") {
        generateGraph(ctx, dataRauw)
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
            info: "Ramón Luis Ayala Rodríguez, San Juan, Puerto Rico; 3 de febrero de 1977, conocido artísticamente como Daddy Yankee, es un cantante, compositor, productor discográfico, filántropo, locutor de radio​ y empresario puertorriqueño.​"
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
        },
        "Bad": {
            title: "Bad Bunny",
            info: "Benito Antonio Martínez Ocasio, nacido el 10 de marzo de 1994, conocido profesionalmente como Bad Bunny, es un rapero, cantante y productor discográfico puertorriqueño"
        },
        "Karol": {
            title: "Karol G",
            info: "Carolina Giraldo Navarro nacida el 24 de agosto de 1991, conocida profesionalmente como Karol G, es una cantante colombiana."
        },
        "Feid": {
            title: "Feid",
            info: "Salomón Villada Hoyos, nacido el 19 de agosto de 1992, más conocido por sus nombres artísticos Feid y Ferxxo, es un cantante, compositor y productor discográfico colombiano"
        },
        "Rauw": {
            title: "Rauw Alejandro",
            info: "Raúl Alejandro Ocasio Ruiz, nacido el 10 de enero de 1993, conocido profesionalmente como Rauw Alejandro, es un cantante y rapero puertorriqueño. Conocido como el 'Rey del Reggaetón Moderno'"
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
        type: 'bar',
        data: data
    });
}

function graph2(ctx2, words, counts) {
    return char = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: words,
            datasets: [{
                label: 'Frecuencia de palabras (Actual)',
                data: counts,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'white',
                pointBackgroundColor: "white",
                borderWidth: 1,
                pointBorderColor: "white",
            }]
        },
        options: {
            maintainAspectRadio: false,
            responsive: true,
            response: true,
            scales: {
                y: {
                    ticks: { color: "white" },
                    beginAtZero: true
                }
            }, x: {
                ticks: {
                    color: "white"
                },
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
                borderColor: 'white',
                pointBackgroundColor: "white",
                borderWidth: 1,
                pointBorderColor: "white",
            }]
        },
        options: {
            maintainAspectRadio: false,
            responsive: true,
            response: true,
            scales: {
                y: {
                    ticks: { color: "white" },
                    beginAtZero: true
                }
            }, x: {
                ticks: {
                    color: "white"
                },
            }
        }
    });
}

// datos
let dataDaddy = {
    labels: ['Daddy Yankee', 'Tego Calderón', "Vico C", 'Don Omar', 'Karol G', "Feid", 'Rauw', 'Bad Bunny'],
    datasets: [{
        label: 'Oyentes en Spotify',
        data: [51900000, 9800000, 2700000, 37000000, 48800000, 43200000, 52400000, 68200000],
        backgroundColor: ['#d3d3d3', '#a9a9a9',
            '#f5f5dc',
            '#ffc0cb',
            '#add8e6',
            '#c1e1c5',
            '#e0b1cb',
            '#ffdab9'],
        borderColor: 'white',
        borderWidth: 1
    }]
};

let dataKarol = {
    labels: ['Daddy Yankee', 'Tego Calderón', "Vico C", 'Don Omar', 'Karol G', "Feid", 'Rauw', 'Bad Bunny'],
    datasets: [{
        label: ' Oyentes en Spotify',
        data: [51900000, 9800000, 2700000, 37000000, 48800000, 43200000, 52400000, 68200000],
        backgroundColor: [
            '#d3d3d3',
            '#a9a9a9',
            '#f5f5dc',
            '#ffc0cb',
            '#add8e6',
            '#c1e1c5',
            '#e0b1cb',
            '#ffdab9'
        ],
        borderColor: 'white',
        borderWidth: 1
    }]

};

let dataBad = {
    labels: ['Daddy Yankee', 'Tego Calderón', "Vico C", 'Don Omar', 'Karol G', "Feid", 'Rauw', 'Bad Bunny'],
    datasets: [{
        label: 'Oyentes en Spotify',
        data: [51900000, 9800000, 2700000, 37000000, 48800000, 43200000, 52400000, 68200000],
        backgroundColor: [
            '#d3d3d3',
            '#a9a9a9',
            '#f5f5dc',
            '#ffc0cb',
            '#add8e6',
            '#c1e1c5',
            '#e0b1cb',
            '#ffdab9'
        ],
        borderColor: 'white',
        borderWidth: 1
    }]
};

let dataRauw = {
    labels: ['Daddy Yankee', 'Tego Calderón', "Vico C", 'Don Omar', 'Karol G', "Feid", 'Rauw', 'Bad Bunny'],
    datasets: [{
        label: 'Oyentes en Spotify',
        data: [51900000, 9800000, 2700000, 37000000, 48800000, 43200000, 52400000, 68200000],
        backgroundColor: [
            '#d3d3d3',
            '#a9a9a9',
            '#f5f5dc',
            '#ffc0cb',
            '#add8e6',
            '#c1e1c5',
            '#e0b1cb',
            '#ffdab9'
        ],
        borderColor: 'white',
        borderWidth: 1
    }]
};

let dataFeid = {
    labels: ['Daddy Yankee', 'Tego Calderón', "Vico C", 'Don Omar', 'Karol G', "Feid", 'Rauw', 'Bad Bunny'],
    datasets: [{
        label: 'Oyentes en Spotify',
        data: [51900000, 9800000, 2700000, 37000000, 48800000, 43200000, 52400000, 68200000],
        backgroundColor: [
            '#d3d3d3',
            '#a9a9a9',
            '#f5f5dc',
            '#ffc0cb',
            '#add8e6',
            '#c1e1c5',
            '#e0b1cb',
            '#ffdab9'
        ],
        borderColor: 'white',
        borderWidth: 1
    }]
};

let dataVico = {
    labels: ['Daddy Yankee', 'Tego Calderón', "Vico C", 'Don Omar', 'Karol G', "Feid", 'Rauw', 'Bad Bunny'],
    datasets: [{
        label: 'Oyentes en Spotify',
        data: [51900000, 9800000, 2700000, 37000000, 48800000, 43200000, 52400000, 68200000],
        backgroundColor: [
            '#d3d3d3',
            '#a9a9a9',
            '#f5f5dc',
            '#ffc0cb',
            '#add8e6',
            '#c1e1c5',
            '#e0b1cb',
            '#ffdab9'
        ],
        borderColor: 'white',
        borderWidth: 1
    }]
};

let dataTego = {
    labels: ['Daddy Yankee', 'Tego Calderón', "Vico C", 'Don Omar', 'Karol G', "Feid", 'Rauw', 'Bad Bunny'],
    datasets: [{
        label: 'Oyentes en Spotify',
        data: [51900000, 9800000, 2700000, 37000000, 48800000, 43200000, 52400000, 68200000],
        backgroundColor: [
            '#d3d3d3',
            '#a9a9a9',
            '#f5f5dc',
            '#ffc0cb',
            '#add8e6',
            '#c1e1c5',
            '#e0b1cb',
            '#ffdab9'
        ],
        borderColor: 'white',
        borderWidth: 1
    }]
};

let dataDonOmar = {
    labels: ['Daddy Yankee', 'Tego Calderón', "Vico C", 'Don Omar', 'Karol G', "Feid", 'Rauw', 'Bad Bunny'],
    datasets: [{
        label: 'Oyentes en Spotify',
        data: [51900000, 9800000, 2700000, 37000000, 48800000, 43200000, 52400000, 68200000],
        backgroundColor: [
            '#d3d3d3',
            '#a9a9a9',
            '#f5f5dc',
            '#ffc0cb',
            '#add8e6',
            '#c1e1c5',
            '#e0b1cb',
            '#ffdab9'
        ],
        borderColor: 'white',
        borderWidth: 1,
    }]
};

//Json1
fetch('/regaeton/data/data.json')
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
            let wordFrequency = tokenizeAndFilter(text).reduce((freq, word) => {
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

//json2
fetch('/regaeton/data/data1.json')
    .then(response => response.json())
    .then(data => {
        const song_actual = []
        for (const dict of Object.values(data)) {
            for (const lyrics of dict) {
                if ("letra" in lyrics) {
                    song_actual.push(lyrics["letra"])
                }
            }
        }

        const song_actual1 = []
        for (const dict1 of Object.values(data)) {
            for (const lyrics1 of dict1) {
                if ("letra1" in lyrics1) {
                    song_actual1.push(lyrics1["letra1"])
                }
            }
        }
        const song_actual2 = []
        for (const dict2 of Object.values(data)) {
            for (const lyrics2 of dict2) {
                if ("letra2" in lyrics2) {
                    song_actual2.push(lyrics2["letra2"])
                }
            }
        }
        const letras_actual0 = song_actual.join(" ")
        const letras_actual1 = song_actual1.join(" ")
        const letras_actual2 = song_actual2.join(" ")
        const letras_actual = (letras_actual0 + letras_actual1) + letras_actual2
        util1(letras_actual)

        function util1(text) {
            const stopwords = ["vamos", 'toma', 'dale', 'dame', 'alaba', 'dónde', 'habríais', 'estéis', 'fueron', 'tuvieses', 'yo', 'tendréis', 'vuestro', 'tuviésemos', 'algo', 'una', 'fuiste', 'tendré', 'tu', 'hayamos', 'estábamos', 'sentido', 'nada', 'sentidos', 'antes', 'ya', 'como', 'siente', 'mi', 'hubiera', 'habrías', 'habíamos', 'fuesen', 'fui', 'los', 'tuviéramos', 'tengas', 'estos', 'tendrías', 'tanto', 'estuvieras', 'tened', 'habiendo', 'fuerais', 'te', 'fueras', 'estuviéramos', 'o', 'al', 'habían', 'fuimos', 'habido', 'tuvieras', 'tenidas', 'habrían', 'su', 'estaban', 'teniendo', 'tus', 'del', 'tuviste', 'que', 'estáis', 'unos', 'estuvieses', 'habéis', 'estaré', 'serías', 'estaríamos', 'tenemos', 'estuvieran', 'estados', 'mía', 'fuisteis', 'porque', 'nosotros', 'esta', 'cual', 'tuvieran', 'algunas', 'estarán', 'vuestra', 'nos', 'seas', 'tengamos', 'tenida', 'erais', 'serían', 'sería', 'estuviste', 'tuve', 'mías', 'de', 'eras', 'estaríais', 'ese', 'han', 'habrán', 'habidos', 'estuvieron', 'eres', 'muchos', 'cuando', 'tenían', 'ellos', 'estando', 'tenía', 'tú', 'estuvieseis', 'tienen', 'con', 'el', 'nuestros', 'esos', 'tendrás', 'ellas', 'tenidos', 'habidas', 'esté', 'fueses', 'sobre', 'pero', 'hay', 'estaréis', 'suyos', 'seáis', 'tienes', 'hubo', 'durante', 'un', 'algunos', 'estuvimos', 'tuvieseis', 'tuvimos', 'seremos', 'ha', 'estarás', 'estará', 'otro', 'más', 'estuvo', 'qué', 'todos', 'habremos', 'estabas', 'somos', 'habida', 'estuvierais', 'era', 'sentida', 'sea', 'tengo', 'le', 'ti', 'eran', 'donde', 'él', 'tuvieron', 'tuviera', 'todo', 'serás', 'fue', 'hubieses', 'teníamos', 'e', 'la', 'has', 'estén', 'estaría', 'vuestros', 'seré', 'muy', 'habías', 'nuestra', 'para', 'tenías', 'hubiéramos', 'tendríais', 'estar', 'tuvo', 'por', 'he', 'teníais', 'estemos', 'fueseis', 'uno', 'fueran', 'sintiendo', 'estuviesen', 'fuéramos', 'hubiste', 'tuviese', 'sin', 'hubierais', 'tendríamos', 'tuyo', 'habréis', 'será', 'tenéis', 'sean', 'otra', 'les', 'nuestro', 'soy', 'contra', 'las', 'también', 'mío', 'estado', 'hayan', 'son', 'éramos', 'esa', 'están', 'ante', 'y', 'tengan', 'vuestras', 'poco', 'estadas', 'tuviesen', 'estás', 'esas', 'nosotras', 'hubieran', 'no', 'desde', 'sus', 'haya', 'hubiese', 'ni', 'os', 'estad', 'tuvisteis', 'este', 'sí', 'mí', 'estamos', 'estuvisteis', 'estuve', 'vosotras', 'mis', 'habrá', 'serán', 'hubieseis', 'fuera', 'se', 'hubieras', 'tendrían', 'estarían', 'hayas', 'a', 'fuésemos', 'sois', 'habré', 'sentid', 'hemos', 'tendremos', 'tendrán', 'nuestras', 'habrás', 'vosotros', 'estaremos', 'hubiesen', 'seamos', 'míos', 'seréis', 'lo', 'suyas', 'estés', 'tenga', 'eso', 'tengáis', 'está', 'habríamos', 'tuyas', 'esto', 'quienes', 'estarías', 'tuyos', 'otras', 'quien', 'entre', 'estuviese', 'estoy', 'estaba', 'estabais', 'es', 'tendrá', 'seríamos', 'hube', 'mucho', 'tenido', 'había', 'tiene', 'sentidas', 'tuvierais', 'hasta', 'estuviera', 'suya', 'estada', 'tendría', 'hubisteis', 'suyo', 'estuviésemos', 'habría', 'en', 'hayáis', 'hubimos', 'habíais', 'hubiésemos', 'tuya', 'otros', 'seríais', 'hubieron', 'fuese', 'estas', 'ella', 'me'];
            function tokenizeAndFilter(text) {
                return text.toLowerCase()
                    .replace(/[^a-záéíóúñ\s]/g, '') // Eliminar caracteres no alfabéticos
                    .split(/\s+/)
                    .filter(word => word.length > 3 && !stopwords.includes(word)); // Filtrar stopwords y palabras cortas
            }
            // Contar la frecuencia de cada palabra
            let wordFrequency = tokenizeAndFilter(text).reduce((freq, word) => {
                freq[word] = (freq[word] || 0) + 1;
                return freq
            }, {});
            // Ordenar las palabras por frecuencia
            const sortedWords = Object.entries(wordFrequency)
                .sort((a, b) => b[1] - a[1])
                .map(([word, count]) => ({ word, count }));
            // las 15 palabras más repetidas
            const topWords = sortedWords.slice(0, 15);
            const words1 = topWords.map(item => item.word);
            const counts1 = topWords.map(item => item.count);
            graph2(ctx2, words1, counts1)
        }

    })
    .catch(error => {
        console.error("error al cargar el Json " + error)
    });
