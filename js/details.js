// Vehicle Details & Interactive Engineering Controller
// Powers live EMI engineering calculation, 4-module technical data sheets, and dealership inquiry workflows.

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const vehicleId = params.get('id');
  const container = document.getElementById("details-root");

  if (!container) return;

  if (!vehicleId) {
    showErrorState(container, "No Model Identifier Specified", "Please select a valid vehicle profile from the main showroom catalog.");
    return;
  }

  const vehicle = typeof getVehicleById === 'function' ? getVehicleById(vehicleId) : null;

  if (!vehicle) {
    showErrorState(container, "Specification Profile Not Found", `The requested model identifier '${vehicleId}' does not match active catalog records.`);
    return;
  }

  renderVehicleProfile(container, vehicle);
  initializeEmiCalculator(vehicle);
  initializeInquiryForm(vehicle);
});

function showErrorState(container, title, message) {
  container.innerHTML = `
    <div style="text-align: center; padding: 80px 20px; max-width: 650px; margin: 0 auto; background: #ffffff; border: 1px solid var(--border-medium); border-radius: var(--radius-md);">
      <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--brand-navy); margin-bottom: 12px;">${title}</h2>
      <p style="color: var(--text-secondary); margin-bottom: 24px; font-size: 0.95rem;">${message}</p>
      <a href="index.html" style="background: var(--brand-cobalt); color: #ffffff; padding: 12px 24px; font-weight: 700; border-radius: var(--radius-sm); font-size: 0.9rem; display: inline-block;">Return to Showroom Catalog</a>
    </div>
  `;
}

