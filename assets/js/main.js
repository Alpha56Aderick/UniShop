// Updated Product Database 
const products = [
  // A. Computer Science & Engineering
  {
    id: 1,
    name: "Programming Laptop (Dell XPS 15)",
    price: 1299.99,
    description: "Intel i7, 16GB RAM, 512GB SSD - Ideal for coding and machine learning",
    category: "computers",
    subcategory: "laptops",
    image: "assets/images/laptop-coding.jpg",
    tags: ["computer-science", "best-seller"]
  },
   {
    id: 1,
    name: "Lab coat",
    price: 20002,
    description: "A white coat for laboratory safety",
    category: "lab-requirements",
    subcategory: "laptops",
    image: "assets/image/rasberry pi kit.png",
    tags: ["computer-science", "best-seller"]
  },
  {
    id: 2,
    name: "Mechanical Keyboard (Keychron K8)",
    price: 89.99,
    description: "Tenkeyless mechanical keyboard with RGB lighting for programmers",
    category: "computers",
    subcategory: "accessories",
    image: "assets/images/mech-keyboard.jpg",
    tags: ["computer-science"]
  },
  {
    id: 3,
    name: "Raspberry Pi 4 Starter Kit",
    price: 119.99,
    description: "Complete IoT development kit with case, power supply and accessories",
    category: "electronic-tools",
    subcategory: "kits",
    image: "assets/image/rasberry pi kit.png",
    tags: ["computer-science", "electronics"]
  },
  {
    id: 4,
    name: "GitHub Student Developer Pack",
    price: 0,
    description: "Free access to premium developer tools for students",
    category: "software",
    subcategory: "developer-tools",
    image: "assets/images/github-pack.jpg",
    tags: ["computer-science", "free"]
  },

  // B. Civil Engineering
  {
    id: 5,
    name: "Engineering Drafting Kit",
    price: 45.50,
    description: "Complete set with compass, protractor, and technical pens",
    category: "workshop-tools",
    subcategory: "drafting",
    image: "assets/images/drafting-kit.jpg",
    tags: ["civil-engineering"]
  },
  {
    id: 6,
    name: "Construction Hard Hat",
    price: 24.99,
    description: "ANSI-approved safety helmet with adjustable harness",
    category: "safety-gear",
    subcategory: "construction",
    image: "assets/images/hard-hat.jpg",
    tags: ["civil-engineering"]
  },
  {
    id: 7,
    name: "AutoCAD Civil 3D (Student License)",
    price: 0,
    description: "Free 1-year license for civil engineering students",
    category: "software",
    subcategory: "cad",
    image: "assets/images/autocad-civil.jpg",
    tags: ["civil-engineering", "free"]
  },
  {
    id: 8,
    name: "Laser Distance Measurer",
    price: 59.99,
    description: "Digital laser measure with 100ft range for site surveys",
    category: "workshop-tools",
    subcategory: "measurement",
    image: "assets/images/laser-measurer.jpg",
    tags: ["civil-engineering"]
  },

  // C. Laboratory Science
  {
    id: 9,
    name: "Lab Coat (Polyester Cotton)",
    price: 29.99,
    description: "White lab coat with knit cuffs and snap buttons",
    category: "lab-requirements",
    subcategory: "safety",
    image: "assets/images/lab-coat.jpg",
    tags: ["laboratory-science"]
  },
  {
    id: 10,
    name: "Chemistry Glassware Set",
    price: 89.99,
    description: "24-piece set with beakers, flasks and graduated cylinders",
    category: "lab-requirements",
    subcategory: "glassware",
    image: "assets/images/glassware-set.jpg",
    tags: ["laboratory-science"]
  },
  {
    id: 11,
    name: "Digital pH Meter",
    price: 49.99,
    description: "Precision pH tester with ATC and replaceable electrode",
    category: "lab-requirements",
    subcategory: "instruments",
    image: "assets/images/ph-meter.jpg",
    tags: ["laboratory-science"]
  },
  {
    id: 12,
    name: "Molecular Model Kit",
    price: 32.99,
    description: "126-piece organic chemistry modeling set",
    category: "reference-materials",
    subcategory: "kits",
    image: "assets/images/molecular-kit.jpg",
    tags: ["laboratory-science"]
  },

  // D. Mechanical Engineering
  {
    id: 13,
    name: "Digital Caliper (0-6in)",
    price: 25.99,
    description: "Stainless steel vernier caliper with LCD display",
    category: "workshop-tools",
    subcategory: "measurement",
    image: "assets/images/digital-caliper.jpg",
    tags: ["mechanical-engineering"]
  },
  {
    id: 14,
    name: "SolidWorks Student License",
    price: 99.99,
    description: "1-year license for mechanical design software",
    category: "software",
    subcategory: "cad",
    image: "assets/images/solidworks.jpg",
    tags: ["mechanical-engineering"]
  },
  {
    id: 15,
    name: "3D Printing Filament (PLA, 1kg)",
    price: 22.99,
    description: "1.75mm diameter filament for prototyping",
    category: "workshop-tools",
    subcategory: "3d-printing",
    image: "assets/images/pla-filament.jpg",
    tags: ["mechanical-engineering"]
  },
  {
    id: 16,
    name: "Thermodynamics Lab Kit",
    price: 149.99,
    description: "Complete heat transfer experiment set",
    category: "lab-requirements",
    subcategory: "mechanical",
    image: "assets/images/thermo-kit.jpg",
    tags: ["mechanical-engineering"]
  },

  // E. Electrical & Electronics
  {
    id: 17,
    name: "Digital Multimeter",
    price: 39.99,
    description: "Auto-ranging multimeter with continuity test",
    category: "electronic-tools",
    subcategory: "measurement",
    image: "assets/images/multimeter.jpg",
    tags: ["electrical-electronics"]
  },
  {
    id: 18,
    name: "Arduino Uno Starter Kit",
    price: 79.99,
    description: "Includes Uno board, sensors, and tutorial",
    category: "electronic-tools",
    subcategory: "kits",
    image: "assets/images/arduino-kit.jpg",
    tags: ["electrical-electronics"]
  },
  {
    id: 19,
    name: "Soldering Iron Station",
    price: 54.99,
    description: "60W adjustable temperature soldering kit",
    category: "electronic-tools",
    subcategory: "tools",
    image: "assets/images/soldering-station.jpg",
    tags: ["electrical-electronics"]
  },
  {
    id: 20,
    name: "Breadboard Jumper Wires (140pc)",
    price: 12.99,
    description: "Assorted lengths for circuit prototyping",
    category: "electronic-tools",
    subcategory: "components",
    image: "assets/images/jumper-wires.jpg",
    tags: ["electrical-electronics"]
  }
];

