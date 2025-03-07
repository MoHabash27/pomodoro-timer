export class Timer {
    constructor(workDuration, breakDuration, longBreakDuration) {
        this.workDuration = workDuration * 60;
        this.breakDuration = breakDuration * 60;
        this.longBreakDuration = longBreakDuration * 60;
        this.sessionsCompleted = 0;
        this.isWorkSession = true;
        this.remainingTime = this.workDuration;
        this.interval = null;
    }

    start(updateUI, switchMode, playSound) {
        if (this.interval) return;
        this.interval = setInterval(() => {
            if (this.remainingTime > 0) {
                this.remainingTime--;
                updateUI(this.remainingTime);
            } else {
                playSound();
                this.switchSession(switchMode);
            }
        }, 1000);
    }

    pause() {
        clearInterval(this.interval);
        this.interval = null;
    }

    reset(updateUI) {
        clearInterval(this.interval);
        this.interval = null;
        this.remainingTime = this.isWorkSession ? this.workDuration : this.breakDuration;
        updateUI(this.remainingTime);
    }

    switchSession(switchMode) {
        this.isWorkSession = !this.isWorkSession;
        this.sessionsCompleted += this.isWorkSession ? 1 : 0;
        this.remainingTime = this.isWorkSession 
            ? this.workDuration 
            : (this.sessionsCompleted % 4 === 0 ? this.longBreakDuration : this.breakDuration);
        switchMode(this.isWorkSession);
    }
}