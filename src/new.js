import ChairOne from './images/chairs/cadeira-cinza.png'
import ChairTwo from './images/chairs/cadeira-marrom.png'
import ChairThree from './images/chairs/cadeira-preta.png'
import ChairFour from './images/chairs/cadeira-verde.png'
import ProductOne from './images/product/Image-Product-1.png';
import ProductTwo from './images/product/Image-Product.png';

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