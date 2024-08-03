document.addEventListener('DOMContentLoaded', () => {
    const message = document.createElement('div');
    message.textContent = 'Terima kasih telah mengunjungi!';
    message.style.position = 'fixed';
    message.style.bottom = '10px';
    message.style.right = '10px';
    message.style.backgroundColor = '#000';
    message.style.color = '#fff';
    message.style.padding = '10px';
    message.style.borderRadius = '5px';
    document.body.appendChild(message);

    setTimeout(() => {
        message.style.opacity = 0;
    }, 3000);
});