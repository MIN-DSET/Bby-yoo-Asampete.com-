const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const buttonArea = document.getElementById("buttonArea");
const card = document.getElementById("card");
const success = document.getElementById("success");
const hearts = document.getElementById("hearts");
const againBtn = document.getElementById("againBtn");

let noMoves = 0;

function moveNoButton() {
if (success.classList.contains("hidden") === false) {
return;
}

const padding = 10;
const buttonWidth = noBtn.offsetWidth;
const buttonHeight = noBtn.offsetHeight;

const areaRect = buttonArea.getBoundingClientRect();

let maxX = Math.max(0, window.innerWidth - buttonWidth - padding * 2);
let maxY = Math.max(0, window.innerHeight - buttonHeight - padding * 2);

let x = Math.random() * maxX + padding;
let y = Math.random() * maxY + padding;

noBtn.style.position = "fixed";
noBtn.style.left = x + "px";
noBtn.style.top = y + "px";

noMoves++;

const messages = [
    "NO 🙈",
    "You missed! 😂",
    "Try again! 😜",
    "Catch me! 🏃",
    "Hehehe! 💗",
    "Just press YES! 🥹"
];

noBtn.textContent = messages[
    Math.min(noMoves, messages.length - 1)
];

}

noBtn.addEventListener("pointerenter", moveNoButton);

noBtn.addEventListener("pointerdown", function(event) {
event.preventDefault();
moveNoButton();
});

noBtn.addEventListener("click", function(event) {
event.preventDefault();
moveNoButton();
});

yesBtn.addEventListener("click", function() {
card.classList.add("hidden");
success.classList.remove("hidden");

createConfetti();

});

againBtn.addEventListener("click", function() {
success.classList.add("hidden");
card.classList.remove("hidden");

noMoves = 0;
noBtn.textContent = "NO 🙈";
noBtn.style.position = "relative";
noBtn.style.left = "";
noBtn.style.top = "";

});

function createHeart() {
const heart = document.createElement("span");

heart.className = "heart";
heart.textContent = ["💗", "💕", "💖", "💓", "🌸"][
    Math.floor(Math.random() * 5)
];

heart.style.left = Math.random() * 100 + "%";
heart.style.fontSize = (16 + Math.random() * 20) + "px";
heart.style.animationDuration = (5 + Math.random() * 5) + "s";

hearts.appendChild(heart);

setTimeout(function() {
    heart.remove();
}, 10000);

}

setInterval(createHeart, 500);

function createConfetti() {
const pieces = ["💗", "💖", "💕", "✨", "🎉"];

for (let i = 0; i < 45; i++) {
    const piece = document.createElement("span");

    piece.className = "confetti";
    piece.textContent = pieces[
        Math.floor(Math.random() * pieces.length)
    ];

    piece.style.left = Math.random() * 100 + "%";
    piece.style.fontSize = (16 + Math.random() * 20) + "px";
    piece.style.animationDelay = Math.random() * 2 + "s";

    document.body.appendChild(piece);

    setTimeout(function() {
        piece.remove();
    }, 5000);
}

}