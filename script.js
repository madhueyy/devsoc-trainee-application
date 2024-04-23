document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        circle.addEventListener('click', function() {
            // Get viewport dimensions
            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

            // Calculate the radius of the circle that covers the entire viewport
            const radius = Math.sqrt(vw * vw + vh * vh) / 2;

            // Make the circle bigger
            this.style.transition = 'transform 1s, width 1s, height 0.3s';
            this.style.transform = `scale(${radius / 15})`;
            this.style.width = `${radius}px`;
            this.style.height = `${radius}px`;
            
            // Wait for animation to finish, then transition to another page
            setTimeout(() => {
                const link = this.getAttribute('data-link');
                window.location.href = link;
            }, 200); // 300ms, same as the transition duration
        });
    });
});

