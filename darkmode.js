var sunriseIcon = document.getElementById('sunrise');
var sunfallIcon = document.getElementById('sunfall');

// Check if dark theme is enabled in local storage
var isDarkTheme = localStorage.getItem("dark_theme") === "true";
if (isDarkTheme) {
    document.body.classList.add("dark_theam");
    sunfallIcon.style.display = "none";
    sunriseIcon.style.display = "block";
}

sunfallIcon.onclick = function() {
    document.body.classList.toggle("dark_theam");
    var isDarkTheme = document.body.classList.contains("dark_theam");
    
    if (isDarkTheme) {
        localStorage.setItem("dark_theme", "true");
        sunfallIcon.style.display = "none";
        sunriseIcon.style.display = "block";
    } else {
        localStorage.removeItem("dark_theme");
        sunfallIcon.style.display = "block";
        sunriseIcon.style.display = "none";
    }
};

sunriseIcon.onclick = function() {
    localStorage.removeItem("dark_theme");
    document.body.classList.remove("dark_theam");
    sunfallIcon.style.display = "block";
    sunriseIcon.style.display = "none";
};