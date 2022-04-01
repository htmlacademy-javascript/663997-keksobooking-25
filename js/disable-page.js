const form = document.querySelector ('.ad-form');
const mapFilters = document.querySelector ('.map__filters');
const fieldsetsAll = document.querySelectorAll('fieldset');
// .ad-form содержит класс ad-form--disabled
// Все интерактивные элементы формы .ad-form должны быть заблокированы с помощью атрибута disabled, добавленного на них или на их родительские блоки fieldset. Слайдер также должен быть заблокирован;
// Форма с фильтрами .map__filters заблокирована так же, как и форма .ad-form — на форму добавлен специальный класс, а на её интерактивные элементы атрибуты disabled.
// 1.2. Активное состояние. Загрузка и успешная инициализация карты (карта реализуется сторонней библиотекой Leaflet) переводит страницу в активное состояние. В активном состоянии страница позволяет:

// Вносить изменения в форму и отправлять её на сервер;
// После загрузки данных с сервера просматривать похожие объявления на карте, фильтровать их и уточнять подробную информацию о них, показывая для каждого из объявлений карточку.
const disablePage = function () {
  form.classList.add('ad-form--disabled');
  mapFilters.classList.add('ad-form--disabled');
  for (let i =0 ; i < fieldsetsAll.length; i++){
    fieldsetsAll[i].setAttribute('disabled', true);
  }
};

const enablePage = function () {
  form.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('ad-form--disabled');
  for (let i =0 ; i < fieldsetsAll.length; i++){
    fieldsetsAll[i].removeAttribute('disabled');
  }
};

export {disablePage, enablePage};
