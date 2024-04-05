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
        "https://www.seventhgeneration.ca/sk-eu/content/dam/brands/seventh_generation/global_use/1638061-22829-8-9-svg-25oz-citrusginger-dishliq-r4-front-copy.jpg.rendition.767.767.jpg",
      details: [
        "https://www.seventhgeneration.ca/sk-eu/content/dam/brands/seventh_generation/global_use/1638061-22829-8-9-svg-25oz-citrusginger-dishliq-r4-front-copy.jpg.rendition.767.767.jpg",
        "https://www.americafreshclean.com/wp-content/uploads/dish-soap-CITRUS_860-400x470.png",
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
        "https://images.othoba.com/images/thumbs/0048410_glitter-glass-cleaner-500ml.jpeg",
      details: [
        "https://images.othoba.com/images/thumbs/0048410_glitter-glass-cleaner-500ml.jpeg",
        "https://chaldn.com/_mpimage/magiclean-glass-cleaner-500-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D110892&q=best&v=1",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUCcn4HDecAQKY6u3nHdzJc57VxRIe-OzAkJgFtJHf-EdTwAt8DXcuPA5FmfApeRU-9Lc&usqp=CAU",
      details: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUCcn4HDecAQKY6u3nHdzJc57VxRIe-OzAkJgFtJHf-EdTwAt8DXcuPA5FmfApeRU-9Lc&usqp=CAU",
        "https://cdn2.tellmebaby.com.au/wp-content/uploads/2017/09/milton-antibacterial-surface-wipes-new-30pk.jpg",
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
        "https://m.media-amazon.com/images/I/71LyjbFvYCL._SL1500_.jpg",
      details: [
        "https://m.media-amazon.com/images/I/71LyjbFvYCL._SL1500_.jpg",
        "https://i5.walmartimages.com/seo/Lysol-All-Purpose-Cleaner-Spray-Mandarin-Ginger-Lily-32-oz-Brand-New-Day-Tested-Proven-to-Kill-COVID-19-Virus-Packaging-May-Vary_7b5a3140-bac0-42cf-8505-d97a82f94d21_1.dc816c475f97cd0d1960f42322e423c8.jpeg",
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
        "https://images.othoba.com/images/thumbs/0322239_magiclean-floor-cleaner-fresh-lemon-2-liters.jpeg",
      details: [
        "https://images.othoba.com/images/thumbs/0322239_magiclean-floor-cleaner-fresh-lemon-2-liters.jpeg",
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Doctor_Bai_Refreshing_Lemon_Power_Form_F-Doctor_Bai-91dc1-375695.png",
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
        "https://fixit.com.bd/wp-content/uploads/2023/09/DSC_0941-26-1020.webp",
      details: [
        "https://fixit.com.bd/wp-content/uploads/2023/09/DSC_0941-26-1020.webp",
        "https://m.media-amazon.com/images/I/71UB0Jks6qL._AC_SL1500_.jpg",
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
        "https://m.media-amazon.com/images/I/81wczlTw9-L.jpg",
      details: [
        "https://m.media-amazon.com/images/I/81wczlTw9-L.jpg",
        "https://i5.walmartimages.com/asr/42231421-c5bd-475e-8aaf-7057ce0ad8ea.f339e7bfccf142c979754d3052bcea4d.jpeg",
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
        "https://www.cloroxmalaysia.com/wp-content/uploads/sites/11/2019/01/050618-MMR-Packshot_960-cropped.png",
      details: [
        "https://www.cloroxmalaysia.com/wp-content/uploads/sites/11/2019/01/050618-MMR-Packshot_960-cropped.png",
        "https://i5.walmartimages.com/seo/Lysol-Mold-Mildew-Remover-Spray-with-Bleach-Disinfects-Cleans-and-Removes-Stains-For-Bathrooms-Showers-and-Kitchens-32oz_ac723e6e-e545-4e4e-bc5b-39742376ad01.e9456925d513de095cf38e879cdc82b0.jpeg",
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
        "https://weavvehome.com/cdn/shop/products/CHR04098.jpg?v=1690741030&width=2000",
      details: [
        "https://weavvehome.com/cdn/shop/products/CHR04098.jpg?v=1690741030&width=2000",
        "https://weavvehome.com/cdn/shop/products/CHR04147.jpg?v=1690741030&width=2000",
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
        "https://www.sscamerabd.com/wp-content/uploads/2022/08/SKU.1692-1-518x518-1.jpg",
      details: [
        "https://www.sscamerabd.com/wp-content/uploads/2022/08/SKU.1692-1-518x518-1.jpg",
        "https://m.media-amazon.com/images/I/61dSQPIrT0L._AC_UF1000,1000_QL80_.jpg",
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
        "https://m.media-amazon.com/images/I/61xi+JUlMeL._AC_SL1273_.jpg",
      details: [
        "https://m.media-amazon.com/images/I/61xi+JUlMeL._AC_SL1273_.jpg",
        "https://target.scene7.com/is/image/Target/GUEST_0f04d54f-dfe5-44e8-8e3b-22a6af5fc998?wid=488&hei=488&fmt=pjpeg",
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
        "https://www.doncastercarpetcleaners.co.uk/wp-content/uploads/2021/09/Pet-safe-Carpet-Stain-Remover.jpg",
      details: [
        "https://www.doncastercarpetcleaners.co.uk/wp-content/uploads/2021/09/Pet-safe-Carpet-Stain-Remover.jpg",
        "https://www.thesprucepets.com/thmb/Ev89UNkAPn_t3ZlzeUV0vQrSkUQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sps-product-oxiclean-carpet-area-rug-stain-remover-spray-jthompson-0173-e94691d301c847e0a057f2cb71f3d1f7.jpg",
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
        "https://m.media-amazon.com/images/I/51C8UH6hd3L._AC_UF1000,1000_QL80_.jpg",
      details: [
        "https://m.media-amazon.com/images/I/51C8UH6hd3L._AC_UF1000,1000_QL80_.jpg",
        "https://housewifehowtos.com/wp-content/uploads/2024/01/homemade-furniture-polish-recipe.jpg",
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
        "https://www.clorox.ca/wp-content/uploads/sites/20/2019/01/Clorox_Spraus_FOAMER_500x960.png",
      details: [
        "https://www.clorox.ca/wp-content/uploads/sites/20/2019/01/Clorox_Spraus_FOAMER_500x960.png",
        "https://www.rbnainfo.com/ppmsds_uploaddata/images/productline/07940-Lysol%20Disinfectant%20Bathroom%20Foam%20Cleaner.jpg",
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
        "https://m.media-amazon.com/images/I/61M6x57ct2L._AC_UF894,1000_QL80_.jpg",
      details: [
        "https://m.media-amazon.com/images/I/61M6x57ct2L._AC_UF894,1000_QL80_.jpg",
        "https://hips.hearstapps.com/hmg-prod/images/gh-best-grout-cleaners-65a95e4a6312c.png?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
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
        "https://www.drainbo.com/wp-content/uploads/2019/08/16oz-Drain-Cleaner-1000x1000.png",
      details: [
        "https://www.drainbo.com/wp-content/uploads/2019/08/16oz-Drain-Cleaner-1000x1000.png",
        "https://www.drainbo.com/wp-content/uploads/2020/08/64oz-drain-with-gtw-square.png",
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      ],
    },
  },
];
