// Menangani efek mesin ketik (Typewriter Effect) di Hero Section
const typeWriterElement = document.getElementById('typewriter');
const words = [
    "Network Engineer.", 
    "System Administrator.", 
    "Network Automation Enthusiast."
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    // Menampilkan teks yang terpotong sesuai indeks
    typeWriterElement.textContent = currentWord.substring(0, charIndex);

    let typeSpeed = 100;

    if (isDeleting) {
        typeSpeed /= 2; // Kecepatan menghapus lebih cepat
    }

    if (!isDeleting && charIndex === currentWord.length) {
        // Selesai mengetik satu kata, tunggu sebentar lalu mulai hapus
        typeSpeed = 1500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Selesai menghapus, ganti ke kata berikutnya
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// Mulai efek ketik ketika dokumen (HTML) selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    if(words.length) setTimeout(typeEffect, 1000);
});

// Menangani Smooth Scrolling untuk tautan navigasi (navigasi mulus ke bawah)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
