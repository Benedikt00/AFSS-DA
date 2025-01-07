

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

const currentPage = document.body.dataset.page;

if (currentPage === "index.html") {
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

}

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const bigDropdownMenu = document.querySelector(".big-dropdown-menu");

  // Toggle dropdown menu on click
  mobileMenuToggle.addEventListener("click", (e) => {
      e.preventDefault();
      bigDropdownMenu.classList.toggle("open");
  });

  // Close dropdown if clicking outside
  document.addEventListener("click", (e) => {
      if (!bigDropdownMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
          bigDropdownMenu.classList.remove("open");
      }
  });
});
