const dynamicText = document.querySelector("h1 span");
const words = ["OPEN NOW", "SALE 50%", "HOT DEALS", "Get Your Outfit NOW"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;

    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200); // Adjust timing for typing
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100); // Adjust timing for deleting
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200); // Adjust timing for switching words
    }
}

typeEffect();

// Additional code for responsiveness
window.addEventListener("resize", () => {
    // Optionally, you can add responsive adjustments here if needed
});
