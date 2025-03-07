# Pomodoro Timer

A stylish and functional **Pomodoro Timer** built with JavaScript ES Modules and Webpack.

## 🚀 Features
- **Work & Break Sessions:** Customizable durations for work, short breaks, and long breaks.
- **Automatic Session Switching:** After four work sessions, a long break starts automatically.
- **Start, Pause, and Reset Controls:** Intuitive UI to manage the timer.
- **Audible Notification:** Plays a sound when a session ends.
- **Sleek Design:** Animated background and smooth UI transitions.
- **Persistent Settings (Optional):** Save preferences using `localStorage`.

## 📦 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/pomodoro-timer.git
   cd pomodoro-timer
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## 🏃‍♀️ Usage
- **Start the development server:**
  ```sh
  npm start
  ```
  Open your browser and go to `http://localhost:8080/`.

- **Build for production:**
  ```sh
  npm run build
  ```
  The compiled files will be in the `dist/` folder.

## 🛠 File Structure
```
pomodoro-timer/
│── src/
│   ├── js/
│   │   ├── timer.js         (Timer logic)
│   │   ├── ui.js            (DOM manipulation)
│   │   ├── settings.js      (User preferences)
│   │   ├── notifications.js (Sound alerts)
│   ├── styles/
│   │   ├── style.css        (CSS styles)
│   ├── index.html           (Main UI)
│   ├── index.js             (Main entry point)
│── webpack.config.js        (Webpack configuration)
│── package.json             (Project dependencies)
│── README.md                (Project documentation)
│── dist/                    (Compiled output)
```

## 🎨 Design & Animations
- **Background Gradient:** Smooth animated gradient effect.
- **Floating Shapes:** Animated background elements.
- **Hover Effects:** Buttons and container have interactive hover effects.
- **Glassmorphism Style:** Transparent UI components with blur effects.

## 🔥 Future Enhancements
- **Task List Integration:** Track tasks with Pomodoro sessions.
- **Custom Sounds:** Allow users to upload notification sounds.
- **Dark Mode Toggle:** User-friendly night mode support.

## 📝 License
This project is open-source under the MIT License.
