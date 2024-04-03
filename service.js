document.getElementById("personalInfoForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get selected service and personal information
    var selectedService = document.getElementById("serviceSelect").value;
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var location = document.getElementById("location").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;

    // Retrieve existing service requests
    var serviceRequests = JSON.parse(localStorage.getItem("serviceRequests")) || [];

    // Generate ServiceID
    var serviceID = serviceRequests.length + 1;

    // Create service request object
    var serviceRequest = {
      serviceID: serviceID,
      service: selectedService,
      name: name,
      age: age,
      location: location,
      number: number,
      email: email,
    };

    // Save service request to localStorage
    serviceRequests.push(serviceRequest);
    localStorage.setItem("serviceRequests", JSON.stringify(serviceRequests));

    // Display confirmation message
    var confirmationMessage = `Your request for ${selectedService} has been submitted. We will contact you at ${number} or ${email}.`;
    showModal(confirmationMessage);
});

// Function to display modal with confirmation message
function showModal(message) {
    var modal = document.getElementById("modal");
    var confirmationMessageElement = document.getElementById("confirmationMessage");
    confirmationMessageElement.textContent = message;
    modal.style.display = "block";

    var closeButton = document.querySelector(".close");
    closeButton.onclick = function () {
        modal.style.display = "none";
    };
}
