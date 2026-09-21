/**
 * Buildora Project Intake & Quote Request Portal
 * Multi-step wizard with localStorage persistence and reference ID generator
 */

let currentStep = 1;
const totalSteps = 4;

document.addEventListener('DOMContentLoaded', () => {
  // Check if there's prefilled data from the calculator
  prefillFromCalculator();

  // Populate architect choices
  populateArchitectSelect();

  // Update step indicators
  updateWizardUI();

  // Handle step form next / back buttons
  const nextBtn = document.getElementById('wizard-next-btn');
  const backBtn = document.getElementById('wizard-back-btn');
  const submitBtn = document.getElementById('wizard-submit-btn');

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (validateStep(currentStep)) {
        currentStep++;
        updateWizardUI();
      }
    });
  }

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateWizardUI();
      }
    });
  }

  const projectForm = document.getElementById('post-project-form');
  if (projectForm) {
    projectForm.addEventListener('submit', handleProjectSubmission);
  }
});

function prefillFromCalculator() {
  const prefillRaw = localStorage.getItem('buildora_prefill_estimate');
  if (!prefillRaw) return;

  try {
    const data = JSON.parse(prefillRaw);
    const sqftInput = document.getElementById('project-area');
    const budgetInput = document.getElementById('project-budget');
    const styleSelect = document.getElementById('project-style');

    if (sqftInput && data.sqft) sqftInput.value = data.sqft;
    if (budgetInput && data.grandTotal) budgetInput.value = '$' + data.grandTotal.toLocaleString();
    if (styleSelect && data.propertyType) {
      if (data.propertyType === 'tropical_courtyard') styleSelect.value = 'Tropical Modernism';
      else if (data.propertyType === 'luxury_villa') styleSelect.value = 'Luxury Villa';
      else if (data.propertyType === 'urban_loft') styleSelect.value = 'Modern Minimalist';
    }

    showToast('Estimate Loaded', 'Your calculated budget and specifications have been imported.', 'info');
    localStorage.removeItem('buildora_prefill_estimate');
  } catch (e) {
    console.error('Error prefilling from estimate:', e);
  }
}

function populateArchitectSelect() {
  const select = document.getElementById('preferred-architect');
  if (!select) return;

  if (typeof ARCHITECTS_DATA !== 'undefined' && ARCHITECTS_DATA.length) {
    ARCHITECTS_DATA.forEach(arch => {
      const opt = document.createElement('option');
      opt.value = arch.name;
      opt.textContent = `${arch.name} (${arch.specialty} - ${arch.firm})`;
      select.appendChild(opt);
    });
  }
}

function validateStep(step) {
  if (step === 1) {
    const title = document.getElementById('project-title')?.value;
    const location = document.getElementById('project-location')?.value;
    const area = document.getElementById('project-area')?.value;

    if (!title || !location || !area) {
      showToast('Required Fields', 'Please specify project title, location, and plot/building area.', 'warning');
      return false;
    }
    return true;
  }
  if (step === 2) {
    return true;
  }
  if (step === 3) {
    const clientName = document.getElementById('client-full-name')?.value;
    const clientPhone = document.getElementById('client-phone-number')?.value;

    if (!clientName || !clientPhone) {
      showToast('Contact Required', 'Please enter your name and phone number for the verification team.', 'warning');
      return false;
    }
    return true;
  }
  return true;
}

function updateWizardUI() {
  // Show / Hide Step Panes
  for (let i = 1; i <= totalSteps; i++) {
    const pane = document.getElementById(`step-pane-${i}`);
    const indicator = document.getElementById(`step-indicator-${i}`);
    
    if (pane) {
      if (i === currentStep) {
        pane.classList.remove('hidden');
      } else {
        pane.classList.add('hidden');
      }
    }

    if (indicator) {
      if (i < currentStep) {
        indicator.className = 'flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white font-bold text-xs';
        indicator.innerHTML = '✓';
      } else if (i === currentStep) {
        indicator.className = 'flex items-center justify-center w-8 h-8 rounded-full bg-gold text-black font-bold text-xs';
        indicator.innerHTML = i;
      } else {
        indicator.className = 'flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-gray-400 font-bold text-xs border border-white/10';
        indicator.innerHTML = i;
      }
    }
  }

  // Next / Submit Button Visibility
  const nextBtn = document.getElementById('wizard-next-btn');
  const submitBtn = document.getElementById('wizard-submit-btn');
  const backBtn = document.getElementById('wizard-back-btn');

  if (backBtn) {
    if (currentStep === 1) backBtn.classList.add('invisible');
    else backBtn.classList.remove('invisible');
  }

  if (nextBtn && submitBtn) {
    if (currentStep === totalSteps) {
      nextBtn.classList.add('hidden');
      submitBtn.classList.remove('hidden');
      populateReviewSummary();
    } else {
      nextBtn.classList.remove('hidden');
      submitBtn.classList.add('hidden');
    }
  }
}