function renderVehicleProfile(container, v) {
  const specs = v.specs || {};
  const pt = specs.powertrain || {};
  const dim = specs.dimensions || {};
  const brk = specs.brakesAndWheels || {};
  const tech = specs.technologyAndSafety || {};

  const pros = v.pros || ["Validated structural engineering", "Exceptional safety architecture"];
  const cons = v.cons || ["Subjective exterior preferences"];
  
  // Base calculation defaults
  const basePriceLakh = v.priceValue || 20.0;
  const defaultTenureYears = v.defaultLoanYears || 5;
  const defaultRate = v.defaultROI || 9.0;

  container.innerHTML = `
    <div class="breadcrumb">
      <a href="index.html">Showroom Catalog</a> / <a href="index.html#showroom-section">${v.type === 'car' ? 'Passenger SUVs & Cars' : 'Performance Motorcycles'}</a> / <strong style="color: var(--brand-navy);">${v.brand} ${v.model}</strong>
    </div>

    <div class="details-grid">
      <div class="details-media-box">
        <img src="${v.image}" alt="${v.brand} ${v.model} Studio Render">
        <div style="padding: 14px 20px; background: #f8fafc; border-top: 1px solid var(--border-light); display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; color: var(--text-secondary);">
          <span style="font-weight: 600;">Official Concept & Studio Asset</span>
          <span style="color: var(--brand-cobalt); font-weight: 700; text-transform: uppercase;">${v.fuel === 'ev' ? 'Pure Electric EV Architecture' : v.fuel.toUpperCase() + ' Powertrain'}</span>
        </div>
      </div>

      <div class="details-sidebar">
        <div>
          <div class="details-brand-badge">${v.brand} • Authorized Profile</div>
          <h1 class="details-title">${v.model}</h1>
          <p style="color: var(--text-secondary); font-size: 1rem; margin-bottom: 24px; line-height: 1.6;">${v.description}</p>

          <div class="details-price-box">
            <div class="details-price-num">${v.priceFormatted}</div>
            <div class="details-price-label">Ex-Showroom Base Recommended Retail Price</div>
          </div>

          <!-- Quick Spec Highlights -->
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 20px;">
            <div style="background: #f8fafc; border: 1px solid var(--border-light); padding: 12px; border-radius: var(--radius-sm);">
              <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase; display: block;">Maximum Power Output</span>
              <span style="font-size: 1.15rem; font-weight: 800; color: var(--brand-navy); font-family: var(--font-mono);">${v.powerBHP} BHP</span>
            </div>
            <div style="background: #f8fafc; border: 1px solid var(--border-light); padding: 12px; border-radius: var(--radius-sm);">
              <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase; display: block;">Peak Engine Torque</span>
              <span style="font-size: 1.15rem; font-weight: 800; color: var(--brand-navy); font-family: var(--font-mono);">${v.torqueNM} Nm</span>
            </div>
            <div style="background: #f8fafc; border: 1px solid var(--border-light); padding: 12px; border-radius: var(--radius-sm);">
              <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase; display: block;">Certified Economy</span>
              <span style="font-size: 1.15rem; font-weight: 800; color: var(--brand-navy); font-family: var(--font-mono);">${v.mileageKM} ${v.fuel === 'ev' ? 'KM / Charge' : 'KM / Liter'}</span>
            </div>
            <div style="background: #f8fafc; border: 1px solid var(--border-light); padding: 12px; border-radius: var(--radius-sm);">
              <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase; display: block;">Safety Architecture</span>
              <span style="font-size: 1.15rem; font-weight: 800; color: var(--success-green); font-family: var(--font-mono);">${v.safetyStars}-Star Certified</span>
            </div>
          </div>
        </div>

        <div>
          <!-- Interactive Live EMI Calculator Widget -->
          <div class="emi-calculator-widget">
            <div class="widget-header">
              <span>Interactive Financing Customizer</span>
              <span style="font-size: 0.75rem; color: var(--brand-cobalt); font-weight: 700; text-transform: uppercase;">Live Calculation</span>
            </div>
            
            <div class="emi-input-group">
              <label>
                <span>Down Payment Contribution:</span>
                <strong id="down-val-text">20% (₹ ${(basePriceLakh * 0.20).toFixed(2)} L)</strong>
              </label>
              <input type="range" id="emi-down-slider" min="10" max="50" step="5" value="20">
            </div>

            <div class="emi-input-group">
              <label>
                <span>Loan Tenure Period:</span>
                <strong id="tenure-val-text">${defaultTenureYears} Years (${defaultTenureYears * 12} Months)</strong>
              </label>
              <input type="range" id="emi-tenure-slider" min="3" max="7" step="1" value="${defaultTenureYears}">
            </div>

            <div class="emi-input-group">
              <label>
                <span>Bank Interest Rate (P.A.):</span>
                <strong id="roi-val-text">${defaultRate.toFixed(1)}%</strong>
              </label>
              <input type="range" id="emi-roi-slider" min="7.5" max="12.5" step="0.5" value="${defaultRate}">
            </div>

            <div class="emi-estimate-box">
              <div>
                <span style="color: var(--text-muted); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; display: block;">Estimated Monthly EMI</span>
                <span class="emi-price-val" id="emi-output-display">₹ 0 / mo</span>
              </div>
              <span style="font-size: 0.75rem; color: var(--text-secondary); text-align: right; font-weight: 600;">Excludes road tax & insurance premiums</span>
            </div>
          </div>

          <div class="details-actions-row">
            <button class="btn-book-test" onclick="document.getElementById('inquiry-section-target').scrollIntoView({ behavior: 'smooth' });">
              Request Dealership Inquiry
            </button>
            <a href="index.html#compare-section" style="display: flex; align-items: center; justify-content: center; background: var(--bg-subtle); color: var(--brand-navy); border: 1px solid var(--border-medium); padding: 14px 18px; border-radius: var(--radius-sm); font-weight: 700; font-size: 0.92rem;">
              Compare Rivals
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- EXHAUSTIVE 4-MODULE TECHNICAL SPECIFICATIONS SYSTEM -->
    <section class="tech-spec-section">
      <div class="section-heading-row" style="border: none; margin-bottom: 6px; padding: 0;">
        <h3 class="section-title" style="font-size: 1.4rem;">Comprehensive Engineering Specification Dossier</h3>
      </div>
      <p style="color: var(--text-secondary); font-size: 0.98rem;">Verified structural parameters, powertrain tolerances, and component architecture for ${v.brand} ${v.model}.</p>
      
      <div class="spec-modules-grid">
        <!-- Module 1: Powertrain -->
        <div class="spec-module-box">
          <div class="module-header">01. Powertrain & Performance Matrix</div>
          <table class="tech-table">
            <tbody>
              <tr><th>Engine / Motor Unit</th><td>${pt.engine || "Standard Motor Unit"}</td></tr>
              <tr><th>Cylinder & Valve Setup</th><td>${pt.cylinders || "N/A (EV Platform)"}</td></tr>
              <tr><th>Max Horsepower Output</th><td>${pt.power || v.powerBHP + " BHP"}</td></tr>
              <tr><th>Peak Tractive Torque</th><td>${pt.torque || v.torqueNM + " Nm"}</td></tr>
              <tr><th>Transmission Architecture</th><td>${pt.gearbox || v.transmission}</td></tr>
              <tr><th>Drivetrain Layout</th><td>${pt.drivetrain || "Standard Drive"}</td></tr>
              <tr><th>0 - 100 km/h Sprint Time</th><td>${pt.acceleration0to100 || "Standard Acceleration"}</td></tr>
              <tr><th>Top Terminal Speed</th><td>${pt.topSpeed || v.topSpeedKMH + " km/h"}</td></tr>
              <tr><th>Emission / Compliance Norm</th><td>${pt.emissionNorm || "BS6 Phase 2 Certified"}</td></tr>
            </tbody>
          </table>
        </div>

        <!-- Module 2: Dimensions -->
        <div class="spec-module-box">
          <div class="module-header">02. Dimensions, Chassis Geometry & Weight</div>
          <table class="tech-table">
            <tbody>
              <tr><th>Overall Length</th><td>${dim.length || "Standard Proportion"}</td></tr>
              <tr><th>Overall Width</th><td>${dim.width || "Standard Width"}</td></tr>
              <tr><th>Overall Height</th><td>${dim.height || "Standard Height"}</td></tr>
              <tr><th>Wheelbase Geometry</th><td>${dim.wheelbase || "Optimized Wheelbase"}</td></tr>
              <tr><th>Ground Clearance</th><td>${dim.groundClearance || "Standard Clearance"}</td></tr>
              <tr><th>Kerb Operational Mass</th><td>${dim.kerbWeight || "Optimized Weight"}</td></tr>
              <tr><th>Minimum Turning Radius</th><td>${dim.turningRadius || "Standard Turning Radius"}</td></tr>
              <tr><th>Front Suspension Hardware</th><td>${dim.frontSuspension || "Independent Suspension"}</td></tr>
              <tr><th>Rear Suspension Hardware</th><td>${dim.rearSuspension || "Multi-Link Suspension"}</td></tr>
              <tr><th>Fuel / Battery Capacity</th><td>${dim.fuelCapacity || "Standard Capacity"}</td></tr>
            </tbody>
          </table>
        </div>

        <!-- Module 3: Brakes & Wheels -->
        <div class="spec-module-box">
          <div class="module-header">03. Brakes, Wheels & Tyre Assembly</div>
          <table class="tech-table">
            <tbody>
              <tr><th>Front Brake Hardware</th><td>${brk.frontBrake || "Ventilated Disc Assembly"}</td></tr>
              <tr><th>Rear Brake Hardware</th><td>${brk.rearBrake || "Disc Assembly"}</td></tr>
              <tr><th>Tyre Dimensions & Profiles</th><td>${brk.tyreSize || "Standard Radial Configuration"}</td></tr>
              <tr><th>Wheel Material & Design</th><td>${brk.wheelType || "Alloy Wheels"}</td></tr>
              <tr><th>Spare Wheel Specification</th><td>${brk.spareWheel || "Standard Spare Configuration"}</td></tr>
              <tr><th>Anti-Lock Braking Architecture</th><td>${brk.absSystem || "Dual-Channel ABS Standard"}</td></tr>
            </tbody>
          </table>
        </div>

        <!-- Module 4: Technology & Safety -->
        <div class="spec-module-box">
          <div class="module-header">04. Advanced Safety & Telematics Suite</div>
          <table class="tech-table">
            <tbody>
              <tr><th>NCAP Crash Test Rating</th><td>${tech.ncapRating || "5-Star Structural Standard"}</td></tr>
              <tr><th>Airbag Deployment System</th><td>${tech.airbagCount || "Full Surrender Airbag Protection"}</td></tr>
              <tr><th>Active ADAS Safety Functions</th><td>${tech.adasFunctions || "Electronic Stability & Traction Control"}</td></tr>
              <tr><th>Cockpit Infotainment Display</th><td>${tech.infotainment || "High-Definition Digital Dash"}</td></tr>
              <tr><th>Acoustic & Audio Architecture</th><td>${tech.audioArchitecture || "Premium Multi-Speaker Audio Suite"}</td></tr>
              <tr><th>Telematics & Cloud Connectivity</th><td>${tech.connectivity || "24/7 Cloud Connected App Suite"}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- INTERACTIVE DEALERSHIP INQUIRY PROTOCOL -->
    <section class="dealership-inquiry-box" id="inquiry-section-target">
      <h3>Schedule Authorized VIP Consultation & Test Drive</h3>
      <p style="color: var(--text-secondary); font-size: 0.95rem;">Submit your credentials below. An executive product specialist from an authorized ${v.brand} showroom in your vicinity will contact you within 2 hours.</p>
      
      <form id="dealership-booking-form" class="inquiry-form-grid">
        <input type="text" placeholder="Full Name (e.g., Vikram Sharma)" required class="inquiry-input" id="inq-name">
        <input type="tel" placeholder="Mobile Contact (10 Digits)" required class="inquiry-input" pattern="[0-9]{10}" title="Please enter a valid 10-digit mobile number" id="inq-phone">
        <select required class="inquiry-input" id="inq-city">
          <option value="">Select Preferred City Showroom...</option>
          <option value="New Delhi & NCR">New Delhi & NCR</option>
          <option value="Mumbai Metro">Mumbai Metro</option>
          <option value="Bengaluru Urban">Bengaluru Urban</option>
          <option value="Chennai Hub">Chennai Hub</option>
          <option value="Pune Engineering Circle">Pune Engineering Circle</option>
          <option value="Hyderabad Platinum">Hyderabad Platinum</option>
          <option value="Kolkata Central">Kolkata Central</option>
        </select>
        <button type="submit" class="btn-submit-inquiry">Confirm Test-Drive Booking</button>
      </form>
    </section>

    <!-- ARCHITECTURAL ADVANTAGES & CONSIDERATIONS -->
    <section class="pros-cons-grid">
      <div class="pros-box">
        <h4>Key Architectural Advantages</h4>
        <ul class="review-list">
          ${pros.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>
      <div class="cons-box">
        <h4>Considerations Before Purchase</h4>
        <ul class="review-list">
          ${cons.map(c => `<li>${c}</li>`).join('')}
        </ul>
      </div>
    </section>
  `;
}

