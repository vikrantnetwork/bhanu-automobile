// Executive Comparison Engine
// Computes side-by-side engineering specifications in professional light theme styling.

class ComparisonEngine {
  constructor() {
    this.selectedIds = [];
    this.maxItems = 3;
  }

  toggleVehicle(id) {
    const index = this.selectedIds.indexOf(id);
    if (index === -1) {
      if (this.selectedIds.length >= this.maxItems) {
        if (window.showToast) window.showToast("Notice: Maximum limit of 3 vehicles reached in comparison matrix.");
        return false;
      }
      this.selectedIds.push(id);
      if (window.showToast) window.showToast("Model added to specification comparison matrix.");
      return true;
    } else {
      this.selectedIds.splice(index, 1);
      if (window.showToast) window.showToast("Model removed from comparison matrix.");
      return false;
    }
  }

  isSelected(id) {
    return this.selectedIds.includes(id);
  }

  clearAll() {
    this.selectedIds = [];
    this.render();
    if (typeof renderShowroom === 'function') renderShowroom();
  }

  render() {
    const container = document.getElementById("compare-table-wrapper");
    const analysisContainer = document.getElementById("editorial-analysis-content");
    const badgeCount = document.getElementById("compare-count-val");

    if (badgeCount) {
      badgeCount.textContent = this.selectedIds.length;
    }

    if (!container) return;

    if (this.selectedIds.length === 0) {
      container.innerHTML = `
        <div style="padding: 60px 20px; text-align: center; background: #ffffff;">
          <h3 style="color: var(--brand-navy); font-size: 1.3rem; font-weight: 700; margin-bottom: 8px;">No Models Active in Comparison Matrix</h3>
          <p style="color: var(--text-secondary); max-width: 500px; margin: 0 auto;">Select "Add to Compare" on any model in the catalog above to evaluate side-by-side technical specification differences.</p>
        </div>
      `;
      if (analysisContainer) analysisContainer.style.display = 'none';
      return;
    }

    const items = this.selectedIds.map(id => getVehicleById(id)).filter(Boolean);

    let maxPower = Math.max(...items.map(i => i.powerBHP));
    let maxTorque = Math.max(...items.map(i => i.torqueNM));
    let maxMileage = Math.max(...items.map(i => i.mileageKM));
    let minPrice = Math.min(...items.map(i => i.priceValue));
    let maxSafety = Math.max(...items.map(i => i.safetyStars));

    const canHighlight = items.length > 1;

    let tableHTML = `
      <table class="professional-compare-table">
        <thead>
          <tr>
            <th>Technical Parameter</th>
            ${items.map(item => `
              <th>
                <div style="font-size: 0.75rem; color: var(--brand-cobalt); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">${item.brand}</div>
                <div style="font-size: 1.25rem; font-weight: 800; color: var(--brand-navy); margin: 4px 0 14px;">${item.model}</div>
                <img src="${item.image}" alt="${item.model}" style="width: 100%; height: 140px; object-fit: cover; border-radius: var(--radius-sm); border: 1px solid var(--border-light); margin-bottom: 14px;">
                <div style="display: flex; gap: 8px; justify-content: center;">
                  <a href="details.html?id=${item.id}" style="background: var(--brand-cobalt); color: #fff; padding: 6px 14px; border-radius: var(--radius-sm); font-size: 0.8rem; font-weight: 600;">Profile & Specs</a>
                  <button onclick="window.appRemoveCompare('${item.id}')" style="background: var(--bg-subtle); color: var(--text-secondary); border: 1px solid var(--border-medium); padding: 6px 14px; border-radius: var(--radius-sm); cursor: pointer; font-size: 0.8rem; font-weight: 600;">Remove</button>
                </div>
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ex-Showroom Price</td>
            ${items.map(item => `
              <td class="${canHighlight && item.priceValue === minPrice ? 'winner-spec' : ''}">
                <div style="font-size: 1.15rem; font-weight: 800; color: var(--brand-navy); font-family: var(--font-mono);">${item.priceFormatted}</div>
                ${canHighlight && item.priceValue === minPrice ? '<div class="winner-tag">Lowest Expenditure</div>' : ''}
              </td>
            `).join('')}
          </tr>
          <tr>
            <td>Powertrain Maximum Output</td>
            ${items.map(item => `
              <td class="${canHighlight && item.powerBHP === maxPower ? 'winner-spec' : ''}">
                <div style="font-size: 1.15rem; font-weight: 800; color: var(--brand-navy); font-family: var(--font-mono);">${item.powerBHP} BHP</div>
                ${canHighlight && item.powerBHP === maxPower ? '<div class="winner-tag">Highest Horsepower</div>' : ''}
              </td>
            `).join('')}
          </tr>
          <tr>
            <td>Peak Engine Torque</td>
            ${items.map(item => `
              <td class="${canHighlight && item.torqueNM === maxTorque ? 'winner-spec' : ''}">
                <div style="font-size: 1.15rem; font-weight: 800; color: var(--brand-navy); font-family: var(--font-mono);">${item.torqueNM} Nm</div>
                ${canHighlight && item.torqueNM === maxTorque ? '<div class="winner-tag">Superior Torque</div>' : ''}
              </td>
            `).join('')}
          </tr>
          <tr>
            <td>Certified Efficiency / Range</td>
            ${items.map(item => `
              <td class="${canHighlight && item.mileageKM === maxMileage ? 'winner-spec' : ''}">
                <div style="font-size: 1.15rem; font-weight: 700; color: var(--brand-navy); font-family: var(--font-mono);">${item.mileageKM} ${item.fuel === 'ev' ? 'KM / Charge' : 'KM / Liter'}</div>
                ${canHighlight && item.mileageKM === maxMileage ? '<div class="winner-tag">Maximum Range</div>' : ''}
              </td>
            `).join('')}
          </tr>
          <tr>
            <td>Transmission & Drivetrain</td>
            ${items.map(item => `<td style="font-weight: 600; color: var(--brand-navy);">${item.transmission}</td>`).join('')}
          </tr>
          <tr>
            <td>Safety Architecture Score</td>
            ${items.map(item => `
              <td class="${canHighlight && item.safetyStars === maxSafety ? 'winner-spec' : ''}">
                <div style="font-weight: 800; font-size: 1.1rem; color: var(--brand-navy); font-family: var(--font-mono);">${item.safetyStars} / 5 Stars</div>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Standard NCAP Rating</span>
              </td>
            `).join('')}
          </tr>
          <tr>
            <td>Key Architectural Features</td>
            ${items.map(item => `
              <td style="text-align: left; vertical-align: top; background: #ffffff;">
                <ul style="padding-left: 14px; font-size: 0.9rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 8px; list-style: none;">
                  ${item.keyFeatures.map(f => `<li><span style="color: var(--brand-cobalt); font-weight: bold; margin-right: 6px;">•</span> ${f}</li>`).join('')}
                </ul>
              </td>
            `).join('')}
          </tr>
        </tbody>
      </table>
    `;

    container.innerHTML = tableHTML;

    if (analysisContainer && items.length >= 2) {
      analysisContainer.style.display = 'block';
      const bestPowerItem = items.find(i => i.powerBHP === maxPower);
      const bestValueItem = items.find(i => i.priceValue === minPrice);

      let analysisSummary = `
        <div style="background: #ffffff; border: 1px solid var(--border-light); border-left: 5px solid var(--brand-cobalt); padding: 26px; border-radius: var(--radius-md); margin-top: 28px; box-shadow: var(--shadow-xs);">
          <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--brand-navy); margin-bottom: 12px;">Editorial Comparative Assessment</h4>
          <p style="color: var(--text-secondary); line-height: 1.7; font-size: 0.96rem;">
            <strong style="color: var(--brand-navy);">Performance Benchmark:</strong> In raw tractive output and high-speed highway composure, the <strong style="color: var(--brand-cobalt);">${bestPowerItem.brand} ${bestPowerItem.model}</strong> establishes superiority within this group, generating <strong>${bestPowerItem.powerBHP} BHP</strong> accompanied by <strong>${bestPowerItem.torqueNM} Nm of torque</strong>.
            <br><br>
            <strong style="color: var(--brand-navy);">Financial & Efficiency Benchmark:</strong> When evaluating expenditure against utility, the <strong style="color: var(--brand-cobalt);">${bestValueItem.brand} ${bestValueItem.model}</strong> represents optimized value at <strong>${bestValueItem.priceFormatted}</strong> while delivering a certified operational endurance of <strong>${bestValueItem.mileageKM} ${bestValueItem.fuel === 'ev' ? 'KM/Charge' : 'KM/L'}</strong>.
          </p>
        </div>
      `;
      
      analysisContainer.innerHTML = analysisSummary;
    } else if (analysisContainer) {
      analysisContainer.style.display = 'none';
      analysisContainer.innerHTML = '';
    }
  }
}

const compareEngine = new ComparisonEngine();
