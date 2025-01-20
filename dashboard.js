document.getElementById('sidebar-switch').onclick = function () {
    const path = this.querySelector('path');
    if (path.getAttribute('d') === 'M8.25 4.5 15.75 12 8.25 19.5') {
        path.setAttribute('d', 'M15.75 4.5 8.25 12 15.75 19.5');
    } else {
        path.setAttribute('d', 'M8.25 4.5 15.75 12 8.25 19.5');
    }

    setSidebar();
};

function setSidebar() {
    const sidebar = document.getElementById('menu-options');
    const mainContent = document.getElementById('main-content');
    const items = sidebar.querySelectorAll('li');
    
    if (sidebar.classList.contains('collapsed')) {
        sidebar.classList.remove('collapsed');
        mainContent.style.marginLeft = '250px';
        items.forEach(li => {
            const icon = li.querySelector('svg');
            const notificationSpan = li.querySelector('span');
            if (icon && li.dataset.text) {
                li.innerHTML = icon.outerHTML + li.dataset.text;
                if (notificationSpan) {
                    li.appendChild(notificationSpan);
                }
            }
        });
    } else {
        sidebar.classList.add('collapsed');
        mainContent.style.marginLeft = '75px';
        items.forEach(li => {
            const icon = li.querySelector('svg');
            const notificationSpan = li.querySelector('span');
            if (icon) {
                li.dataset.text = li.innerText;
                li.innerHTML = icon.outerHTML;
                if (notificationSpan) {
                    li.appendChild(notificationSpan);
                }
            }
        });
    }
}

const headerSearchData = ['Inicio', 'Productos', 'Categorías', 'Usuarios', 'Configuración', 'Compras', 'Servidores', 'Incidencias', 'Mensajes'];
const headerSearchInput = document.getElementById('headerSearch');
const headerSuggestions = document.getElementById('headerSuggestions');

headerSearchInput.addEventListener('input', () => {
  const query = headerSearchInput.value.toLowerCase().trim();
  const matches = headerSearchData.filter(item => item.toLowerCase().includes(query));
  headerSuggestions.innerHTML = matches.map(item =>
    `<li class="p-2 hover:bg-gray-200 cursor-pointer">${item}</li>`
  ).join('');
  headerSuggestions.classList.toggle('hidden', matches.length === 0);
});

document.addEventListener('click', (event) => {
  if (!headerSearchInput.contains(event.target) && !headerSuggestions.contains(event.target)) {
    headerSuggestions.classList.add('hidden');
  }
});

const notificationsIcon = document.getElementById('notifications');
const notificationsPopup = document.getElementById('notificationsPopup');

notificationsIcon.addEventListener('click', () => {
    notificationsPopup.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
    if (!notificationsIcon.contains(event.target) && !notificationsPopup.contains(event.target)) {
        notificationsPopup.classList.add('hidden');
    }
});

const adminMenu = document.getElementById('adminMenu');
const adminPopup = document.getElementById('adminPopup');

adminMenu.addEventListener('click', () => {
    adminPopup.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
    if (!adminMenu.contains(event.target) && !adminPopup.contains(event.target)) {
        adminPopup.classList.add('hidden');
    }
});

const darkModeToggle = document.getElementById('darkModeToggle');
const content = document.getElementById('content');
const themeIcon = document.querySelector('#adminPopup svg');

darkModeToggle.addEventListener('change', () => {
    content.style.backgroundColor = darkModeToggle.checked ? '#1a202c' : '#f7fafc';
    content.style.color = darkModeToggle.checked ? '#f7fafc' : '#1a202c';

    const contentDivs = content.querySelectorAll('div');
    const contentCanvases = content.querySelectorAll('canvas');
    const irCompras = document.getElementById('irCompras');
    irCompras.addEventListener('mouseover', () => {
        irCompras.style.backgroundColor = darkModeToggle.checked ? '#2d3748' : '#e2e8f0';
    });
    irCompras.addEventListener('mouseout', () => {
        irCompras.style.backgroundColor = darkModeToggle.checked ? '#1a202c' : '#f7fafc';
    });

    irCompras.style.backgroundColor = darkModeToggle.checked ? '#1a202c' : '#f7fafc';
    irCompras.style.color = darkModeToggle.checked ? '#f7fafc' : '#1a202c';

    contentDivs.forEach(div => {
        div.style.backgroundColor = darkModeToggle.checked ? '#1a202c' : '#f7fafc';
        div.style.color = darkModeToggle.checked ? '#f7fafc' : '#1a202c';
    });

    contentCanvases.forEach(canvas => {
        canvas.style.backgroundColor = darkModeToggle.checked ? '#1a202c' : '#f7fafc';
        canvas.style.color = darkModeToggle.checked ? '#f7fafc' : '#1a202c';
    });

    const themeIcon = document.querySelector('#adminPopup li:nth-child(2) svg');
    if (darkModeToggle.checked) {
        themeIcon.innerHTML = `
            <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
        `;
    } else {
        themeIcon.innerHTML = `
            <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
        `;
    }

    const labels = content.querySelectorAll('label');
    labels.forEach(label => {
        label.style.color = darkModeToggle.checked ? '#f7fafc' : '#1a202c';
    });

    const inputs = content.querySelectorAll('input');
    inputs.forEach(input => {
        input.style.backgroundColor = darkModeToggle.checked ? '#2d3748' : '#e2e8f0';
        input.style.color = darkModeToggle.checked ? '#f7fafc' : '#1a202c';
    });
    
});

