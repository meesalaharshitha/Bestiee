document.getElementById('bestieForm').addEventListener('submit', function(e) {
    e.preventDefault();

    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/11/18/22/16/heart-1839634_1280.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";

    document.getElementById('formSection').style.display = 'none';
    document.getElementById('photoSection').style.display = 'block';

    createHearts();
    setInterval(createHearts, 3000);
});

function createHearts() {
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }
}
