export const addAboutPage = () => {
    const contentContainer = document.getElementById('content');

    const aboutContainer = document.createElement('div');
    aboutContainer.className = 'about-container';

    const aboutHeader = document.createElement('h2');
    aboutHeader.textContent = 'About us';
    aboutHeader.className = 'about-header';

    const aboutMessage = document.createElement('p');
    aboutMessage.textContent = 'We are passionate about food and service';
    aboutMessage.className = 'about-message';

    aboutContainer.appendChild(aboutHeader);
    aboutContainer.appendChild(aboutMessage);
    contentContainer.appendChild(aboutContainer);
}