function populateReviewSummary() {
  const summaryBox = document.getElementById('review-summary-box');
  if (!summaryBox) return;

  const title = document.getElementById('project-title')?.value || 'Untitled Residence';
  const location = document.getElementById('project-location')?.value || 'Not specified';
  const area = document.getElementById('project-area')?.value || 'Custom';
  const style = document.getElementById('project-style')?.value || 'Tropical Modernism';
  const architect = document.getElementById('preferred-architect')?.value || 'Buildora Matchmaker';
  const budget = document.getElementById('project-budget')?.value || 'To be calculated';
  const name = document.getElementById('client-full-name')?.value || 'Client';

  summaryBox.innerHTML = `
    <div class="space-y-3 text-xs">
      <div class="flex justify-between pb-2 border-b border-white/10">
        <span class="text-gray-400">Project:</span>
        <strong class="text-white">${title}</strong>
      </div>
      <div class="flex justify-between pb-2 border-b border-white/10">
        <span class="text-gray-400">Site Location:</span>
        <strong class="text-white">${location}</strong>
      </div>
      <div class="flex justify-between pb-2 border-b border-white/10">
        <span class="text-gray-400">Target Area:</span>
        <strong class="text-white">${area} Sq. Ft.</strong>
      </div>
      <div class="flex justify-between pb-2 border-b border-white/10">
        <span class="text-gray-400">Preferred Aesthetic:</span>
        <strong class="text-gold">${style}</strong>
      </div>
      <div class="flex justify-between pb-2 border-b border-white/10">
        <span class="text-gray-400">Assigned Architect:</span>
        <strong class="text-white">${architect}</strong>
      </div>
      <div class="flex justify-between pb-2 border-b border-white/10">
        <span class="text-gray-400">Target Investment:</span>
        <strong class="text-gradient-gold font-bold text-sm">${budget}</strong>
      </div>
      <div class="flex justify-between">
        <span class="text-gray-400">Registered Owner:</span>
        <strong class="text-white">${name}</strong>
      </div>
    </div>
  `;
}

function handleProjectSubmission(e) {
  e.preventDefault();

  const refId = 'BLD-' + Math.floor(100000 + Math.random() * 900000);
  const projectObj = {
    refId,
    title: document.getElementById('project-title')?.value,
    location: document.getElementById('project-location')?.value,
    area: document.getElementById('project-area')?.value,
    style: document.getElementById('project-style')?.value,
    architect: document.getElementById('preferred-architect')?.value,
    budget: document.getElementById('project-budget')?.value,
    timeline: document.getElementById('project-timeline')?.value,
    clientName: document.getElementById('client-full-name')?.value,
    clientPhone: document.getElementById('client-phone-number')?.value,
    clientEmail: document.getElementById('client-email')?.value,
    notes: document.getElementById('project-notes')?.value,
    status: 'Pending Buildora Risk & Cost Audit',
    createdAt: new Date().toLocaleDateString()
  };

  const stored = JSON.parse(localStorage.getItem('buildora_client_projects') || '[]');
  stored.push(projectObj);
  localStorage.setItem('buildora_client_projects', JSON.stringify(stored));

  // Show Success View
  const wizardContainer = document.getElementById('post-project-wizard');
  if (wizardContainer) {
    wizardContainer.innerHTML = `
      <div class="glass-panel p-8 md:p-12 rounded-3xl text-center border border-gold/40 max-w-xl mx-auto">
        <div class="w-20 h-20 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-6 border border-gold/30 badge-glow">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        
        <span class="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-semibold uppercase tracking-wider">Project Safely Registered</span>
        
        <h2 class="text-3xl font-serif font-bold text-white mt-4 mb-2">Your Buildora Dossier is Active</h2>
        <p class="text-xs text-gray-300 leading-relaxed max-w-md mx-auto mb-6">
          Your direct discussion channel with <strong>${projectObj.architect}</strong> has been opened. Buildora’s quantity surveying team is preparing the preliminary cost envelope.
        </p>

        <div class="bg-black/50 p-4 rounded-xl border border-white/10 mb-8 inline-block text-center">
          <span class="text-[11px] text-gray-400 uppercase tracking-widest block">Project Protection Reference</span>
          <span class="text-2xl font-mono font-bold text-gold">${refId}</span>
        </div>

        <div class="p-4 bg-gray-900/60 rounded-xl border border-gold/20 text-left text-xs text-gray-300 space-y-2 mb-8">
          <div class="flex items-center gap-2 text-gold font-semibold">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            What happens next?
          </div>
          <p>1. The architect will connect to discuss your aesthetic concept and review survey plans.</p>
          <p>2. <strong>Zero direct payments:</strong> You will not be asked for deposits by the architect.</p>
          <p>3. Once the concept is draft-ready, Buildora delivers your certified fixed-price budget guarantee.</p>
        </div>

        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="index.html" class="btn-gold px-6 py-3 rounded-xl text-xs font-semibold">Return to Home</a>
          <a href="projects.html" class="btn-outline-gold px-6 py-3 rounded-xl text-xs font-semibold">Explore Design Portfolio</a>
        </div>
      </div>
    `;
  }

  showToast('Project Registered!', `Reference: ${refId}. Saved to your Buildora dashboard.`, 'success');
}
