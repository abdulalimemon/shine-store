const productData = [
  {
    id: 1,
    name: "Fresh Citrus Dish Soap",
    brand: "CleanMax",
    category: "Dishwashing Items",
    price: 5.99,
    rating: 4.5,
    description:
      "Experience the refreshing scent of freshly picked citrus while tackling tough grease and stains with our Fresh Citrus Dish Soap. Made with natural ingredients and powerful cleaning agents, this dish soap cuts through grime effortlessly, leaving your dishes sparkling clean and your kitchen smelling delightful. Say goodbye to stubborn residues and hello to a brighter, fresher clean with our invigorating dish soap formula.",
    flashSale: false,
    images: {
      cover: "fresh_citrus_dish_soap_cover.jpg",
      details: [
        "fresh_citrus_dish_soap_detail1.jpg",
        "fresh_citrus_dish_soap_detail2.jpg",
        "fresh_citrus_dish_soap_detail3.jpg",
      ],
    },
  },
  {
    id: 2,
    name: "Sparkling Glass Cleaner",
    brand: "Crystal Clear",
    category: "Glass Cleaning",
    price: 7.49,
    rating: 4.8,
    description:
      "Achieve streak-free shine on all your glass surfaces with our Sparkling Glass Cleaner. Formulated with a powerful yet gentle solution, this cleaner effortlessly removes fingerprints, smudges, and dirt, leaving behind nothing but crystal-clear brilliance. Whether it's windows, mirrors, or glass tabletops, our cleaner delivers unmatched clarity and transparency, enhancing the beauty of your home or office.",
    flashSale: true,
    images: {
      cover: "sparkling_glass_cleaner_cover.jpg",
      details: [
        "sparkling_glass_cleaner_detail1.jpg",
        "sparkling_glass_cleaner_detail2.jpg",
        "sparkling_glass_cleaner_detail3.jpg",
      ],
    },
  },
  {
    id: 3,
    name: "Antibacterial Surface Wipes",
    brand: "GermGuard",
    category: "Surface Cleaning",
    price: 9.99,
    rating: 4.7,
    description:
      "Keep your surfaces clean and germ-free with our Antibacterial Surface Wipes. Infused with powerful antibacterial agents, these wipes effectively kill 99.9% of germs and bacteria, providing you with peace of mind and a healthier environment. From kitchen countertops to bathroom fixtures, our wipes are perfect for quick and convenient cleaning anytime, anywhere.",
    flashSale: false,
    images: {
      cover: "antibacterial_surface_wipes_cover.jpg",
      details: [
        "antibacterial_surface_wipes_detail1.jpg",
        "antibacterial_surface_wipes_detail2.jpg",
        "antibacterial_surface_wipes_detail3.jpg",
      ],
    },
  },
  {
    id: 4,
    name: "All-Purpose Cleaning Spray",
    brand: "VersaClean",
    category: "General Cleaning",
    price: 6.99,
    rating: 4.6,
    description:
      "Simplify your cleaning routine with our All-Purpose Cleaning Spray. This versatile spray is specially formulated to tackle a wide range of surfaces and messes, from kitchen counters to bathroom tiles. With its powerful cleaning agents and refreshing scent, our spray leaves your home sparkling clean and smelling fresh with every use.",
    flashSale: false,
    images: {
      cover: "all_purpose_cleaning_spray_cover.jpg",
      details: [
        "all_purpose_cleaning_spray_detail1.jpg",
        "all_purpose_cleaning_spray_detail2.jpg",
        "all_purpose_cleaning_spray_detail3.jpg",
      ],
    },
  },
  {
    id: 5,
    name: "Lemon Scented Floor Cleaner",
    brand: "LemonBrite",
    category: "Floor Cleaning",
    price: 8.99,
    rating: 4.4,
    description:
      "Infuse your home with the fresh scent of lemons while giving your floors a deep clean with our Lemon Scented Floor Cleaner. Formulated to remove dirt, grime, and stains, this floor cleaner leaves behind a streak-free shine and a long-lasting lemon fragrance. Safe for use on all types of hard floors, our cleaner makes floor maintenance a breeze.",
    flashSale: true,
    images: {
      cover: "lemon_scented_floor_cleaner_cover.jpg",
      details: [
        "lemon_scented_floor_cleaner_detail1.jpg",
        "lemon_scented_floor_cleaner_detail2.jpg",
        "lemon_scented_floor_cleaner_detail3.jpg",
      ],
    },
  },
  {
    id: 6,
    name: "Stainless Steel Polish",
    brand: "ShinyShield",
    category: "Metal Cleaning",
    price: 12.99,
    rating: 4.9,
    description:
      "Restore the luster of your stainless steel appliances and fixtures with our Stainless Steel Polish. Formulated to remove fingerprints, water spots, and smudges, this polish leaves behind a protective barrier that resists future staining and corrosion. Whether it's your kitchen appliances or bathroom fixtures, our polish keeps your stainless steel looking shiny and new.",
    flashSale: false,
    images: {
      cover: "stainless_steel_polish_cover.jpg",
      details: [
        "stainless_steel_polish_detail1.jpg",
        "stainless_steel_polish_detail2.jpg",
        "stainless_steel_polish_detail3.jpg",
      ],
    },
  },
  {
    id: 7,
    name: "Odor-Eliminating Fabric Spray",
    brand: "FreshScent",
    category: "Fabric Care",
    price: 9.49,
    rating: 4.7,
    description:
      "Banish unpleasant odors from your fabrics with our Odor-Eliminating Fabric Spray. Infused with powerful odor-neutralizing agents, this spray effectively eliminates odors at the source, leaving your fabrics smelling fresh and clean. Perfect for use on clothing, upholstery, and linens, our fabric spray keeps your home smelling inviting and welcoming.",
    flashSale: false,
    images: {
      cover: "odor_eliminating_fabric_spray_cover.jpg",
      details: [
        "odor_eliminating_fabric_spray_detail1.jpg",
        "odor_eliminating_fabric_spray_detail2.jpg",
        "odor_eliminating_fabric_spray_detail3.jpg",
      ],
    },
  },
  {
    id: 8,
    name: "Mold and Mildew Remover",
    brand: "MoldMaster",
    category: "Specialty Cleaners",
    price: 11.99,
    rating: 4.8,
    description:
      "Combat mold and mildew growth with our Mold and Mildew Remover. Formulated with powerful disinfectants and mold-fighting agents, this remover penetrates deep into surfaces to eliminate mold and mildew at the root. Whether it's in the bathroom, kitchen, or basement, our remover keeps your home clean, healthy, and mold-free.",
    flashSale: false,
    images: {
      cover: "mold_and_mildew_remover_cover.jpg",
      details: [
        "mold_and_mildew_remover_detail1.jpg",
        "mold_and_mildew_remover_detail2.jpg",
        "mold_and_mildew_remover_detail3.jpg",
      ],
    },
  },
  {
    id: 9,
    name: "Eco-Friendly Bamboo Scrub Brush",
    brand: "GreenGrip",
    category: "Eco-Friendly Cleaning",
    price: 6.99,
    rating: 4.6,
    description:
      "Clean your home sustainably with our Eco-Friendly Bamboo Scrub Brush. Crafted from renewable bamboo and natural bristles, this scrub brush offers effective cleaning power without harming the environment. Whether you're scrubbing dishes, surfaces, or grout, our brush provides reliable performance with minimal environmental impact.",
    flashSale: true,
    images: {
      cover: "eco_friendly_bamboo_scrub_brush_cover.jpg",
      details: [
        "eco_friendly_bamboo_scrub_brush_detail1.jpg",
        "eco_friendly_bamboo_scrub_brush_detail2.jpg",
        "eco_friendly_bamboo_scrub_brush_detail3.jpg",
      ],
    },
  },
  {
    id: 10,
    name: "Microfiber Cleaning Cloths Set",
    brand: "MicroMagic",
    category: "Cleaning Tools",
    price: 10.99,
    rating: 4.7,
    description:
      "Achieve a spotless clean with our Microfiber Cleaning Cloths Set. Made from ultra-absorbent microfiber material, these cloths trap dust, dirt, and debris with ease, leaving surfaces streak-free and shining. Whether it's countertops, windows, or electronics, our cloths provide gentle yet effective cleaning for all your surfaces.",
    flashSale: false,
    images: {
      cover: "microfiber_cleaning_cloths_set_cover.jpg",
      details: [
        "microfiber_cleaning_cloths_set_detail1.jpg",
        "microfiber_cleaning_cloths_set_detail2.jpg",
        "microfiber_cleaning_cloths_set_detail3.jpg",
      ],
    },
  },
  {
    id: 11,
    name: "Heavy-Duty Oven Cleaner",
    brand: "OvenMaster",
    category: "Oven Cleaning",
    price: 8.49,
    rating: 4.5,
    description:
      "Tackle tough oven grease and grime with our Heavy-Duty Oven Cleaner. Formulated with powerful degreasers and foaming agents, this cleaner cuts through baked-on residues and burnt-on stains, leaving your oven sparkling clean and odor-free. Whether it's baked goods or savory dishes, our cleaner ensures your oven is ready for the next culinary masterpiece.",
    flashSale: false,
    images: {
      cover: "heavy_duty_oven_cleaner_cover.jpg",
      details: [
        "heavy_duty_oven_cleaner_detail1.jpg",
        "heavy_duty_oven_cleaner_detail2.jpg",
        "heavy_duty_oven_cleaner_detail3.jpg",
      ],
    },
  },
  {
    id: 12,
    name: "Pet-Safe Carpet Stain Remover",
    brand: "PawPrint",
    category: "Pet Cleaning",
    price: 12.99,
    rating: 4.8,
    description:
      "Keep your carpets clean and pet-friendly with our Pet-Safe Carpet Stain Remover. Formulated with pet-safe ingredients, this remover effectively lifts and eliminates tough stains and odors caused by pets, leaving your carpets fresh and stain-free. Whether it's urine, vomit, or muddy paw prints, our remover restores your carpets to their original condition.",
    flashSale: true,
    images: {
      cover: "pet_safe_carpet_stain_remover_cover.jpg",
      details: [
        "pet_safe_carpet_stain_remover_detail1.jpg",
        "pet_safe_carpet_stain_remover_detail2.jpg",
        "pet_safe_carpet_stain_remover_detail3.jpg",
      ],
    },
  },
  {
    id: 13,
    name: "Natural Wood Furniture Polish",
    brand: "WoodWise",
    category: "Wood Cleaning",
    price: 9.99,
    rating: 4.6,
    description:
      "Restore the beauty of your wood furniture with our Natural Wood Furniture Polish. Formulated with natural oils and conditioners, this polish nourishes and protects your wood surfaces, enhancing their natural luster and beauty. Whether it's tables, chairs, or cabinets, our polish provides long-lasting protection and a rich, satin finish.",
    flashSale: false,
    images: {
      cover: "natural_wood_furniture_polish_cover.jpg",
      details: [
        "natural_wood_furniture_polish_detail1.jpg",
        "natural_wood_furniture_polish_detail2.jpg",
        "natural_wood_furniture_polish_detail3.jpg",
      ],
    },
  },
  {
    id: 14,
    name: "Disinfecting Bathroom Foam",
    brand: "BathGuard",
    category: "Bathroom Cleaning",
    price: 7.99,
    rating: 4.7,
    description:
      "Keep your bathroom clean and germ-free with our Disinfecting Bathroom Foam. Formulated with powerful disinfectants and foaming agents, this foam penetrates and eliminates germs, bacteria, and viruses on contact, leaving your bathroom surfaces sparkling clean and sanitized. From sinks to shower tiles, our foam delivers unbeatable cleaning power and peace of mind.",
    flashSale: false,
    images: {
      cover: "disinfecting_bathroom_foam_cover.jpg",
      details: [
        "disinfecting_bathroom_foam_detail1.jpg",
        "disinfecting_bathroom_foam_detail2.jpg",
        "disinfecting_bathroom_foam_detail3.jpg",
      ],
    },
  },
  {
    id: 15,
    name: "Multipurpose Grout Cleaner",
    brand: "GroutMaster",
    category: "Tile Cleaning",
    price: 6.49,
    rating: 4.5,
    description:
      "Revitalize your tile grout with our Multipurpose Grout Cleaner. Formulated with powerful cleaning agents and brightening agents, this cleaner lifts dirt, grime, and stains from grout lines, restoring them to their original color and shine. Whether it's in the kitchen, bathroom, or hallway, our cleaner makes grout cleaning quick and easy.",
    flashSale: true,
    images: {
      cover: "multipurpose_grout_cleaner_cover.jpg",
      details: [
        "multipurpose_grout_cleaner_detail1.jpg",
        "multipurpose_grout_cleaner_detail2.jpg",
        "multipurpose_grout_cleaner_detail3.jpg",
      ],
    },
  },
  {
    id: 16,
    name: "Non-Toxic Drain Cleaner",
    brand: "EcoDrain",
    category: "Plumbing Cleaning",
    price: 11.99,
    rating: 4.8,
    description:
      "Keep your drains clear and flowing smoothly with our Non-Toxic Drain Cleaner. Formulated with natural enzymes and eco-friendly ingredients, this cleaner breaks down and dissolves clogs without harming your pipes or the environment. Whether it's hair, grease, or soap scum, our cleaner keeps your drains clean and odor-free.",
    flashSale: false,
    images: {
      cover: "non_toxic_drain_cleaner_cover.jpg",
      details: [
        "non_toxic_drain_cleaner_detail1.jpg",
        "non_toxic_drain_cleaner_detail2.jpg",
        "non_toxic_drain_cleaner_detail3.jpg",
      ],
    },
  },
  {
    id: 17,
    name: "Silk and Wool Delicate Wash",
    brand: "GentleTouch",
    category: "Specialty Fabric Care",
    price: 13.49,
    rating: 4.7,
    description:
      "Keep your delicate fabrics looking like new with our Silk and Wool Delicate Wash. Formulated with gentle cleansers and fabric conditioners, this wash cleans and softens silk, wool, and other delicate fabrics, preserving their color and texture. Whether it's silk blouses or wool sweaters, our wash ensures your delicate garments are cleaned with care.",
    flashSale: false,
    images: {
      cover: "silk_and_wool_delicate_wash_cover.jpg",
      details: [
        "silk_and_wool_delicate_wash_detail1.jpg",
        "silk_and_wool_delicate_wash_detail2.jpg",
        "silk_and_wool_delicate_wash_detail3.jpg",
      ],
    },
  },
  {
    id: 18,
    name: "Dusting Mitts Set",
    brand: "DustBuster",
    category: "Dusting Tools",
    price: 8.99,
    rating: 4.6,
    description:
      "Effortlessly remove dust and dirt from surfaces with our Dusting Mitts Set. Made from ultra-soft microfiber material, these mitts attract and trap dust particles with ease, leaving surfaces clean and polished. Whether it's furniture, electronics, or shelves, our mitts provide gentle yet effective dusting for all your surfaces.",
    flashSale: true,
    images: {
      cover: "dusting_mitts_set_cover.jpg",
      details: [
        "dusting_mitts_set_detail1.jpg",
        "dusting_mitts_set_detail2.jpg",
        "dusting_mitts_set_detail3.jpg",
      ],
    },
  },
  {
    id: 19,
    name: "Industrial Strength Degreaser",
    brand: "GreaseMaster",
    category: "Grease Cleaning",
    price: 14.99,
    rating: 4.9,
    description:
      "Cut through tough grease and oil stains with our Industrial Strength Degreaser. Formulated with powerful solvents and emulsifiers, this degreaser breaks down and removes grease buildup from surfaces, equipment, and machinery with ease. Whether it's in the kitchen, garage, or workshop, our degreaser delivers professional-grade cleaning power.",
    flashSale: false,
    images: {
      cover: "industrial_strength_degreaser_cover.jpg",
      details: [
        "industrial_strength_degreaser_detail1.jpg",
        "industrial_strength_degreaser_detail2.jpg",
        "industrial_strength_degreaser_detail3.jpg",
      ],
    },
  },
  {
    id: 20,
    name: "Streak-Free Window Polish",
    brand: "ClearView",
    category: "Window Cleaning",
    price: 9.49,
    rating: 4.7,
    description:
      "Achieve crystal-clear windows with our Streak-Free Window Polish. Formulated with advanced cleaning agents and streak-reducing technology, this polish removes dirt, grime, and water spots, leaving your windows sparkling clean and streak-free. Whether it's inside or outside windows, our polish provides professional-quality results with minimal effort.",
    flashSale: true,
    images: {
      cover: "streak_free_window_polish_cover.jpg",
      details: [
        "streak_free_window_polish_detail1.jpg",
        "streak_free_window_polish_detail2.jpg",
        "streak_free_window_polish_detail3.jpg",
      ],
    },
  },
];
