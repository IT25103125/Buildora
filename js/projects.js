/**
 * Buildora Projects & Masterwork Showcase Engine
 */

const PROJECTS_DATA = [
  {
    id: 'proj-1',
    title: 'The Mirissa Cliff Villa',
    category: 'Tropical Villa',
    architect: 'Ar. Dinuka Silva',
    location: 'Mirissa Coastal Bluffs',
    area: '4,850 Sq. Ft.',
    stories: '2 Levels + Infinity Cantilever',
    timeline: '14 Months Execution',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    blueprintImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A monolithic glass-and-teak coastal residence perched on dramatic ocean bluffs. Features passive sea-breeze conduits, solar-powered thermal cooling, and an expansive cantilevered saltwater infinity pool.',
    features: ['Cantilever Pool', 'Teak Louvers', 'Rainwater Harvesting', 'Oceanfront Courtyard'],
    budgetBreakdown: {
      total: '$345,000',
      architecturalFee: '$28,000 (Protected)',
      civilStructural: '$185,000',
      luxuryFinishes: '$98,000',
      buildoraEscrowFee: '$14,000 (Full Risk Shield)',
      contingency: '$20,000'
    }
  },
  {
    id: 'proj-2',
    title: 'The Monolith Residence',
    category: 'Minimalist Concrete',
    architect: 'Ar. Elena Vance',
    location: 'Hanthana Foothills, Kandy',
    area: '5,400 Sq. Ft.',
    stories: '3 Levels Split',
    timeline: '18 Months Execution',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    blueprintImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Raw architectural brilliance utilizing textured board-formed concrete, oversized acoustic triple-glazed curtains, and split-level mountain vista pavilions.',
    features: ['Board-formed Concrete', 'Triple Glazing', 'Subterranean Wine Cellar', 'Split-level Atrium'],
    budgetBreakdown: {
      total: '$480,000',
      architecturalFee: '$38,000 (Protected)',
      civilStructural: '$260,000',
      luxuryFinishes: '$132,000',
      buildoraEscrowFee: '$22,000 (Full Risk Shield)',
      contingency: '$28,000'
    }
  },
  {
    id: 'proj-3',
    title: 'Eden Rainforest Sanctuary',
    category: 'Biophilic Eco-Home',
    architect: 'Ar. Tariq Mansoor',
    location: 'Sinharaja Buffer Zone',
    area: '3,600 Sq. Ft.',
    stories: '2 Levels Lightweight Canopy',
    timeline: '11 Months Execution',
    heroImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    blueprintImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'An eco-luxe masterpiece immersed in dense vegetation. Built with stabilized rammed earth, non-invasive helical steel footings, and a self-irrigating living roof.',
    features: ['Living Green Roof', 'Rammed Earth Walls', 'Zero Concrete Footprint', 'Off-grid Solar Microgrid'],
    budgetBreakdown: {
      total: '$225,000',
      architecturalFee: '$19,000 (Protected)',
      civilStructural: '$115,000',
      luxuryFinishes: '$68,000',
      buildoraEscrowFee: '$11,000 (Full Risk Shield)',
      contingency: '$12,000'
    }
  },
  {
    id: 'proj-4',
    title: 'Ocean Crest Villa',
    category: 'Luxury Estate',
    architect: 'Ar. Maya Fernando',
    location: 'Mount Lavinia Promenade',
    area: '7,200 Sq. Ft.',
    stories: '3 Levels + Rooftop Sky Bar',
    timeline: '20 Months Execution',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    blueprintImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'An opulent multi-generational residence complete with Turkish hammam, infinity glass lounge, private elevator, and smart motorized climate shutters.',
    features: ['Private Glass Elevator', 'Rooftop Helipad Ready', 'Italian Travertine', 'Smart Creston Automation'],
    budgetBreakdown: {
      total: '$890,000',
      architecturalFee: '$70,000 (Protected)',
      civilStructural: '$460,000',
      luxuryFinishes: '$275,000',
      buildoraEscrowFee: '$45,000 (Full Risk Shield)',
      contingency: '$40,000'
    }
  },
  {
    id: 'proj-5',
    title: 'The Dutch Veranda Manor',
    category: 'Tropical Villa',
    architect: 'Ar. Julian Ward',
    location: 'Galle Heritage Quarter',
    area: '4,200 Sq. Ft.',
    stories: '2 Levels Courtyard',
    timeline: '15 Months Execution',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    blueprintImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A contemporary tribute to 17th-century colonial veranda living, balancing restored timber arches with modern subterranean acoustic screening and internal plunge pool.',
    features: ['Internal Plunge Pool', 'Heritage Terracotta', 'Louvered Verandas', 'Central Frangipani Court'],
    budgetBreakdown: {
      total: '$310,000',
      architecturalFee: '$25,000 (Protected)',
      civilStructural: '$165,000',
      luxuryFinishes: '$88,000',
      buildoraEscrowFee: '$14,000 (Full Risk Shield)',
      contingency: '$18,000'
    }
  },
  {
    id: 'proj-6',
    title: 'The Sky-Well Urban Loft',
    category: 'Minimalist Concrete',
    architect: 'Ar. Senaka Perera',
    location: 'Rajagiriya Canal Front',
    area: '2,900 Sq. Ft.',
    stories: '3 Levels Compact',
    timeline: '10 Months Execution',
    heroImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    blueprintImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Maximizing a slender 7-perch lot through a soaring triple-height central light well, hanging vertical ferns, and glass-encased steel staircase.',
    features: ['Triple-height Light Well', 'Vertical Green Wall', 'Automated Skylight', 'Rooftop Terrace Garden'],
    budgetBreakdown: {
      total: '$185,000',
      architecturalFee: '$16,000 (Protected)',
      civilStructural: '$98,000',
      luxuryFinishes: '$52,000',
      buildoraEscrowFee: '$9,000 (Full Risk Shield)',
      contingency: '$10,000'
    }
  }
];

