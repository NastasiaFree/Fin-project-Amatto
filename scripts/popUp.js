const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');
const butPop = document.getElementById('but_pop');
const popUpFin = document.getElementById('pop_upFin');
const closePopUpFin = document.getElementById('pop_upFin_close');

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

for ( let makePop of makePops) {
    makePop.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');})
}

    



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