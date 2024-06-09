function validateForm() {
  var usnPattern = /^(NNM23|NNM24)[a-zA-Z]{2}\d{3}$/;
  var usnInput = document.getElementById("usn").value;
  if (!usnPattern.test(usnInput)) {
      alert("Please enter a valid USN ");
      return false;
  } else {
      showPopup();
      return false;
  }
}

function showPopup() {
  var name = document.getElementById("name").value;
  var usn = document.getElementById("usn").value;
  var popupMessage = document.getElementById("popup-message");
  popupMessage.textContent = "Welcome, " + name + "! Your USN is: " + usn;
  var popup = document.getElementById("popup");
  popup.style.display = "block";
  setTimeout(function() {
      popup.style.display = "none";
  }, 3000); // Adjust the timeout as needed

  // Redirect after showing the popup (in this case, redirecting to academicpal.vercel.app)
  setTimeout(function() {
      window.location.href = "https://academicpal.vercel.app";
  }, 3500);
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
      }).catch(error => {
          console.error('Service Worker registration failed:', error);
      });
}

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