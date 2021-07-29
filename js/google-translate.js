"use strict"

//кнопки смены языка рус англ
let btn_ru = document.querySelector('.langRu');
let btn_en = document.querySelector('.langEng');

//подсвечиваем RU и меняем все на русский
function language_Ru() {
    
    btn_en.classList.remove('active');
    btn_ru.className += ' active';

    document.querySelector('#homeKey').innerHTML = "Главная";
    document.querySelector('#aboutMeKey').innerHTML = "Обо мне";
    document.querySelector('#skillsKey').innerHTML = "Навыки";
    document.querySelector('#portfolioKey').innerHTML = "Портфолио";
    document.querySelector('#contactsKey').innerHTML = "Контакты";

    document.querySelector('.header__text_name').innerHTML = "Денис<br>Новик";
    document.querySelector('.header__text_briefInf').innerHTML = "UX | UI дизайнер</br>24 года, Минск";

    document.querySelector('.AboutMeName').innerHTML = "Обо мне";
    document.querySelector('.aboutMe__text').innerHTML = `Привет, я Денис - UX / UI дизайнер из Минска. </br> Интересуюсь дизайном и всем, что с ним связано. </br> </br> </br> Я учусь на курсах "Веб" и интерфейсы мобильного дизайна »в IT-Академии. </br> </br> </br> Готовы реализовывать отличные проекты </br> с замечательными людьми.`;

    document.querySelector('.SkillsName').innerHTML = "Навыки";
    document.querySelector('.skills__text').innerHTML = "Я работаю в таких программах как";



    document.querySelector('.PortfolioName').innerHTML = "Портфолио";

    document.querySelector('#HomepageKey').innerHTML = "Интернет-магазин модной одежды - Главная страница";
    document.querySelector('#ReebokKey').innerHTML = "Магазин Reebok - Концепт";
    document.querySelector('#BraunKey').innerHTML = "Посадочная страница Braun - Концепт";

    document.querySelector('.ContactsName').innerHTML = "Контакты";
    document.querySelector('.footer__text').innerHTML = "Хотите узнать больше или просто пообщаться? </br> Добро пожаловать!";
    document.querySelector('.footer__button').innerHTML = "Отправить сообщение";

    document.querySelector('.footer__textL').innerHTML = "Поставьте лайк в </br> LinkedIn, Instagram, Behance, Dribble";

}

//подсвечиваем ENG и меняем все на англ
function language_Eng() {

    btn_ru.classList.remove('active');
    btn_en.className += ' active';

    document.querySelector('#homeKey').innerHTML = "Home";
    document.querySelector('#aboutMeKey').innerHTML = "About me";
    document.querySelector('#skillsKey').innerHTML = "Skills";
    document.querySelector('#portfolioKey').innerHTML = "Portfolio";
    document.querySelector('#contactsKey').innerHTML = "Contacts";

    document.querySelector('.header__text_name').innerHTML = "Denis<br>Novik";
    document.querySelector('.header__text_briefInf').innerHTML = "UX | UI designer</br>24 years old, Minsk";

    document.querySelector('.AboutMeName').innerHTML = "About me";
    document.querySelector('.aboutMe__text').innerHTML = `Hi, I'm Denis – UX/UI designer from Minsk.</br> I'm interested in design and everything connected with it.</br></br></br>I'm studying at courses "Web and mobile design           interfaces" in IT-Academy.</br></br></br>Ready to implement excellent projects</br> with wonderful people.`;

    document.querySelector('.SkillsName').innerHTML = "Skills";
    document.querySelector('.skills__text').innerHTML = "I work in such programs as";



    document.querySelector('.PortfolioName').innerHTML = "Portfolio";

    document.querySelector('#HomepageKey').innerHTML = "Online fashion store - Homepage";
    document.querySelector('#ReebokKey').innerHTML = "Reebok Store - Concept";
    document.querySelector('#BraunKey').innerHTML = "Braun Landing Page - Concept";

    document.querySelector('.ContactsName').innerHTML = "Contacts";
    document.querySelector('.footer__text').innerHTML = "Want to know more or just chat?</br> You are welcome!";
    document.querySelector('.footer__button').innerHTML = "Send message";

    document.querySelector('.footer__textL').innerHTML = "Like me on </br>LinkedIn, Instagram, Behance, Dribble";

}

//при клике на на ру и енг выполняем функции
btn_ru.onclick = () => {language_Ru()}
btn_en.onclick = () => {language_Eng()}