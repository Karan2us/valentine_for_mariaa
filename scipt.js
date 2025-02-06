const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');

yesButton.addEventListener('click', () => {
    response.textContent = "Yay! You've made me the happiest person, Maria! 🌟";
});

noButton.addEventListener('click', () => {
    // Move the "No" button randomly when clicked
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = ${x}px;
    noButton.style.top = ${y}px;
});
