document.addEventListener('DOMContentLoaded', () => {
    const lightEffect = document.querySelector('.light-effect');
    const letters = document.querySelectorAll('.letter');

    // 更新光效位置的函数
    function updateLightPosition(e) {
        const x = e.clientX;
        const y = e.clientY;
        
        lightEffect.style.background = `
            radial-gradient(
                150px circle at ${x}px ${y}px,
                rgba(255, 51, 102, 0.3) 0%,
                rgba(255, 107, 107, 0.2) 20%,
                rgba(255, 160, 122, 0.1) 40%,
                transparent 80%
            )
        `;
    }

    // 直接更新位置，不使用 requestAnimationFrame 以减少延迟
    document.addEventListener('mousemove', updateLightPosition, { passive: true });

    // 字母悬停效果
    letters.forEach(letter => {
        letter.addEventListener('mouseenter', () => {
            lightEffect.style.opacity = '1';
            lightEffect.style.transition = 'opacity 0.15s ease';
        });

        letter.addEventListener('mouseleave', () => {
            lightEffect.style.opacity = '0.7';
        });
    });
}); 