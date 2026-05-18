// ===== تقنية عُمان — الجافاسكربت =====

// القائمة المتنقلة
function toggleMenu() {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('active');
}

// إغلاق القائمة عند الضغط على رابط
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav').classList.remove('active');
  });
});

// تأثير التمرير السلس
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