document.addEventListener('DOMContentLoaded', function() {
  // Load products based on page type
  if (document.querySelector('.featured-products .product-grid')) {
    loadFeaturedProducts();
  }

  if (document.querySelector('.products .product-grid')) {
    loadAllProducts();
  }

  if (document.querySelector('.product-detail')) {
    loadProductDetails();
  }

  // Initialize category filter if exists
  const categoryFilterForm = document.getElementById('category-filter-form');
  if (categoryFilterForm) {
    const radios = categoryFilterForm.querySelectorAll('input[name="category"]');
    radios.forEach(radio => {
      radio.addEventListener('click', filterProducts);
    });
  }

  // Initialize quantity counter on product detail page
  const minusBtn = document.getElementById('minus-btn');
  const addBtn = document.getElementById('add-btn');
  const quantityInput = document.getElementById('quantity');

  if (minusBtn && addBtn && quantityInput) {
    minusBtn.addEventListener('click', () => {
      let currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }
    });

    addBtn.addEventListener('click', () => {
      let currentValue = parseInt(quantityInput.value);
      quantityInput.value = currentValue + 1;
    });
  }
});

/* ======================
   PRODUCT DISPLAY FUNCTIONS
   ====================== */

// Load 4 random featured products
function loadFeaturedProducts() {
  const productGrid = document.querySelector('.featured-products .product-grid');
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  shuffled.slice(0, 4).forEach(product => {
    productGrid.appendChild(createProductCard(product));
  });
}

// Load all products with category filtering
function loadAllProducts() {
  const productGrid = document.querySelector('.products .product-grid');
  productGrid.innerHTML = '';
  products.forEach(product => {
    productGrid.appendChild(createProductCard(product));
  });
}

// Create product card HTML element
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <div class="product-image" style="background-image: url('${product.image}')"></div>
    <div class="product-info">
      <h3>${product.name}</h3>
      <p class="price">$${product.price.toFixed(2)}</p>
      <p class="category">${formatCategory(product.category)}</p>
      <div class="button-group">
        <button class="btn add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
        <button class="btn view-btn" data-product-id="${product.id}">View</button>
      </div>
    </div>
  `;

  // Add event listener for Add to Cart button
  const addToCartBtn = card.querySelector('.add-to-cart-btn');
  addToCartBtn.addEventListener('click', () => {
    addToCart(product.id);
  });

  return card;
}

// Placeholder addToCart function if not defined elsewhere
function addToCart(productId) {
  console.log(`Add to Cart clicked for product ID: ${productId}`);
  // TODO: Implement actual add to cart functionality or call existing cart functions
}

// Format category for display
function formatCategory(category) {
  const formatted = category.replace(/-/g, ' ');
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

function filterProducts() {
  const categoryFilterForm = document.getElementById('category-filter-form');
  const selectedCategory = categoryFilterForm.querySelector('input[name="category"]:checked').value;
  const productGrid = document.querySelector('.products .product-grid');
  productGrid.innerHTML = '';
  
  const filtered = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory || p.subcategory === selectedCategory);
  
  filtered.forEach(product => {
    productGrid.appendChild(createProductCard(product));
  });
}

// Load product details page
function loadProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));
  
  if (productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
      document.getElementById('product-title').textContent = product.name;
      document.getElementById('product-price').textContent = `$${product.price.toFixed(2)}`;
      document.getElementById('product-description').textContent = product.description;
      document.getElementById('main-image').src = product.image;
      
      // Set category badge
      const categoryBadge = document.createElement('span');
      categoryBadge.className = 'category-badge';
      categoryBadge.textContent = formatCategory(product.category);
      document.querySelector('.product-info').prepend(categoryBadge);
      
      // Load related products (same category)
      loadRelatedProducts(product.category, product.id);
    }
  }
}

// Load related products (same category but different item)
function loadRelatedProducts(category, currentProductId) {
  const relatedGrid = document.querySelector('.related-products .product-grid');
  const related = products.filter(p => 
    (p.category === category || p.subcategory === category) && 
    p.id !== currentProductId
  ).slice(0, 4); // Show max 4 related items
  
  related.forEach(product => {
    relatedGrid.appendChild(createProductCard(product));
  });
}