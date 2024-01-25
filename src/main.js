document.addEventListener("DOMContentLoaded", function () {
  // Array of strings to display in the typing animation
  const typingTextOptions = [
    "FrontEnd Developer? ",
    "Web Developer?",
    "Student.",
  ];

  // Get the #typingtext element
  const typingTextElement = document.getElementById("typingtext");

  // Function to simulate typing effect
  function typeText(index) {
    const currentText = typingTextOptions[index];
    const speed = 100; // Typing speed in milliseconds
    const delayBeforeNextText = 2000;

    let i = 0;
    function type() {
      if (i < currentText.length) {
        typingTextElement.innerHTML += currentText.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    type();

    // Clear the text and move to the next option after displaying the current one
    setTimeout(function () {
      typingTextElement.innerHTML = "";
      const nextIndex = (index + 1) % typingTextOptions.length;
      typeText(nextIndex);
    }, speed * currentText.length + 2000); // Wait for a pause after typing
  }

  // Start the typing animation
  typeText(0);
});

var backToTopButton = document.getElementById("backtotop");

function toggleBackToTopButton() {
  if (window.scrollY < 700) {
    backToTopButton.classList.add("hidden");
  } else {
    backToTopButton.classList.remove("hidden");
  }
}

const testscroll = scrollY;
console.log(testscroll);

window.addEventListener("scroll", toggleBackToTopButton);

toggleBackToTopButton();
