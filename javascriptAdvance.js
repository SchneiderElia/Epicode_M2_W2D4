// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 5, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!

let ambassadorsale = 30
let freesheep = 0

let marcoSplit = Object.entries(marco)
/* console.log(marcoSplit)
 */
let paulSplit = Object.entries(paul)
/* console.log(paulSplit) */

let amySplit = Object.entries(amy)
/* console.log(amySplit) */

let listName = marcoSplit.concat(paulSplit.concat(amySplit))
/* console.log(listName) */


const users = []
    users.push(marco)
    users.push(paul)
    users.push(amy)

    //console.log(users)
 
for( let i=0; i<users.length; i++){

  // costruisco il ciclo per stampare tutto e lo prorvo
  // console.log(users[i])
  // creo una costante con dati non variabili di tutti i dati degli utenti

  const labelUser = users[i]

  // controllo verifico che sia corretto
  // console.log(labelUuser)
  // assegnio il name ed il lastName che dovra contenere la mia etichetta finale

  let finalLabelUser= `${labelUser.name} ${labelUser.lastName}`

  // controllo name e lastname 
  // console.log(finalLabelUser)

  // assegnio alle etichette finali lo status ambassador o non ambassador 

  if(labelUser.isAmbassador){
     
    // controllo se l'utente e un ambassador se si applico la scritta " è Ambassador "
    // console.log(finalLabelUser + " è Ambassador ")
    // ora lo icorporo nel codice 

    finalLabelUser += " è Ambassador "
    
    // torno a controllare 
    // console.log(finalLabelUser)
    // ora proseguo con quelli escusi 

  }else{
    finalLabelUser+= " non è Ambassador"

    // controllo il risutlato 
    //console.log(finalLabelUser)
  }

  // controllo tutta la lista 
  console.log(finalLabelUser)

}
