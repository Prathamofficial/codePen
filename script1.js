function run() {
    let htmlCode = document.getElementById("code-html").value;
    let cssCode = document.getElementById("code-css").value;
    let jsCode = document.getElementById("code-js").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    output.contentWindow.eval(jsCode);
}

function saveCode() {
    let htmlCode = document.getElementById("code-html").value;
    let cssCode = document.getElementById("code-css").value;
    let jsCode = document.getElementById("code-js").value;

    localStorage.setItem("htmlCode", htmlCode);
    localStorage.setItem("cssCode", cssCode);
    localStorage.setItem("jsCode", jsCode);
}

function loadCode() {
    let htmlCode = localStorage.getItem("htmlCode");
    let cssCode = localStorage.getItem("cssCode");
    let jsCode = localStorage.getItem("jsCode");

    if (htmlCode !== null) document.getElementById("code-html").value = htmlCode;
    if (cssCode !== null) document.getElementById("code-css").value = cssCode;
    if (jsCode !== null) document.getElementById("code-js").value = jsCode;

    run();
}

window.onload = function() {
    loadCode();
};