


// const openPopUp = document.getElementById('open_pop_up');-----
// убрать id с промо и дисконт
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');
// const openPopUp2 = document.getElementById('open_pop_up2');-----

const butPop = document.getElementById('but_pop');
const popUpFin = document.getElementById('pop_upFin');
const closePopUpFin = document.getElementById('pop_upFin_close');
// // ADVICE
// const butTelPop = document.getElementById('but_tel_pop');
// const butTelPop2 = document.getElementById('but_tel_pop2');

// // MAKE
const makePops = document.querySelectorAll('button.back__cont');
// console.log(makePops)
const openPopUps = document.querySelectorAll('a.pop_but');
// console.log(openPopUps);

const openPopFins = document.querySelectorAll('button.pop_fin');
// console.log(openPopFins);

for ( let openPopUp of openPopUps) {
    openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
    })
}

// for ( let openPopFin of openPopFins) {
//     if (openPopFin) openPopFin.addEventListener('click',addLoc);
//     openPopFin.addEventListener('click', function(e){
//     e.preventDefault();
//     popUpFin.classList.add('act');
//     });
    
// }
// if (butPayPop) butPayPop.addEventListener('click',addLoc);

// const butPayPop = document.getElementById('but_pay_pop');

// openPopUp.addEventListener('click', function(e){
//     e.preventDefault();
//     popUp.classList.add('active');
//     console.log('qweerrrr')
// })
// openPopUp2.addEventListener('click', function(e){
//     e.preventDefault();
//     popUp.classList.add('active');
//     console.log('qweerrrr')
// })
closePopUp.addEventListener('click', ()=>{
    popUp.classList.remove('active');
})
butPop.addEventListener('click', function(e){
    e.preventDefault();
    popUpFin.classList.add('act')
    popUp.classList.remove('active');
    // console.log('final')
})
closePopUpFin.addEventListener('click', ()=>{
    popUpFin.classList.remove('act');
})
// butTelPop.addEventListener('click', function(e){
//     e.preventDefault();
//     popUpFin.classList.add('act')  
// })
// butTelPop2.addEventListener('click', function(e){
//     e.preventDefault();
//     popUpFin.classList.add('act')  
// })
// butPayPop.addEventListener('click', function(e){
//     e.preventDefault();
//     popUpFin.classList.add('act')  
// })

for ( let makePop of makePops) {
    
    makePop.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');})
}

    



// ********************LOCAL STORAGE
// function store() {
//     var inputTel=document.getElementsByClassName('phone');
//     localStorage.setItem('phone', inputTel.value)
// }

// inputTel = document.querySelector('input[name="tel"]')
// console.log(inputTel)

// let inp = document.getElementsByClassName('phone');
// console.log(inp.value)
let contactsData = [];
let contactsDataPop = [];
let contactsDataPay = [];

const addLoc = function() {
    // inputPhone = document.querySelector('input[name="phone"]').value;
    // inputPhone2 = document.querySelector('input[name="phon"]').value;

//     inputName = document.querySelector('input[name="name"]').value;
//     inputTel = document.querySelector('input[name="tel"]').value;
// console.log(inputName)


    // inputNamePay = document.querySelector('input[name="namePay"]').value;
    // inputTelPay = document.querySelector('input[name="telPay"]').value;
// let inputName = document.querySelectorAll('input.popi');
// console.log(inputName);
// console.log(inputName.values);
// let obj =[...inputName].reduce((ob,i) => ({...ob, [i.name]:i.value}))
// let contact = {
//     phone:inputPhone,
//     tel:inputPhone2
// };
// for ( let openPopUp of openPopUps) {
//     openPopUp.addEventListener('click', function(e){
//     e.preventDefault();
//     popUp.classList.add('active');
//     })
// }
let popName = document.getElementById('popName').value;
console.log(popName);
let popTel = document.getElementById('popTel').value;
console.log(popTel);
let payName = document.getElementById('payName').value;

let payTel = document.getElementById('payTel').value;

let phone = document.getElementById('telep').value;


let objectPop = {
    name:popName,
    tel:popTel
}
let objectPopPay = {
    name:payName,
    tel:payTel
}
let contactPop = {
    user:objectPop,
    userPay:objectPopPay
    
};
// userAll=Object.values(objectPop).concat(Object.values(objectPopPay));
// let contactPop = {
//         user:userAll,
        
        
//     };
console.log(contactPop)
// let contactPay = {
//     name:inputNamePay,
//     tel:inputTelPay
// }
contactsData.push(phone);
// contactsData.push(contact);
contactsDataPop.push(contactPop);
// contactsDataPay.push(contactPay);

localStorage.setItem('contacts', JSON.stringify(contactsData))
localStorage.setItem('contactsPop', JSON.stringify(contactsDataPop))
// localStorage.setItem('contactsPay', JSON.stringify(contactsDataPay))
console.log(contactsData)
};
 let butLocal = document.querySelector('.butLocal');
 if (butLocal) butLocal.addEventListener('click', addLoc)

//  let butLocal2 = document.querySelector('.butLocal2');
//  if (butLocal2) butLocal2.addEventListener('click', addLoc);

//  let butPop = document.getElementById('but_pop') //
if (butPop) butPop.addEventListener('click',addLoc);
// if (butPayPop) butPayPop.addEventListener('click',addLoc);
// if (openPopFin) openPopFin.addEventListener('click',addLoc);

// Рассмотреть возможность на блок advice 1 инпут???
for ( let openPopFin of openPopFins) {
    if (openPopFin) openPopFin.addEventListener('click',addLoc);
    openPopFin.addEventListener('click', function(e){
    e.preventDefault();
    popUpFin.classList.add('act');
    });
    
}