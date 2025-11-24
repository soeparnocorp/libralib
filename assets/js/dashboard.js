if (!localStorage.getItem('user')) location.href = 'login.html';
document.getElementById('user').textContent = localStorage.getItem('user');

async function upload() {
  const fileInput = document.getElementById('pdf');
  if (!fileInput.files[0]) return;
  
  const form = new FormData();
  form.append('pdf', fileInput.files[0]);
  form.append('user', localStorage.getItem('user'));
  
  document.getElementById('status').textContent = "Uploading…";
  const res = await fetch('/upload', { method: 'POST', body: form });
  const json = await res.json();
  
  if (json.success) {
    document.getElementById('status').innerHTML = `Sukses!<br><a href="reader.html?pdf=${encodeURIComponent(json.url)}&title=${fileInput.files[0].name}" target="_blank">Buka Buku →</a>`;
  } else {
    document.getElementById('status').textContent = "Gagal upload";
  }
}
