window.addEventListener('scroll', function() {
    var sidebar = document.querySelector('.right-sidebar-content');
    if (window.scrollY > 40) {
        sidebar.style.top = '0';
    } else {
        sidebar.style.top = ''; // Reset to default if needed
    }
});