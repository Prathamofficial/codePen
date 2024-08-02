function updateLineNumbers(textareaId, lineNumbersId) {
    let textarea = document.getElementById(textareaId);
    let lineNumbers = document.getElementById(lineNumbersId);
    let lines = textarea.value.split('\n').length;
    lineNumbers.innerHTML = '';

    for (let i = 1; i <= lines; i++) {
        lineNumbers.innerHTML += i + '<br>' + '<br>';
    }
}

function syncScroll(textareaId, lineNumbersId) {
    let textarea = document.getElementById(textareaId);
    let lineNumbers = document.getElementById(lineNumbersId);
    lineNumbers.scrollTop = textarea.scrollTop;
}

let hideScrollbarTimeouts = {};

['code-html', 'code-css', 'code-js'].forEach(id => {
    document.getElementById(id).addEventListener('scroll', function() {
        clearTimeout(hideScrollbarTimeouts[id]);
        this.classList.remove('hidden-scrollbar');

        hideScrollbarTimeouts[id] = setTimeout(() => {
            this.classList.add('hidden-scrollbar');
        }, 2000);
    });
});