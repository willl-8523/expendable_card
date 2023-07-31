const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        revomeClassActive();
        addClass(panel)
    })
});

function addClass(panel) {
    panel.classList.add('active')
}

function revomeClassActive() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}