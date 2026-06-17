const nav = document.querySelector('nav');
 window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                nav.style.padding = '1rem 3rem';
            } else {
                nav.style.padding = '1.4rem 3rem';
            }
        });