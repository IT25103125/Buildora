/**
 * Buildora Smart Construction & Architecture Budget Calculator
 * Provides instant certified cost projections with itemized breakdown
 */

const CALCULATOR_CONFIG = {
  propertyTypeMultipliers: {
    'single_family': 1.0,
    'luxury_villa': 1.35,
    'tropical_courtyard': 1.2,
    'urban_loft': 1.15
  },
  finishTiers: {
    'standard': { basePerSqFt: 65, name: 'Architectural Signature' },
    'luxury': { basePerSqFt: 110, name: 'Luxury Custom Atelier' },
    'bespoke': { basePerSqFt: 175, name: 'Ultra-Bespoke Masterpiece' }
  },
  storiesMultipliers: {
    1: 1.0,
    2: 1.08,
    3: 1.2,
    4: 1.35
  },
  addonsPrices: {
    'pool': 35000,
    'solar': 24000,
    'smarthome': 18000,
    'landscape': 22000,
    'basement': 45000
  }
};

function calculateBudget() {
  const sqftInput = document.getElementById('calc-sqft');
  const propertyTypeSelect = document.getElementById('calc-property-type');
  const finishTierSelect = document.querySelector('input[name="calc-finish-tier"]:checked');
  const storiesSelect = document.getElementById('calc-stories');

  if (!sqftInput || !propertyTypeSelect || !finishTierSelect || !storiesSelect) return;

  const sqft = parseInt(sqftInput.value, 10) || 3000;
  const propertyType = propertyTypeSelect.value || 'luxury_villa';
  const finishTier = finishTierSelect.value || 'luxury';
  const stories = parseInt(storiesSelect.value, 10) || 2;

  // Addons total
  let addonsTotal = 0;
  document.querySelectorAll('input[name="calc-addon"]:checked').forEach(cb => {
    const val = cb.value;
    if (CALCULATOR_CONFIG.addonsPrices[val]) {
      addonsTotal += CALCULATOR_CONFIG.addonsPrices[val];
    }
  });

  const baseRate = CALCULATOR_CONFIG.finishTiers[finishTier].basePerSqFt;
  const propMult = CALCULATOR_CONFIG.propertyTypeMultipliers[propertyType] || 1.0;
  const storyMult = CALCULATOR_CONFIG.storiesMultipliers[stories] || 1.0;

  // Base construction cost
  const rawBase = sqft * baseRate * propMult * storyMult;

  // Itemized breakdown percentages
  const archFee = Math.round(rawBase * 0.08); // 8% architectural design & CAD
  const civilStructural = Math.round(rawBase * 0.52); // 52% civil, concrete & framing
  const finishes = Math.round(rawBase * 0.32) + addonsTotal; // 32% luxury finishes + addons
  const escrowFee = Math.round(rawBase * 0.035); // 3.5% Buildora escrow & engineering audit
  const contingency = Math.round(rawBase * 0.045); // 4.5% guaranteed contingency buffer

  const grandTotal = archFee + civilStructural + finishes + escrowFee + contingency;

  // Update DOM elements
  updateText('calc-total-budget', '$' + grandTotal.toLocaleString());
  updateText('calc-arch-fee', '$' + archFee.toLocaleString());
  updateText('calc-civil-fee', '$' + civilStructural.toLocaleString());
  updateText('calc-finishes-fee', '$' + finishes.toLocaleString());
  updateText('calc-escrow-fee', '$' + escrowFee.toLocaleString());
  updateText('calc-contingency-fee', '$' + contingency.toLocaleString());

  // Store active estimate into session storage for project posting
  const currentEstimate = {
    sqft,
    propertyType,
    finishTier,
    stories,
    grandTotal,
    archFee,
    date: new Date().toISOString()
  };
  sessionStorage.setItem('buildora_last_estimate', JSON.stringify(currentEstimate));
}

function updateText(elementId, text) {
  const el = document.getElementById(elementId);
  if (el) el.textContent = text;
}

// Sync range and text display
document.addEventListener('DOMContentLoaded', () => {
  const sqftRange = document.getElementById('calc-sqft');
  const sqftDisplay = document.getElementById('calc-sqft-display');

  if (sqftRange && sqftDisplay) {
    sqftRange.addEventListener('input', (e) => {
      sqftDisplay.textContent = parseInt(e.target.value, 10).toLocaleString() + ' sq. ft.';
      calculateBudget();
    });
  }

  // Listeners on inputs
  const inputs = document.querySelectorAll('#calc-property-type, #calc-stories, input[name="calc-finish-tier"], input[name="calc-addon"]');
  inputs.forEach(input => {
    input.addEventListener('change', calculateBudget);
  });

  // Calculate initial load
  calculateBudget();
});

// Proceed from calculator to project intake
function proceedWithCalculatedBudget() {
  const estimate = sessionStorage.getItem('buildora_last_estimate');
  if (estimate) {
    localStorage.setItem('buildora_prefill_estimate', estimate);
  }
  window.location.href = 'post-project.html';
}
