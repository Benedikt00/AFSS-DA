let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // Scrolling Down - Hide Navbar
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling Up - Show Navbar
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollY = currentScrollY;
});


function change_desc_lang() {
    // Get both text containers
    const germanText = document.getElementById('desc_germ');
    const englishText = document.getElementById('desc_eng');

    // Toggle visibility
    if (englishText.style.display === 'block') {
        englishText.style.display = 'none';
        germanText.style.display = 'block';
    } else {
        germanText.style.display = 'none';
        englishText.style.display = 'block';
    }
}

const firstBunch = document.getElementById('first_bunch');
const secondBunch = document.getElementById('second_bunch');
const leftButton = document.getElementById('left-btn');
const rightButton = document.getElementById('right-btn');

// Initial state
let showingFirstBunch = true;

function slide(direction) {
  if (direction === 'right') {
    // Move first bunch out to the left
    firstBunch.style.transform = 'translateX(-100%)';
    // Bring second bunch in from the right
    secondBunch.style.transform = 'translateX(-100%)';
  } else if (direction === 'left') {
    // Bring first bunch in from the left
    firstBunch.style.transform = 'translateX(0)';
    // Move second bunch out to the right
    secondBunch.style.transform = 'translateX(100%)';
  }
}

function updateButtons() {
  leftButton.disabled = showingFirstBunch;
  rightButton.disabled = !showingFirstBunch;
}

// Event listeners
leftButton.addEventListener('click', () => {
  if (!showingFirstBunch) {
    slide('left');
    showingFirstBunch = true;
    updateButtons();
  }
});

rightButton.addEventListener('click', () => {
  if (showingFirstBunch) {
    slide('right');
    showingFirstBunch = false;
    updateButtons();
  }
});

// Initialize
secondBunch.style.transform = 'translateX(100%)'; // Position second bunch off-screen
updateButtons();
