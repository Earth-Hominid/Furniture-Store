import GreenChair from './images/chairs/cadeira-verde.png';
import BrownSofa from './images/sofas/sofa-4.png';
import BlackSofa from './images/sofas/sofa-2.png';
import LuxSofa from './images/sofas/sofa-5.png';
import Office from './images/chairs/office.png';

function favorite() {
  const mainSection = document.getElementById('main');

  const createTopShowcase = () => {
    // Create elements
    const showcaseSection = document.createElement('section');
    const heroDepartment = document.createElement('div');
    const departmentHeadline = document.createElement('div');
    const showcase = document.createElement('div');
    const showcaseHeadline = document.createElement('div');
    const carousel = document.createElement('div');

    // set attributes, images and classes
    showcaseSection.classList.add('showcase-section');
    heroDepartment.classList.add('hero-department');
    departmentHeadline.classList.add('department-headline');
    departmentHeadline.textContent = 'Homepage > Favoritos';
    showcase.classList.add('product-showcase');
    showcaseHeadline.classList.add('div-headline');
    carousel.classList.add('showcase-carousel');

    // Append to DOM
    document.body.append(showcaseSection);
    showcaseSection.appendChild(heroDepartment);
    heroDepartment.appendChild(departmentHeadline);
    showcaseSection.appendChild(showcase);
    showcase.appendChild(showcaseHeadline);
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
      secondImage.src = BlackSofa;
      secondImage.setAttribute('alt', 'sofá preto');
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
      thirdImage.src = BrownSofa;
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
      fourthImage.src = LuxSofa;
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
  mainSection.append(createTopShowcase());

  const favsHeroSection = () => {
    // Create elements
    const section = document.createElement('section'); // Create section
    const display = document.createElement('div'); // Create div to hold hero details
    const copywrite = document.createElement('div'); // Create copy div for left-side of page
    const copywriteTitle = document.createElement('h1'); // Copywrite heading
    const copywriteParagraph = document.createElement('p'); // Copywrite paragraph
    const rightHero = document.createElement('div'); // Create div for image, right-side of page
    const rightImage = new Image(); // Create hero image

    // set attributes, classes, text and images
    section.classList.add('section-display');
    display.classList.add('display');
    copywrite.classList.add('left-copy-div');
    copywriteTitle.classList.add('left-copywrite-title');
    copywriteTitle.textContent = 'Escritório em casa';
    copywriteParagraph.classList.add('left-copywrite-paragraph');
    copywriteParagraph.textContent = 'Pode ser um trabalho, mas não precisa parecer assim. Tudo o que é necessário é um mobiliário de escritório doméstico ergonômico, mas confortável e elegante para manter as coisas organizadas e a iluminação certa para o trabalho.';
    rightHero.classList.add('department-hero-right');
    rightImage.src = Office;
    rightImage.setAttribute('alt', 'escritório em casa');
    rightImage.setAttribute('id', 'office');

    // append to the DOM
    section.appendChild(display);
    display.appendChild(copywrite);
    copywrite.appendChild(copywriteTitle);
    copywrite.appendChild(copywriteParagraph);
    display.appendChild(rightHero);
    rightHero.appendChild(rightImage);

    return section;
  };

  mainSection.append(favsHeroSection());
}

export default favorite;
