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
    id: "nsrco-pf-1800",
    name: "NSRCO Pressure Fryer 1800",
    category: "pressure-fryer",
    priority: 1,
    image: "../images/nsrco-pf-1800.png",
    images: ["../images/nsrco-pf-1800.png", "../images/nsrco-pf-1800.png", "../images/nsrco-pf-1800.png"],
    description: "Round cooking well with 21 liter cooking oil capacity operates between 12-14 psi gauge pressure at temperatures up to 375 ̊ F.",
    features: ["Fast and productive – specifically designed for high volume production, cooks up to 40 pieces of fresh bone-in chicken per load in as little as 10 minutes*.", "Unique Pressure Activated Cover Locking Mechanism – quick closing and opening single action sealing including a pressure- activated cover locking mechanism for safety and ease of use."
    ,"Digital controls", "Stainless steel pot",],
    specs: { "Oil Capacity": "21 Liters","Power":"380 V", "Watts": "9 kW", "Temp Range": "50-200°C" }
  },
  {
    id: "nsrco-pf-1800-hp",
    name: "NSRCO Pressure Fryer HP",
    category: "pressure-fryer",
    priority: 2,
    image: "../images/pressure-fryer.png",
    images: ["../images/pressure-fryer.png", "../images/pressure-fryer.png", "../images/pressure-fryer.png"],
    description: "High-performance fryer designed for safety, efficiency, and space savings, featuring a pressure-sealed lid, advanced heating systems, onboard filtration, and durable stainless-steel construction.",
    features: ["Frying under pressure seals in flavor, reduces cook time and temperature.", "To cook smaller batches on demand with the same quality and consistency.", "With heating elements producing fast recovery", "Quick recovery"],
    specs: { "Oil Capacity": "24 Liters", "Power": "13.5 kW", "Temp Range": "50-200°C","Type": "Electric / Gas" }
  },
  
  // --- Open Fryers (4 items) ---
  {
    id: "of-100",
    name: "Rack Fryer",
    category: "open-fryer",
    priority: 5,
    image: "../images/open-fryer.jpg",
    images: ["../images/open-fryer.jpg", "../images/open-fryer.jpg", "../images/open-fryer.jpg"],
    description: "Reliable open fryer for general purpose frying needs.",
    features: ["6-head chicken or (6.5 kg) of food per load", "Fast recovery in electric and gas units", "Gas units: Reliable draft-induced heat transfer technology with solid-state ignition", "Accepts standard half-racks to minimize product handling", "Counter-balance lid lift","Fully insulated, heavy-duty stainless steel fry pot"],
    specs: { "Oil Capacity": "24 Liters", "Power": "380 V", "Watts": "9 KW", "Type": "Electric / Gas" }
  },
  {
    id: "of-bras-nf1",
    name: "Open Fryer NF1",
    category: "open-fryer",
    priority: 6,
    image: "../images/open-fryer-bras-nf1.png",
    images: ["../images/open-fryer-bras-nf1.png", "../images/open-fryer-bras-nf1.png", "../images/open-fryer-bras-nf1.png"],
    description: "Reliable open fryer for general purpose frying needs.",
    features: ["4-head chicken or (4.25 kg) of food per load", "Fast recovery in electric and gas units","Fully insulated, heavy-duty stainless steel fry pot"],
    specs: { "Oil Capacity": "26 Liters", "Power": "380 V", "Watts": "18 KW", "Type": "Electric / Gas" }
  },

  {
    id: "of-bras-nf2",
    name: "Open Fryer NF2",
    category: "open-fryer",
    priority: 7,
    image: "../images/open-fryer-bras-nf2.png",
    images: ["../images/open-fryer-bras-nf2.png", "../images/open-fryer-bras-nf2.png", "../images/open-fryer-bras-nf2.png"],
    description: "Reliable open fryer for general purpose frying needs.",
    features: ["4-head chicken or (4.25 kg) of food per load", "Fast recovery in electric and gas units","Fully insulated, heavy-duty stainless steel fry pot"],
    specs: { "Oil Capacity": "26 Liters", "Power": "380 V", "Watts": "9 KW", "Type": "Electric / Gas" }
  },



  // --- Combi Ovens (4 items) ---
  {
    id: "massage-tumbler-1",
    name: "Vacuum Massage Tumblers Machine",
    category: "others",
    priority: 9,
    image: "../images/marinate-vacum-tumbler.png",
    images: ["../images/marinate-vacum-tumbler.png", "../images/marinate-vacum-tumbler.png", "../images/marinate-vacum-tumbler.png"],
    description: "Vacuum Massage Tumblers Machine from NSRCO Machinery . is made of stainless steel. This machine is for shortening pickling time while upgrading product freshness, increasing water content in pickles, maintaining tenderness and then improving product quality.",
    features: ["Complete stainless steel structure for maximum durability", "Hygienic design, easy to clean", "It is easy to operate, minimum trouble and allows for continuous 24-hour operation", "Auto clean"],
    specs: { "Capacity": " 250 L, 200 L, 150 L", "Power": "380 V","Watts" : "700 W", }
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
];
