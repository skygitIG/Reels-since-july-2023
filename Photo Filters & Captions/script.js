const figure = document.querySelectorAll('figure');
const caption = document.querySelectorAll('figcaption');
const fullCaption = document.querySelectorAll('.caption-full');
const figureImage = document.querySelectorAll('figure img');

figure.forEach((fig, idx) => {
    fig.addEventListener('mouseover', () => {
        caption[idx].classList.add('expanded');
        fullCaption[idx].classList.add('visible');
        figureImage[idx].classList.add('image-filter');
    });

    fig.addEventListener('mouseout', () => {
        caption[idx].classList.remove('expanded');
        fullCaption[idx].classList.remove('visible');
        figureImage[idx].classList.remove('image-filter');
    });
});
