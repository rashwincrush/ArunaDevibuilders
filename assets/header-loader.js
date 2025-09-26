document.addEventListener('DOMContentLoaded', function() {
  const headerHTML = `<nav class="navbar navbar-expand-lg sticky-top bg-white border-bottom navbar-light">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center gap-2" href="/index.html">
      <img src="/assets/logo.png" width="36" height="36" alt="Logo">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="nav" class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link" href="/about.html">About</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/services/" role="button" data-bs-toggle="dropdown">Services</a>
          <div class="dropdown-menu services-dropdown">
            <div class="services-grid">
              <a href="/services/" class="service-tile">
                <div class="tile-icon"><i class="bi bi-grid"></i></div>
                <div class="tile-text">All Services</div>
              </a>
              <a href="/services/turnkey-house-construction.html" class="service-tile">
                <div class="tile-icon"><i class="bi bi-house-door"></i></div>
                <div class="tile-text">Turnkey Construction</div>
              </a>
              <a href="/services/commercial-construction.html" class="service-tile">
                <div class="tile-icon"><i class="bi bi-building"></i></div>
                <div class="tile-text">Commercial Construction</div>
              </a>
              <a href="/services/engineering-and-process.html" class="service-tile">
                <div class="tile-icon"><i class="bi bi-gear"></i></div>
                <div class="tile-text">Engineering & Process</div>
              </a>
              <a href="/services/architectural-design.html" class="service-tile">
                <div class="tile-icon"><i class="bi bi-pencil-square"></i></div>
                <div class="tile-text">Architectural Design</div>
              </a>
              <a href="/services/structural-designing.html" class="service-tile">
                <div class="tile-icon"><i class="bi bi-tools"></i></div>
                <div class="tile-text">Structural Designing</div>
              </a>
              <a href="/services/concrete-methods.html" class="service-tile">
                <div class="tile-icon"><i class="bi bi-cone-striped"></i></div>
                <div class="tile-text">Concrete Methods</div>
              </a>
              <a href="/services/materials-and-brands.html" class="service-tile">
                <div class="tile-icon"><i class="bi bi-box-seam"></i></div>
                <div class="tile-text">Materials & Brands</div>
              </a>
              <a href="/services/building-plan-approval.html" class="service-tile">
                <div class="tile-icon"><i class="bi bi-file-earmark-check"></i></div>
                <div class="tile-text">Building Plan Approval</div>
              </a>
            </div>
          </div>
        </li>
        <li class="nav-item"><a class="nav-link" href="/projects.html">Projects</a></li>
        <li class="nav-item"><a class="nav-link" href="/payments.html">Payments</a></li>
        <li class="nav-item"><a class="nav-link" href="/contact.html">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
<style>
.services-dropdown {
  min-width: 480px;
  padding: 1.5rem;
  border: none;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  transform: translateX(-30px);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.service-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.5rem;
  border-radius: 8px;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
  background: #fff;
  min-height: 100px;
}

.service-tile:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: #f8f9fa;
  color: #1e40af;
  border-color: #1e40af;
}

.tile-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #1e40af;
  transition: color 0.3s ease;
}

.service-tile:hover .tile-icon {
  color: #1e40af;
  transform: scale(1.1);
}

.tile-text {
  font-size: 0.8rem;
  font-weight: 500;
  text-align: center;
  line-height: 1.2;
}
</style>`;
  document.getElementById('header-placeholder').innerHTML = headerHTML;
});
