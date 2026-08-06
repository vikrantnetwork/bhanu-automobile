// Master Showroom Executive Controller
// Coordinates index rendering, search filtration, and direct links to vehicle specifications.

let activeFilter = "all";
let currentSearch = "";

function renderShowroom() {
  const grid = document.getElementById("vehicle-grid");
  if (!grid) return;

  const results = getFilteredVehicles(activeFilter, currentSearch);

  if (results.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px; background: #ffffff; border: 1px dashed var(--border-dark); border-radius: var(--radius-md);">
        <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--brand-navy); margin-bottom: 8px;">No Vehicle Profiles Found Matching Criteria</h3>
        <p style="color: var(--text-secondary); font-size: 0.95rem;">Modify your filter categories or adjust search keywords in the control panel above.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = results.map(vehicle => {
    const isAdded = typeof compareEngine !== 'undefined' ? compareEngine.isSelected(vehicle.id) : false;
    let typeLabel = vehicle.fuel === 'ev' ? 'Electric Powertrain' : vehicle.type === 'car' ? 'Passenger SUV / Car' : 'Motorcycle Architecture';
    
    return `
      <div class="catalog-card" id="card-${vehicle.id}">
        <div class="card-media">
          <span class="media-tag">${typeLabel}</span>
          <img src="${vehicle.image}" alt="${vehicle.brand} ${vehicle.model} Render">
        </div>
        
        <div class="card-body">
          <span class="brand-label">${vehicle.brand}</span>
          <h3 class="model-name">${vehicle.model}</h3>
          
          <div class="price-row">
            <span class="price-main">${vehicle.priceFormatted}</span>
            <span class="price-sub">Ex-Showroom Price</span>
          </div>

          <div class="tabular-specs">
            <div class="spec-cell">
              <span class="cell-label">Max Power</span>
              <span class="cell-val">${vehicle.powerBHP} BHP</span>
            </div>
            <div class="spec-cell">
              <span class="cell-label">Peak Torque</span>
              <span class="cell-val">${vehicle.torqueNM} Nm</span>
            </div>
            <div class="spec-cell">
              <span class="cell-label">Efficiency</span>
              <span class="cell-val">${vehicle.mileageKM} ${vehicle.fuel === 'ev' ? 'KM / Chg' : 'KM / L'}</span>
            </div>
          </div>

          <div class="card-footer-btns">
            <button class="btn-toggle-compare ${isAdded ? 'is-selected' : ''}" onclick="window.appToggleCompare('${vehicle.id}')">
              ${isAdded ? 'In Compare Matrix' : 'Add to Compare'}
            </button>
            <a href="details.html?id=${vehicle.id}" class="btn-view-page">
              View Profile & Specs
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.appToggleCompare = function(id) {
  if (typeof compareEngine !== 'undefined') {
    compareEngine.toggleVehicle(id);
    renderShowroom(); 
    compareEngine.render();
  }
};

window.appRemoveCompare = function(id) {
  if (typeof compareEngine !== 'undefined') {
    compareEngine.toggleVehicle(id);
    renderShowroom();
    compareEngine.render();
  }
};

window.showToast = function(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

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

document.addEventListener("DOMContentLoaded", () => {
  renderShowroom();
  if (typeof compareEngine !== 'undefined') {
    compareEngine.render();
  }

  const filterBtns = document.querySelectorAll(".pill-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      filterBtns.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      activeFilter = e.target.getAttribute("data-filter");
      renderShowroom();
    });
  });

  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderShowroom();
    });
  }
});
