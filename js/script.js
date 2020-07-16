
// funzione che genera il biglietto premendo sul pulsante "genera"
document.getElementById("create").addEventListener("click", function(){

  // creo variabili collegate agli elementi HTML
  var name = document.getElementById('name').value;
  var km = document.getElementById('km').value;
  var age = document.getElementById('age').value;
  var price = document.getElementById('price');
  var ticketName = document.getElementById('ticket-name');
  var discount = document.getElementById('discount');
  var coach = document.getElementById('coach');
  var cpCode = document.getElementById('cp-code');
  var nameError = document.getElementById('name-error');
  var kmError = document.getElementById('km-error');

  price.innerHTML = (km*age*0.21).toFixed(2)+'€'; // calcolo il prezzo
  ticketName.innerHTML = name; //scrivo il nome inserito dall'utente nel biglietto

  // scrivo il tipo di sconto sul biglietto in base all'età dell'utente
  if (age == 1) {
      discount.innerHTML = 'Nessuno sconto';
  } else if (age == 0.8) {
      discount.innerHTML = 'Sconto minorenne';
  } else {
      discount.innerHTML = 'Sconto over 65';
  }

  // genero 2 numeri random per numero della carrozza e codice CP
  coach.innerHTML = randomNumber(1,10);
  cpCode.innerHTML = randomNumber(90000,100000);

  // "svuoto" i campi nome e km
  nameError.innerHTML = '';
  kmError.innerHTML = '';

  // funzione che controlla che i dati inseriti siano validi
  if ((name == '') && (km <= 0 || km == '')){ // entrambi i valori non validi
      nameError.innerHTML = 'Inserire un nome valido';
      kmError.innerHTML = 'Inserire un valore valido';
      document.getElementById("ticket-section").className = "ticket hidden";
  } else if (name == ''){ // nome non valido
      nameError.innerHTML = 'Inserire un nome valido';
      kmError.innerHTML = '';
      document.getElementById("ticket-section").className = "ticket hidden";
  } else if (km == '' || km <= 0){ // numero di km non valido
      nameError.innerHTML = '';
      kmError.innerHTML = 'Inserire un valore valido';
      document.getElementById("ticket-section").className = "ticket hidden";
  } else { // entrambi i valori sono validi
      document.getElementById("ticket-section").className = "ticket shown";
  }
});

// funzione che resetta i campi e nasconde il biglietto premendo sul pulsante "Annulla"
document.getElementById("cancel").addEventListener("click", function(){
  document.getElementById("ticket-section").className = "ticket hidden";

  var name = document.getElementById('name');
  var km = document.getElementById('km');
  var nameError = document.getElementById('name-error');
  var kmError = document.getElementById('km-error');

  name.value = '';
  km.value = '';
  nameError.innerHTML = '';
  kmError.innerHTML = '';
});

// funziona che genera un numero casuale (min incluso e max escluso)
function randomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};
