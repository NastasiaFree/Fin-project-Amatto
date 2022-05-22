let headerText = ` <div class="header ">
<div class="header__container _container">
    <div class="header__logo">
        <a href="#"><img src="img/logo-en-black-2 1.png" alt=""></a>
    </div>
    <div class="header__menu menu">
        <div class="menu__burg">
            <span></span>
        </div>
        <nav class="header__menu-nav">
            <ul class="menu__list">
                <li><a class="menu__link" href="index.html" target="_blanc">Главная</a></li>
                <li><a class="menu__link" href="index.html#about" target="_blanc">О нас</a></li>
                <li><a class="menu__link" href="">Каталог</a></li>
                <li><a class="menu__link" href="index.html#payment" target="_blanc">Рассрочка</a></li>
                <li><a class="menu__link" href="blog.html" target="_blanc">Блог</a></li>
                <li><a class="menu__link" href="#footer">Контакты</a></li>
            </ul>
        </nav>
    </div>
    <div class="header__phone">
        <p>+373 68 159 159</p>
    </div> 
</div>

</div>`;

let footerText = `
<footer id="footer" class="footer _container">
<div class="footer__main">
    <div class="footer__logo">
        <a href="#"><img src="img/logoFooter.png" alt=""></a>
        <p>При создании кухни наши дизайнеры учитывают пожелания клиента, дополняя их своими идеями что бы сделать кухню еще лучше! Понравился дизайн? Напиши нам или закажи консультацию дизайнера amatto.</p>
        <div class="footer_social">
            <h6 class="underline">Social Links</h6>
            <div class="social_links">
                <a href="https://www.facebook.com/amatto.bucatarii"><span class="ico ico_fb"></span></a>
                <a href="https://www.linkedin.com/in/amatto-bucatarii-ab067b238/"><span class="ico ico_linked"></span></a>
                <a href="https://www.instagram.com/amatto.bucatarii/"><span class="ico ico_inst" ></span></a>
                <a href="https://www.youtube.com/channel/UCjPaS-HuKtbBTkPZUybXbBA"><span class="ico ico_yout" ></span></a>
                <!-- <a href=""><span ico ico_fb></span></a> -->
            </div>
        </div>
    </div>
    <div class="footer__links">
        <details open>
            <summary class="underline">Links</summary>
            <ul class="menu-list footer__nav">
                <li><a class="" href="index.html" target="_blanc" >Главная</a></li>
                <li><a href="index.html#about" target="_blanc">О нас</a></li>
                <li><a href="">Каталог</a></li>
                <li><a href="index.html#payment" target="_blanc">Рассрочка</a></li>
                <li><a href="blog.html" target="_blanc">Блог</a></li>
                <li><a href="#footer">Контакты</a></li>
            </ul>
        </details>
    </div>
    <div class="footer__contacts">
        <details open>
            <summary class="underline">Republic Of Moldova</summary>
            <p class="location">Chisinau,15/2 Trandafirilor Str.</p>
            <p class="number_cont">+373 68 159 759</p>
            <p class="mail">hello@amatto.md</p>
        </details>
        <details open class="det">
            <summary class="underline">Republic Of Belgium</summary>
            <p class="location">Sint-Barbarastraat 3</p>
            <p class="number_cont">+32497037031</p>
            <p class="mail">hello@amatto.md</p>
        </details>
        <details open class="det" >
            <summary class="underline">Republic Of Norway</summary>
            <p class="location">Sadnes skytebaneveien 8D</p>
            <p class="number_cont">+4793960237</p>
            <p class="mail">hello@amatto.md</p>
        </details>
    </div>
</div>

<p class="reserv">© 2022 Amatto. All Rights Reserved.</p>
<div class="up">
<a href='#' id='up'> <img src="img/up.png" alt=""> </a>
</div>  
</footer>
`;


let adviceText = ` <div class="advice">
<div class="advice__info _container">
    <h3>
        Получите бесплатно дизайн проект кухни и консультацию дизайнера
    </h3>
    <h6>Вы узнаете точную <b>стоимость вашей кухни</b>  и получите <b>3D-проект</b> </h6>
    <div class="advice__note">
        <input type="tel" name="phone" id="telep" placeholder="Ваш Телефон" onkeydown="validation()">
        <button id="but_tel_pop" class="advice__but butLocal pop_fin">Записаться</button>
        <p id="valid"></p>
        
    </div>
</div>
</div>`;

let popUpForm = `
<div class="pop_upFin" id="pop_upFin">
<div class="pop_upFin_container">
    <div class="pop_upFin_body" >
        <p>Спасибо, что доверились компании Amatto! </p>
        <h2>&#9829</h2>   
        <p>Менеджер свяжется с вами в течение 30 минут.</p> 
        <div class="pop_upFin_close" id="pop_upFin_close">&#10006</div>
    </div>
</div>
</div>`;


var site = document.querySelector('.site');
function setHeader() {
  var header =  document.createElement("div");
  header.innerHTML = headerText ;
  site.insertAdjacentElement('afterbegin', header );
}
setHeader();


function setPop() {
    var pop =  document.createElement("div");
    pop.innerHTML = popUpForm ;
    site.insertAdjacentElement('afterbegin', pop );
  }
  setPop();



function setFooter() {
    var footer =  document.createElement("div");
    footer.innerHTML = footerText ;
    site.insertAdjacentElement('beforeend', footer );
  }
setFooter();


function setAdvice() {
    var advice =  document.createElement("div");
    advice.innerHTML = adviceText ;
    footer.insertAdjacentElement('beforebegin', advice );
  }
setAdvice();