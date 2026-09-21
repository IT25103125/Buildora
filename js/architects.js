/**
 * Buildora Architects Dataset & Directory Engine
 */

const ARCHITECTS_DATA = [
  {
    id: 'arch-1',
    name: 'Ar. Dinuka Silva',
    title: 'Principal Architect & Sustainable Spatial Planner',
    firm: 'Silva Studio Atelier',
    specialty: 'Tropical Modernism',
    location: 'Colombo & Galle Coast',
    experience: '16 Years',
    completedBuilds: 42,
    rating: 4.9,
    reviewsCount: 38,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    bio: 'Specializing in open-air courtyards, rain screens, and seamless indoor-outdoor transitions inspired by Geoffrey Bawa and Japanese Zen architecture. Over 40 luxury tropical residences built across South Asia.',
    tags: ['Tropical', 'Courtyards', 'Passive Cooling', 'Timber & Concrete'],
    typicalBudget: '$150k - $450k',
    featuredProject: 'The Mirissa Cliff Villa'
  },
  {
    id: 'arch-2',
    name: 'Ar. Elena Vance',
    title: 'Lead Architect, Minimalist & Brutalist Structures',
    firm: 'Vance & Partners Arch',
    specialty: 'Modern Minimalist',
    location: 'Kandy & Nuwara Eliya',
    experience: '12 Years',
    completedBuilds: 29,
    rating: 5.0,
    reviewsCount: 26,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    bio: 'Pioneering exposed board-formed concrete, floor-to-ceiling panoramic glass, and monolithic volumes. Winner of multiple regional design citations.',
    tags: ['Board-formed Concrete', 'Cantilever', 'Minimalist', 'Smart Glass'],
    typicalBudget: '$200k - $600k',
    featuredProject: 'The Monolith Residence'
  },
  {
    id: 'arch-3',
    name: 'Ar. Tariq Mansoor',
    title: 'Biophilic Architect & Net-Zero Innovator',
    firm: 'Verdant Earth Architects',
    specialty: 'Eco Biophilic',
    location: 'Kurunegala & Dambulla',
    experience: '14 Years',
    completedBuilds: 35,
    rating: 4.8,
    reviewsCount: 31,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    bio: 'Dedicated to living green roofs, rammed earth walls, solar thermal integration, and natural air conduits that slash home energy footprints by 65%.',
    tags: ['Living Roofs', 'Solar Integration', 'Rammed Earth', 'Net-Zero'],
    typicalBudget: '$120k - $380k',
    featuredProject: 'Eden Forest Sanctuary'
  },
  {
    id: 'arch-4',
    name: 'Ar. Maya Fernando',
    title: 'Luxury Villa Designer & Master Planner',
    firm: 'Studio Apex Luxury',
    specialty: 'Luxury Villa',
    location: 'Colombo 07 & Mount Lavinia',
    experience: '19 Years',
    completedBuilds: 58,
    rating: 4.9,
    reviewsCount: 52,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    bio: 'Creating grand residential estates, infinity pool cantilevered terraces, and bespoke luxury compounds with private wellness spas and subterranean garages.',
    tags: ['Infinity Pools', 'Private Spas', 'High-Ceiling Atriums', 'Italian Marble'],
    typicalBudget: '$300k - $1.2M',
    featuredProject: 'Ocean Crest Villa'
  },
  {
    id: 'arch-5',
    name: 'Ar. Julian Ward',
    title: 'Contemporary Classical & Adaptive Reuse Expert',
    firm: 'Heritage Neo Design Lab',
    specialty: 'Classical Contemporary',
    location: 'Galle Fort & Negombo',
    experience: '15 Years',
    completedBuilds: 31,
    rating: 4.9,
    reviewsCount: 24,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    bio: 'Blending colonial Dutch/Portuguese veranda heritage with sleek brass fixtures, acoustic timber louvering, and high-tech climate resilience.',
    tags: ['Dutch Verandas', 'Terra Cotta', 'Acoustic Louvers', 'Restoration'],
    typicalBudget: '$180k - $500k',
    featuredProject: 'The Dutch Veranda Manor'
  },
  {
    id: 'arch-6',
    name: 'Ar. Senaka Perera',
    title: 'Compact Urban & Smart Micro-Housing Architect',
    firm: 'Urban Loft Collective',
    specialty: 'Modern Minimalist',
    location: 'Colombo Suburbs & Rajagiriya',
    experience: '9 Years',
    completedBuilds: 22,
    rating: 4.7,
    reviewsCount: 19,
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
    bio: 'Turning tight 6-10 perch urban blocks into multi-level luminous sanctuaries with floating light wells, mezzanine libraries, and integrated solar microgrids.',
    tags: ['Small Plots', 'Light Wells', 'Vertical Gardens', 'Double Heights'],
    typicalBudget: '$90k - $240k',
    featuredProject: 'The Sky-Well Urban Loft'
  }
];