function initializeEmiCalculator(vehicle) {
  const downSlider = document.getElementById("emi-down-slider");
  const tenureSlider = document.getElementById("emi-tenure-slider");
  const roiSlider = document.getElementById("emi-roi-slider");
  
  const downText = document.getElementById("down-val-text");
  const tenureText = document.getElementById("tenure-val-text");
  const roiText = document.getElementById("roi-val-text");
  const emiOutput = document.getElementById("emi-output-display");

  if (!downSlider || !tenureSlider || !roiSlider || !emiOutput) return;

  const basePriceLakh = vehicle.priceValue || 20.0;
  const totalPriceRupees = basePriceLakh * 100000;

  function recalculateEmi() {
    const downPercent = parseFloat(downSlider.value);
    const tenureYears = parseInt(tenureSlider.value);
    const roiAnnual = parseFloat(roiSlider.value);

    const downPaymentRupees = totalPriceRupees * (downPercent / 100);
    const loanAmount = totalPriceRupees - downPaymentRupees;
    const months = tenureYears * 12;
    const monthlyRate = (roiAnnual / 12) / 100;

    let monthlyEmi = 0;
    if (monthlyRate > 0) {
      monthlyEmi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    } else {
      monthlyEmi = loanAmount / months;
    }

    downText.textContent = `${downPercent}% (₹ ${(basePriceLakh * (downPercent / 100)).toFixed(2)} L)`;
    tenureText.textContent = `${tenureYears} Years (${months} Months)`;
    roiText.textContent = `${roiAnnual.toFixed(1)}%`;
    
    emiOutput.textContent = `₹ ${Math.round(monthlyEmi).toLocaleString('en-IN')} / mo`;
  }

  downSlider.addEventListener("input", recalculateEmi);
  tenureSlider.addEventListener("input", recalculateEmi);
  roiSlider.addEventListener("input", recalculateEmi);

  // Initial calculation
  recalculateEmi();
}

function initializeInquiryForm(vehicle) {
  const form = document.getElementById("dealership-booking-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("inq-name").value;
    const phone = document.getElementById("inq-phone").value;
    const city = document.getElementById("inq-city").value;
    
    const bookingCode = "VIP-" + Math.floor(100000 + Math.random() * 900000);
    
    alert(`🎉 VIP Consultation Booking Confirmed!\n\nDear ${name},\nYour exclusive inquiry for the ${vehicle.brand} ${vehicle.model} at our ${city} showcase center has been logged.\n\nBooking Reference: ${bookingCode}\nA designated showroom vice-president will call you at +91-${phone} shortly.`);
    
    if (window.showToast) {
      window.showToast(`Booking ${bookingCode} Registered for ${vehicle.model}!`);
    }

    form.reset();
  });
}

// Toast support on details page if triggered
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
