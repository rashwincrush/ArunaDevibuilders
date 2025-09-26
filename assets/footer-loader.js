// Load footer component once, cleanly
async function loadFooter() {
  try {
    // Remove existing injected footers/placeholders (but not modal footers, etc.)
    document.querySelectorAll('footer.footer, #footer-placeholder').forEach(el => el.remove());

    const res = await fetch('/components/footer.html', { cache: 'no-store' });
    if (!res.ok) return;

    const html = await res.text();
    const wrap = document.createElement('div');
    wrap.innerHTML = html.trim();

    const footer = wrap.querySelector('footer.footer');
    if (!footer) return;

    document.body.appendChild(footer);

    // Set year if not already done by component script (id still useful)
    const y = document.getElementById('year');
    if (y && !y.textContent) y.textContent = new Date().getFullYear();
  } catch (e) {
    console.error('Error loading footer:', e);
  }
}
window.loadFooter = loadFooter;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadFooter);
} else {
  loadFooter();
}
