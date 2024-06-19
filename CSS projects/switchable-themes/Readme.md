# Switchable Themes

This project demonstrates a simple theme switcher using CSS variables and JavaScript. It allows users to toggle between a light and dark theme for a website.

## Features

- Uses CSS variables to define theme styles.
- Provides buttons for switching between light and dark themes.

### Setup

1. **Clone or Download the Repository:** You can clone this project using Git or simply download the files.
2. **Open the Files:** Open the `index.html`, `style.css`, and `script.js` files in a text editor or code editor.
3. **Run the Project:** Open `index.html` in your web browser to see the theme switcher in action.

### How it Works

The project leverages CSS variables (`--color-background`, `--color-text`) to define different styles for the light and dark themes. These variables are then used throughout the CSS to style the body, text, and buttons.

The `script.js` file handles the button clicks. Clicking the "☀️" button applies the light theme class (`theme-day`) to the body element, while clicking the "🌙" button applies the dark theme class (`theme-night`).

### Customization

- You can modify the CSS to change the colors and styles for each theme.
- You can add additional theme options by creating new theme classes in the CSS and modifying the JavaScript to handle them.