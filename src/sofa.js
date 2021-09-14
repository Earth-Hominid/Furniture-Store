import SofaOne from './images/sofas/sofa-1.png';
import SofaTwo from './images/sofas/sofa-2.png';
import SofaThree from './images/sofas/sofa-3.png';
import SofaFour from './images/sofas/sofa-4.png';
import SofaFive from './images/sofas/sofa-5.png';
import SofaSix from './images/sofas/sofa-6.png';
import SofaSeven from './images/sofas/sofa-7.png';
import SofaEight from './images/sofas/sofa-8.png';
import SofaWhite from './images/sofas/sofa-white.png';
import LivingRoom from './images/sofas/living-room2.png';
import SofaHero from './images/sofas/sofa-9.jpeg';

function sofa() {
  // Get main element in order to append.
  const mainSection = document.getElementById('main');
  // Sofa department hero section
  const sofaHeroSection = () => {
    // Create elements
    const heroSection = document.createElement('section');
    const heroDepartment = document.createElement('div');
    const departmentHeadline = document.createElement('div');
    const leftHero = document.createElement('div');
    const leftHeroImage = new Image();
    const copywrite = document.createElement('div');
    const copywriteTitle = document.createElement('h1');
    const copywriteParagraph = document.createElement('p');

    // Set attributes, text, images and classes
    heroSection.setAttribute('id', 'toggle');
    heroDepartment.classList.add('hero-department');
    departmentHeadline.classList.add('department-headline');
    departmentHeadline.textContent = 'Homepage > Sofás';
    leftHero.classList.add('department-hero-left');
    leftHeroImage.src = SofaHero;
    leftHeroImage.setAttribute('alt', 'photo of sofa in living room');
    leftHeroImage.setAttribute('id', 'living-room');
    copywrite.classList.add('department-copywrite');
    copywriteTitle.classList.add('copywrite-title');
    copywriteTitle.textContent = 'Sofás';
    copywriteParagraph.classList.add('copywrite-paragraph');
    copywriteParagraph.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium provident non soluta optio, dignissimos similique reprehenderit porro veniam nemo error voluptas esse asperiores quae molestias! Similique quos optio ut.';

    // Append to the DOM
    heroSection.appendChild(heroDepartment);
    heroDepartment.appendChild(departmentHeadline);
    heroDepartment.appendChild(leftHero);
    leftHero.appendChild(leftHeroImage);
    leftHero.appendChild(copywrite);
    copywrite.appendChild(copywriteTitle);
    copywrite.appendChild(copywriteParagraph);

    return heroSection;
  };
  mainSection.append(sofaHeroSection());

  const createTopShowcase = () => {
    // create elements
    const showcaseSection = document.createElement('section');
    const showcase = document.createElement('div');
    const showcaseHeadline = document.createElement('div');
    const carousel = document.createElement('div');

    // set attributes, classes
    showcaseSection.classList.add('showcase-section');
    showcase.classList.add('product-showcase');
    showcaseHeadline.classList.add('div-headline');
    carousel.classList.add('showcase-carousel');

    // append to the DOM
    document.body.append(showcaseSection);
    showcaseSection.appendChild(showcase);
    showcase.appendChild(showcaseHeadline);
    showcaseSection.appendChild(carousel);

    // IIFE for the left/first square product
    const createleftSquareProduct = (() => {
      // Create elements
      const productContainer = document.createElement('div');
      const leftSquare = document.createElement('div');
      const leftSquareImage = new Image();
      const leftSquareProductName = document.createElement('div');
      const leftSquarePrice = document.createElement('div');

      // Set attributes, classes, imgage and text
      productContainer.classList.add('product-container');
      leftSquare.classList.add('product-square-left');
      leftSquareImage.src = SofaEight;
      leftSquareImage.setAttribute('alt', 'sofá cinza');
      leftSquareImage.classList.add('showcase-image');
      leftSquareProductName.classList.add('showcase-product-name');
      leftSquareProductName.textContent = 'Betty';
      leftSquarePrice.classList.add('showcase-product-price');
      leftSquarePrice.textContent = 'BRL 2000';

      // Append to the DOM
      carousel.appendChild(productContainer);
      productContainer.appendChild(leftSquare);
      leftSquare.appendChild(leftSquareImage);
      productContainer.appendChild(leftSquareProductName);
      productContainer.appendChild(leftSquarePrice);
    })();
    // IIFE for the second product
    const createSecondProductSquare = (() => {
      // Create elements
      const productContainer = document.createElement('div');
      const secondSquare = document.createElement('div');
      const secondImage = new Image();
      const secondSquareProductName = document.createElement('div');
      const secondSquarePrice = document.createElement('div');

      // Set attributes, classes, image and text
      productContainer.classList.add('product-container');
      secondSquare.classList.add('product-square');
      secondImage.src = SofaOne;
      secondImage.setAttribute('alt', 'sofá azul');
      secondImage.classList.add('showcase-image');
      secondSquareProductName.classList.add('showcase-product-name');
      secondSquareProductName.textContent = 'Betty';
      secondSquarePrice.classList.add('showcase-product-price');
      secondSquarePrice.textContent = 'BRL 2000';

      // Append to the DOM
      carousel.appendChild(productContainer);
      productContainer.appendChild(secondSquare);
      secondSquare.appendChild(secondImage);
      productContainer.appendChild(secondSquareProductName);
      productContainer.appendChild(secondSquarePrice);
    })();
    // IIFE for the third product
    const createthirdProductSquare = (() => {
      // create elements
      const productContainer = document.createElement('div');
      const thirdSquare = document.createElement('div');
      const thirdImage = new Image();
      const thirdSquareProductName = document.createElement('div');
      const thirdSquarePrice = document.createElement('div');

      // set attribute, class, image and text
      productContainer.classList.add('product-container');
      thirdSquare.classList.add('product-square');
      thirdImage.src = SofaSeven;
      thirdImage.setAttribute('alt', 'sofá vermelho');
      thirdImage.classList.add('showcase-image');
      thirdSquareProductName.classList.add('showcase-product-name');
      thirdSquareProductName.textContent = 'Betty';
      thirdSquarePrice.classList.add('showcase-product-price');
      thirdSquarePrice.textContent = 'BRL 2000';

      // append to DOM
      carousel.appendChild(productContainer);
      productContainer.appendChild(thirdSquare);
      thirdSquare.appendChild(thirdImage);
      productContainer.appendChild(thirdSquareProductName);
      productContainer.appendChild(thirdSquarePrice);
    })();
    // IIFE for the fourth product
    const createfourthProductSquare = (() => {
      // create elements
      const productContainer = document.createElement('div');
      const fourthSquare = document.createElement('div');
      const fourthImage = new Image();
      const fourthSquareProductName = document.createElement('div');
      const fourthSquarePrice = document.createElement('div');

      // set attributes, classes, image and text
      productContainer.classList.add('product-container');
      fourthSquare.classList.add('product-square');
      fourthImage.src = SofaThree;
      fourthImage.setAttribute('alt', 'sofá marrom');
      fourthImage.classList.add('showcase-image');
      fourthSquareProductName.classList.add('showcase-product-name');
      fourthSquareProductName.textContent = 'Betty';
      fourthSquarePrice.classList.add('showcase-product-price');
      fourthSquarePrice.textContent = 'BRL 2000';

      // append to the DOM
      carousel.appendChild(productContainer);
      productContainer.appendChild(fourthSquare);
      fourthSquare.appendChild(fourthImage);
      productContainer.appendChild(fourthSquareProductName);
      productContainer.appendChild(fourthSquarePrice);
    })();

    return showcaseSection;
  };

  mainSection.append(createTopShowcase());

  const createMiddleShowcaseSection = () => {
    const showcaseSection = document.createElement('section');
    showcaseSection.classList.add('showcase-section');
    document.body.append(showcaseSection);

    const showcase = document.createElement('div');
    showcase.classList.add('product-showcase');
    showcaseSection.appendChild(showcase);

    const showcaseHeadline = document.createElement('div');
    showcaseHeadline.classList.add('div-headline');
    showcase.appendChild(showcaseHeadline);

    const carousel = document.createElement('div');
    carousel.classList.add('showcase-carousel-image');
    showcaseSection.appendChild(carousel);

    const createleftSquareProduct = (() => {
      const productContainer = document.createElement('div');
      productContainer.classList.add('product-container');
      carousel.appendChild(productContainer);

      const leftSquare = document.createElement('div');
      leftSquare.classList.add('product-square-left');
      productContainer.appendChild(leftSquare);

      const leftSquareImage = new Image();
      leftSquareImage.src = SofaSix;
      leftSquareImage.setAttribute('alt', 'sofá cinza');
      leftSquareImage.classList.add('showcase-image');
      leftSquare.appendChild(leftSquareImage);

      const leftSquareProductName = document.createElement('div');
      leftSquareProductName.classList.add('showcase-product-name');
      leftSquareProductName.textContent = 'Betty';
      productContainer.appendChild(leftSquareProductName);

      const leftSquarePrice = document.createElement('div');
      leftSquarePrice.classList.add('showcase-product-price');
      leftSquarePrice.textContent = 'BRL 2000';
      productContainer.appendChild(leftSquarePrice);
    })();

    const createSecondProductSquare = (() => {
      const productContainer = document.createElement('div');
      productContainer.classList.add('product-container');
      carousel.appendChild(productContainer);

      const secondSquare = document.createElement('div');
      secondSquare.classList.add('product-square');
      productContainer.appendChild(secondSquare);

      const secondImage = new Image();
      secondImage.src = SofaFour;
      secondImage.setAttribute('alt', 'sofá marrom');
      secondImage.classList.add('showcase-image');
      secondSquare.appendChild(secondImage);

      const secondSquareProductName = document.createElement('div');
      secondSquareProductName.classList.add('showcase-product-name');
      secondSquareProductName.textContent = 'Betty';
      productContainer.appendChild(secondSquareProductName);

      const secondSquarePrice = document.createElement('div');
      secondSquarePrice.classList.add('showcase-product-price');
      secondSquarePrice.textContent = 'BRL 2000';
      productContainer.appendChild(secondSquarePrice);
    })();

    const createthirdProductSquare = (() => {
      const thirdImage = new Image();
      thirdImage.src = LivingRoom;
      thirdImage.setAttribute('alt', 'sala de estar');
      thirdImage.classList.add('showcase-rectangle');
      carousel.appendChild(thirdImage);
    })();

    return showcaseSection;
  };

  mainSection.append(createMiddleShowcaseSection());

  const createBottomShowcaseSection = () => {
    const showcaseSection = document.createElement('section');
    showcaseSection.classList.add('showcase-section');
    document.body.append(showcaseSection);

    const showcase = document.createElement('div');
    showcase.classList.add('product-showcase');
    showcaseSection.appendChild(showcase);

    const showcaseHeadline = document.createElement('div');
    showcaseHeadline.classList.add('div-headline');
    showcase.appendChild(showcaseHeadline);

    const carousel = document.createElement('div');
    carousel.classList.add('showcase-carousel');
    showcaseSection.appendChild(carousel);

    const createleftSquareProduct = (() => {
      const productContainer = document.createElement('div');
      productContainer.classList.add('product-container');
      carousel.appendChild(productContainer);

      const leftSquare = document.createElement('div');
      leftSquare.classList.add('product-square-left');
      productContainer.appendChild(leftSquare);

      const leftSquareImage = new Image();
      leftSquareImage.src = SofaSix;
      leftSquareImage.setAttribute('alt', 'sofá cinza');
      leftSquareImage.classList.add('showcase-image');
      leftSquare.appendChild(leftSquareImage);

      const leftSquareProductName = document.createElement('div');
      leftSquareProductName.classList.add('showcase-product-name');
      leftSquareProductName.textContent = 'Betty';
      productContainer.appendChild(leftSquareProductName);

      const leftSquarePrice = document.createElement('div');
      leftSquarePrice.classList.add('showcase-product-price');
      leftSquarePrice.textContent = 'BRL 2000';
      productContainer.appendChild(leftSquarePrice);
    })();

    const createSecondProductSquare = (() => {
      const productContainer = document.createElement('div');
      productContainer.classList.add('product-container');
      carousel.appendChild(productContainer);

      const secondSquare = document.createElement('div');
      secondSquare.classList.add('product-square');
      productContainer.appendChild(secondSquare);

      const secondImage = new Image();
      secondImage.src = SofaFive;
      secondImage.setAttribute('alt', 'sofá branco');
      secondImage.classList.add('showcase-image');
      secondSquare.appendChild(secondImage);

      const secondSquareProductName = document.createElement('div');
      secondSquareProductName.classList.add('showcase-product-name');
      secondSquareProductName.textContent = 'Betty';
      productContainer.appendChild(secondSquareProductName);

      const secondSquarePrice = document.createElement('div');
      secondSquarePrice.classList.add('showcase-product-price');
      secondSquarePrice.textContent = 'BRL 2000';
      productContainer.appendChild(secondSquarePrice);
    })();

    const createthirdProductSquare = (() => {
      const productContainer = document.createElement('div');
      productContainer.classList.add('product-container');
      carousel.appendChild(productContainer);

      const thirdSquare = document.createElement('div');
      thirdSquare.classList.add('product-square');
      productContainer.appendChild(thirdSquare);

      const thirdImage = new Image();
      thirdImage.src = SofaTwo;
      thirdImage.setAttribute('alt', 'sofá preto');
      thirdImage.classList.add('showcase-image');
      thirdSquare.appendChild(thirdImage);

      const thirdSquareProductName = document.createElement('div');
      thirdSquareProductName.classList.add('showcase-product-name');
      thirdSquareProductName.textContent = 'Betty';
      productContainer.appendChild(thirdSquareProductName);

      const thirdSquarePrice = document.createElement('div');
      thirdSquarePrice.classList.add('showcase-product-price');
      thirdSquarePrice.textContent = 'BRL 2000';
      productContainer.appendChild(thirdSquarePrice);
    })();

    const createfourthProductSquare = (() => {
      const productContainer = document.createElement('div');
      productContainer.classList.add('product-container');
      carousel.appendChild(productContainer);

      const fourthSquare = document.createElement('div');
      fourthSquare.classList.add('product-square');
      productContainer.appendChild(fourthSquare);

      const fourthImage = new Image();
      fourthImage.src = SofaWhite;
      fourthImage.setAttribute('alt', 'sofá branco');
      fourthImage.classList.add('showcase-image');
      fourthSquare.appendChild(fourthImage);

      const fourthSquareProductName = document.createElement('div');
      fourthSquareProductName.classList.add('showcase-product-name');
      fourthSquareProductName.textContent = 'Betty';
      productContainer.appendChild(fourthSquareProductName);

      const fourthSquarePrice = document.createElement('div');
      fourthSquarePrice.classList.add('showcase-product-price');
      fourthSquarePrice.textContent = 'BRL 2000';
      productContainer.appendChild(fourthSquarePrice);
    })();

    return showcaseSection;
  };

  mainSection.append(createBottomShowcaseSection());
}

export default sofa;
