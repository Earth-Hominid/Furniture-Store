import GreenChair from './images/chairs/cadeira-verde.png';
import BrownSofa from './images/sofas/sofa-4.png';
import BlackSofa from './images/sofas/sofa-2.png';
import LuxSofa from './images/sofas/sofa-5.png';
import Office from './images/chairs/office.png';

function favorite() {
  const mainSection = document.getElementById('main');

  const createTopShowcase = () => {
    // Create Section
    const showcaseSection = document.createElement('section');
    showcaseSection.classList.add('showcase-section');
    document.body.append(showcaseSection);

    // Create div to hold hero details
    const heroDepartment = document.createElement('div');
    heroDepartment.classList.add('hero-department');
    showcaseSection.appendChild(heroDepartment);
    // Create div to hold navigation headline
    const departmentHeadline = document.createElement('div');
    departmentHeadline.classList.add('department-headline');
    departmentHeadline.textContent = 'Homepage > Favorites';
    heroDepartment.appendChild(departmentHeadline);

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
      leftSquare.appendChild(leftSquareProductName);

      const leftSquarePrice = document.createElement('div');
      leftSquarePrice.classList.add('showcase-product-price');
      leftSquarePrice.textContent = 'BRL 2000';
      leftSquare.appendChild(leftSquarePrice);
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
      secondSquare.appendChild(secondSquareProductName);

      const secondSquarePrice = document.createElement('div');
      secondSquarePrice.classList.add('showcase-product-price');
      secondSquarePrice.textContent = 'BRL 2000';
      secondSquare.appendChild(secondSquarePrice);
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
      thirdSquare.appendChild(thirdSquareProductName);

      const thirdSquarePrice = document.createElement('div');
      thirdSquarePrice.classList.add('showcase-product-price');
      thirdSquarePrice.textContent = 'BRL 2000';
      thirdSquare.appendChild(thirdSquarePrice);
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
      fourthSquare.appendChild(fourthSquareProductName);

      const fourthSquarePrice = document.createElement('div');
      fourthSquarePrice.classList.add('showcase-product-price');
      fourthSquarePrice.textContent = 'BRL 2000';
      fourthSquare.appendChild(fourthSquarePrice);
    })();

    return showcaseSection;
  };
  mainSection.append(createTopShowcase());

  const favsHeroSection = () => {
    // Create Section
    const section = document.createElement('section');
    section.classList.add('section-display');
    document.body.append(section);

    // Create div to hold hero details
    const display = document.createElement('div');
    display.classList.add('display');
    section.appendChild(display);

    // Create copy div for left-side of page
    const copywrite = document.createElement('div');
    copywrite.classList.add('left-copy-div');
    display.appendChild(copywrite);

    // Copywrite heading
    const copywriteTitle = document.createElement('h1');
    copywriteTitle.classList.add('left-copywrite-title');
    copywriteTitle.textContent = 'Escritório em casa';
    copywrite.appendChild(copywriteTitle);

    // Copywrite paragraph
    const copywriteParagraph = document.createElement('p');
    copywriteParagraph.classList.add('left-copywrite-paragraph');
    copywriteParagraph.textContent = 'Pode ser um trabalho, mas não precisa parecer assim. Tudo o que é necessário é um mobiliário de escritório doméstico ergonômico, mas confortável e elegante para manter as coisas organizadas e a iluminação certa para o trabalho.';
    copywrite.appendChild(copywriteParagraph);

    // Create div for image, right-side of page
    const rightHero = document.createElement('div');
    rightHero.classList.add('department-hero-right');
    display.appendChild(rightHero);
    // Create hero image
    const rightImage = new Image();
    rightImage.src = Office;
    rightImage.setAttribute('alt', 'escritório em casa');
    rightImage.setAttribute('id', 'office');
    rightHero.appendChild(rightImage);

    return favsHeroSection;
  };

  mainSection.append(favsHeroSection());
}

export default favorite;
