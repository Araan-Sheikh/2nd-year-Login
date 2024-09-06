function redirect(version) {
    if (version === '1.0') {
        window.location.href = 'https://academicpal.vercel.app/'; // Replace with your URL for Academic Pal 1.0
    } else if (version === '2.0') {
        window.location.href = 'https://academicpal.vercel.app/'; // Replace with your URL for Academic Pal 2.0
    }
}

document.getElementById('entry-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            form.reset();
            document.getElementById('popup').style.display = 'flex';
        } else {
            alert('Something went wrong. Please try again.');
        }
    });
});