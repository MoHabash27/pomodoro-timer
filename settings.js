export function getSettings() {
    return {
        workDuration: Number(document.getElementById("work-duration").value) || 25,
        breakDuration: Number(document.getElementById("break-duration").value) || 5,
        longBreakDuration: Number(document.getElementById("long-break-duration").value) || 15
    };
}