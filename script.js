function toggleMode() {
    const body = document.body;
    const toggleButton = document.getElementById('toggle-button');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Toggle Mode to Light';
    } else {
        toggleButton.textContent = 'Toggle Mode to Dark';
    }
}

function createTwinklingSpheres() {
    const headerContainer = document.querySelector('.header-container');

    for (let i = 0; i < 20; i++) {
        const sphere = document.createElement('div');
        sphere.classList.add('twinkling-sphere');
        const size = Math.floor(Math.random() * 9 + 2); // Random size between 2px and 10px
        sphere.style.width = `${size}px`;
        sphere.style.height = `${size}px`;
        sphere.style.left = `${Math.random() * 100}%`;
        sphere.style.top = `${Math.random() * 100}%`;
        sphere.style.animationDelay = `${Math.random() * 2}s`;
        headerContainer.appendChild(sphere);
    }
}

function removeTwinklingSpheres() {
    const headerContainer = document.querySelector('.header-container');
    const twinklingSpheres = document.querySelectorAll('.twinkling-sphere');

    twinklingSpheres.forEach(sphere => {
        headerContainer.removeChild(sphere);
    });
}

function toggleMode() {
    const body = document.body;
    const toggleButton = document.getElementById('toggle-button');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Toggle Mode to Light';
        createTwinklingSpheres();
    } else {
        toggleButton.textContent = 'Toggle Mode to Dark';
        removeTwinklingSpheres();
    }
}

// Call the toggleMode() function at the end of your JavaScript code to enable dark mode by default
toggleMode();


function toggleMode() {
    const body = document.body;
    const toggleButton = document.getElementById('toggle-button');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Toggle Mode to Light';
        createTwinklingSpheres();
    } else {
        toggleButton.textContent = 'Toggle Mode to Dark';
        removeTwinklingSpheres();
    }
}
