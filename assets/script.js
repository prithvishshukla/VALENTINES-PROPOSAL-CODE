const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

function spawnFloatingHearts(count = 18) {
    const container = document.querySelector('.floating-hearts');
    if (!container) return;

    const hearts = ['❤', '💗', '💖', '💕', '💘'];
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
        const heart = document.createElement('span');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

        const x = `${Math.floor(randomBetween(0, 100))}vw`;
        const size = `${Math.floor(randomBetween(14, 26))}px`;
        const opacity = randomBetween(0.25, 0.65).toFixed(2);
        const dur = `${randomBetween(7, 13).toFixed(2)}s`;
        const rot = `${Math.floor(randomBetween(-18, 18))}deg`;
        const drift = `${Math.floor(randomBetween(-18, 18))}vw`;

        heart.style.setProperty('--x', x);
        heart.style.setProperty('--size', size);
        heart.style.setProperty('--opacity', opacity);
        heart.style.setProperty('--dur', dur);
        heart.style.setProperty('--rot', rot);
        heart.style.setProperty('--drift', drift);
        heart.style.animationDelay = `${randomBetween(0, 6).toFixed(2)}s`;

        fragment.appendChild(heart);
    }

    container.appendChild(fragment);
}

document.addEventListener('DOMContentLoaded', () => {
    spawnFloatingHearts(20);
});

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    noButton.classList.remove('shake');
    void noButton.offsetWidth;
    noButton.classList.add('shake');
}

function handleYesClick() {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = "assets/yes_page.html";
    }, 420);
}
