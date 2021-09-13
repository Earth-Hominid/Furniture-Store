import './styles.css';
import renderHome from './home.js';
import createNew from './new';
import sofa from './sofa.js';
import chair from './chairs';
import favorite from './favorites';

// Function which adds home logic to logo
const homeButton = () => {
  const button = document.getElementById('logo');
  logo.addEventListener('click', renderHomeButton);
};

const renderHomeButton = () => {
  const main = document.querySelector('main');
  main.textContent = '';
  createNew();
};

const listenDepartmentClick = () => {
  const main = document.querySelector('main');
  const departmentLinks = document.querySelectorAll('.drop-box');

  departmentLinks.forEach((icon) => {
    icon.addEventListener('click', () => {
      main.textContent = '';
      if (icon.id === 'new-in') {
        createNew();
      } else if (icon.id === 'sofas') {
        sofa();
      } else if (icon.id === 'chairs') {
        chair();
      } else if (icon.id === 'favs') {
        favorite();
      }
    });
  });
};
renderHome();
homeButton();
listenDepartmentClick();
