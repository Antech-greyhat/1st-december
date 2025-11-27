/* Reveal message */
function revealMessage() {
    document.getElementById("message").style.display = "block";
}

/* Tech-style confetti */
function startConfetti() {
    for (let i = 0; i < 120; i++) {
        let piece = document.createElement("div");
        piece.style.position = "fixed";
        piece.style.width = "6px";
        piece.style.height = "15px";
        piece.style.background = `hsl(${180 + Math.random()*80}, 100%, 60%)`;
        piece.style.top = "-10px";
        piece.style.left = Math.random()*100 + "vw";
        piece.style.transform = `rotate(${Math.random()*360}deg)`;
        piece.style.animation = "drop 3s linear forwards";
        document.body.appendChild(piece);

        setTimeout(() => piece.remove(), 3000);
    }
}

/* Confetti falling */
const style = document.createElement("style");
style.innerHTML = `
@keyframes drop {
    to { transform: translateY(100vh) rotate(720deg); }
}`;
document.head.appendChild(style);

/* Tech music */
function playMusic() {
    const audio = new Audio("https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Scott_Holmes_Music/Future_Bass/Scott_Holmes_Music_-_Future_Bass.mp3");
    audio.play();
}

/* MATRIX BACKGROUND ANIMATION */
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;
let drops = [];

for (let x = 0; x < columns; x++) drops[x] = 1;

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00eaff";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95)
            drops[i] = 0;

        drops[i]++;
    }
}
setInterval(drawMatrix, 50);
