import data from '../data/menu.json';
import createMenu from '../tamplate/menu.hbs';
const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend',createMenu(data));