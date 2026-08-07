
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded','false');
  }));
}
const form = document.getElementById('leadForm');
const statusEl = document.getElementById('formStatus');
if (form && statusEl) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.replace(/\s+/g,'');
    if (!name || !/^[0-9+().-]{8,15}$/.test(phone)) {
      statusEl.textContent = 'Vui lòng nhập họ tên và số điện thoại hợp lệ.';
      return;
    }
    statusEl.textContent = 'Thông tin hợp lệ. Form hiện đang ở chế độ demo và chưa gửi dữ liệu lên máy chủ.';
  });
}