// Render Project Showcase Cards
function renderProjects(containerId = 'projects-grid', filterCategory = 'All') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filtered = PROJECTS_DATA.filter(proj => {
    return filterCategory === 'All' || proj.category.toLowerCase() === filterCategory.toLowerCase();
  });

  container.innerHTML = filtered.map(proj => `
    <div class="glass-panel rounded-2xl overflow-hidden hover-lift border border-gold/15 group flex flex-col justify-between">
      <div>
        <!-- Hero Image -->
        <div class="relative h-64 overflow-hidden img-zoom-container cursor-pointer" onclick="openProjectModal('${proj.id}')">
          <img src="${proj.heroImage}" alt="${proj.title}" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>
          
          <div class="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs text-gold border border-gold/30 font-medium">
            ${proj.category}
          </div>

          <div class="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full text-white/80 hover:text-gold transition-colors" onclick="event.stopPropagation(); toggleFavorite('${proj.id}', 'project')">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>

          <div class="absolute bottom-4 left-4 right-4">
            <span class="text-xs text-gray-400 block">${proj.location}</span>
            <h3 class="text-xl font-serif font-bold text-white group-hover:text-gold transition-colors">${proj.title}</h3>
          </div>
        </div>

        <!-- Meta Details -->
        <div class="p-5">
          <div class="flex items-center justify-between text-xs pb-3 border-b border-white/10 mb-3">
            <span class="text-gray-400">Architect: <strong class="text-white">${proj.architect}</strong></span>
            <span class="text-gold font-medium">${proj.area}</span>
          </div>

          <p class="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">
            ${proj.description}
          </p>

          <!-- Audited Cost Bar -->
          <div class="bg-black/40 p-3 rounded-xl border border-gold/15 flex items-center justify-between">
            <div>
              <span class="text-[10px] uppercase tracking-wider text-gray-400 block">Buildora Audited Cost</span>
              <span class="text-base font-bold text-gradient-gold">${proj.budgetBreakdown.total}</span>
            </div>
            <div class="text-right">
              <span class="text-[10px] text-emerald-400 block font-medium">✓ Zero Price Inflation</span>
              <span class="text-[11px] text-gray-400">${proj.timeline}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Card Action -->
      <div class="px-5 pb-5 pt-1">
        <button onclick="openProjectModal('${proj.id}')" class="w-full btn-outline-gold py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2">
          <span>Inspect Blueprints & Budget</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
        </button>
      </div>
    </div>
  `).join('');
}

