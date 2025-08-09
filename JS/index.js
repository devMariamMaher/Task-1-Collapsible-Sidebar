const openBtn = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('#sidebar');
const overlay = document.querySelector('#overlay');

// Open sidebar
openBtn.addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.classList.add('show');
    openBtn.style.display = 'none';
});

// Close sidebar
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
    openBtn.style.display = 'block';
});

// Close when clicking overlay
overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
    openBtn.style.display = 'block';
});
