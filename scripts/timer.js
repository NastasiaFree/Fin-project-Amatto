let countDate = new Date('May 31, 2022 00:00:00');
let order = countDate.getDate();
console.log(order);
let orderDate = document.getElementById('date');
console.log(orderDate)
orderDate.innerHTML=order;

function declensionNum(n, words) {
  // let n=num % 100;
  if ((5<=n && n<=20) || (25<=n && n<=30)|| (35<=n && n<=40) || (45<=n && n<=50) || (55<=n && n<=60) || n==0) {return words[2];  }
  if ((2<=n && n<=4) || (22<=n && n<=24) || (32<=n && n<=34) || (42<=n && n<=44) || (52<=n && n<=54)) {return words[1];  }
  return words[0];
}

// 1 день час минута секунда 0
// 2-4 дня часа минуты секунды 1
// 5-20 дней часов минут секунд  2
// // 21 день час минута секунда 0
// 22-24 дня часа минуты секунды 1
// 25-30 дней часов минут секунд 2
// // 31 день - минута секунда 0
// 32-34 - - минуты секунды 1
// 35- 40 -  - минут секунд 2
// 41 - -      минута секунда 0
// 42-44                     1
// 45- 50                     2
// // 51                         0
// 52-54                      1
// 55-60                      2

function newYear() {
    let now = new Date().getTime();
    let gap = countDate - now;
    if (gap<=0) {
        clearInterval(timerId);
    }

    let second = 1000;
    let minute =second*60;
    let hour = minute*60;
    let day = hour *24;

    let d = Math.floor(gap/(day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute))/ (second));

    const days=document.getElementById('day')
    const hours= document.getElementById('hour')
    const min = document.getElementById('minute')
    const sec =  document.getElementById('second')
    days.innerText = d < 10 ? '0' + d : d;
    hours.innerText = h < 10 ? '0' + h : h;
    min.innerText = m < 10 ? '0' + m : m;
    sec.innerText = s < 10 ? '0' + s : s;

 
    days.dataset.title = declensionNum(d, ['день', 'дня', 'дней']);
    hours.dataset.title = declensionNum(h, ['час', 'часа', 'часов']);
    min.dataset.title = declensionNum(m, ['минута', 'минуты', 'минут']);
    sec.dataset.title = declensionNum(s, ['секунда', 'секунды', 'секунд']);
}


let intervalId=setInterval(function() {
  newYear();
},1000)

















// https://programka.com.ua/dokument/sistema/kak-sdelat-prostoj-tajmer-obratnogo-otscheta-html
// https://itchief.ru/javascript/countdown-timer
