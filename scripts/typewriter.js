const text = "Alex Vizuete Pereira"; // The text to display
const speed = 100; // Typing speed in milliseconds
let index = 0;

function typeWriter() {
  const element = document.getElementById("typewriter");
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

// Start the typewriter effect
typeWriter();