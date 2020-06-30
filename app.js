'use strict'

/////////////////////////////
// IMAGE EXPAND MODAL
/* const imageModal = (function() {
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
})(); */


/////////////////////////////
// MOUSE CURSOR 
/* const mouseCursor = (function(){
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
})(); */


/////////////////////////////
// FANCY TEXT
/* const fancyText = (function() {
    const text = document.querySelector('.text');
    const splitText = text.textContent.split("");
    text.textContent = "";

    // Add span to each character
    for (let i = 0; i < splitText.length; i ++) {
        text.innerHTML += `<span>${splitText[i]}</span>`;
    };

    // Give an animation
    const onTick = () => {
        const span = document.querySelectorAll('span')[character];
        span.classList.add('fade-in');
        character++;

        // Finish animation
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
})(); */


/////////////////////////////
// NAV COLOR BOX 
/* const navColorBox = (function(){
    const sections = document.querySelectorAll('.nav-colorBox section');
    const colorBox = document.querySelector('.colorBox');
    const gradients = [
        'linear-gradient(to right top, #f46b45, #eea849)',
        'linear-gradient(to right top, #005c97, #363795)',
        'linear-gradient(to right top, #e53935, #e35d5b)'
    ];

    const options = {
        threshold: 0.7  // 70%
    };

    const navCheck = entries => {
        entries.forEach(entry => {
            // Match current section and nav
            const className = entry.target.className;    
            const activeAnchor = document.querySelector(`[data-page=${className}]`);
            const gradientIndex = entry.target.getAttribute('data-index');

            // Set intersection rectangle of nav
            const coords = activeAnchor.getBoundingClientRect();
            const directions = {
                height: coords.height,
                width: coords.width,
                top: coords.top,
                left: coords.left
            };

            // Animate
            if (entry.isIntersecting) {
                colorBox.style.setProperty('left', `${directions.left}px`);
                colorBox.style.setProperty('top', `${directions.top}px`);
                colorBox.style.setProperty('width', `${directions.width}px`);
                colorBox.style.setProperty('height', `${directions.height}px`);
                colorBox.style.background = gradients[gradientIndex]; 
            };
        });
    };

    // Createing intersection observer
    const observer = new IntersectionObserver(navCheck, options);

    // Targeting an element to be observed (section)
    sections.forEach(section => {
        observer.observe(section); 
    });

})(); */


/////////////////////////////
// FADE IN HEADER IMAGE
const fadeInHeader = (function() {
    const bgImage = document.querySelector('.bg');
    
    window.addEventListener('scroll', () => {
        bgImage.style.opacity = 1 - +window.pageYOffset/550+'';
        bgImage.style.top = +window.pageYOffset+'px';
        bgImage.style.backgroundPositionY = - +window.pageYOffset/2+'px';
    });

})(); 

