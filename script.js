// Function to randomize positions of pop-ups
function randomizePopupPosition(popupId) {
  const popup = document.getElementById(popupId);
  if (!popup) return;

  // Get window dimensions
  const maxX = window.innerWidth - popup.offsetWidth;
  const maxY = window.innerHeight - popup.offsetHeight;

  // Generate random positions
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

   // Get the bounding rectangle for the header elements
   const h1Rect = document.querySelector("h1").getBoundingClientRect();
   const h2Rect = document.querySelector("h2").getBoundingClientRect();

  // Set new positions
  popup.style.position = 'absolute';
  popup.style.left = `${randomX}px`;
  popup.style.top = `${randomY}px`;
}

// Set intervals to move pop-ups every few seconds
setInterval(() => randomizePopupPosition('popup1'), 2000); // Moves popup1 every 3 seconds
setInterval(() => randomizePopupPosition('popup2'), 3000); // Moves popup2 every 5 seconds



