import './style.css';
import renderContactModule from './contactModule';
import renderHomeModule from './homeModule';
import renderAboutModule from './aboutModule';

const content = document.getElementById(`content`);
renderHomeModule();

function clearPageContent() {
    while (content.lastElementChild) {
        content.removeChild(content.lastElementChild);
    }
}

const homeBtn = document.getElementById(`homeBtn`);
homeBtn.addEventListener(`click`, () => {
    clearPageContent();
    renderHomeModule();
})
const aboutBtn = document.getElementById(`aboutBtn`);
aboutBtn.addEventListener(`click`, () => {
    clearPageContent();
    renderAboutModule();
});
const contactBtn = document.getElementById(`contactBtn`);
contactBtn.addEventListener(`click`, () => {
    clearPageContent();
    renderContactModule();
});