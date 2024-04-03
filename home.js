document.addEventListener('DOMContentLoaded', function () {
    // Function to open a page in a new tab
    function openPageInNewTab(pageUrl) {
        window.open(pageUrl, '_blank');
    }

    // Event listeners for buttons
    document.getElementById('requestBtn').addEventListener('click', function () {
        openPageInNewTab('request.html');
    });

    document.getElementById('accountBtn').addEventListener('click', function () {
        openPageInNewTab('account.html');
    });

    document.getElementById('homeBtn').addEventListener('click', function () {
        openPageInNewTab('home.html');
    });

    document.getElementById('scheduleBtn').addEventListener('click', function () {
        openPageInNewTab('schedule.html');
    });

    document.getElementById('eventBtn').addEventListener('click', function () {
        openPageInNewTab('event.html');
    });

    document.getElementById('servicesBtn').addEventListener('click', function () {
        openPageInNewTab('service.html');
    });

    document.getElementById('logoutBtn').addEventListener('click', function () {
        window.location.href = 'index.html';
    });

    document.addEventListener('DOMContentLoaded', function () {
        var navLinks = document.querySelectorAll('.nav-link');
    
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                // Remove 'active' class from all nav links
                navLinks.forEach(function (navLink) {
                    navLink.classList.remove('active');
                });
    
                // Add 'active' class to the clicked nav link
                this.classList.add('active');
            });
        });
    });
    
});

