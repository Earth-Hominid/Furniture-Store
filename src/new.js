import ChairOne from './images/chairs/cadeira-cinza.png';
import ChairTwo from './images/chairs/cadeira-marrom.png';
import ChairThree from './images/chairs/cadeira-preta.png';
import ChairFour from './images/chairs/cadeira-verde.png';
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

function createShowcase() {
  // Create an element to grab the content div in index.html
  const mainSection = document.getElementById('main');

  // Function to generate showcase section
  const createShowcaseSection = () => {
    // Create elements
    const showcaseSection = document.createElement('section');
    const showcase = document.createElement('div');
    const showcaseHeadline = document.createElement('div');
    const carousel = document.createElement('div');

    // set attributes, images and classes
    showcaseSection.classList.add('showcase-section');
    showcaseSection.setAttribute('id', 'toggle');
    showcase.classList.add('product-showcase');
    showcaseHeadline.classList.add('div-headline');
    showcaseHeadline.textContent = 'Novo';
    carousel.classList.add('showcase-carousel');

    // Append to DOM
    showcaseSection.appendChild(showcase);
    showcase.appendChild(showcaseHeadline);
    showcaseSection.appendChild(carousel);

    // IIFE to create first product square
    const createleftSquareProduct = (() => {
      // Create elements
      const productContainer = document.createElement('div');
      const leftSquare = document.createElement('div');
      const leftSquareImage = new Image();
      const leftSquareProductName = document.createElement('div');
      const leftSquarePrice = document.createElement('div');

      // Set attributes, classes and images
      productContainer.classList.add('product-container');
      leftSquare.classList.add('product-square-left');
      leftSquareImage.src = ChairOne;
      leftSquareImage.setAttribute('alt', 'cadeira cinza');
      leftSquareImage.classList.add('showcase-image');
      leftSquareProductName.classList.add('showcase-product-name');
      leftSquareProductName.textContent = 'Betty';
      leftSquarePrice.classList.add('showcase-product-price');
      leftSquarePrice.textContent = 'BRL 2000';

      // Append to the DOM
      carousel.appendChild(productContainer);
      productContainer.appendChild(leftSquare);
      leftSquare.appendChild(leftSquareImage);
      leftSquare.appendChild(leftSquareProductName);
      leftSquare.appendChild(leftSquarePrice);
    })();

    const createSecondProductSquare = (() => {
      // Create Elements
      const productContainer = document.createElement('div');
      const secondSquare = document.createElement('div');
      const secondImage = new Image();
      const secondSquareProductName = document.createElement('div');
      const secondSquarePrice = document.createElement('div');

      // Set attributes, classes and images
      productContainer.classList.add('product-container');
      secondSquare.classList.add('product-square');
      secondImage.src = ChairTwo;
      secondImage.setAttribute('alt', 'cadeira marrom');
      secondImage.classList.add('showcase-image');
      secondSquareProductName.classList.add('showcase-product-name');
      secondSquareProductName.textContent = 'Betty';
      secondSquarePrice.classList.add('showcase-product-price');
      secondSquarePrice.textContent = 'BRL 2000';

      // Append to the DOM
      carousel.appendChild(productContainer);
      productContainer.appendChild(secondSquare);
      secondSquare.appendChild(secondImage);
      secondSquare.appendChild(secondSquareProductName);
      secondSquare.appendChild(secondSquarePrice);
    })();

    const createthirdProductSquare = (() => {
      //Create Elements
      const productContainer = document.createElement('div');
      const thirdSquare = document.createElement('div');
      const thirdImage = new Image();
      const thirdSquareProductName = document.createElement('div');
      const thirdSquarePrice = document.createElement('div');

      // Set attributes, classes and text
      productContainer.classList.add('product-container');
      thirdSquare.classList.add('product-square');
      thirdImage.src = ChairThree;
      thirdImage.setAttribute('alt', 'cadeira verde');
      thirdImage.classList.add('showcase-image');
      thirdSquareProductName.classList.add('showcase-product-name');
      thirdSquareProductName.textContent = 'Betty';
      thirdSquarePrice.classList.add('showcase-product-price');
      thirdSquarePrice.textContent = 'BRL 2000';

      // Append to the DOM
      carousel.appendChild(productContainer);
      productContainer.appendChild(thirdSquare);
      thirdSquare.appendChild(thirdImage);
      thirdSquare.appendChild(thirdSquareProductName);
      thirdSquare.appendChild(thirdSquarePrice);
    })();

    const createfourthProductSquare = (() => {
      // Create Elements
      const productContainer = document.createElement('div');
      const fourthSquare = document.createElement('div');
      const fourthImage = new Image();
      const fourthSquareProductName = document.createElement('div');
      const fourthSquarePrice = document.createElement('div');

      // Set attributes, classes, image and text
      productContainer.classList.add('product-container');
      fourthSquare.classList.add('product-square');
      fourthImage.src = ChairFour;
      fourthImage.setAttribute('alt', 'cadeira vermelha');
      fourthImage.classList.add('showcase-image');
      fourthSquareProductName.classList.add('showcase-product-name');
      fourthSquareProductName.textContent = 'Betty';
      fourthSquarePrice.classList.add('showcase-product-price');
      fourthSquarePrice.textContent = 'BRL 2000';

      // Append to the DOM
      carousel.appendChild(productContainer);
      productContainer.appendChild(fourthSquare);
      fourthSquare.appendChild(fourthImage);
      fourthSquare.appendChild(fourthSquareProductName);
      fourthSquare.appendChild(fourthSquarePrice);
    })();

    return showcaseSection;
  };

  mainSection.append(createShowcaseSection());
}

function createNew() {
  createHeroPromo()
  createShowcase()
}
export default createNew;