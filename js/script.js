/* 
PARTE 1
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. 
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto.
PARTE 2
Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.  Ricordatevi, è un array, quindi? for.
PARTE 3
Dare la possibilità all’utente, attraverso 3 prompt() - uno per ciascuna proprietà - di aggiungere UN SOLO oggetto studente inserendo nell’ordine: nome, cognome e età.
*/

var student = {
    name: "Diego",
    surname: "Ogeid",
    age: 19
};

for (var k in student) {
    console.log(student[k])
};