var navMain = document.querySelector('.main-nav');
var navToggler = document.querySelector('.page-header__toggler-button');

navMain.classList.remove('main-nav--nojs');

navToggler.addEventListener('click', function () {
  if (navToggler.classList.contains('page-header__toggler-button--closed')) {
    navToggler.classList.remove('page-header__toggler-button--closed');
    navMain.classList.remove('main-nav--closed');
    navToggler.classList.add('page-header__toggler-button--opened');
    navMain.classList.add('main-nav--opened');
  } else {
    navToggler.classList.add('page-header__toggler-button--closed');
    navMain.classList.add('main-nav--closed');
    navToggler.classList.remove('page-header__toggler-button--opened');
    navMain.classList.remove('main-nav--opened');
  }
});

var switcherButtonWas = document.querySelector('.switcher__button--was');
var switcherButtonBecame = document.querySelector('.switcher__button--became');
var exampleImageRight = document.querySelector('.example__image--right');
var exampleImageLeft = document.querySelector('.example__image--left');
var switcher = document.querySelector('.switcher');

// Левая кнопка
switcherButtonWas.addEventListener('click', function () {
  if (exampleImageRight.classList.contains('example__image--active')) {
  } else {
    exampleImageRight.classList.add('example__image--active');
  }
});

switcherButtonWas.addEventListener('click', function () {
  if (exampleImageLeft.classList.contains('example__image--active')) {
    exampleImageLeft.classList.remove('example__image--active');
  } else { }
});

switcherButtonWas.addEventListener('click', function () {
  if (switcher.classList.contains('switcher--right-active')) {
    switcher.classList.remove('switcher--right-active');
    switcher.classList.add('switcher--left-active');
  }
});

// Правая кнопка
switcherButtonBecame.addEventListener('click', function () {
  if (exampleImageLeft.classList.contains('example__image--active')) {
  } else {
    exampleImageLeft.classList.add('example__image--active');
  }
});

switcherButtonBecame.addEventListener('click', function () {
  if (exampleImageRight.classList.contains('example__image--active')) {
    exampleImageRight.classList.remove('example__image--active');
  } else { }
});

switcherButtonBecame.addEventListener('click', function () {
  if (switcher.classList.contains('switcher--left-active')) {
    switcher.classList.remove('switcher--left-active');
    switcher.classList.add('switcher--right-active');
  }
});
