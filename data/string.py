a = """Todo lo que nos prometimos se quedó en el apto en Brickell
Juntos descubrimo' lo chimba que es ver amanecer
Te llevé pa' Papi, te llevé pa' Gekko y ni querías comer
Ojalá me hubieras dicho que era la última vez

Pa' haberte roba'o to' el día
Me duele que no seas mía
Hoy salgo de cacería
Mami, ¿cómo me olvidas?
Y si yo dеsde esa noche
Quе te comí en el Porsche
Dijiste: Bebé, soy tuya
Y ya ni me reconoce'

Pensándote
Yo ya ni fumaba pero me ennoté
Salí con otra, pero me spoteé
Tuve la mala suerte que fue el mismo hotel
Donde lo hicimo' y nos quisimo'
Y ahora me trata flow desconocido
Está cabrón que ni nos despedimo'
Sentir a otra no tiene sentido
Tú era' mi kitty y yo tu freaky
Los bellaqueo' saliendo de Kiki
Tú te quedastes con el jacket y las Yeezy
Tengo esperanza de buscarlo' y saber de ti

Claro
Que no puedo ver tus estado'
O si te mudastes de estado
Porque ya yo soy tu pasado
Claro
Que por tu casa he pasado
Pero nunca te he encontrado
Si hubiese sabido no hubiera pasado
Bien rico chingándote

Pa' haberte roba'o to' el día
Me duele que no seas mía
Hoy salgo de cacería
Mami, ¿cómo me olvidas?
Y es que yo desde esa noche
Que te comí en el Porsche
Dijiste: Bebé, soy tuya
Y ya ni me reconoce'

Todo lo que nos prometimos se quedó en el apto en Brickell
Juntos descubrimo' lo chimba que es ver amanecer
Te llevé pa' Papi, te llevé pa' Gekko y ni querías comer
Ojalá me hubieras dicho que era la última vez

Pa' haberte roba'o to' el día
Me duele que no seas mía
Hoy salgo de cacería
Mami, ¿cómo me olvidas?
Si yo desde esa noche
Que te comí en el Porsche
Dijiste: Bebé, soy tuya
Y ya ni me reconoce'"""
a = (
    a.replace(",", "")
    .replace("'", "")
    .replace("-", " ")
    .replace("?", " ")
    .replace("¿", "")
    .replace("!", " ")
    .replace("¡", " ")
    .replace("(", " ")
    .replace(")", " ")
)
print(a)
