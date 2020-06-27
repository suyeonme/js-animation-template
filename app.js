'use strict'

/////////////////////
// IMAGE EXPAND MODAL
const imageModal = () => {
    const modal = document.querySelector('.modal');
    const previews = Array.from(document.querySelectorAll('.img-container img'));
    const modalImage = document.querySelector('.full-img');
    const modalText = document.querySelector('.caption');

    // Pop up modal 
    previews.forEach(preview => {
        preview.addEventListener('click', () => {
            modal.classList.add('open');
            modalImage.classList.add('open')

            // Change text
            const modalImageSrc = preview.getAttribute('data-original');
            modalImage.src = `./large/${modalImageSrc}`;

            // Change image
            const altText = preview.alt;
            modalText.textContent = altText;
        });
    });

    // Close modal 
    modal.addEventListener('click' , e => {
        if (e.target.classList.contains('open')) {
            modal.classList.remove('open');
            modalImage.classList.remove('open');
        };
    });
};

imageModal();