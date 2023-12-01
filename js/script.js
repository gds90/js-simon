/* 
SOTTOPROBLEMI:

// genero 5 numeri casuali e li inserisco in un array

// visualizzo in pagina i 5 numeri casuali generati

// tramite la funzione Timeout, imposto un timer di 30 secondi; dopo i 30 secondi la lista dei 5 numeri casuali sparisce

// a quel punto, dopo che i numeri sono spariti, chiedo tramite prompt all'utente di inserire un numero, per 5 volte;
per ogni inserimento controllo che il numero scelto dall'utente sia presente nell'array dei numeri casuali creata precedentemente; se è presente, aumento un contatore di numeri indovinati e li salvo in un altro array;

// mostro all'utente quanti e quali numeri ha indovinato

*/

// recupero l'elemento HTML in cui mostrare i 5 numeri
const randomNumber_list = document.getElementById('random_num_list');

// genero 5 numeri casuali e li inserisco in un array
let randomNumbers = [];

while (randomNumbers.length < 5){
    let randomNumber = Math.floor(Math.random() * 100 + 1)

    // verifico che il numero random appena generato non sia già presente nell'array
    if (!randomNumbers.includes(randomNumber)){

        // inserisco il numero random generato nell'array
        randomNumbers.push(randomNumber);

        // visualizzo in pagina i 5 numeri casuali generati
        const li = document.createElement('li');
        li.innerText = randomNumber
        randomNumber_list.appendChild(li);
    }    
}

// tramite la funzione Timeout, imposto un timer di 30 secondi; dopo i 30 secondi la lista dei 5 numeri casuali sparisce
setTimeout(function(){
    document.getElementById('box_random_num').classList.add('d-none');
}, 30000);

// a quel punto, dopo che i numeri sono spariti, dopo 5 secondi chiedo tramite prompt all'utente di inserire un numero, per 5 volte;
let user_numbers = [];

// dichiaro due variabili che mi serviranno per contare i punti totalizzati dall'utente e quali numeri indovinerà
let points = 0;
let guessed_number = [];

setTimeout(function(){
    while (user_numbers.length < 5){
        let user_number = parseInt(prompt('Inserisci un numero che era presente nella lista'));

        // controllo che il numero scelto dall'utente non sia stato già scelto in precedenza
        if (!user_numbers.includes(user_number) && !isNaN(user_number)){

            user_numbers.push(user_number);

            // per ogni inserimento controllo che il numero scelto dall'utente sia presente nell'array dei numeri casuali creata precedentemente; se è presente, aumento un contatore di numeri indovinati e li salvo in un altro array;
            for (let i = 0; i < randomNumbers.length; i++){
                if (user_number == randomNumbers[i]){
                    points++;
                    guessed_number.push(user_number);
                }
            }
           
        }
        
        // mostro un alert per avvertire l'utente che il numero inserito non era valido o già scelto
        else {
            alert('Numero non valido o già scelto in precedenza, inserisci un numero diverso');
        }
    }
    // recupero gli elementi HTML dove inserire i numeri indovinati dall'utente e il punteggio totale
    const total_points = document.getElementById('points');
    const guessed_number_list = document.getElementById ('guessed_num_list')

    // tramite un ciclo for mostro in HTML la lista dei numeri indovinati dall'utente 
    for (let i = 0; i < guessed_number.length; i++){
        const li = document.createElement('li');
        li.innerText = guessed_number[i];
        guessed_number_list.appendChild(li);
    }

    // rendo visibile la sezione HTML in cui mostrerò i risultati
    document.getElementById('box_guessed_num').classList.remove('d-none');
    document.getElementById('box_guessed_num').classList.add('d-block');

    // mostro all'utente il totale dei punti totalizzati
    total_points.innerText = `Hai totalizzato ${points} punti!`
}, 35000);








