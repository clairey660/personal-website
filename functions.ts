function toggleStyleSheet() {
    var t = document.getElementById("mainStyleSheet") as HTMLLinkElement | null;
    var s = document.getElementById("buttonStyle") as HTMLLinkElement | null;

    if (!t || !s) {
        return;
    }

    let main = t.getAttribute('href');
    let on_off = s.getAttribute('src');

    if (main === 'index.css') {
        on_off = "../images/off.png";
        main = 'special.css';
    } else {
        on_off = "../images/on.css";
        main = 'default.css';
    }

    t.setAttribute("href", main);
    t.setAttribute("src", on_off);
    localStorage.setItem("storedColor", main);
    localStorage.setItem("storedButton", on_off);
}

window.onload = () => {
    const storedColor = localStorage.getItem("storedColor");
    const storedButton = localStorage.getItem("storedButton");
    const styleColor = document.getElementById("mainStyleSheet") as HTMLLinkElement | null;
    const toggleStyle = document.getElementById("buttonStyle") as HTMLLinkElement | null;

    if (styleColor && storedColor) {
        styleColor.setAttribute("href", storedColor);
    }
    if (toggleStyle && storedButton) {
        toggleStyle.setAttribute("src", storedButton);
    }
};