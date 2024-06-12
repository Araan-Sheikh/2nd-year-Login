// Validate the form input
function validateForm() {
    var usnPattern = /^(NNM23|NNM24)[a-zA-Z]{2}\d{3}$/;
    var usnInput = document.getElementById("usn").value.toUpperCase(); // Ensure USN is in uppercase

    // Check if USN input matches the pattern
    if (!usnPattern.test(usnInput)) {
        alert("Please enter a valid USN in uppercase. Format: NNM23/NNM24 followed by alphabets and numbers.");
        return false; // Prevent form submission
    } else {
        showPopup();
        return false; // Prevent form submission
    }
}

// Show popup with entered details
function showPopup() {
    var name = document.getElementById("name").value;
    var usn = document.getElementById("usn").value.toUpperCase(); // Ensure USN is in uppercase
    var popupMessage = document.getElementById("popup-message");

    // Display welcome message with name and USN
    popupMessage.textContent = `Welcome, ${name}! Your USN is: ${usn}`;
    var popup = document.getElementById("popup");
    popup.style.display = "block";

    // Hide the popup after 3 seconds
    setTimeout(function() {
        popup.style.display = "none";
    }, 3000);

    // Redirect to the main website after 3.5 seconds
    setTimeout(function() {
        window.location.href = "https://academicpal.vercel.app";
    }, 3500);
}

// Register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        }).catch(error => {
            console.error('Service Worker registration failed:', error);
        });
}

// Handle the beforeinstallprompt event for PWA installation
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = 'block';

    installBtn.addEventListener('click', () => {
        installBtn.style.display = 'none';
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
        });
    });
});

// Show the popup when the page loads
document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
});

// Close the popup
function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}
