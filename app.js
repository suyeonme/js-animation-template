'use strict'

/////////////////////////////
// IMAGE EXPAND MODAL
const imageModal = (function() {
    const modal = document.querySelector('.modal');
    const previews = Array.from(document.querySelectorAll('.img-container img'));
    const modalImage = document.querySelector('.full-img');
    const modalText = document.querySelector('.caption');

    // Pop up modal 
    previews.forEach(preview => {
        preview.addEventListener('click', () => {
            modal.classList.add('open');
            modalImage.classList.add('open')

            // Change image
            const modalImageSrc = preview.getAttribute('data-original');
            modalImage.src = `./img/large/${modalImageSrc}`;

            // Change text
            const altText = preview.alt;
            modalText.textContent = altText;
        });
    });

    // Close modal 
    if (modal) {
        modal.addEventListener('click' , e => {
            if (e.target.classList.contains('open')) {
                modal.classList.remove('open');
                modalImage.classList.remove('open');
            };
        });
    }
})();


/////////////////////////////
// MOUSE CURSOR 
const mouseCursor = (function(){
    const mouseCursor = document.querySelector('.cursor');
    const navLinks = document.querySelectorAll('.nav-links li');

    const cursor = e => {
        mouseCursor.style.top = e.pageY + 'px';
        mouseCursor.style.left = e.pageX + 'px';
    };

    window.addEventListener('mousemove', cursor);

    navLinks.forEach(link => {
        link.addEventListener('mouseleave', () => {
            mouseCursor.classList.remove('link-grow');
            link.classList.remove('hovered-link');
        });
        
        link.addEventListener('mouseover', () => {
            mouseCursor.classList.add('link-grow');
            link.classList.add('hovered-link');
        });
    });
})();


/////////////////////////////
// FANCY TEXT
const fancyText = (function() {
    const text = document.querySelector('.fancy');
    const strText = text.textContent;
    const splitText = strText.split("");
    text.textContent = "";

    // Add span to each character
    for (let i = 0; i < splitText.length; i ++) {
        text.innerHTML += `<span> ${splitText[i]}</span>`;
    }

    const onTick = () => {
        const span = document.querySelectorAll('span')[character];
        span.classList.add('fade');
        character++;

        if (character === splitText.length) {
            complete();
            return;
        };
    };

    let character = 0;
    let timer = setInterval(onTick, 50);

    const complete = () => {
        clearInterval(timer);
        timer = null;
    };
})();

