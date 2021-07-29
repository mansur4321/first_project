"use strict"

//узнаем сколько пикселей на экране пользователя отступ слева для fixed меню
let widthClient = document.documentElement.clientWidth;
let width = ((widthClient - 940) / 2);
const menu = document.querySelector('div.menu div.container');
menu.style.left = `${width}px`;

//высота окна
let windowTret = window.innerHeight * 0.5;

//получаем координаты
function getCoords(elem) {
	let box = elem.getBoundingClientRect();


	return {
    	top: box.top + pageYOffset
	};

}

//удаляем active во вне экранных тайтлах и добавляем в нужный
function replaseActive(j) {

	for ( var i = 0; i < nav.length; i++ ) {

		if ( nav[i].classList.contains("active") == true && j != i) {
			nav[i].classList.remove("active");
		} 
		
	}

	nav[j].className +=" active";


}
//проверяем на каком тайтле пользователь
function compare(){	

	if ( homeCoords.top <= ( pageYOffset + windowTret ) ) {
		replaseActive(0);
	}


	if ( aboutMeCoords.top <= ( pageYOffset + windowTret ) ) {
		replaseActive(1);
	}


	if ( skillsCoords.top <= ( pageYOffset + windowTret ) ) {
		replaseActive(2);
	}


	if ( portfolioCoords.top <= ( pageYOffset + windowTret ) ) {
		replaseActive(3);
	}


	if ( contactsCoords.top <= ( pageYOffset + windowTret ) ) {
		replaseActive(4);
	}

}

//открытие бургер меню
function openBoorger() {

	document.querySelector('.menu').style.left = '60%';
	document.querySelector('.twilight').style.opacity = '0.2';
	document.querySelector('.twilight').style.width = '100%';
	document.querySelector('.twilight').style.height = '100%';

}

//закрытие бургер меню
function closeBoorger() {

	document.querySelector('.menu').style.left = '100%';
	document.querySelector('.twilight').style.opacity = '0';
	document.querySelector('.twilight').style.width = '0%';
	document.querySelector('.twilight').style.height = '0%';

}

//обновляем страницу
function size_Adaptive() {

	window.location.reload(); 

}

//эллементы фото для бургера создаем и получаем
let imgBoorger = document.querySelector('.header__imgBoorger');
let imgClose = document.createElement('img');

//получаем контейнер в теге menu
let navigation = document.querySelector('.menu>div.container');

//получаем все меню элементы
let nav = document.querySelectorAll('.header__menu');

//получаем координаты каждого тайтла
let homeCoords = getCoords(document.querySelector('.HomeName'));
let aboutMeCoords = getCoords(document.querySelector('.AboutMeName'));
let skillsCoords = getCoords(document.querySelector('.SkillsName'));
let portfolioCoords = getCoords(document.querySelector('.PortfolioName'));
let contactsCoords = getCoords(document.querySelector('.ContactsName'));


//даем картинку и нужные стили бургер меню
if ( widthClient <= 376 ) {

	//даем нужные стили картинке бургер меню
	imgBoorger.src = 'img/boorger.png';
	imgBoorger.style.position = 'relative';
	imgBoorger.style.left = `${widthClient * 0.795}px`;
	imgBoorger.style.top = '70px';

	//создаем картинку и даем стили для закрытия бургер меню
	navigation.prepend(imgClose);
	imgClose.className = 'header__closeMenu';
	imgClose.src = 'img/close.png';

}

//удаляем картинку закрытия и скрываем картинку бургер меню при большей ширине экрана
if ( widthClient > 360 ) { 
	
	navigation.removeChild(navigation.firstChild);
	imgBoorger.src = '';
	imgBoorger.style.marginTop = '-10px';

}


//вызываем функцию при изменении ширины экрана
window.addEventListener('resize', () => { size_Adaptive() });

//запуск функции при скроле
window.onscroll = () => {compare()}

//закрытие и открытие бургер меню
imgBoorger.onclick = () => {openBoorger()}
imgClose.onclick = () => {closeBoorger()}
document.querySelector('.twilight').onclick = () => {closeBoorger()}