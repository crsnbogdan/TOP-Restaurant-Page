import homeHeaderRoundImg from './assets/components/home-component/home-header-round.jpg';

function renderContactModule() {
    const pageHeaderSection = document.createElement(`div`);
    pageHeaderSection.setAttribute(`id`, `contact`)
    content.appendChild(pageHeaderSection);

    const pageHeader = document.createElement(`div`);
    pageHeader.classList.add(`page-header`, `inner-page-header`);
    pageHeaderSection.appendChild(pageHeader);

    const pageHeaderContent = document.createElement(`div`);
    pageHeaderContent.classList.add(`header-content`,
        `container`)
    pageHeader.appendChild(pageHeaderContent);

    const pageHeaderText = document.createElement(`div`);
    pageHeaderText.classList.add(`header-text`);
    pageHeaderContent.appendChild(pageHeaderText)

    const pageHeaderTextHeading = document.createElement(`h1`);
    pageHeaderTextHeading.textContent = `Contact us`;
    pageHeaderText.appendChild(pageHeaderTextHeading)

    const contactInfo = document.createElement(`p`);
    contactInfo.textContent = `Call us at: +40123456789`;
    pageHeaderText.appendChild(contactInfo);

    const pageHeaderImg = document.createElement(`img`);
    pageHeaderImg.setAttribute(`src`, `${homeHeaderRoundImg}`)
    pageHeaderContent.appendChild(pageHeaderImg);
};

export default renderContactModule;