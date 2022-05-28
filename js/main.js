let sidebar = document.getElementById('sidebar');
let sideIcon = document.getElementById('sidebarIcon');
let mobileIcon = document.getElementById('mobileIcon');
let dateOfYear = document.getElementById('year');

const toggleSideBar = () => {
    sidebar.classList.toggle('sidebar-active')
};

sideIcon.onclick = toggleSideBar;
mobileIcon.onclick = toggleSideBar;


dateOfYear.textContent = new Date().getFullYear();