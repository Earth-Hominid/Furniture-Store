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

// Function which creates the very top navigation bar.
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

    //set attributes, images, and classes
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

// Function which creates the category/department link bar below the navigation bar
function createDepartmentNav() {
  // Create an element to grab the content div in index.html
  const contentDiv = document.getElementById('content');
  // Function for creating the retail department category bar.
  const createCategoryBar = () => {
    // create elements
    const container = document.createElement('div');
    const containerList = document.createElement('div');

    //set attributes & classes
    container.classList.add('container-category');
    containerList.classList.add('category-list');
    containerList.setAttribute('id', 'link-list');

    //append to the DOM
    container.appendChild(containerList);

    // IIFE (Immediately Invoked Function Expression) for the 'new' department
    const novoLink = (() => {
      // create elements
      const novaBox = document.createElement('div'); // div to hold department icon and title
      const boxImage = new Image(); // department image
      const boxSpan = document.createElement('span'); // span to hold department title

      // set attributes, classes, and images
      novaBox.classList.add('drop-box');
      novaBox.setAttribute('id', 'new-in');
      boxImage.src = Box;
      boxImage.classList.add('drop-icon');
      boxImage.setAttribute('alt', 'Novo icon');
      boxSpan.textContent = 'Novo';

      // append to the DOM
      containerList.appendChild(novaBox);
      novaBox.appendChild(boxImage);
      novaBox.appendChild(boxSpan);
    })();

    // IIFE (Immediately Invoked Function Expression) for the 'sofa' department
    const sofaLink = (() => {
      // create elements
      const sofaBox = document.createElement('div'); // div to hold department icon and title
      const sofaImage = new Image(); // sofa department icon
      const sofaSpan = document.createElement('span'); // span for department title

      // set attributes, classes, and images
      sofaBox.classList.add('drop-box');
      sofaBox.setAttribute('id', 'sofas');
      sofaImage.src = Sofa;
      sofaImage.classList.add('drop-icon');
      sofaImage.setAttribute('alt', 'Sofa icon');
      sofaSpan.textContent = 'Sofás';

      // append to the DOM
      containerList.append(sofaBox);
      sofaBox.appendChild(sofaImage);
      sofaBox.appendChild(sofaSpan);
    })();

    // IIFE (Immediately Invoked Function Expression) for the 'chair' department
    const chairLink = (() => {
      // create elements
      const chairBox = document.createElement('div');
      const chairImage = new Image();
      const chairSpan = document.createElement('span');

      // set attributes, classes, and images
      chairBox.classList.add('drop-box');
      chairBox.setAttribute('id', 'chairs');
      chairImage.src = Chair;
      chairImage.classList.add('drop-icon');
      chairImage.setAttribute(
        'alt',
        'chair icon which links to chair department'
      );
      chairSpan.textContent = 'Cadeiras';

      // append to the DOM
      containerList.append(chairBox);
      chairBox.appendChild(chairImage);
      chairBox.appendChild(chairSpan);
    })();

    // IIFE (Immediately Invoked Function Expression) for the 'favourite' department
    const favLink = (() => {
      // create elements
      const favBox = document.createElement('div');
      const favImage = new Image();
      const favSpan = document.createElement('span');

      // set attributes, classes, and images
      favBox.classList.add('drop-box');
      favBox.setAttribute('id', 'favs');
      favImage.src = Fav;
      favImage.classList.add('drop-icon');
      favImage.setAttribute('alt', 'Mesa icon');
      favImage.setAttribute('id', 'heart');
      favSpan.textContent = 'Favoritos';

      // append to the DOM
      containerList.append(favBox);
      favBox.appendChild(favImage);
      favBox.appendChild(favSpan);
    })();

    return container;
  };
  contentDiv.appendChild(createCategoryBar());
}

// Function which creates the hero section below the department link bar
function createHeroPromo() {
  // Create an element to grab the content div in index.html
  const contentDiv = document.getElementById('content');

  // IIFE for hero section
  const heroSection = () => {
    // create elements
    const section = document.createElement('section');
    const hero = document.createElement('div');
    const promoSection = document.createElement('div');

    // set attributes, classes and images
    section.classList.add('hero-section');
    section.setAttribute('id', 'toggle');
    hero.classList.add('hero');
    promoSection.classList.add('promotion-section');

    // append to the DOM
    hero.appendChild(promoSection);

    //IIFE for left side hero content
    const leftSquare = (() => {
      // create elements
      const promoLeft = document.createElement('div');
      const promoIndent = document.createElement('div');
      const promoHeadline = document.createElement('div');
      const promoPrice = document.createElement('div');
      const leftPromoImage = new Image();

      // set attributes, classes and images
      promoLeft.classList.add('promo-left-square');
      promoSection.appendChild(promoLeft);
      promoIndent.classList.add('promo-indent');
      promoHeadline.classList.add('promo-headline');
      promoHeadline.textContent = 'Cadeiras a partir de';
      promoPrice.classList.add('promo-price');
      promoPrice.textContent = 'R$200';
      leftPromoImage.src = ProductOne;
      leftPromoImage.setAttribute('id', 'left-promo-img');
      leftPromoImage.setAttribute('alt', 'Cadeira image');

      // append to the DOM
      promoLeft.appendChild(promoIndent);
      promoIndent.appendChild(promoHeadline);
      promoHeadline.appendChild(promoPrice);
      promoLeft.appendChild(leftPromoImage);
    })();

    //IIFE for middle hero content
    const promoMiddleSquare = (() => {
      // create elements
      const promoMiddle = document.createElement('div');
      const heroPromo = document.createElement('div');

      // set attributes, classes and images
      promoMiddle.classList.add('promo-middle');
      heroPromo.classList.add('hero-promo');
      heroPromo.textContent = 'A promoção Escolha e Combine está ativada!';

      // append to the DOM
      promoSection.appendChild(promoMiddle);
      promoMiddle.appendChild(heroPromo);
    })();

    //IIFE for right side hero content
    const rightSquare = (() => {
      // create elements
      const promoRight = document.createElement('div');
      const promoRightIndent = document.createElement('div');
      const promoRightHeadline = document.createElement('div');
      const promoPrice = document.createElement('div');
      const leftPromoImage = new Image();

      // set attributes, classes and images
      promoRight.classList.add('promo-right-square');
      promoSection.appendChild(promoRight);
      promoRightIndent.classList.add('promo-indent');
      promoRightHeadline.classList.add('promo-headline');
      promoRightHeadline.textContent = 'Sofás a partir de ';
      promoPrice.classList.add('promo-price');
      promoPrice.textContent = 'R$400';
      leftPromoImage.src = ProductTwo;
      leftPromoImage.setAttribute('id', 'right-promo-img');
      leftPromoImage.setAttribute('alt', 'Sofa image');

      // append to the DOM
      promoRight.appendChild(promoRightIndent);
      promoRightIndent.appendChild(promoRightHeadline);
      promoRightHeadline.appendChild(promoPrice);
      promoRight.appendChild(leftPromoImage);
    })();

    return section;
  };
  contentDiv.appendChild(heroSection());
}

// export default compileWebsite;