// Render Architects to container
function renderArchitects(containerId = 'architects-grid', filterSpecialty = 'All', searchQuery = '') {
  const container = document.getElementById(containerId);
  if (!container) return;

  let filtered = ARCHITECTS_DATA.filter(arch => {
    const matchesSpecialty = filterSpecialty === 'All' || arch.specialty.toLowerCase() === filterSpecialty.toLowerCase();
    const matchesSearch = !searchQuery || 
      arch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      arch.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      arch.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      arch.bio.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSpecialty && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-16 h-16 mx-auto mb-4 text-gold/40">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <h3 class="text-xl font-serif text-white mb-2">No Architects Found</h3>
        <p class="text-gray-400 text-sm max-w-md mx-auto">No architects currently matched your filter criteria. Try selecting "All" or typing a different style/location.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(arch => `
    <div class="glass-panel rounded-2xl overflow-hidden hover-lift border border-gold/15 flex flex-col justify-between group">
      <div>
        <!-- Cover & Badge -->
        <div class="relative h-48 overflow-hidden img-zoom-container">
          <img src="${arch.coverImage}" alt="${arch.featuredProject}" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
          
          <div class="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-xs text-gold border border-gold/30 flex items-center gap-1.5">
            <svg class="w-3 h-3 text-emerald-400 fill-emerald-400" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            Buildora Verified
          </div>

          <div class="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-semibold text-white flex items-center gap-1">
            <span class="text-amber-400">★</span> ${arch.rating} <span class="text-gray-400 font-normal">(${arch.reviewsCount})</span>
          </div>

          <div class="absolute -bottom-6 left-5 flex items-end">
            <div class="w-14 h-14 rounded-xl border-2 border-gold overflow-hidden bg-gray-800 shadow-xl">
              <img src="${arch.avatar}" alt="${arch.name}" class="w-full h-full object-cover">
            </div>
          </div>
        </div>

        <!-- Details -->
        <div class="pt-8 px-5 pb-4">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-lg font-bold text-white group-hover:text-gold transition-colors">${arch.name}</h3>
              <p class="text-xs text-gold/90 font-medium">${arch.firm}</p>
            </div>
          </div>

          <p class="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
            ${arch.bio}
          </p>

          <!-- Key Metrics -->
          <div class="grid grid-cols-2 gap-2 my-4 py-2.5 px-3 bg-black/30 rounded-xl border border-white/5 text-xs">
            <div>
              <span class="text-gray-400 block text-[11px]">Experience</span>
              <span class="font-semibold text-gray-200">${arch.experience} (${arch.completedBuilds} Builds)</span>
            </div>
            <div>
              <span class="text-gray-400 block text-[11px]">Location</span>
              <span class="font-semibold text-gray-200">${arch.location}</span>
            </div>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5 mb-2">
            ${arch.tags.map(t => `<span class="px-2 py-0.5 bg-gold/10 text-gold text-[10px] rounded-md border border-gold/20">${t}</span>`).join('')}
          </div>
        </div>
      </div>

      <!-- Action Footer -->
      <div class="px-5 pb-5 pt-2 border-t border-white/5 flex items-center justify-between gap-3">
        <div class="text-[11px]">
          <span class="text-gray-400 block">Typical Range</span>
          <span class="font-medium text-white">${arch.typicalBudget}</span>
        </div>
        <button onclick="openConsultationModal('${arch.name}')" class="btn-gold px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md">
          <span>Discuss Concept</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>
      </div>
    </div>
  `).join('');
}

// Attach Search and Filter Listeners on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('architect-search');
  const filterTabs = document.querySelectorAll('[data-arch-filter]');

  let currentFilter = 'All';
  let currentSearch = '';

  if (filterTabs.length) {
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabs.forEach(t => {
          t.classList.remove('bg-gold', 'text-black', 'font-semibold');
          t.classList.add('bg-gray-800/60', 'text-gray-300');
        });
        tab.classList.add('bg-gold', 'text-black', 'font-semibold');
        tab.classList.remove('bg-gray-800/60', 'text-gray-300');

        currentFilter = tab.getAttribute('data-arch-filter');
        renderArchitects('architects-grid', currentFilter, currentSearch);
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      renderArchitects('architects-grid', currentFilter, currentSearch);
    });
  }

  // Initial render if grid container exists
  renderArchitects('architects-grid');
  renderArchitects('featured-architects-grid');
});
