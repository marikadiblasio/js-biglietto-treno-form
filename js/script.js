/*Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo due caselle di input e almeno un bottone per inviare i dati in pagina, in cui l’utente potrà inserire i dati e poi visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

//Variabili
const priceKm = 0.21;
const discountJ = 0.20;
const discountS = 0.40;
//Variabili input
const boxKmTrip = document.querySelector('input[name=kmTrip]');
const boxUserAge = document.querySelector('input[name=userAge]');
//Variabile bottone
const btnCalc = document.querySelector('button');
//AddEventListener
btnCalc.addEventListener('click', function() {
    const kmTrip = parseInt(boxKmTrip.value);
    const userAge = parseInt(boxUserAge.value);
    let price = priceKm * kmTrip;
    if ((userAge) && (kmTrip)) {
        if (userAge < 18) {
            price -= price * discountJ;
        } else if (userAge > 65) {
            price -= price * discountS;
        }
        document.getElementById('ticketBody').innerHTML += (`<p>Il tuo biglietto di ${kmTrip} km per un viaggiatore di ${userAge} anni costerà ${price.toFixed(2)} €</p>`);
    } else {
        console.log('Inserisci i numeri nei campi richiesti');
    }
    const ticket = document.getElementById('ticket');
    ticket.classList.remove('d-none');
})
//Reset
const btnReset = document.getElementById('reset');
btnReset.addEventListener('click', function(){
    boxKmTrip.value = '';
    boxUserAge.value = '';
    document.getElementById('name').value = '';
    document.getElementById('ticketBody').innerHTML = '';
    ticket.classList.add('d-none');

    
})
