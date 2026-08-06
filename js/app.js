// Master Showroom Catalog & Interactive Interface Controller
// Manages real-time filtering, instant search analysis, and Supabase cloud data rendering.

let activeFilter = "all";
let activeSearchQuery = "";

document.addEventListener("DOMContentLoaded", async () => {
  // First render initial catalog immediately for instant first paint
  renderShowroom();

  // Then synchronize with Supabase Cloud Postgres Database
  if (typeof syncVehiclesWithSupabase === "function") {
    const status = await syncVehiclesWithSupabase();
    
    // Check if cloud table is connected but empty, then show the Seeder banner
    const seedBanner = document.getElementById("cloud-seed-banner-container");
    if (status && status.isEmpty === true && seedBanner) {
      seedBanner.style.display = "block";
    } else if (status && status.isCloud && !status.isEmpty) {
      if (seedBanner) seedBanner.style.display = "none";
      console.log("🟢 Serving live cloud vehicle catalog.");
      // Re-render showroom with live database records
      renderShowroom();
    }
  }

  // Bind filter button triggers
  const pillButtons = document.querySelectorAll(".pill-btn");
  pillButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      pillButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-filter") || "all";
      renderShowroom();
    });
  });

  // Bind search input triggers
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeSearchQuery = e.target.value.trim();
      renderShowroom();
    });
  }

  // Re-sync comparison counters and badges
  if (window.comparisonEngine) {
    window.comparisonEngine.updateInterface();
  }
});

function renderShowroom() {
  const gridContainer = document.getElementById("vehicle-grid");
  if (!gridContainer) return;

  const matchedVehicles = getFilteredVehicles(activeFilter, activeSearchQuery);

  if (matchedVehicles.length === 0) {
    gridContainer.innerHTML = `
      <div class="empty-state-card">
        <h3 style="color: var(--brand-navy); font-weight: 700; font-size: 1.25rem;">No Matching Models Discovered</h3>
        <p style="color: var(--text-secondary);">We could not find any active specification dossiers matching your search filters.</p>
        <button onclick="window.resetFilters()" class="btn-primary" style="margin-top: 16px; width: auto; padding: 10px 24px;">Clear Active Filters</button>
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = matchedVehicles.map(vehicle => {
    const isSelected = window.comparisonEngine ? window.comparisonEngine.isCompared(vehicle.id) : false;

    return `
      <article class="vehicle-profile-card">
        <a href="details.html?id=${vehicle.id}" class="card-media-box">
          <img src="${vehicle.image}" alt="${vehicle.brand} ${vehicle.model}">
          <span class="fuel-tag">${vehicle.fuel === 'ev' ? 'PURE ELECTRIC' : vehicle.fuel.toUpperCase()}</span>
        </a>

        <div class="card-content-wrap">
          <div class="card-brand-sub">${vehicle.brand}</div>
          <a href="details.html?id=${vehicle.id}" style="text-decoration: none;">
            <h3 class="card-model-title">${vehicle.model}</h3>
          </a>

          <div class="card-price-display">
            <span>${vehicle.priceFormatted}</span>
          </div>

          <div class="card-telemetry-row">
            <span><strong>${vehicle.powerBHP}</strong> BHP</span>
            <span>•</span>
            <span><strong>${vehicle.torqueNM}</strong> Nm Torque</span>
            <span>•</span>
            <span><strong>${vehicle.mileageKM}</strong> ${vehicle.fuel === 'ev' ? 'KM / Charge' : 'KM/L'}</span>
          </div>

          <div class="card-highlights">
            ${(vehicle.keyFeatures || []).slice(0, 2).map(feat => `<span>✓ ${feat}</span>`).join('')}
          </div>

          <div class="card-action-row">
            <a href="details.html?id=${vehicle.id}" class="btn-specs" style="text-align: center; display: inline-block;">
              View Full Specs
            </a>
            <button 
              class="btn-add-compare ${isSelected ? 'active' : ''}" 
              data-id="${vehicle.id}" 
              onclick="window.toggleCompareSelection('${vehicle.id}', this)">
              ${isSelected ? '✓ In Compare' : '+ Add to Compare'}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

window.toggleCompareSelection = function(vehicleId, buttonEl) {
  if (!window.comparisonEngine) return;

  const vehicle = getVehicleById(vehicleId);
  if (!vehicle) return;

  if (window.comparisonEngine.isCompared(vehicleId)) {
    window.comparisonEngine.remove(vehicleId);
    buttonEl.classList.remove("active");
    buttonEl.innerHTML = "+ Add to Compare";
    if (window.showToast) window.showToast(`Removed ${vehicle.model} from comparison Matrix.`);
  } else {
    const success = window.comparisonEngine.add(vehicle);
    if (success) {
      buttonEl.classList.add("active");
      buttonEl.innerHTML = "✓ In Compare";
      if (window.showToast) window.showToast(`Added ${vehicle.model} to side-by-side spec Matrix.`);
    }
  }
};

window.resetFilters = function() {
  activeFilter = "all";
  activeSearchQuery = "";
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";

  const pillButtons = document.querySelectorAll(".pill-btn");
  pillButtons.forEach(b => b.classList.remove("active"));
  if (pillButtons[0]) pillButtons[0].classList.add("active");

  renderShowroom();
};

window.showToast = function(message) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-popup-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast-item";
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(20px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 350);
  }, 3200);
};
