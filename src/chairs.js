import Office from './images/chairs/office.png';
import SofaWhite from './images/sofas/sofa-white.png';
import WireChair from './images/chairs/wire-chair.png';
import RedChair from './images/chairs/cadeira-vermelha.png';
import GreenChair from './images/chairs/cadeira-verde.png';
import BlackChair from './images/chairs/cadeira-preta.png';
import BrownChair from './images/chairs/cadeira-marrom.png';
import GreyChair from './images/chairs/cadeira-cinza.png';
import OfficeOne from './images/chairs/office1.png';
import OfficeChair from './images/chairs/comp-chair.png';

function chair() {
  const mainSection = document.getElementById('main');

  const chairHeroSection = () => {
    // Create Section
    const heroSection = document.createElement('section');
    heroSection.setAttribute('id', 'toggle');
    // Create div to hold hero details
    const heroDepartment = document.createElement('div');
    heroDepartment.classList.add('hero-department');
    heroSection.appendChild(heroDepartment);
    // Create div to hold navigation headline
    const departmentHeadline = document.createElement('div');
    departmentHeadline.classList.add('department-headline');
    departmentHeadline.textContent = 'Homepage > Cadeiras';
    heroDepartment.appendChild(departmentHeadline);
    // Create div for hero image, left-side of page
    const leftHero = document.createElement('div');
    leftHero.classList.add('department-hero-left');
    heroDepartment.appendChild(leftHero);
    // Create hero image
    const leftHeroImage = new Image();
    leftHeroImage.src = Office;
    leftHeroImage.setAttribute('alt', 'photo of a home office');
    leftHeroImage.setAttribute('id', 'living-room');
    leftHero.appendChild(leftHeroImage);
    // Create copy for right-side of page
    const copywrite = document.createElement('div');
    copywrite.classList.add('department-copywrite');
    leftHero.appendChild(copywrite);
    // Copywrite heading
    const copywriteTitle = document.createElement('h1');
    copywriteTitle.classList.add('copywrite-title');
    copywriteTitle.textContent = 'Cadeiras';
    copywrite.appendChild(copywriteTitle);
    // Copywrite paragraph
    const copywriteParagraph = document.createElement('p');
    copywriteParagraph.classList.add('copywrite-paragraph');
    copywriteParagraph.textContent = 'Pode ser um trabalho, mas não precisa parecer assim. Tudo o que é necessário é um mobiliário de escritório doméstico ergonômico, mas confortável e elegante para manter as coisas organizadas e a iluminação certa para o trabalho.';
    copywrite.appendChild(copywriteParagraph);

    return heroSection;
  };
  mainSection.append(chairHeroSection());

  const createTopShowcase = () => {
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
      leftSquareImage.src = SofaWhite;
      leftSquareImage.setAttribute('alt', 'sofá branco');
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
      secondImage.src = OfficeChair;
      secondImage.setAttribute('alt', 'cadeira de escritório');
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
      thirdImage.src = BrownChair;
      thirdImage.setAttribute('alt', 'cadeira marrom');
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
      fourthImage.src = WireChair;
      fourthImage.setAttribute('alt', 'cadeira de arame');
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
      leftSquareImage.src = GreenChair;
      leftSquareImage.setAttribute('alt', 'cadeira verde');
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
      secondImage.src = BlackChair;
      secondImage.setAttribute('alt', 'cadeira preta');
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
      thirdImage.src = OfficeOne;
      thirdImage.setAttribute('alt', 'office');
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
      leftSquareImage.src = WireChair;
      leftSquareImage.setAttribute('alt', 'cadeira de arame');
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
      secondImage.src = GreyChair;
      secondImage.setAttribute('alt', 'cadeira cinza');
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
      thirdImage.src = RedChair;
      thirdImage.setAttribute('alt', 'cadeira vermelho');
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
      fourthImage.src = BrownChair;
      fourthImage.setAttribute('alt', 'cadeira marrom');
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

export default chair;
