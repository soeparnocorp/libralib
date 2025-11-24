const books = [
  {title:"Filsafat Jawa", author:"Soeparno", cover:"https://libra.soeparnocorp.com/covers/filsafat.jpg", pdf:"https://libra.soeparnocorp.com/books/filsafat-jawa.pdf"},
  {title:"Senja di Jakarta", author:"Mochtar Lubis", cover:"https://libra.soeparnocorp.com/covers/senja.jpg", pdf:"https://libra.soeparnocorp.com/books/senja-jakarta.pdf"},
  // Tambah buku sesukamu di sini
];

const grid = document.getElementById('book-grid');
const search = document.getElementById('search');

function renderBooks(data) {
  grid.innerHTML = data.map(book => `
    <div class="book-card">
      <img src="${book.cover}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <a href="reader.html?pdf=${encodeURIComponent(book.pdf)}&title=${encodeURIComponent(book.title)}">Baca Sekarang</a>
    </div>
  `).join('');
}

renderBooks(books);

search.addEventListener('input', e => {
  const term = e.target.value.toLowerCase();
  const filtered = books.filter(b => 
    b.title.toLowerCase().includes(term) || 
    b.author.toLowerCase().includes(term)
  );
  renderBooks(filtered);
});
