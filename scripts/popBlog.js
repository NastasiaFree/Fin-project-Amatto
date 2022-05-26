const popUpFin = document.getElementById('pop_upFin');
const closePopUpFin = document.getElementById('pop_upFin_close');
const butTelPop = document.getElementById('but_tel_pop');

butTelPop.addEventListener('click', function(e){
    e.preventDefault();
    popUpFin.classList.add('act');
    // console.log('final')
})
closePopUpFin.addEventListener('click', ()=>{
    popUpFin.classList.remove('act');
})



function validation() {
    let telepInp = document.getElementById('telep');
    let telep = document.getElementById('telep').value;
    let pattern = /^(\+|\(|\ )?[0-9]{1,5}(\-|\(|\)|\ )?[0-9]{1,5}(\-|\)|\ )?[0-9]{1,5}(\-|\(|\)|\ )?[0-9]{1,5}(\-|\(|\)|\ )?[0-9]{1,5}(\-|\(|\)|\ )?[0-9]{1,5}$/;
    if (telep.match(pattern)) {
        valid.innerHTML="";
        telepInp.classList.remove ("invalid");
      }
      else {
        valid.innerHTML="введите корректно номер телефона";
        telepInp.classList.add("invalid");
      }
}


let phone = [];
const addPhone = function() {
    let telep = document.getElementById('telep').value;
    phone.push(telep);
    localStorage.setItem('phone', JSON.stringify(phone))
}
if (butTelPop) butTelPop.addEventListener('click', addPhone)