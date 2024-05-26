a = """Yo tengo un ángel
Que me protege de los envidiosos
Y ese ángel me protege
Y no le importa si yo soy un vicioso

Yo tengo un ángel que siempre está detrás de mí
Y un ejército de guerreros
Y ese ángel me protege
De los que no son sinceros

Comienzo el drama me levanto de la cama
Me cepillo los dientes y miro el sol salir
Prendo una vela con mucha cautela
Y afuera escucho el barrio sin saber quién va a morir

Y es que el destino no está escrito
Lo escribimos nosotros
A nosotros nos toca el destino escribir
Y aunque la vida este dura y el gobierno lo empeore
A nosotros nos toca decidir

Hay días en que yo cruzo el barrio
En pleno tiroteo él va detrás de mí
Si me aborrezco a veces de estar vivo
Y pierdo la esperanza el va detrás de mí
Si me confundo y pierdo la fe

A medio caminar el ángel me dice a mí
Levántate de la cama
Ve y enfréntate a la vida
Porque tú naciste
Pa sobrevivir

Yo tengo un ángel
Que me protege de los envidiosos
Y ese ángel me protege
Y no le importa si yo soy un vicioso

Yo tengo un ángel que siempre está detrás de mí
Y un ejército de guerreros
Y ese ángel me protege
De los que no son sinceros

Y les confieso que lo antes escrito en este verso
Es el relato del dolor que me querían partir los huesos
Como todo ser humano he tenido mis tropiezos
Pero el ángel me acompaña aun que no me quede un peso
Su protección no tiene precio
Más allá de lo real, espiritual, sé que no me va a fallar
Él me ha visto reír pero también llorar
Cada cual con su ángel, con su forma de bregar

Hay días en que yo cruzo el barrio
En pleno tiroteo el va detrás de mí
Si me aborrezco a veces de estar vivo
Y pierdo la esperanza el va detrás de mí

Si me confundo y pierdo la fe
A medio caminar el ángel me dice a mí
Levántate de la cama
Ve y enfréntate a la vida
Porque tú naciste
Pa sobrevivir

Levántate de la cama
Ve y enfréntate a la vida
Porque tú naciste
Pa sobrevivir

Yo tengo un ángel
Que me protege de los envidiosos
Y ese ángel me protege
Y no le importa si yo soy un vicioso

Yo tengo un ángel que siempre está detrás de mí
Y un ejército de guerreros
Y ese ángel me protege
De los que no son sinceros

Mi madre siempre me decía que yo tenía un ángel
Oye, que siempre me estaba protegiendo
Y ahora me doy cuenta que es verdad
Yo no soy el único, todo el mundo tiene un ángel
Detrás de él, lo que tiene es que conocerlo
Y echar pa’lante la vida

Hay días en que yo cruzo el barrio
En pleno tiroteo el va detrás de mí
Si me aborrezco a veces de estar vivo
Y pierdo la esperanza el va detrás de mí

Si me confundo y pierdo la fe
A medio caminar el ángel me dice a mí
Levántate de la cama
Ve y enfréntate a la vida
Porque tú naciste
Pa sobrevivir

Levántate de la cama
Ve y enfréntate a la vida
Porque tú naciste
Pa sobrevivir"""
a = (
    a.replace(",", "")
    .replace("'", "")
    .replace("-", " ")
    .replace("?", " ")
    .replace("¿", "")
    .replace("!", " ")
    .replace("¡", " ")
)
print(a)