document.getElementById('hamburger').addEventListener('click', () => {
    const menu = document.getElementById('hamburgerMenu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('block');
});

document.getElementById('hamburgerNotifications').addEventListener('click', () => {
    const popup = document.getElementById('hamburgerNotificationsPopup');
    popup.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
    const hamburgerNotifications = document.getElementById('hamburgerNotifications');
    const hamburgerNotificationsPopup = document.getElementById('hamburgerNotificationsPopup');
    if (!hamburgerNotifications.contains(event.target) && !hamburgerNotificationsPopup.contains(event.target)) {
        hamburgerNotificationsPopup.classList.add('hidden');
    }
});

document.getElementById('hamburgerAdminMenu').addEventListener('click', () => {
    const popup = document.getElementById('hamburgerAdminPopup');
    popup.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
    const hamburgerAdminMenu = document.getElementById('hamburgerAdminMenu');
    const hamburgerAdminPopup = document.getElementById('hamburgerAdminPopup');
    if (!hamburgerAdminMenu.contains(event.target) && !hamburgerAdminPopup.contains(event.target)) {
        hamburgerAdminPopup.classList.add('hidden');
    }
});

const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');

darkModeToggleMobile.addEventListener('change', () => {
    content.style.backgroundColor = darkModeToggleMobile.checked ? '#1a202c' : '#f7fafc';
    content.style.color = darkModeToggleMobile.checked ? '#f7fafc' : '#1a202c';

    const contentDivs = content.querySelectorAll('div');
    const contentCanvases = content.querySelectorAll('canvas');
    const irCompras = document.getElementById('irCompras');
    irCompras.addEventListener('mouseover', () => {
        irCompras.style.backgroundColor = darkModeToggleMobile.checked ? '#2d3748' : '#e2e8f0';
    });
    irCompras.addEventListener('mouseout', () => {
        irCompras.style.backgroundColor = darkModeToggleMobile.checked ? '#1a202c' : '#f7fafc';
    });

    irCompras.style.backgroundColor = darkModeToggleMobile.checked ? '#1a202c' : '#f7fafc';
    irCompras.style.color = darkModeToggleMobile.checked ? '#f7fafc' : '#1a202c';

    contentDivs.forEach(div => {
        div.style.backgroundColor = darkModeToggleMobile.checked ? '#1a202c' : '#f7fafc';
        div.style.color = darkModeToggleMobile.checked ? '#f7fafc' : '#1a202c';
    });

    contentCanvases.forEach(canvas => {
        canvas.style.backgroundColor = darkModeToggleMobile.checked ? '#1a202c' : '#f7fafc';
        canvas.style.color = darkModeToggleMobile.checked ? '#f7fafc' : '#1a202c';
    });

    const themeIcon = document.querySelector('#hamburgerAdminPopup li:nth-child(2) svg');
    if (darkModeToggleMobile.checked) {
        themeIcon.innerHTML = `
          <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
        `;
    }
    else {
        themeIcon.innerHTML = `
            <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
        `;
    }
});

const hamburgerSearchInput = document.getElementById('hamburgerSearch');
const hamburgerSuggestions = document.getElementById('hamburgerSuggestions');

hamburgerSearchInput.addEventListener('input', () => {
  const query = hamburgerSearchInput.value.toLowerCase().trim();
  const matches = headerSearchData.filter(item => item.toLowerCase().includes(query));
  hamburgerSuggestions.innerHTML = matches.map(item =>
    `<li class="p-2 hover:bg-gray-200 cursor-pointer">${item}</li>`
  ).join('');
  hamburgerSuggestions.classList.toggle('hidden', matches.length === 0);
});

document.addEventListener('click', (event) => {
  if (!hamburgerSearchInput.contains(event.target) && !hamburgerSuggestions.contains(event.target)) {
    hamburgerSuggestions.classList.add('hidden');
  }
});


