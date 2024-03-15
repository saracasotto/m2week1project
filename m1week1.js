/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
.STRINGHE: Sono parole o frasi racchiuse tra virgolette
.NUMERI: possono essere numeri interi o decimali che includono qualsiasi cifra da -253 a 253
.BigInt: sono numeri molto grandi
.BOOLEAN: sono come interlocutori che possono essere accesi (vero) o spenti (falso)
.NULL & UNDEFINED: il null è un contenitore vuoto, undefined èe un contenitore dove non è stato dichiarato il contenuto
.OBJECTS: sono contenitori che includono una serie di dati diversi, come i dati di una perssona quali nome, età, altezza, ecc
.ARRAYS: è un contenitore con una lista di dati
.FUNZIONI: rappresentano dei programmi per eseguire compiti specifici, come un calcolo.*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Un oggetto è un contenitore che include una serie di dati diversi. */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/


let numero1 = 12
let numero2 = 20
let risultato = 12 + 20

console.log(risultato)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/


let x = 12

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Sara"

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let risultato2 = 4 - x

console.log(risultato2)


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john"
let name2 = "John" 

console.log(name1 === name2)
