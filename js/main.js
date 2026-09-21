/**
 * Buildora Platform Core Scripts
 * Global utilities, navigation, toast notifications, and storage handlers
 */

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMobileMenu = document.getElementById('close-mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    });
  }

  if (closeMobileMenu && mobileMenu) {
    closeMobileMenu.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  }

  // Close mobile menu on clicking backdrop
  if (mobileMenu) {
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        mobileMenu.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }
    });
  }

  // Active link highlighter
  highlightActiveNav();

  // Initialize Animated Counters
  initNumberCounters();
});

// Highlight current page in navbar
function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a[data-nav]');
  
  navLinks.forEach(link => {
    const target = link.getAttribute('data-nav');
    if (target === currentPath || (currentPath === '' && target === 'index.html')) {
      link.classList.add('text-gold');
      link.classList.remove('text-gray-300');
    }
  });
}

// Toast Notification Engine
function showToast(title, message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast flex items-start p-4 rounded-xl shadow-2xl glass-panel border border-gold/30 max-w-sm text-sm text-gray-200 transition-all duration-300';
  
  let iconSvg = '';
  if (type === 'success') {
    iconSvg = `
      <div class="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg mr-3">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
      </div>`;
  } else if (type === 'warning') {
    iconSvg = `
      <div class="p-2 bg-amber-500/20 text-amber-400 rounded-lg mr-3">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
      </div>`;
  } else {
    iconSvg = `
      <div class="p-2 bg-blue-500/20 text-blue-400 rounded-lg mr-3">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </div>`;
  }

  toast.innerHTML = `
    ${iconSvg}
    <div class="flex-1">
      <h4 class="font-semibold text-white text-sm">${title}</h4>
      <p class="text-xs text-gray-400 mt-0.5">${message}</p>
    </div>
    <button onclick="this.parentElement.remove()" class="text-gray-400 hover:text-white ml-2">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

// Stats Counter Animation
function initNumberCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-counter'), 10);
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        let start = 0;
        const duration = 1800;
        const stepTime = 25;
        const steps = duration / stepTime;
        const increment = target / steps;

        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            el.innerText = prefix + target.toLocaleString() + suffix;
            clearInterval(timer);
          } else {
            el.innerText = prefix + Math.floor(start).toLocaleString() + suffix;
          }
        }, stepTime);

        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}

// Quick Consultation Modal Handler
function openConsultationModal(architectName = 'Lead Architect') {
  let modal = document.getElementById('consultation-modal');
  if (!modal) return;

  const titleEl = document.getElementById('consultation-architect-name');
  if (titleEl) {
    titleEl.textContent = architectName;
  }

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeConsultationModal() {
  const modal = document.getElementById('consultation-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

// Handle consultation submission
function submitConsultation(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.elements['client_name']?.value;
  const email = form.elements['client_email']?.value;
  const phone = form.elements['client_phone']?.value;
  const landArea = form.elements['land_area']?.value;
  const note = form.elements['client_note']?.value;
  const architectName = document.getElementById('consultation-architect-name')?.textContent || 'Buildora Matchmaker';

  if (!name || !phone) {
    showToast('Incomplete Details', 'Please provide your name and contact phone number.', 'warning');
    return;
  }

  const consultationData = {
    id: 'CS-' + Math.floor(100000 + Math.random() * 900000),
    name,
    email,
    phone,
    landArea,
    note,
    architectName,
    date: new Date().toLocaleDateString(),
    status: 'Scheduled'
  };

  const existing = JSON.parse(localStorage.getItem('buildora_consultations') || '[]');
  existing.push(consultationData);
  localStorage.setItem('buildora_consultations', JSON.stringify(existing));

  closeConsultationModal();
  form.reset();

  showToast(
    'Consultation Requested!', 
    `Your direct design ideation with ${architectName} has been recorded. Buildora risk desk will monitor the session. Ref: ${consultationData.id}`,
    'success'
  );
}

// Save Project / Architect to Favorites
function toggleFavorite(id, type = 'project') {
  const key = `buildora_fav_${type}s`;
  let favs = JSON.parse(localStorage.getItem(key) || '[]');
  
  if (favs.includes(id)) {
    favs = favs.filter(f => f !== id);
    localStorage.setItem(key, JSON.stringify(favs));
    showToast('Removed', 'Removed from your saved inspiration collection.', 'info');
    return false;
  } else {
    favs.push(id);
    localStorage.setItem(key, JSON.stringify(favs));
    showToast('Saved to Collection', 'Saved to your Buildora inspiration board.', 'success');
    return true;
  }
}
