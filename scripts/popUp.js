const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');
const butPop = document.getElementById('but_pop');
const popUpFin = document.getElementById('pop_upFin');
const closePopUpFin = document.getElementById('pop_upFin_close');

const bodyPop = document.querySelector('.pop_up_body')

const  close = document.querySelector('div.pop_up_body');
console.log(close)

const finPopBody = document.querySelector('.pop_upFin_body')
// close.addEventListener('click', ()=> {
//     popUp.classList.remove('active');
// })
const openPopUps = document.querySelectorAll('a.pop_but');
const makePops = document.querySelectorAll('button.back__cont');
const openPopFins = document.querySelectorAll('button.pop_fin');

openPopUps.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popUp.classList.add('active'); // Добавляем класс 'active' для фона
        close.classList.add('active'); // И для самого окна
    })
});

makePops.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popUp.classList.add('active'); // Добавляем класс 'active' для фона
        close.classList.add('active'); // И для самого окна
    })
});

closePopUp.addEventListener('click',() => { // Вешаем обработчик на крестик
    popUp.classList.remove('active'); // Убираем активный класс с фона
    close.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popUp) { // Если цель клика - фот, то:
        popUp.classList.remove('active'); // Убираем активный класс с фона
        close.classList.remove('active'); // И с окна
    }
});



butPop.addEventListener('click', function(e){
    e.preventDefault();
    popUpFin.classList.add('act');
    finPopBody.classList.add('act');
    popUp.classList.remove('active');
    close.classList.remove('active')
    // console.log('final')
})
closePopUpFin.addEventListener('click', ()=>{
    popUpFin.classList.remove('act');
    finPopBody.classList.remove('act');
})

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popUpFin || e.target === finPopBody ) { // Если цель клика - фот, то:
        popUpFin.classList.remove('act'); // Убираем активный класс с фона
        // close.classList.remove('active'); // И с окна
        finPopBody.classList.remove('act');
    }
});
openPopFins.forEach((but) => {
    but.addEventListener('click', function(e){
    e.preventDefault();
    popUpFin.classList.add('act');
    finPopBody.classList.add('act');
})

    // popUp.classList.remove('active');
    // close.classList.remove('active')
    // console.log('final')
});

makePops.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popUp.classList.add('active'); // Добавляем класс 'active' для фона
        close.classList.add('active'); // И для самого окна
    })
});
// // MAKE

// console.log(makePops)

// console.log(openPopUps);


// console.log(openPopFins);

// for ( let openPopUp of openPopUps) {
//     openPopUp.addEventListener('click', function(e){
//     e.preventDefault();
//     popUp.classList.add('active');
//     // popUp.style.display = 'block'
//     // bodyPop.classList.add('active');
//     })
// }


// closePopUp.addEventListener('click', ()=>{
//     popUp.classList.remove('active');
// })


// for ( let makePop of makePops) {
//     makePop.addEventListener('click', function(e){
//     e.preventDefault();
//     popUp.classList.add('active');})
// }






















// ********************LOCAL STORAGE

let contactsData = [];
let contactsDataPop = [];
let contactsDataPay = [];

const addLoc = function() {
let popName = document.getElementById('popName').value;
// console.log(popName);
let popTel = document.getElementById('popTel').value;
// console.log(popTel);
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
// console.log(contactPop)

contactsData.push(phone);
contactsDataPop.push(contactPop);


localStorage.setItem('contacts', JSON.stringify(contactsData))
localStorage.setItem('contactsPop', JSON.stringify(contactsDataPop))
// console.log(contactsData)
};

let butLocal = document.querySelector('.butLocal');
if (butLocal) butLocal.addEventListener('click', addLoc)

if (butPop) butPop.addEventListener('click',addLoc);


// Рассмотреть возможность на блок advice 1 инпут???
for ( let openPopFin of openPopFins) {
    if (openPopFin) openPopFin.addEventListener('click',addLoc);
    openPopFin.addEventListener('click', function(e){
    e.preventDefault();
    popUpFin.classList.add('act');
    }); 
}























// https://webdevtips.pro/js/pure-js-popup/
// https://www.youtube.com/watch?v=LlJmAu-g1iY