import { Timer } from "./js/timer.js";
import { updateUI, switchMode } from "./js/ui.js";
import { getSettings } from "./js/settings.js";
import { playSound } from "./js/notifications.js";

document.addEventListener("DOMContentLoaded", () => {
    const settings = getSettings();
    const timer = new Timer(settings.workDuration, settings.breakDuration, settings.longBreakDuration);

    document.getElementById("start-btn").addEventListener("click", () => timer.start(updateUI, switchMode, playSound));
    document.getElementById("pause-btn").addEventListener("click", () => timer.pause());
    document.getElementById("reset-btn").addEventListener("click", () => timer.reset(updateUI));
});