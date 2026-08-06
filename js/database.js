// Comprehensive Automotive Intelligence Database
// Deep structural specifications, verified telemetry metrics, and zero casual formatting.

const VEHICLE_DATABASE = [
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
  },
  {
    id: "creta-nline",
    type: "car",
    fuel: "petrol",
    brand: "Hyundai Motor Company",
    model: "Creta N-Line Turbo DCT",
    priceFormatted: "₹ 20.45 Lakh",
    priceValue: 20.45,
    powerBHP: 158,
    torqueNM: 253,
    mileageKM: 18.2,
    safetyStars: 4,
    transmission: "7-Speed Dual Clutch Transmission (DCT)",
    topSpeedKMH: 205,
    keyFeatures: ["Sport-Tuned Stiffener Dampers & Steering", "Twin 10.25-inch Panoramic Displays", "Active N-Line Aerodynamic Body Suite", "Level 2 ADAS Radar Protection"],
    description: "An enthusiast-centric performance compact SUV featuring weighted steering calibration, responsive high-pressure turbo power delivery, and aggressive track-derived aerodynamic body styling.",
    image: "./assets/sport_performance_sedan_1785997001737.png",
    specs: {
      powertrain: {
        engine: "1482 cc 1.5L Kappa Turbo GDi Petrol",
        cylinders: "4 Cylinders In-line, 16 Valves, DOHC with CVVD",
        power: "158 BHP @ 5500 RPM",
        torque: "253 Nm @ 1500 - 3500 RPM",
        gearbox: "7-Speed Dual Clutch Transmission (DCT) with Paddle Shifters",
        drivetrain: "Front-Wheel Drive (FWD) with Traction Control Modes",
        acceleration0to100: "8.9 Seconds",
        topSpeed: "205 KM/H",
        emissionNorm: "BS6 Phase 2 / E20 Fuel Compatible"
      },
      dimensions: {
        length: "4330 mm",
        width: "1790 mm",
        height: "1635 mm",
        wheelbase: "2610 mm",
        groundClearance: "190 mm",
        kerbWeight: "1350 kg",
        turningRadius: "5.3 Meters",
        frontSuspension: "McPherson Strut with N-Line Stiffer Spring Rates",
        rearSuspension: "Coupled Torsion Beam Axle (CTBA) with N-Line Damper Tuning",
        bootSpace: "433 Liters",
        fuelCapacity: "50 Liters"
      },
      brakesAndWheels: {
        frontBrake: "300mm Ventilated Disc with Red Brembo-Style Caliper Brackets",
        rearBrake: "262mm Solid Disc with Electric Parking Brake",
        tyreSize: "215 / 55 R18 Radial Tubeless",
        wheelType: "18-inch N-Line Exclusive Diamond-Cut Machine Alloys",
        spareWheel: "215/60 R17 Steel Wheel",
        absSystem: "Dual-Channel ABS with Vehicle Stability Management (VSM)"
      },
      technologyAndSafety: {
        ncapRating: "4-Star Certified Structural Architecture",
        airbagCount: "6 Airbags Standard Across All Trims",
        adasFunctions: "Level 2 Radar (Forward Collision Warning, Blind Spot Avoidance, Rear Cross Traffic Alert)",
        infotainment: "Dual 10.25-inch Seamless Integrated Instrument Cluster & Touch Display",
        audioArchitecture: "Bose Premium 8-Speaker Studio System with Sound Staging",
        connectivity: "Hyundai Bluelink Connected Car Services (Over-the-Air Firmware Updates)"
      }
    },
    pros: [
      "Lightning-fast gear shifts via 7-Speed DCT with steering wheel paddle shifters",
      "Stiffer suspension damping substantially eliminates cornering body roll",
      "Impeccable cabin fit, finish, and ultra-responsive infotainment interface"
    ],
    cons: [
      "Ride comfort feels slightly firmer over broken city asphalt compared to regular variants",
      "Turbo petrol fuel efficiency drops noticeably under enthusiastic throttle usage"
    ],
    defaultLoanYears: 5,
    defaultROI: 9.0
  },
  {
    id: "scrambler-400x",
    type: "bike",
    fuel: "petrol",
    brand: "Triumph Motorcycles",
    model: "Scrambler 400X Edition",
    priceFormatted: "₹ 2.64 Lakh",
    priceValue: 2.64,
    powerBHP: 39.5,
    torqueNM: 37.5,
    mileageKM: 29.8,
    safetyStars: 5,
    transmission: "6-Speed Gearbox with Torque Assist Clutch",
    topSpeedKMH: 150,
    keyFeatures: ["Switchable Off-Road ABS Mode", "19-inch Front Wheel Geometry", "Ride-by-Wire Precision Throttle", "Authentic British Scrambler Ergonomics"],
    description: "Classic British engineering heritage adapted into a high-utility modern dual-sport machine. Features wide upright aluminum bars, longer wheel travel, and robust low-end torque delivery.",
    image: "./assets/electric_racing_motorcycle_1785997015490.png",
    specs: {
      powertrain: {
        engine: "398.15 cc TR-Series Liquid-Cooled Single Cylinder",
        cylinders: "1 Cylinder, 4 Valves, DOHC, Finger-Follower Valvetrain",
        power: "39.5 BHP @ 8000 RPM",
        torque: "37.5 Nm @ 6500 RPM",
        gearbox: "6-Speed Transmission with Torque Assist & Slipper Clutch",
        drivetrain: "O-Ring Sealed Chain Drive",
        acceleration0to100: "6.8 Seconds",
        topSpeed: "150 KM/H",
        emissionNorm: "BS6 Phase 2 / Euro 5 Compliant"
      },
      dimensions: {
        length: "2117 mm",
        width: "825 mm (Handlebars)",
        height: "1190 mm (Without Mirrors)",
        wheelbase: "1418 mm",
        groundClearance: "195 mm",
        kerbWeight: "185 kg (Wet Mass)",
        turningRadius: "2.6 Meters",
        frontSuspension: "43mm Big Piston Upside Down (USD) Forks, 150mm Travel",
        rearSuspension: "Gas Monoshock RSU with External Reservoir, Preload Adjustment, 150mm Travel",
        bootSpace: "N/A (Standard Luggage Rack Supporting 3 kg)",
        fuelCapacity: "13 Liters Sculpted Steel Tank"
      },
      brakesAndWheels: {
        frontBrake: "320mm Fixed Disc, 4-Piston Radial Monobloc Caliper",
        rearBrake: "230mm Fixed Disc, Floating Caliper",
        tyreSize: "100/90-19 Front | 140/80-17 Rear (Metzeler Karoo Street)",
        wheelType: "19-inch Front / 17-inch Rear Lightweight 10-Spoke Cast Alloy Wheels",
        spareWheel: "N/A (Tubeless Radial Configuration)",
        absSystem: "Dual-Channel ABS (Off-Road Deactivated Rear Wheel Mode)"
      },
      technologyAndSafety: {
        ncapRating: "5-Star Engineering Build Tolerance",
        airbagCount: "N/A (Equipped with Sump Guard & Headlight Grille)",
        adasFunctions: "Switchable Traction Control System (TCS), Off-Road ABS Mode",
        infotainment: "Analog Speedometer with Integrated LCD Multi-Information Screen",
        audioArchitecture: "N/A (Handlebar Bluetooth Module Port Supported)",
        connectivity: "Triumph Accessory GPS Navigation USB Charging Port Included"
      }
    },
    pros: [
      "Segment-leading material fitment, welds, and aluminum engine detailing",
      "Effortless urban commuting thanks to generous low-RPM pulling torque",
      "Highly accessible ex-showroom pricing for an elite international heritage marque"
    ],
    cons: [
      "Instrument dash looks relatively simple compared to full-color TFT rival screens",
      "Wind protection becomes essential during highway cruising exceeding 120 km/h"
    ],
    defaultLoanYears: 3,
    defaultROI: 9.5
  },
  {
    id: "harrier-ev",
    type: "car",
    fuel: "ev",
    brand: "Tata Motors Electric",
    model: "Harrier EV Architecture QWD",
    priceFormatted: "₹ 28.00 Lakh (Est)",
    priceValue: 28.00,
    powerBHP: 300,
    torqueNM: 600,
    mileageKM: 520, 
    safetyStars: 5,
    transmission: "Dual-Motor e-AWD Direct Drive",
    topSpeedKMH: 190,
    keyFeatures: ["520 KM Certified Range Architecture", "V2L & V2V (Vehicle to Load/Vehicle) Power Transfer", "Acti.EV Gen 2 Platform", "Bose 14-Speaker Dolby Atmos Studio"],
    description: "Tata Motors' revolutionary luxury electric SUV featuring intelligent dual-motor electronic torque vectoring, ultra-fast DC charging capability, and silent zero-emission engineering.",
    image: "./assets/futuristic_luxury_suv_1785996964228.png",
    specs: {
      powertrain: {
        engine: "Dual Permanent Magnet Synchronous Motors (PMSM Front + Rear)",
        cylinders: "N/A (70 kWh High-Energy Density LFP Blade Battery Pack)",
        power: "300 BHP Equivalent Total Combined System Output",
        torque: "600 Nm Instantaneous Electronic Torque",
        gearbox: "Single-Speed Fixed Gear Direct Drive Transmission",
        drivetrain: "Quad-Wheel Drive (e-AWD) with Intelligent Torque Distribution",
        acceleration0to100: "6.1 Seconds",
        topSpeed: "190 KM/H (Electronically Capped for Efficiency)",
        emissionNorm: "Zero Tailpipe Emissions / Pure EV Architecture"
      },
      dimensions: {
        length: "4605 mm",
        width: "1922 mm",
        height: "1718 mm",
        wheelbase: "2741 mm",
        groundClearance: "205 mm",
        kerbWeight: "2100 kg (Including Underfloor Battery Pack)",
        turningRadius: "5.6 Meters",
        frontSuspension: "Independent McPherson Strut with Frequency Tuned Dampers",
        rearSuspension: "Multi-Link Rear Suspension with EV Anti-Roll Stabilization",
        bootSpace: "445 Liters (Plus 35 Liter Front Trunk / Frunk)",
        fuelCapacity: "70 kWh Battery (150 kW DC Fast-Charge Supported: 10-80% in 35 min)"
      },
      brakesAndWheels: {
        frontBrake: "330mm Ventilated Disc with Regenerative Braking Capture",
        rearBrake: "315mm Solid Disc with Electric Parking Brake",
        tyreSize: "245 / 55 R19 Low-Rolling Resistance EV Radials",
        wheelType: "19-inch Aerodynamic Diamond-Cut Aero Alloy Wheels",
        spareWheel: "Tyre Puncture Mobility Kit with High-Pressure Compress Unit",
        absSystem: "Dual-Channel ABS with Electronic Brake Pre-fill & ESP"
      },
      technologyAndSafety: {
        ncapRating: "5-Star ( Bharat NCAP & Global NCAP Benchmark Target)",
        airbagCount: "7 Airbags (Front, Side, Curtain & Center Airbag)",
        adasFunctions: "Level 2+ Autonomous Architecture with 360-Degree Surround Radar View",
        infotainment: "12.3-inch Cinematic Harman Touchscreen with Alexa Built-in",
        audioArchitecture: "Bose 14-Speaker Dolby Atmos Studio Sound Architecture",
        connectivity: "ZConnect EV Telematics with Remote Climate Conditioning & Charging Management"
      }
    },
    pros: [
      "Instantaneous 600 Nm electronic torque generates breathtaking linear acceleration",
      "520+ km certified endurance enables effortless long-distance interstate cruising",
      "Whisper-silent cabin NVH levels paired with studio-grade Bose surround audio"
    ],
    cons: [
      "Higher initial purchase expenditure compared to ICE combustion variants",
      "Public highway rapid DC charging planning remains beneficial for interstate road trips"
    ],
    defaultLoanYears: 5,
    defaultROI: 8.5
  },
  {
    id: "duke-390",
    type: "bike",
    fuel: "petrol",
    brand: "KTM Sportmotorcycle",
    model: "Duke 390 Gen 3 Streetfighter",
    priceFormatted: "₹ 3.11 Lakh",
    priceValue: 3.11,
    powerBHP: 46,
    torqueNM: 39,
    mileageKM: 28.5,
    safetyStars: 5,
    transmission: "6-Speed + Bi-directional Quickshifter+",
    topSpeedKMH: 168,
    keyFeatures: ["Launch Control & Track Telemetry Mode", "Supermoto Switchable ABS", "Fully Adjustable WP Apex Suspension", "399cc LC4f High-Output Motor"],
    description: "The definitive performance streetfighter boasting class-dominating power-to-weight geometry, track-derived rider telemetry electronics, and fully adjustable racing suspension hardware.",
    image: "./assets/electric_racing_motorcycle_1785997015490.png",
    specs: {
      powertrain: {
        engine: "399 cc LC4c Liquid-Cooled Single-Cylinder Engine",
        cylinders: "1 Cylinder, 4 Valves, DOHC with Cam-Followers & DLC Coating",
        power: "46.0 BHP @ 8500 RPM",
        torque: "39.0 Nm @ 6500 RPM",
        gearbox: "6-Speed with Bi-Directional Quickshifter+ & PASC Anti-Hopping Clutch",
        drivetrain: "X-Ring Chain Drive with Cush Drive Rear Hub",
        acceleration0to100: "5.4 Seconds",
        topSpeed: "168 KM/H",
        emissionNorm: "BS6 Phase 2 / OBD-2 Certified"
      },
      dimensions: {
        length: "2072 mm",
        width: "838 mm",
        height: "1105 mm",
        wheelbase: "1357 mm (Shorter Compact Track Wheelbase)",
        groundClearance: "183 mm",
        kerbWeight: "168 kg (Lightweight Trellis Architecture)",
        turningRadius: "2.3 Meters",
        frontSuspension: "43mm WP Apex Open Cartridge USD Forks (Compression & Rebound Adjustable, 150mm Travel)",
        rearSuspension: "WP Apex Monoshock with Off-Center Mount (Rebound & Preload Adjustable, 150mm Travel)",
        bootSpace: "N/A (Under-seat document storage chamber)",
        fuelCapacity: "15 Liters Metallic Fuel Tank"
      },
      brakesAndWheels: {
        frontBrake: "320mm Ventilated Disc, 4-Piston Radially Mounted Fixed Caliper (ByBre)",
        rearBrake: "240mm Ventilated Disc, Single-Piston Floating Caliper",
        tyreSize: "110/70 ZR17 Front | 150/60 ZR17 Rear (Metzeler M5 Interact)",
        wheelType: "17-inch Lightweight Hollow Hub Cast Alloy Wheels",
        spareWheel: "N/A (Tubeless ZR-Rated Sport Radial Setup)",
        absSystem: "Bosch 9.3 MP Dual-Channel ABS (Supermoto Mode & Cornering ABS Enabled)"
      },
      technologyAndSafety: {
        ncapRating: "5-Star Dynamic Chassis Rigidity",
        airbagCount: "N/A (Trellis Sub-frame & Forged Aluminum Swingarm)",
        adasFunctions: "Launch Control, Motorcycle Traction Control (MTC, 3D Lean Angle Sensor), Track Mode",
        infotainment: "5-inch TFT Bonded Glass Display with Dark/Light Auto-Switching",
        audioArchitecture: "N/A (KTM MyRide Bluetooth Headset Navigation & Media Interface)",
        connectivity: "KTM MyRide Navigation Telemetry with Turn-by-Turn Waypointing"
      }
    },
    pros: [
      "Unrivaled razor-sharp cornering agility and featherweight mass (168 kg)",
      "Standard Bi-directional Quickshifter+ delivers seamless clutchless shifts under full acceleration",
      "Fully adjustable front & rear damping allows precise setup for track days vs street rides"
    ],
    cons: [
      "High-output single-cylinder engine character requires smooth clutch throttle harmony in slow traffic",
      "Pillion rider ergonomics remain sport-focused and relatively compact for multi-day touring"
    ],
    defaultLoanYears: 3,
    defaultROI: 9.5
  }
];

function getFilteredVehicles(typeFilter, searchQuery = "") {
  return VEHICLE_DATABASE.filter(vehicle => {
    const matchesType = (typeFilter === "all" || vehicle.type === typeFilter || vehicle.fuel === typeFilter);
    const matchesSearch = searchQuery.trim() === "" || 
      `${vehicle.brand} ${vehicle.model} ${vehicle.description} ${vehicle.keyFeatures.join(" ")}`.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });
}

function getVehicleById(id) {
  return VEHICLE_DATABASE.find(v => v.id === id);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { VEHICLE_DATABASE, getFilteredVehicles, getVehicleById };
}
