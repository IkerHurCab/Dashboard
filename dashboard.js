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
    const items = sidebar.querySelectorAll('li');
    
    if (sidebar.classList.contains('collapsed')) {
        sidebar.classList.remove('collapsed');
        items.forEach(li => {
            const icon = li.querySelector('svg');
            if (icon && li.dataset.text) {
                li.innerHTML = icon.outerHTML + li.dataset.text;
            }
        });
    } else {
        sidebar.classList.add('collapsed');
        items.forEach(li => {
            const icon = li.querySelector('svg');
            if (icon) {
                li.dataset.text = li.innerText;
                li.innerHTML = icon.outerHTML;
            }
        });
    }
}
