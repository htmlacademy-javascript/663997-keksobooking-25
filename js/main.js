import {disablePage, enablePage} from './disable-page.js';

const main = function () {
  disablePage();
  setTimeout(enablePage, 5000);
};

document.addEventListener ('DOMContentLoaded', main());
