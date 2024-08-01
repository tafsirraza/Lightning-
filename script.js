// script.js
document.addEventListener('DOMContentLoaded', () => {
    const lightning = document.querySelector('.lightning');
    const stormToggle = document.querySelector('.storm-toggle');
    let isLightningActive = true;

    stormToggle.addEventListener('click', () => {
        if (isLightningActive) {
            lightning.style.animationPlayState = 'paused';
            stormToggle.textContent = 'Start Lightning';
        } else {
            lightning.style.animationPlayState = 'running';
            stormToggle.textContent = 'Stop Lightning';
        }
        isLightningActive = !isLightningActive;
    });
});