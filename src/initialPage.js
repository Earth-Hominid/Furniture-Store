import Logo from './images/icons/redebs.png';
import Search from './images/icons/search.png';
import LogIn from './images/icons/Log-in.png';
import Bag from './images/icons/bag.png';
import Box from './images/icons/box32.png';
import Sofa from './images/icons/sofa32.png';
import Chair from './images/icons/chair32.png';
import Fav from './images/icons/heart1.png';
import BackToTopArrow from './images/icons/icon-arrow.png';
import ChairOne from './images/chairs/cadeira-cinza.png';
import ChairTwo from './images/chairs/cadeira-marrom.png';
import ChairThree from './images/chairs/cadeira-preta.png';
import ChairFour from './images/chairs/cadeira-verde.png';
import ProductOne from './images/product/Image-Product-1.png';
import ProductTwo from './images/product/Image-Product.png';

function createNavBar() {
  // Create an element to grab the content div in index.html
  const contentDiv = document.getElementById('content');
  // Function which contains logic to generate nav element and its contents
  const createNav = () => {

    // create elements
    const nav = document.createElement('NAV'); // nav element
    const logo = new Image(); // logo
    const navBar = document.createElement('div'); // a div within nav to hold icons
    const searchDiv = document.createElement('div'); // a div to hold search icon
    const navIcon = new Image(); // search icon
    const logInDiv = document.createElement('div'); // a div to hold log-in icon
    const logInIcon = new Image(); // log-in icon
    const bagDiv = document.createElement('div'); // a div to hold shopping bag icon
    const bagIcon = new Image(); // shopping bag icon

    //set attributes and images
    nav.setAttribute('id', 'nav'); 
    logo.src = Logo; 
    logo.setAttribute('id', 'logo'); 
    logo.setAttribute('alt', 'Image of RedeBS logo'); 
    navBar.classList.add('nav-bar'); 
    searchDiv.classList.add('search-div');
    navIcon.src = Search;
    navIcon.classList.add('nav-icons');
    navIcon.setAttribute('id', 'search');
    navIcon.setAttribute('alt', 'magnifying glass search icon');
    logInDiv.classList.add('log-in-div');
    logInIcon.src = LogIn;
    logInIcon.classList.add('nav-icons');
    logInIcon.setAttribute('alt', 'log-in icon');
    logInIcon.setAttribute('id', 'log-in');
    bagDiv.classList.add('bag-div');
    bagIcon.src = Bag;
    bagIcon.classList.add('nav-icons');
    bagIcon.setAttribute('alt', 'bag icon which goes to shopping cart');
    bagIcon.setAttribute('id', 'bag');

    //append to the DOM
    nav.appendChild(logo);
    nav.appendChild(navBar);
    navBar.appendChild(navIcon);
    navBar.appendChild(logInDiv);
    logInDiv.appendChild(logInIcon);
    navBar.appendChild(bagDiv);
    bagDiv.appendChild(bagIcon);

    return nav;
  };

  contentDiv.append(createNav());
}

// export default compileWebsite;