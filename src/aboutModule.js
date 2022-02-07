import homeHeaderRoundImg from './assets/components/home-component/home-header-round.jpg';

function renderAboutModule() {
    const pageHeaderSection = document.createElement(`div`);
    pageHeaderSection.setAttribute(`id`, `about`)
    content.appendChild(pageHeaderSection);

    const pageHeader = document.createElement(`div`);
    pageHeader.classList.add(`page-header`, `inner-page-header`);
    pageHeaderSection.appendChild(pageHeader);

    const pageHeaderContent = document.createElement(`div`);
    pageHeaderContent.classList.add(`header-content`,
        `container`);
    pageHeader.appendChild(pageHeaderContent);

    const pageHeaderText = document.createElement(`div`);
    pageHeaderText.classList.add(`header-text`);
    pageHeaderContent.appendChild(pageHeaderText);

    const pageHeaderTextHeading = document.createElement(`h1`);
    pageHeaderTextHeading.textContent = `About us`;
    pageHeaderText.appendChild(pageHeaderTextHeading);

    const aboutPageDescription = document.createElement(`p`);
    aboutPageDescription.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi exercitationem. Laborum tempore quae soluta alias aliquid, vitae pariatur architecto blanditiis fugit debitis dolorum non ducimus eaque quod quo voluptates odit quisquam vel. Et tenetur ea ipsum odio alias aperiam, sint earum ducimus excepturi ipsam.`;
    pageHeaderText.appendChild(aboutPageDescription);

    const pageHeaderImg = document.createElement(`img`);
    pageHeaderImg.setAttribute(`src`, `${homeHeaderRoundImg}`);
    pageHeaderContent.appendChild(pageHeaderImg);
};

export default renderAboutModule;