document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("theme-toggle");
    const html = document.documentElement;

    toggleBtn.addEventListener("click", function () {
        const currentTheme = html.getAttribute("data-bs-theme");

        if (currentTheme === "dark") {
            html.setAttribute("data-bs-theme", "light");
        } else {
            html.setAttribute("data-bs-theme", "dark");
        }
    });
});