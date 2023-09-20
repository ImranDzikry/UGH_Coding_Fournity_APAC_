
//function to display selected image simulataneously
function displaySelectedImage(input) {
    const imageInput = document.getElementById("imageInput");
    const imageDisplay1 = document.getElementById("imageDisplay1");
    const imageDisplay2 = document.getElementById("imageDisplay2");

    // Check if a file is selected
    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const imageDataUrl = e.target.result;

            // Update the src attributes of both img elements
            imageDisplay1.src = imageDataUrl;
            imageDisplay2.src = imageDataUrl;
        };

        reader.readAsDataURL(input.files[0]);
    }
}

/*
//change application status to 'approved' after clicking the acceptButton
document.getElementById("acceptButton").addEventListener("click", function () {
    updateStatus("Approved");
});

//change application status to 'rejected' after clicking the rejectButton
document.getElementById("rejectButton").addEventListener("click", function () {
    updateStatus("Rejected");
});

//function to update status 
function updateStatus(newStatus) {
    var statusElement = document.getElementById("status");
    statusElement.textContent = newStatus;
}
*/

// Function to update status
function updateStatus(newStatus) {
    const statusElement = document.getElementById("status");
    statusElement.textContent = newStatus;
}

// Function to handle button clicks
function handleButtonClick(event) {
    const buttonId = event.target.id;

    if (buttonId === "acceptButton") {
        updateStatus("Approved");
    } else if (buttonId === "rejectButton") {
        updateStatus("Rejected");
    }
}

// Attach the click event handler to the document
document.addEventListener("click", function(event) {
    if (event.target && event.target.id && (event.target.id === "acceptButton" || event.target.id === "rejectButton")) {
        handleButtonClick(event);
    }
});
