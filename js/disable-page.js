import {addUsersCards} from './get-elements.js';

const disablePage = function () {
  const form = document.querySelector ('.ad-form');
  const mapFilters = document.querySelector ('.map__filters');
  const fieldsetsAll = document.querySelectorAll('fieldset');

  form.classList.add('ad-form--disabled');
  mapFilters.classList.add('ad-form--disabled');
  for (let i =0 ; i < fieldsetsAll.length; i++){
    fieldsetsAll[i].setAttribute('disabled', true);
  }
};

const enablePage = function () {
  const form = document.querySelector ('.ad-form');
  const mapFilters = document.querySelector ('.map__filters');
  const fieldsetsAll = document.querySelectorAll('fieldset');

  form.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('ad-form--disabled');
  for (let i =0 ; i < fieldsetsAll.length; i++){
    fieldsetsAll[i].removeAttribute('disabled');
  }
  addUsersCards();
};

export {disablePage, enablePage};
