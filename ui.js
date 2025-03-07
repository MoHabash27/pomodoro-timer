export function updateUI(remainingTime) {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    document.getElementById("timer-display").textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

export function switchMode(isWorkSession) {
    document.body.classList.toggle("work", isWorkSession);
    document.body.classList.toggle("break", !isWorkSession);
}