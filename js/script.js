document.getElementById("create").addEventListener("click", function(){


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

  price.innerHTML = (km*age*0.21).toFixed(2)+'€';
  ticketName.innerHTML = name;

  if (age == 1) {
      discount.innerHTML = 'Nessuno sconto';
  } else if (age == 0.8) {
      discount.innerHTML = 'Sconto minorenne';
  } else {
      discount.innerHTML = 'Sconto over 65';
  }

  coach.innerHTML = randomNumber(1,10);
  cpCode.innerHTML = randomNumber(90000,100000);

  nameError.innerHTML = '';
  kmError.innerHTML = '';
  if ((name == '') && (km <= 0 || km == '')){
      nameError.innerHTML = 'Inserire un nome valido';
      kmError.innerHTML = 'Inserire un valore valido';
  } else if (name == ''){
      nameError.innerHTML = 'Inserire un nome valido';
      kmError.innerHTML = '';
  } else if (km == '' || km <= 0){
      nameError.innerHTML = '';
      kmError.innerHTML = 'Inserire un valore valido';
  }

  if (nameError.innerHTML == '' && kmError.innerHTML == '') {
      document.getElementById("ticket-section").className = "ticket shown";
  }
});

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


function randomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};
