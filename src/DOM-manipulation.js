import CheckboxIcon from './checkbox-outline.png';

function divCreatorAppender(className, parent) {
    const div = document.createElement('div');
    div.className = className;
    parent.appendChild(div);
    return div;
}

function headerSetup(headerDiv) {
    const logoImg = document.createElement('img');
    logoImg.src = CheckboxIcon;
    headerDiv.appendChild(logoImg);
}

function initialDOMSetup() {
    const contentDiv = document.getElementById('content');

    const header = divCreatorAppender('header', contentDiv);

    const main = divCreatorAppender('main', contentDiv);

    const footer = divCreatorAppender('footer', contentDiv);

    const sidebar = divCreatorAppender('sidebar', main);

    const article = divCreatorAppender('article', main);

    headerSetup(header);

}

export { initialDOMSetup }