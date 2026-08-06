// Master Showroom Catalog & Interactive Interface Controller
// Manages real-time filtering, instant search analysis, and Supabase cloud data rendering with executive styling.

let activeFilter = "all";
let activeSearchQuery = "";

document.addEventListener("DOMContentLoaded", async () => {
  // First render initial catalog immediately for instant first paint
  renderShowroom();

  // Then synchronize with Supabase Cloud Postgres Database
  if (typeof syncVehiclesWithSupabase === "function") {
    const status = await syncVehiclesWithSupabase();
    
    // Check if cloud table is connected but empty (or only had old dummy records), then show the Seeder banner
    const seedBanner = document.getElementById("cloud-seed-banner-container");
    if (status && status.isEmpty === true && seedBanner) {
      seedBanner.style.display = "block";
    } else if (status && status.isCloud && !status.isEmpty) {
      if (seedBanner) seedBanner.style.display = "none";
      console.log("🟢 Serving live cloud vehicle catalog.");
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
      <div class="empty-state-card" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-md);">
        <h3 style="color: var(--brand-navy); font-weight: 700; font-size: 1.35rem; margin-bottom: 8px;">No Matching Models Discovered</h3>
        <p style="color: var(--text-secondary); margin-bottom: 20px;">We could not find any active specification dossiers matching your search filters.</p>
        <button onclick="window.resetFilters()" class="pill-btn active" style="background: var(--brand-cobalt); color: #ffffff; padding: 10px 24px;">Clear Active Filters</button>
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = matchedVehicles.map(vehicle => {
    const isSelected = window.comparisonEngine ? window.comparisonEngine.isCompared(vehicle.id) : false;

    return `
      <article class="catalog-card">
        <div class="card-media">
          <a href="details.html?id=${vehicle.id}">
            <img src="${vehicle.image}" alt="${vehicle.brand} ${vehicle.model} Studio Render" onerror="this.src='./assets/futuristic_luxury_suv_1785996964228.png'">
          </a>
          <span class="media-tag">${vehicle.fuel === 'ev' ? 'PURE ELECTRIC' : vehicle.fuel.toUpperCase()}</span>
        </div>

        <div class="card-body">
          <span class="brand-label">${vehicle.brand}</span>
          <a href="details.html?id=${vehicle.id}" style="text-decoration: none;">
            <h3 class="model-name">${vehicle.model}</h3>
          </a>

          <div class="price-row">
            <span class="price-main">${vehicle.priceFormatted}</span>
            <span class="price-sub">Ex-Showroom Base</span>
          </div>

          <div class="tabular-specs">
            <div class="spec-cell">
              <span class="cell-label">Power</span>
              <div class="cell-val">${vehicle.powerBHP} BHP</div>
            </div>
            <div class="spec-cell">
              <span class="cell-label">Torque</span>
              <div class="cell-val">${vehicle.torqueNM} Nm</div>
            </div>
            <div class="spec-cell">
              <span class="cell-label">Economy</span>
              <div class="cell-val">${vehicle.mileageKM} ${vehicle.fuel === 'ev' ? 'KM' : 'KM/L'}</div>
            </div>
          </div>

          <div class="card-footer-btns">
            <button 
              class="btn-toggle-compare ${isSelected ? 'is-selected' : ''}" 
              data-id="${vehicle.id}" 
              onclick="window.toggleCompareSelection('${vehicle.id}', this)">
              ${isSelected ? '✓ In Matrix' : '+ Compare'}
            </button>
            <a href="details.html?id=${vehicle.id}" class="btn-view-page">
              Spec Dossier
            </a>
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
    buttonEl.classList.remove("is-selected");
    buttonEl.innerHTML = "+ Compare";
    if (window.showToast) window.showToast(`Removed ${vehicle.model} from comparison Matrix.`);
  } else {
    const success = window.comparisonEngine.add(vehicle);
    if (success) {
      buttonEl.classList.add("is-selected");
      buttonEl.innerHTML = "✓ In Matrix";
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
