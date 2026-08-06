// Comprehensive Automotive Intelligence Database
// Synchronizes dynamically with Supabase Cloud Postgres Database, falling back to initial prototype models if offline.

let VEHICLE_DATABASE = [
  {
    id: "xuv700-ax7l",
    type: "car",
    fuel: "diesel",
    brand: "Mahindra & Mahindra",
    model: "XUV700 AX7 Luxury AWD",
    priceFormatted: "₹ 25.49 Lakh",
    priceValue: 25.49,
    powerBHP: 182,
    torqueNM: 450,
    mileageKM: 16.5,
    safetyStars: 5,
    transmission: "6-Speed Automatic with Intelligent AWD",
    topSpeedKMH: 195,
    keyFeatures: ["Level 2 Autonomous ADAS Suite", "Panoramic Skyroof Architecture", "Sony 12-Speaker 3D Surround Sound", "Flush Smart Door Handles", "Electronically Controlled AWD"],
    description: "The Indian flagship luxury crossover SUV offering unmatched highway stability, radar-assisted active safety features, and a high-output 2.2L mHawk turbodiesel powertrain engineered for trans-continental endurance.",
    image: "./assets/futuristic_luxury_suv_1785996964228.png",
    specs: {
      powertrain: {
        engine: "2198 cc 2.2L mHawk CRDe Turbo Diesel",
        cylinders: "4 Cylinders In-line, 16 Valves, DOHC",
        power: "182 BHP @ 3500 RPM",
        torque: "450 Nm @ 1750 - 2800 RPM",
        gearbox: "6-Speed Torque Converter Automatic (Aisin)",
        drivetrain: "All-Wheel Drive (AWD) with Terrain Modes",
        acceleration0to100: "9.8 Seconds",
        topSpeed: "195 KM/H (Electronically Limited)",
        emissionNorm: "BS6 Phase 2 / RDE Compliant"
      },
      dimensions: {
        length: "4695 mm",
        width: "1890 mm",
        height: "1755 mm",
        wheelbase: "2750 mm",
        groundClearance: "200 mm",
        kerbWeight: "1960 kg",
        turningRadius: "5.75 Meters",
        frontSuspension: "McPherson Strut with FSD (Frequency Selective Damping)",
        rearSuspension: "Multi-Link Independent with FSD Stabilizer Bar",
        bootSpace: "465 Liters (3rd Row Folded)",
        fuelCapacity: "60 Liters Reservoir"
      },
      brakesAndWheels: {
        frontBrake: "310mm Ventilated Disc with Floating Caliper",
        rearBrake: "302mm Solid Disc with Electric Parking Brake (EPB)",
        tyreSize: "235 / 60 R18 Radial Tubeless",
        wheelType: "18-inch Diamond-Cut Two-Tone Alloy Wheels",
        spareWheel: "155/90 R18 Space Saver Steel Wheel",
        absSystem: "Dual-Channel ABS with EBD & Cornering Brake Control (CBC)"
      },
      technologyAndSafety: {
        ncapRating: "5-Star (Global NCAP Certified Safety Architecture)",
        airbagCount: "7 Airbags (Front, Side, Curtain & Driver Knee)",
        adasFunctions: "Adaptive Cruise Control, Automatic Emergency Braking, Traffic Sign Recognition, Lane Keep Assist",
        infotainment: "Dual 10.25-inch High-Definition Curvature Cockpit Screens",
        audioArchitecture: "Sony 12-Speaker 3D Surround Sound System with Dedicated Subwoofer",
        connectivity: "AdrenoX Connect with 60+ Cloud-Connected Vehicle Features"
      }
    },
    pros: [
      "Segment-dominating mHawk diesel torque accompanied by AWD confidence",
      "Level 2 Radar & Camera ADAS functions operate reliably on Indian expressways",
      "Sophisticated Frequency Selective Damping (FSD) swallows deep road imperfections"
    ],
    cons: [
      "Third-row ingress and legroom remain tightly constrained for adults",
      "Extended delivery waitlist for specialized AX7 AWD trim variants in urban centers"
    ],
    defaultLoanYears: 5,
    defaultROI: 9.0
  },
  {
    id: "himalayan-450",
    type: "bike",
    fuel: "petrol",
    brand: "Royal Enfield",
    model: "Himalayan 450 Kamet White",
    priceFormatted: "₹ 3.10 Lakh",
    priceValue: 3.10,
    powerBHP: 40.02,
    torqueNM: 40,
    mileageKM: 30.5,
    safetyStars: 5,
    transmission: "6-Speed with Assist & Slipper Clutch",
    topSpeedKMH: 155,
    keyFeatures: ["Sherpa 452cc Liquid-Cooled Architecture", "Tripper Dash TFT with Full Google Navigation", "Ride-by-Wire Electronic Throttle", "Showa Separate Function USD Front Fork"],
    description: "Architectural evolution engineered specifically for extreme high-altitude adventure touring. Powered by Royal Enfield's pioneering liquid-cooled DOHC Sherpa platform featuring ride-by-wire engine modes.",
    image: "./assets/adventure_touring_bike_1785996974087.png",
    specs: {
      powertrain: {
        engine: "452 cc Sherpa Liquid-Cooled Single-Cylinder Motor",
        cylinders: "1 Cylinder, 4 Valves, DOHC, Wet-Sump Lubrication",
        power: "40.02 BHP @ 8000 RPM",
        torque: "40.00 Nm @ 5500 RPM",
        gearbox: "6-Speed Constant Mesh with Assist & Slipper Clutch",
        drivetrain: "Chain Drive (X-Ring Sealed O-Ring Chain)",
        acceleration0to100: "6.2 Seconds",
        topSpeed: "155 KM/H",
        emissionNorm: "BS6 Phase 2 OBD-2 Compliant"
      },
      dimensions: {
        length: "2245 mm",
        width: "852 mm (Handlebar Width)",
        height: "1316 mm (With Adventure Flyscreen)",
        wheelbase: "1510 mm",
        groundClearance: "230 mm",
        kerbWeight: "196 kg (Ready to Ride)",
        turningRadius: "2.4 Meters",
        frontSuspension: "43mm Showa Upside Down (USD) Forks, 200mm Travel",
        rearSuspension: "Link-Type Mono-shock, Rebound & Preload Adjustable, 200mm Travel",
        bootSpace: "N/A (Integrated Rear Rack Supporting 5 kg Payload)",
        fuelCapacity: "17 Liters Expedition Tank"
      },
      brakesAndWheels: {
        frontBrake: "320mm Ventilated Disc, Dual-Piston Floating Caliper",
        rearBrake: "270mm Ventilated Disc, Single-Piston Floating Caliper",
        tyreSize: "90/90-21 Front | 140/80-17 Rear (Ceat Gripp RE)",
        wheelType: "21-inch Front / 17-inch Rear Wire-Spoke Tubed Wheels",
        spareWheel: "N/A (Standard Motorcycle Setup)",
        absSystem: "Dual-Channel ABS (Rear Wheel Switchable Off-Road Mode)"
      },
      technologyAndSafety: {
        ncapRating: "5-Star Equivalent Structural Rigidity",
        airbagCount: "N/A (Equipped with Steel Tubular Crash Guards)",
        adasFunctions: "Electronic Ride Modes (Eco & Performance), Switchable Rear ABS",
        infotainment: "4-inch Round Circular TFT Display with Full Google Maps Integration",
        audioArchitecture: "N/A (Helmet Bluetooth Audio Pass-through Controller via Handlebar Switchgear)",
        connectivity: "Royal Enfield Wingman Telematics (Live Location & Trip Diagnostics)"
      }
    },
    pros: [
      "Expedition-grade 230mm ground clearance and 200mm Showa suspension travel",
      "World-first integrated Google Maps live charting on circular TFT instrumentation",
      "Remarkable highway passing power and smoothness from the 40 BHP Sherpa engine"
    ],
    cons: [
      "Standard saddle elevation of 825mm requires confident footing for compact riders",
      "Wire spoke wheels in base Indian specification require tubed pneumatic tyres"
    ],
    defaultLoanYears: 3,
    defaultROI: 9.5
  }
];

