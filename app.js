const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function (event) {
    const id = event.target.dataset.id;
    if (id) {
        // remove active class from buttons
        btns.forEach(function (btn) {
            btn.classList.remove('active');
            event.target.classList.add('active');
        });
        // hide all articles
        articles.forEach(function (article) {
            article.classList.remove('active');

        });
        const element = document.getElementById(id);
        element.classList.add('active');

    }
});