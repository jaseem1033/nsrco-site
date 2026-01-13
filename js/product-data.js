// Centralized product data for dynamic rendering

const categories = [
  { id: "pressure-fryer", name: "Pressure Fryers" },
  { id: "open-fryer", name: "Open Fryers" },
  { id: "combi-oven", name: "Combi Ovens" },
  { id: "holding-equipment", name: "Holding Equipment" }
];

const productsData = [
  // --- Pressure Fryers (4 items) ---
  {
    id: "pf-100",
    name: "Pressure Fryer PF-100",
    category: "pressure-fryer",
    priority: 1,
    image: "../images/pressure-fryer.webp",
    images: ["../images/pressure-fryer.webp", "../images/pressure-fryer.webp", "../images/pressure-fryer.webp"],
    description: "Compact high-efficiency pressure fryer ideal for small to medium volume kitchens.",
    features: ["Built-in filtration", "Digital controls", "Stainless steel pot", "Energy saving mode"],
    specs: { "Oil Capacity": "15 Liters", "Power": "10 kW", "Temp Range": "50-200°C" }
  },
  {
    id: "pf-200",
    name: "Pressure Fryer PF-200 Pro",
    category: "pressure-fryer",
    priority: 2,
    image: "../images/pressure-fryer.webp",
    images: ["../images/pressure-fryer.webp", "../images/pressure-fryer.webp", "../images/pressure-fryer.webp"],
    description: "Standard model with advanced pressure technology for juicier fried chicken.",
    features: ["Auto-lift basket", "Programmable presets", "Safety lock lid", "Quick recovery"],
    specs: { "Oil Capacity": "24 Liters", "Power": "13.5 kW", "Temp Range": "50-200°C" }
  },
  {
    id: "pf-300",
    name: "Pressure Fryer PF-300 XL",
    category: "pressure-fryer",
    priority: 3,
    image: "../images/pressure-fryer.webp",
    images: ["../images/pressure-fryer.webp", "../images/pressure-fryer.webp", "../images/pressure-fryer.webp"],
    description: "High-volume pressure fryer designed for busy chains and large restaurants.",
    features: ["Dual filtration", "Touchscreen panel", "Heavy-duty castors", "Smart oil management"],
    specs: { "Oil Capacity": "30 Liters", "Power": "15 kW", "Temp Range": "50-200°C" }
  },
  {
    id: "pf-400",
    name: "Pressure Fryer PF-400 Twin",
    category: "pressure-fryer",
    priority: 4,
    image: "../images/pressure-fryer.webp",
    images: ["../images/pressure-fryer.webp", "../images/pressure-fryer.webp", "../images/pressure-fryer.webp"],
    description: "Twin-well pressure fryer for maximum throughput and versatility.",
    features: ["Independent wells", "Integrated filter cart", "Cool-touch exterior", "USB data port"],
    specs: { "Oil Capacity": "2x 20 Liters", "Power": "22 kW", "Temp Range": "50-200°C" }
  },

  // --- Open Fryers (4 items) ---
  {
    id: "of-100",
    name: "Open Fryer OF-100",
    category: "open-fryer",
    priority: 5,
    image: "../images/rack-fryer.PNG",
    images: ["../images/rack-fryer.PNG", "../images/rack-fryer.PNG", "../images/rack-fryer.PNG"],
    description: "Reliable open fryer for general purpose frying needs.",
    features: ["Simple manual controls", "Easy cleaner pot", "Cold zone", "Durable heating elements"],
    specs: { "Oil Capacity": "18 Liters", "Power": "12 kW", "Type": "Electric" }
  },
  {
    id: "of-200",
    name: "Open Fryer OF-200 Rack",
    category: "open-fryer",
    priority: 6,
    image: "../images/rack-fryer.PNG",
    images: ["../images/rack-fryer.PNG", "../images/rack-fryer.PNG", "../images/rack-fryer.PNG"],
    description: "High-capacity rack fryer for frying large batches of chicken parts.",
    features: ["Rack system", "Auto-lift", "Digital timer", "Stainless steel build"],
    specs: { "Capacity": "6-head chicken", "Power": "14 kW", "Type": "Electric" }
  },
  {
    id: "of-300",
    name: "Open Fryer OF-300 Gas",
    category: "open-fryer",
    priority: 7,
    image: "../images/rack-fryer.PNG",
    images: ["../images/rack-fryer.PNG", "../images/rack-fryer.PNG", "../images/rack-fryer.PNG"],
    description: "Gas-powered open fryer for locations with limited electrical capacity.",
    features: ["High-efficiency burners", "Electronic ignition", "Safety shut-off", "Adjustable legs"],
    specs: { "Oil Capacity": "25 Liters", "BTU": "90,000", "Type": "Gas" }
  },
  {
    id: "of-400",
    name: "Open Fryer OF-400 Digital",
    category: "open-fryer",
    priority: 8,
    image: "../images/rack-fryer.PNG",
    images: ["../images/rack-fryer.PNG", "../images/rack-fryer.PNG", "../images/rack-fryer.PNG"],
    description: "Digital control open fryer with precise temperature management.",
    features: ["LED Display", "7 programmable buttons", "Melt cycle", "Over-temp protection"],
    specs: { "Oil Capacity": "22 Liters", "Power": "14 kW", "Type": "Electric" }
  },

  // --- Combi Ovens (4 items) ---
  {
    id: "co-100",
    name: "Combi Oven CO-100 Mini",
    category: "combi-oven",
    priority: 9,
    image: "../images/combi-oven.webp",
    images: ["../images/combi-oven.webp", "../images/combi-oven.webp", "../images/combi-oven.webp"],
    description: "Compact combi oven suitable for cafes and small kitchens.",
    features: ["Convection & Steam", "Touch control", "Core probe", "Auto clean"],
    specs: { "Capacity": "6 x GN 1/1", "Power": "9 kW", "Dimensions": "Small footprint" }
  },
  {
    id: "co-200",
    name: "Combi Oven CO-200 Std",
    category: "combi-oven",
    priority: 10,
    image: "../images/combi-oven.webp",
    images: ["../images/combi-oven.webp", "../images/combi-oven.webp", "../images/combi-oven.webp"],
    description: "Standard 10-tray combi oven for versatility in menu creation.",
    features: ["Multi-point probe", "HACCP data", "Auto-reverse fan", "Double glass door"],
    specs: { "Capacity": "10 x GN 1/1", "Power": "18 kW", "Dimensions": "Standard" }
  },
  {
    id: "co-300",
    name: "Combi Oven CO-300 Plus",
    category: "combi-oven",
    priority: 11,
    image: "../images/combi-oven.webp",
    images: ["../images/combi-oven.webp", "../images/combi-oven.webp", "../images/combi-oven.webp"],
    description: "Advanced combi oven with boiler system for heavy steaming generation.",
    features: ["Boiler steam gen", "Humidity control", "99 programs", "Retractable shower"],
    specs: { "Capacity": "10 x GN 1/1", "Power": "19 kW", "Steam": "Boiler" }
  },
  {
    id: "co-400",
    name: "Combi Oven CO-400 Max",
    category: "combi-oven",
    priority: 12,
    image: "../images/combi-oven.webp",
    images: ["../images/combi-oven.webp", "../images/combi-oven.webp", "../images/combi-oven.webp"],
    description: "Large capacity roll-in combi oven for banquet and catering operations.",
    features: ["Trolley system", "Touchscreen", "Advanced cleaning", "Cloud connectivity"],
    specs: { "Capacity": "20 x GN 1/1", "Power": "32 kW", "Type": "Roll-in" }
  },

  // --- Holding Equipment (3 items) ---
  {
    id: "he-100",
    name: "Holding Cabinet HE-100",
    category: "holding-equipment",
    priority: 13,
    image: "../images/holding-equipment.webp",
    images: ["../images/holding-equipment.webp", "../images/holding-equipment.webp", "../images/holding-equipment.webp"],
    description: "Under-counter holding cabinet to keep food hot at point of service.",
    features: ["Adjustable humidity", "Digital display", "Pass-through option", "Insulated"],
    specs: { "Capacity": "5 Pans", "Power": "1 kW", "Temp": "65-90°C" }
  },
  {
    id: "he-200",
    name: "Holding Cabinet HE-200 Upright",
    category: "holding-equipment",
    priority: 14,
    image: "../images/holding-equipment.webp",
    images: ["../images/holding-equipment.webp", "../images/holding-equipment.webp", "../images/holding-equipment.webp"],
    description: "Full-size upright holding cabinet for bulk food storage.",
    features: ["Dutch doors", "Heavy insulation", "Castors with brakes", "Simple controls"],
    specs: { "Capacity": "12 Pans", "Power": "2 kW", "Temp": "65-90°C" }
  },
  {
    id: "he-300",
    name: "Holding Drawer HE-300",
    category: "holding-equipment",
    priority: 15,
    image: "../images/holding-equipment.webp",
    images: ["../images/holding-equipment.webp", "../images/holding-equipment.webp", "../images/holding-equipment.webp"],
    description: "Drawer warmer for keeping breads, rolls, or sides hot and accessible.",
    features: ["Individual drawer control", "Moist/Crisp slider", "Robust rails", "Stackable"],
    specs: { "Capacity": "2 Drawers", "Power": "1.5 kW", "Temp": "60-95°C" }
  }
];
