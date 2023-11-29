// // CONNECT TO BACKEND SERVER
const API_URL = 'http://localhost:3000';

async function getMenu() {
  try {
    const response = await fetch(`${API_URL}/home/offer`);
    const menus = await response.json();
    const menuOffer = document.getElementById('card-offer');
    menus.forEach((menu) => {
      const newMenu = document.createElement('p');
      newMenu.textContent = `${menu.menu_name}`;
      menuOffer.appendChild(newMenu);
    })
  } catch (error) {
    console.log(menus);
  }
}

getMenu();