// Navigation Control
function showPage(pageId) {
    document.querySelectorAll('section')
        .forEach(s => s.classList.remove('active'));

    document.querySelectorAll('nav ul li a')
        .forEach(a => a.classList.remove('active'));

    document.getElementById(pageId).classList.add('active');
    document.getElementById('l-' + pageId).classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Borrow Form Processing
function handleBorrow(event) {
    event.preventDefault();

    const name = document.getElementById('bName').value;
    const bookData = document.getElementById('bBook').value.split('|');
    const days = document.getElementById('bDays').value;

    const today = new Date();
    const returnDate = new Date();
    returnDate.setDate(today.getDate() + parseInt(days));

    document.getElementById('resName').innerText = name;
    document.getElementById('resBook').innerText = bookData[0];
    document.getElementById('resPrice').innerText = bookData[1];
    document.getElementById('resDate').innerText = returnDate.toLocaleDateString();

    const resultBox = document.getElementById('borrowResult');
    resultBox.style.display = 'block';
    resultBox.scrollIntoView({ behavior: 'smooth' });
}
