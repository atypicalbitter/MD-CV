
    document.addEventListener('DOMContentLoaded', function () {
        window.addEventListener('scroll', function () {
            const parallaxSections = document.querySelectorAll('.parallax-section');
    
            parallaxSections.forEach(function (section) {
                const distanceFromTop = section.getBoundingClientRect().top;
                const speed = section.dataset.speed;
    
                section.querySelector('.parallax-background').style.transform = `translateY(${distanceFromTop * speed}px)`;
            });
        });
    });
    

     const welcomeHeading = document.getElementById('welcome-heading');
    const portfolioHeading = document.getElementById('portfolio-heading');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hide-on-scroll');
            } else {
                entry.target.classList.add('hide-on-scroll');
            }
        });
    }, observerOptions);

    observer.observe(welcomeHeading);
    observer.observe(portfolioHeading);

