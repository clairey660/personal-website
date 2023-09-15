function toggleStyleSheet() {
    var t = document.getElementById("mainStyleSheet");
    var s = document.getElementById("buttonStyle");
    if (!t || !s) {
        return;
    }
    var main = t.getAttribute('href');
    var on_off = s.getAttribute('src');
    if (main === 'index.css') {
        on_off = "../images/off.png";
        main = 'special.css';
    }
    else {
        on_off = "../images/on.css";
        main = 'default.css';
    }
    t.setAttribute("href", main);
    t.setAttribute("src", on_off);
    localStorage.setItem("storedColor", main);
    localStorage.setItem("storedButton", on_off);
}
window.onload = function () {
    var storedColor = localStorage.getItem("storedColor");
    var storedButton = localStorage.getItem("storedButton");
    var styleColor = document.getElementById("mainStyleSheet");
    var toggleStyle = document.getElementById("buttonStyle");
    if (styleColor && storedColor) {
        styleColor.setAttribute("href", storedColor);
    }
    if (toggleStyle && storedButton) {
        toggleStyle.setAttribute("src", storedButton);
    }
};
