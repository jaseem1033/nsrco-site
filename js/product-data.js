// Centralized product data for detail page rendering
const productsData = {
  "pressure-fryer": {
    id: "pressure-fryer",
    name: "Commercial Pressure Fryer",
    category: "Pressure Fryer",
    image: "../images/pressure-fryer.webp",
    images: [
      "../images/pressure-fryer.webp",
      "../images/pressure-fryer.webp",
      "../images/pressure-fryer.webp"
    ],
    description: "High-efficiency pressure frying technology for faster cooking times and juicier, more flavorful results.",
    features: [
      "Built-in filtration system extends oil life",
      "Digital touch controls with programmable presets",
      "Heavy-duty stainless steel construction",
      "Fast recovery time for high-volume kitchens"
    ],
    specs: {
      "Oil Capacity": "24–25 Liters",
      "Dimensions (WxDxH)": "450 x 800 x 1100 mm",
      "Power": "12–13.5 kW / 3 Phase",
      "Operating Pressure": "12.0 psi",
      "Safety Valve": "14.5 psi",
      "Temperature Range": "50°C – 200°C"
    }
  },
  "open-fryer": {
    id: "open-fryer",
    name: "High-capacity Rack Fryer",
    category: "Open Fryer",
    image: "../images/rack-fryer.PNG",
    images: [
      "../images/rack-fryer.PNG",
      "../images/rack-fryer.PNG",
      "../images/rack-fryer.PNG"
    ],
    description: "Professional-grade open rack fryer designed for high-volume food service. Handles 6-head chicken or 6.5 kg of food per load.",
    features: [
      "6-head chicken or 6.5 kg per load",
      "Fast recovery heating elements",
      "Counter-balance racking system",
      "Available in electric and gas"
    ],
    specs: {
      "Capacity": "6-head chicken",
      "Models": "Electric / Gas",
      "Construction": "Stainless steel",
      "Recovery": "High-efficiency elements"
    }
  },
  "combi-oven": {
    id: "combi-oven",
    name: "Combi Oven",
    category: "Combi Ovens",
    image: "../images/combi-oven.webp",
    images: [
      "../images/combi-oven.webp",
      "../images/combi-oven.webp",
      "../images/combi-oven.webp"
    ],
    description: "Advanced combi ovens for baking, roasting, and steaming with precise humidity and temperature control.",
    features: [
      "Steam + convection modes",
      "Programmable recipes",
      "Even heat distribution",
      "Easy-clean interior"
    ],
    specs: {
      "Chamber": "Stainless steel",
      "Modes": "Convection / Steam / Combi",
      "Controls": "Digital programmable",
      "Power": "Depends on model"
    }
  },
  "holding-equipment": {
    id: "holding-equipment",
    name: "Hot Holding Cabinet",
    category: "Holding Equipment",
    image: "../images/holding-equipment.webp",
    images: [
      "../images/holding-equipment.webp",
      "../images/holding-equipment.webp",
      "../images/holding-equipment.webp"
    ],
    description: "Reliable holding equipment to keep food at the perfect temperature and moisture level.",
    features: [
      "Precise temperature control",
      "Humidity management",
      "Durable build",
      "Easy service access"
    ],
    specs: {
      "Shelves": "Multiple tray capacity",
      "Temperature": "Warm-hold range",
      "Construction": "Stainless steel",
      "Door": "Insulated glass/solid"
    }
  }
};
