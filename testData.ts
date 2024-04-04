const productData = [
  {
    name: "Fresh Citrus Dish Soap",
    brand: "CleanMax",
    category: "Dishwashing Items",
    price: 5.99,
    rating: 4.5,
    description:
      "Experience the refreshing scent of freshly picked citrus while tackling tough grease and stains with our Fresh Citrus Dish Soap. Made with natural ingredients and powerful cleaning agents, this dish soap cuts through grime effortlessly, leaving your dishes sparkling clean and your kitchen smelling delightful. Say goodbye to stubborn residues and hello to a brighter, fresher clean with our invigorating dish soap formula.",
    flashSale: false,
    images: {
      cover:
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      details: [
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      ],
    },
  },
  {
    name: "Sparkling Glass Cleaner",
    brand: "MicroMagic",
    category: "Cleaning Tools",
    price: 7.49,
    rating: 4.8,
    description:
      "Achieve streak-free shine on all your glass surfaces with our Sparkling Glass Cleaner. Formulated with a powerful yet gentle solution, this cleaner effortlessly removes fingerprints, smudges, and dirt, leaving behind nothing but crystal-clear brilliance. Whether it's windows, mirrors, or glass tabletops, our cleaner delivers unmatched clarity and transparency, enhancing the beauty of your home or office.",
    flashSale: true,
    images: {
      cover:
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      details: [
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      ],
    },
  },
  {
    name: "Antibacterial Surface Wipes",
    brand: "CleanMax",
    category: "Dishwashing Items",
    price: 9.99,
    rating: 4.7,
    description:
      "Keep your surfaces clean and germ-free with our Antibacterial Surface Wipes. Infused with powerful antibacterial agents, these wipes effectively kill 99.9% of germs and bacteria, providing you with peace of mind and a healthier environment. From kitchen countertops to bathroom fixtures, our wipes are perfect for quick and convenient cleaning anytime, anywhere.",
    flashSale: false,
    images: {
      cover:
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      details: [
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      ],
    },
  },
  {
    name: "All-Purpose Cleaning Spray",
    brand: "VersaClean",
    category: "General Cleaning",
    price: 6.99,
    rating: 4.6,
    description:
      "Simplify your cleaning routine with our All-Purpose Cleaning Spray. This versatile spray is specially formulated to tackle a wide range of surfaces and messes, from kitchen counters to bathroom tiles. With its powerful cleaning agents and refreshing scent, our spray leaves your home sparkling clean and smelling fresh with every use.",
    flashSale: false,
    images: {
      cover:
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      details: [
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      ],
    },
  },
  {
    name: "Lemon Scented Floor Cleaner",
    brand: "LemonBrite",
    category: "Floor Cleaning",
    price: 8.99,
    rating: 4.4,
    description:
      "Infuse your home with the fresh scent of lemons while giving your floors a deep clean with our Lemon Scented Floor Cleaner. Formulated to remove dirt, grime, and stains, this floor cleaner leaves behind a streak-free shine and a long-lasting lemon fragrance. Safe for use on all types of hard floors, our cleaner makes floor maintenance a breeze.",
    flashSale: true,
    images: {
      cover:
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      details: [
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      ],
    },
  },
  {
    name: "Stainless Steel Polish",
    brand: "ShinyShield",
    category: "Metal Cleaning",
    price: 12.99,
    rating: 4.9,
    description:
      "Restore the luster of your stainless steel appliances and fixtures with our Stainless Steel Polish. Formulated to remove fingerprints, water spots, and smudges, this polish leaves behind a protective barrier that resists future staining and corrosion. Whether it's your kitchen appliances or bathroom fixtures, our polish keeps your stainless steel looking shiny and new.",
    flashSale: false,
    images: {
      cover:
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      details: [
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      ],
    },
  },
  {
    name: "Odor-Eliminating Fabric Spray",
    brand: "FreshScent",
    category: "Fabric Care",
    price: 9.49,
    rating: 4.7,
    description:
      "Banish unpleasant odors from your fabrics with our Odor-Eliminating Fabric Spray. Infused with powerful odor-neutralizing agents, this spray effectively eliminates odors at the source, leaving your fabrics smelling fresh and clean. Perfect for use on clothing, upholstery, and linens, our fabric spray keeps your home smelling inviting and welcoming.",
    flashSale: false,
    images: {
      cover:
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      details: [
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      ],
    },
  },
  {
    name: "Mold and Mildew Remover",
    brand: "VersaClean",
    category: "General Cleaning",
    price: 11.99,
    rating: 4.8,
    description:
      "Combat mold and mildew growth with our Mold and Mildew Remover. Formulated with powerful disinfectants and mold-fighting agents, this remover penetrates deep into surfaces to eliminate mold and mildew at the root. Whether it's in the bathroom, kitchen, or basement, our remover keeps your home clean, healthy, and mold-free.",
    flashSale: false,
    images: {
      cover:
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      details: [
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      ],
    },
  },
  {
    name: "Eco-Friendly Bamboo Scrub Brush",
    brand: "FreshScent",
    category: "Fabric Care",
    price: 6.99,
    rating: 4.6,
    description:
      "Clean your home sustainably with our Eco-Friendly Bamboo Scrub Brush. Crafted from renewable bamboo and natural bristles, this scrub brush offers effective cleaning power without harming the environment. Whether you're scrubbing dishes, surfaces, or grout, our brush provides reliable performance with minimal environmental impact.",
    flashSale: true,
    images: {
      cover:
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      details: [
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      ],
    },
  },
  {
    name: "Microfiber Cleaning Cloths Set",
    brand: "MicroMagic",
    category: "Cleaning Tools",
    price: 10.99,
    rating: 4.7,
    description:
      "Achieve a spotless clean with our Microfiber Cleaning Cloths Set. Made from ultra-absorbent microfiber material, these cloths trap dust, dirt, and debris with ease, leaving surfaces streak-free and shining. Whether it's countertops, windows, or electronics, our cloths provide gentle yet effective cleaning for all your surfaces.",
    flashSale: false,
    images: {
      cover:
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      details: [
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      ],
    },
  },
  {
    name: "Heavy-Duty Oven Cleaner",
    brand: "VersaClean",
    category: "General Cleaning",
    price: 8.49,
    rating: 4.5,
    description:
      "Tackle tough oven grease and grime with our Heavy-Duty Oven Cleaner. Formulated with powerful degreasers and foaming agents, this cleaner cuts through baked-on residues and burnt-on stains, leaving your oven sparkling clean and odor-free. Whether it's baked goods or savory dishes, our cleaner ensures your oven is ready for the next culinary masterpiece.",
    flashSale: false,
    images: {
      cover:
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      details: [
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      ],
    },
  },
  {
    name: "Pet-Safe Carpet Stain Remover",
    brand: "FreshScent",
    category: "Fabric Care",
    price: 12.99,
    rating: 4.8,
    description:
      "Keep your carpets clean and pet-friendly with our Pet-Safe Carpet Stain Remover. Formulated with pet-safe ingredients, this remover effectively lifts and eliminates tough stains and odors caused by pets, leaving your carpets fresh and stain-free. Whether it's urine, vomit, or muddy paw prints, our remover restores your carpets to their original condition.",
    flashSale: true,
    images: {
      cover:
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      details: [
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      ],
    },
  },
  {
    name: "Natural Wood Furniture Polish",
    brand: "MicroMagic",
    category: "Cleaning Tools",
    price: 9.99,
    rating: 4.6,
    description:
      "Restore the beauty of your wood furniture with our Natural Wood Furniture Polish. Formulated with natural oils and conditioners, this polish nourishes and protects your wood surfaces, enhancing their natural luster and beauty. Whether it's tables, chairs, or cabinets, our polish provides long-lasting protection and a rich, satin finish.",
    flashSale: false,
    images: {
      cover:
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      details: [
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      ],
    },
  },
  {
    name: "Disinfecting Bathroom Foam",
    brand: "MicroMagic",
    category: "Cleaning Tools",
    price: 7.99,
    rating: 4.7,
    description:
      "Keep your bathroom clean and germ-free with our Disinfecting Bathroom Foam. Formulated with powerful disinfectants and foaming agents, this foam penetrates and eliminates germs, bacteria, and viruses on contact, leaving your bathroom surfaces sparkling clean and sanitized. From sinks to shower tiles, our foam delivers unbeatable cleaning power and peace of mind.",
    flashSale: false,
    images: {
      cover:
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      details: [
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      ],
    },
  },
  {
    name: "Multipurpose Grout Cleaner",
    brand: "MicroMagic",
    category: "Cleaning Tools",
    price: 6.49,
    rating: 4.5,
    description:
      "Revitalize your tile grout with our Multipurpose Grout Cleaner. Formulated with powerful cleaning agents and brightening agents, this cleaner lifts dirt, grime, and stains from grout lines, restoring them to their original color and shine. Whether it's in the kitchen, bathroom, or hallway, our cleaner makes grout cleaning quick and easy.",
    flashSale: true,
    images: {
      cover:
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      details: [
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      ],
    },
  },
  {
    name: "Non-Toxic Drain Cleaner",
    brand: "MicroMagic",
    category: "Cleaning Tools",
    price: 11.99,
    rating: 4.8,
    description:
      "Keep your drains clear and flowing smoothly with our Non-Toxic Drain Cleaner. Formulated with natural enzymes and eco-friendly ingredients, this cleaner breaks down and dissolves clogs without harming your pipes or the environment. Whether it's hair, grease, or soap scum, our cleaner keeps your drains clean and odor-free.",
    flashSale: false,
    images: {
      cover:
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      details: [
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      ],
    },
  },
];