// Project Details Modal
function openProjectModal(projectId) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const content = document.getElementById('project-modal-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <!-- Media Gallery -->
      <div class="lg:col-span-7 space-y-4">
        <div class="rounded-2xl overflow-hidden border border-gold/20 h-72 md:h-96">
          <img src="${project.heroImage}" alt="${project.title}" class="w-full h-full object-cover">
        </div>

        <div>
          <h4 class="text-xs uppercase tracking-widest text-gold mb-2 font-semibold">Architectural Schematic / Elevation</h4>
          <div class="rounded-xl overflow-hidden border border-white/10 h-48 bg-black/60 relative">
            <img src="${project.blueprintImage}" alt="Blueprint" class="w-full h-full object-cover opacity-80">
            <div class="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>
            <div class="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-[10px] text-gray-300">Audited CAD Elevation</div>
          </div>
        </div>
      </div>

      <!-- Specs & Verified Cost Breakdown -->
      <div class="lg:col-span-5 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-1 bg-gold/10 text-gold border border-gold/30 rounded-md text-xs font-semibold">${project.category}</span>
            <span class="text-xs text-gray-400">By ${project.architect}</span>
          </div>

          <h2 class="text-2xl md:text-3xl font-serif font-bold text-white mb-2">${project.title}</h2>
          <p class="text-xs text-gray-300 leading-relaxed mb-6">${project.description}</p>

          <!-- Specifications Table -->
          <div class="grid grid-cols-2 gap-3 text-xs bg-black/40 p-4 rounded-xl border border-white/5 mb-6">
            <div>
              <span class="text-gray-400 block text-[11px]">Gross Living Area</span>
              <strong class="text-white">${project.area}</strong>
            </div>
            <div>
              <span class="text-gray-400 block text-[11px]">Site Elevation</span>
              <strong class="text-white">${project.stories}</strong>
            </div>
            <div>
              <span class="text-gray-400 block text-[11px]">Location</span>
              <strong class="text-white">${project.location}</strong>
            </div>
            <div>
              <span class="text-gray-400 block text-[11px]">Execution Horizon</span>
              <strong class="text-white">${project.timeline}</strong>
            </div>
          </div>

          <!-- Buildora Verified Cost Breakdown -->
          <div class="bg-gray-900/80 p-4 rounded-xl border border-gold/30 mb-6">
            <div class="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <span class="text-xs font-semibold text-gold uppercase tracking-wider">Buildora Guaranteed Cost Lock</span>
              <span class="text-base font-bold text-white">${project.budgetBreakdown.total}</span>
            </div>

            <ul class="space-y-1.5 text-xs text-gray-300">
              <li class="flex justify-between"><span>Architectural & Structural CAD:</span> <strong class="text-white">${project.budgetBreakdown.architecturalFee}</strong></li>
              <li class="flex justify-between"><span>Civil, Foundation & Masonry:</span> <strong class="text-white">${project.budgetBreakdown.civilStructural}</strong></li>
              <li class="flex justify-between"><span>Luxury Architectural Finishes:</span> <strong class="text-white">${project.budgetBreakdown.luxuryFinishes}</strong></li>
              <li class="flex justify-between"><span>Buildora Escrow & Quality Audit:</span> <strong class="text-gold">${project.budgetBreakdown.buildoraEscrowFee}</strong></li>
              <li class="flex justify-between"><span>Guaranteed Contingency Buffer:</span> <strong class="text-gray-400">${project.budgetBreakdown.contingency}</strong></li>
            </ul>

            <div class="mt-3 p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-[11px] text-emerald-400 flex items-center gap-1.5">
              <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              Buildora Shield: Direct money transfer prohibited. Funds stay in escrow until milestone inspection.
            </div>
          </div>
        </div>

        <!-- Modal CTA -->
        <div class="flex items-center gap-3 pt-2">
          <button onclick="closeProjectModal(); openConsultationModal('${project.architect}')" class="flex-1 btn-gold py-3 rounded-xl text-xs font-semibold text-center">
            Commission Design with ${project.architect}
          </button>
          <button onclick="closeProjectModal()" class="px-4 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold">
            Close
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

// Attach filters on DOM load
document.addEventListener('DOMContentLoaded', () => {
  const projectFilterTabs = document.querySelectorAll('[data-proj-filter]');
  if (projectFilterTabs.length) {
    projectFilterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        projectFilterTabs.forEach(t => {
          t.classList.remove('bg-gold', 'text-black', 'font-semibold');
          t.classList.add('bg-gray-800/60', 'text-gray-300');
        });
        tab.classList.add('bg-gold', 'text-black', 'font-semibold');
        tab.classList.remove('bg-gray-800/60', 'text-gray-300');

        const category = tab.getAttribute('data-proj-filter');
        renderProjects('projects-grid', category);
      });
    });
  }

  // Initial renders
  renderProjects('projects-grid');
  renderProjects('featured-projects-grid');
});
