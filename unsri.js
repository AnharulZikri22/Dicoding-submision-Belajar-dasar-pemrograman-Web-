const card =
    document.querySelectorAll('.card');
card.forEach(function(el) {
    el.addEventListener('mouseenter', function(e) {

        e.target.style.backgroundColor = 'lavender';
        e.target.style.color = 'black';

    });
    el.addEventListener('mouseleave', function(e) {
        e.target.style.backgroundColor = 'white';
        e.target.style.color = 'black';
    });
});
const teks =
    document.querySelector('.jUtama');
const huruf = [...teks.teksContent].map(m => `<span>${m}<span>`).join('');
teks.innnerHTML = huruf;
const tBackground = document.getElementById('tBackground');
tBackground.onclick = function() {
    document.body.classList.toggle('gainsboro');
}

function DarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}