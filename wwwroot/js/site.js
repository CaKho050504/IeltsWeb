// Intersection Observer for Fade-in animations
document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                if(!counter.classList.contains('counted')) {
                    startCounter(counter);
                    counter.classList.add('counted');
                }
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.counter').forEach(element => {
        observer.observe(element);
    });
});

// Counter animation
function startCounter(counter) {
    const target = +counter.getAttribute('data-target');
    const duration = 2000; // ms
    const increment = target / (duration / 16); // 60fps
    
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            counter.innerText = Math.ceil(current).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            // Check if it should have a plus sign or not
            if(target >= 1000) {
                 counter.innerText = target.toLocaleString() + "+";
            } else if(target >= 20) {
                 counter.innerText = target + "+";
            } else {
                 counter.innerText = target;
            }
        }
    };
    
    updateCounter();
}
