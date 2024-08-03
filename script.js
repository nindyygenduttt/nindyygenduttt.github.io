document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('close-button');

    // Menutup popup saat tombol ditekan
    closeButton.addEventListener('click', () => {
        overlay.style.opacity = 0;
        setTimeout(() => {
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto'; // Mengembalikan scrollbar
        }, 500); // Waktu untuk transisi animasi
    });

    // Menjaga overlay tetap terlihat hingga ditutup
    overlay.style.display = 'flex';
});