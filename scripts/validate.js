function validation() {
    let telepInp = document.getElementById('telep');
    let telep = document.getElementById('telep').value;
    let valid = document.getElementById('valid');
    let popTeleInp = document.getElementById('popTel');
    let popTele = document.getElementById('popTel').value;
    let popTelValid = document.getElementById('popTelValid');
    let popNameInp = document.getElementById('popName');
    let popName = document.getElementById('popName').value;
    let popNameValid = document.getElementById('popNameValid');

  let pattern = /^(\+|\(|\ )?[0-9]{1,5}(\-|\(|\)|\ )?[0-9]{1,5}(\-|\)|\ )?[0-9]{1,5}(\-|\(|\)|\ )?[0-9]{1,5}(\-|\(|\)|\ )?[0-9]{1,5}(\-|\(|\)|\ )?[0-9]{1,5}$/;

  let patternName = /^[a-zA-Zа-яА-Я]{1,15}( )?[a-zA-Zа-яА-Я]{1,15}?$/;

  
  if (telep.match(pattern)) {
    valid.innerHTML="";
    telepInp.classList.remove ("invalid");
  }
  else {
    valid.innerHTML="введите корректно номер телефона";
    telepInp.classList.add("invalid");
  }

  if (popTele.match(pattern)) {
    popTelValid.innerHTML="";
    popTeleInp.classList.remove ("invalid");
  }
  else {
    popTelValid.innerHTML="введите корректно номер телефона";
    popTeleInp.classList.add ("invalid");
  }

  if (popName.match(patternName)) {
    popNameValid.innerHTML="";
    popNameInp.classList.remove ("invalid");
  }
  else {
    popNameValid.innerHTML="введите корректно ваше имя";
    popNameInp.classList.add ("invalid");
  }
  
}


// Проверка регулярных выражений  https://regex101.com/r/V61uRh/1