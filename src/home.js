export const addHomePage = () => {
    const contentContainer = document.getElementById("content");

    const homeContainer = document.createElement("div");
    homeContainer.className = 'home-container';

    const welcomeHeader = document.createElement("h2");
    welcomeHeader.textContent = 'Welcome to My Restaurant';
    welcomeHeader.className = 'welcome-header';
    const welcomeMessage = document.createElement("p");
    welcomeMessage.textContent = 'Experience the best dining with us!';
    welcomeMessage.className = 'welcome-message';

    homeContainer.appendChild(welcomeHeader);
    homeContainer.appendChild(welcomeMessage);
    contentContainer.appendChild(homeContainer);
}
