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
        const letras = song.join(" ")

        const stopwords = ["vamos", 'toma', 'dale', 'dame', 'alaba', 'dónde', 'habríais', 'estéis', 'fueron', 'tuvieses', 'yo', 'tendréis', 'vuestro', 'tuviésemos', 'algo', 'una', 'fuiste', 'tendré', 'tu', 'hayamos', 'estábamos', 'sentido', 'nada', 'sentidos', 'antes', 'ya', 'como', 'siente', 'mi', 'hubiera', 'habrías', 'habíamos', 'fuesen', 'fui', 'los', 'tuviéramos', 'tengas', 'estos', 'tendrías', 'tanto', 'estuvieras', 'tened', 'habiendo', 'fuerais', 'te', 'fueras', 'estuviéramos', 'o', 'al', 'habían', 'fuimos', 'habido', 'tuvieras', 'tenidas', 'habrían', 'su', 'estaban', 'teniendo', 'tus', 'del', 'tuviste', 'que', 'estáis', 'unos', 'estuvieses', 'habéis', 'estaré', 'serías', 'estaríamos', 'tenemos', 'estuvieran', 'estados', 'mía', 'fuisteis', 'porque', 'nosotros', 'esta', 'cual', 'tuvieran', 'algunas', 'estarán', 'vuestra', 'nos', 'seas', 'tengamos', 'tenida', 'erais', 'serían', 'sería', 'estuviste', 'tuve', 'mías', 'de', 'eras', 'estaríais', 'ese', 'han', 'habrán', 'habidos', 'estuvieron', 'eres', 'muchos', 'cuando', 'tenían', 'ellos', 'estando', 'tenía', 'tú', 'estuvieseis', 'tienen', 'con', 'el', 'nuestros', 'esos', 'tendrás', 'ellas', 'tenidos', 'habidas', 'esté', 'fueses', 'sobre', 'pero', 'hay', 'estaréis', 'suyos', 'seáis', 'tienes', 'hubo', 'durante', 'un', 'algunos', 'estuvimos', 'tuvieseis', 'tuvimos', 'seremos', 'ha', 'estarás', 'estará', 'otro', 'más', 'estuvo', 'qué', 'todos', 'habremos', 'estabas', 'somos', 'habida', 'estuvierais', 'era', 'sentida', 'sea', 'tengo', 'le', 'ti', 'eran', 'donde', 'él', 'tuvieron', 'tuviera', 'todo', 'serás', 'fue', 'hubieses', 'teníamos', 'e', 'la', 'has', 'estén', 'estaría', 'vuestros', 'seré', 'muy', 'habías', 'nuestra', 'para', 'tenías', 'hubiéramos', 'tendríais', 'estar', 'tuvo', 'por', 'he', 'teníais', 'estemos', 'fueseis', 'uno', 'fueran', 'sintiendo', 'estuviesen', 'fuéramos', 'hubiste', 'tuviese', 'sin', 'hubierais', 'tendríamos', 'tuyo', 'habréis', 'será', 'tenéis', 'sean', 'otra', 'les', 'nuestro', 'soy', 'contra', 'las', 'también', 'mío', 'estado', 'hayan', 'son', 'éramos', 'esa', 'están', 'ante', 'y', 'tengan', 'vuestras', 'poco', 'estadas', 'tuviesen', 'estás', 'esas', 'nosotras', 'hubieran', 'no', 'desde', 'sus', 'haya', 'hubiese', 'ni', 'os', 'estad', 'tuvisteis', 'este', 'sí', 'mí', 'estamos', 'estuvisteis', 'estuve', 'vosotras', 'mis', 'habrá', 'serán', 'hubieseis', 'fuera', 'se', 'hubieras', 'tendrían', 'estarían', 'hayas', 'a', 'fuésemos', 'sois', 'habré', 'sentid', 'hemos', 'tendremos', 'tendrán', 'nuestras', 'habrás', 'vosotros', 'estaremos', 'hubiesen', 'seamos', 'míos', 'seréis', 'lo', 'suyas', 'estés', 'tenga', 'eso', 'tengáis', 'está', 'habríamos', 'tuyas', 'esto', 'quienes', 'estarías', 'tuyos', 'otras', 'quien', 'entre', 'estuviese', 'estoy', 'estaba', 'estabais', 'es', 'tendrá', 'seríamos', 'hube', 'mucho', 'tenido', 'había', 'tiene', 'sentidas', 'tuvierais', 'hasta', 'estuviera', 'suya', 'estada', 'tendría', 'hubisteis', 'suyo', 'estuviésemos', 'habría', 'en', 'hayáis', 'hubimos', 'habíais', 'hubiésemos', 'tuya', 'otros', 'seríais', 'hubieron', 'fuese', 'estas', 'ella', 'me'];
        function tokenizeAndFilter(text) {
            return text.toLowerCase()
                .replace(/[^a-záéíóúñ\s]/g, '') // Eliminar caracteres no alfabéticos
                .split(/\s+/)
                .filter(word => word.length > 3 && !stopwords.includes(word)); // Filtrar stopwords y palabras cortas
        }
        // Contar la frecuencia de cada palabra
        var wordFrequency = tokenizeAndFilter(letras).reduce((freq, word) => {
            freq[word] = (freq[word] || 0) + 1;
            return freq
        }, {});
        // Ordenar las palabras por frecuencia
        const sortedWords = Object.entries(wordFrequency)
            .sort((a, b) => b[1] - a[1])
            .map(([word, count]) => ({ word, count }));
        // las 10 palabras más repetidas
        const topWords = sortedWords.slice(0, 20);
        console.log('Las 10 palabras más repetidas:');
        topWords.forEach(({ word, count }) => {
            console.log(word, count)
        });
    })

    .catch(error => {
        console.error("error al cargar el Json " + error)
    });

