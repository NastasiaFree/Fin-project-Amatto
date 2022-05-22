window.onscroll = function vverh() {
  document.getElementById('up').style.display = (window.pageYOffset > '300' ? 'block' : 'none');
console.log("dct")
}


// *******BURGER MENU
const iconMenu = document.querySelector('.menu__burg');
const menuBody = document.querySelector('.header__menu-nav');
if (iconMenu) {
    const menuBody = document.querySelector('.header__menu-nav');
    iconMenu.addEventListener('click', function(e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}


const menuLinks = document.querySelectorAll('.menu__link');

if(menuLinks.length>0) {
    menuLinks.forEach(menuLink=>{
        menuLink.addEventListener("click", onMenuLinkClick)
    });

    function onMenuLinkClick(e) {
        const menuLink=e.target;
        if (iconMenu.classList.contains('_active')) {
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
}
    }
}



// FOOTER
// let details = document.getElementsByTagName('details')
// console.log(details)
// на половину
// let details = document.querySelectorAll('.det')
// console.log(details)

// if (document.documentElement.clientWidth > 1024) {
//     details.forEach(element => {
//       element.removeAttribute('open');
//       console.log(document.documentElement.clientWidth)
//     })
// }

function resizeCheck() {
  const windowWidth = window.screen.width;
  const details = document.querySelectorAll('.det');
  if (windowWidth<1024) {
    details.forEach(elem => elem.open = true);
  } else {
    details.forEach((elem,i)=> elem.open = false );
  }
}
window.addEventListener('resize', (e) => {
  resizeCheck()
})
resizeCheck();





















document.addEventListener('DOMContentLoaded', function () {
    // конечная дата
    const deadline = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 01);
    // id таймера
    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
      $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
      $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
      $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }
    // получаем элементы, содержащие компоненты даты
    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
  });
//   https://itchief.ru/examples/lab.php?topic=javascript&file=countdown-timer-01  разобратья с датой если нужно исправить абзац
