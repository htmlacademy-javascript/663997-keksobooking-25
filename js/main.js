import {addUsersCards} from './get-elements.js';
import {disablePage, enablePage} from './disable-page.js';

document.addEventListener ('DOMContentLoaded' , addUsersCards());

disablePage();
setTimeout(enablePage, 5000);