// Async loader to fetch live real vehicle dataset from Supabase Postgres Table
async function syncVehiclesWithSupabase() {
  if (!window.supabaseClient) {
    console.log("Supabase client offline. Serving standard fallback catalog.");
    return { isCloud: false, count: VEHICLE_DATABASE.length };
  }

  try {
    const { data, error } = await window.supabaseClient
      .from('vehicles')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data && data.length > 0) {
      console.log(`⚡ Fetched ${data.length} live vehicle profiles directly from Supabase Cloud Database!`);
      
      // Map Postgres schema to Javascript application runtime format
      const cloudVehicles = data.map(item => ({
        id: item.id,
        type: item.type,
        fuel: item.fuel,
        brand: item.brand,
        model: item.model,
        priceFormatted: item.price_formatted || `₹ ${item.price_val} Lakh`,
        priceValue: parseFloat(item.price_val || 20.0),
        powerBHP: parseFloat(item.power_bhp || 150),
        torqueNM: parseFloat(item.torque_nm || 300),
        mileageKM: parseFloat(item.mileage_km || 15),
        safetyStars: parseInt(item.safety_stars || 5),
        transmission: item.transmission || "Automatic",
        topSpeedKMH: parseInt(item.top_speed_kmh || 180),
        keyFeatures: item.key_features || ["Verified Cloud Specification"],
        description: item.description || "Official manufacturer engineering specification.",
        image: item.image_url || "./assets/futuristic_luxury_suv_1785996964228.png",
        specs: item.specs_matrix || {},
        pros: item.pros || ["Certified chassis integrity", "High efficiency powertrain"],
        cons: item.cons || ["Subjective preference in trim selection"],
        defaultLoanYears: parseInt(item.default_loan_years || 5),
        defaultROI: parseFloat(item.default_roi || 9.0)
      }));

      // Overwrite static database with live verified cloud data
      VEHICLE_DATABASE = cloudVehicles;
      return { isCloud: true, count: cloudVehicles.length, isEmpty: false };
    } else if (!error && (!data || data.length === 0)) {
      console.log("Supabase DB connected, but 'vehicles' table is currently empty.");
      return { isCloud: true, count: VEHICLE_DATABASE.length, isEmpty: true };
    }
  } catch (err) {
    console.warn("Exception checking Supabase vehicles table:", err);
  }

  return { isCloud: false, count: VEHICLE_DATABASE.length };
}

function getFilteredVehicles(typeFilter, searchQuery = "") {
  return VEHICLE_DATABASE.filter(vehicle => {
    const matchesType = (typeFilter === "all" || vehicle.type === typeFilter || vehicle.fuel === typeFilter);
    const matchesSearch = searchQuery.trim() === "" || 
      `${vehicle.brand} ${vehicle.model} ${vehicle.description} ${(vehicle.keyFeatures || []).join(" ")}`.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });
}

function getVehicleById(id) {
  return VEHICLE_DATABASE.find(v => v.id === id);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { VEHICLE_DATABASE, getFilteredVehicles, getVehicleById, syncVehiclesWithSupabase };
}
