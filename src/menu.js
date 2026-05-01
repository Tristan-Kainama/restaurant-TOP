export const addMenuPage = () => {
    const contentContainer = document.getElementById('content');

    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu-container';

    const menuHeader = document.createElement('h2');
    menuHeader.textContent = 'Our Menu';
    menuHeader.className = 'menu-header';

    const menuList = document.createElement('ul');
    menuList.className = 'menu-list';
    
    const menu1 = document.createElement('li');
    const menu2 = document.createElement('li');
    const menu3 = document.createElement('li');

    menu1.textContent = 'Pizza';
    menu2.textContent = 'Pasta';
    menu3.textContent = 'Salad';

    menuList.appendChild(menu1);
    menuList.appendChild(menu2);
    menuList.appendChild(menu3);

    menuContainer.appendChild(menuHeader);
    menuContainer.appendChild(menuList);
    contentContainer.appendChild(menuContainer);
}