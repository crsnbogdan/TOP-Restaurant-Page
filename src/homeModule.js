import pizzaImg from './assets/components/home-component/home-product-pizza.jpg';
import homeHeaderRoundImg from './assets/components/home-component/home-header-round.jpg';

function renderHomeModule() {
    const pageHeaderSection = document.createElement(`div`);
    pageHeaderSection.setAttribute(`id`, `home`)
    content.appendChild(pageHeaderSection);

    const pageHeader = document.createElement(`div`);
    pageHeader.classList.add(`page-header`);
    pageHeaderSection.appendChild(pageHeader);

    const pageHeaderContent = document.createElement(`div`);
    pageHeaderContent.classList.add(`header-content`,
        `container`)
    pageHeader.appendChild(pageHeaderContent);

    const pageHeaderText = document.createElement(`div`);
    pageHeaderText.classList.add(`header-text`);
    pageHeaderContent.appendChild(pageHeaderText)

    const pageHeaderTextHeading = document.createElement(`h1`);
    pageHeaderTextHeading.textContent = `Welcome to our restaurant`;
    pageHeaderText.appendChild(pageHeaderTextHeading)

    const pageHeaderBtn = document.createElement(`button`);
    pageHeaderBtn.innerHTML = `<a href ="#products-section">Order Now</a>`;
    pageHeaderText.appendChild(pageHeaderBtn)

    const pageHeaderImg = document.createElement(`img`);
    pageHeaderImg.setAttribute(`src`, `${homeHeaderRoundImg}`)
    pageHeaderContent.appendChild(pageHeaderImg);

    // home page products
    const homePageSection = document.createElement(`div`);
    homePageSection.classList.add(`page-section`, `container`);
    homePageSection.setAttribute(`id`, `products-section`)
    content.appendChild(homePageSection);

    const homePageSectionHeading = document.createElement(`h2`);
    homePageSectionHeading.textContent = `Products`;
    homePageSection.appendChild(homePageSectionHeading)

    const homePageProductSection = document.createElement(`div`);
    homePageProductSection.setAttribute(`id`, `product-section`);
    homePageSection.appendChild(homePageProductSection);

    for (let i = 1; i <= 5; i++) {
        let product = document.createElement(`div`);
        homePageProductSection.appendChild(product);
        product.classList.add(`product`);
        product.setAttribute(`id`, `product-id-${i}`);

        let productName = document.createElement(`p`);
        productName.classList.add(`product-name`);
        productName.textContent = `Pizza`;
        product.appendChild(productName);
        let productImg = document.createElement(`img`);
        productImg.classList.add(`product-img`);
        productImg.setAttribute(`src`, `${pizzaImg}`);
        product.appendChild(productImg);

        let productDescription = document.createElement(`p`);
        productDescription.classList.add(`product-description`);
        productDescription.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aspernatur qui aliquam amet praesentium.`;
        product.appendChild(productDescription);


        let addToCartBtn = document.createElement(`button`);
        addToCartBtn.classList.add(`add-to-cart-btn`);
        addToCartBtn.textContent = `add to cart`;
        product.appendChild(addToCartBtn);

    }

};

export default renderHomeModule;