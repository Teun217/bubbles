const draggables = document.querySelectorAll('section > div');

draggables.forEach(el => {
    let isDragging = false;
    let offsetX, offsetY;

    el.style.position = 'absolute';

    el.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - el.getBoundingClientRect().left;
        offsetY = e.clientY - el.getBoundingClientRect().top;
        el.style.cursor = 'grabbing';
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        el.style.left = `${e.clientX - offsetX}px`;
        el.style.top  = `${e.clientY - offsetY}px`;
    });

    document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        el.style.cursor = 'grab';
    });
});