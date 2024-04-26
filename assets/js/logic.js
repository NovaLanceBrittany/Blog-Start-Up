
//The Theme Switcher
function calculateSettingAsThemeString({ localStorage, systemSettingDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }
  
  if (systemSettingDark.matches) {
    return "dark";
  }
  
  return "light";
}



// Update the button text
function updateButton({ buttonEl, isDark }) {
  const newCta = isDark ? "Change to light theme" : "Change to dark theme";
}


// Updates the HTML Tag
function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}


// Info from the DOM and system settings on page load

const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");


let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

// Update the theme setting
updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

// Event listener to toggle the theme
button.addEventListener("click", (event) => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButton({ buttonEl: button, isDark: newTheme === "dark" });
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
}); 
// END OF THEME SWITCHER




