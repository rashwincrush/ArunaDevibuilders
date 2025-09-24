document.addEventListener('DOMContentLoaded', () => {
  // Scroll-reveal animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  // Mobile sticky CTA bar
  if (!document.querySelector('.mobile-cta')) {
    const phoneNumber = '+919000000000';
    const waLink = 'https://wa.me/919000000000';
    const bar = document.createElement('div');
    bar.className = 'mobile-cta';
    bar.innerHTML = `
      <div class="bar container">
        <a class="call" href="tel:${phoneNumber}" aria-label="Call ArunaDevi Builders">
          <i class="bi bi-telephone"></i>
          <span>Call</span>
        </a>
        <a class="wa" href="${waLink}" target="_blank" rel="noopener" aria-label="WhatsApp ArunaDevi Builders">
          <i class="bi bi-whatsapp"></i>
          <span>WhatsApp</span>
        </a>
        <a class="enq" href="/contact.html" aria-label="Enquire">
          <i class="bi bi-chat-dots"></i>
          <span>Enquire</span>
        </a>
      </div>`;
    document.body.appendChild(bar);
  }

  // Open external links in new tab for convenience
  document.querySelectorAll('a[href^="http"]').forEach((a) => {
    try {
      const url = new URL(a.href);
      if (url.hostname !== location.hostname) {
        a.target = '_blank';
        a.rel = 'noopener';
      }
    } catch (e) { /* ignore invalid URLs */ }
  });
});

// BEGIN: ADB Additions — vendor images decode async
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.vendor-logo').forEach(img => {
    img.setAttribute('decoding','async');
  });
});
// END: ADB Additions

// BEGIN: ADB Additions — vendor marquee decode async
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.vendor-marquee img').forEach(img => {
    img.setAttribute('decoding','async');
  });
});
// END: ADB Additions
