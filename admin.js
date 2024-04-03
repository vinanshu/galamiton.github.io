document.addEventListener('DOMContentLoaded', function () {
    // Add event listener once the DOM is fully loaded
    document.getElementById('adminForm').addEventListener('submit', adminSubmitHandler);
  });
  
  function adminSubmitHandler(event) {
    event.preventDefault();
    var adminPassword = document.getElementById('adminPassword').value;
  
    if (adminPassword === 'admin123') {
      // Open admin.html in a new tab
      window.open('adminform.html', '_blank');
    } else {
      alert('Incorrect admin password. Please try again.');
    }
  }
  