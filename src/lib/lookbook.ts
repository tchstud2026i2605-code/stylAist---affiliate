export interface LookbookItem {
  category: "top" | "bottom" | "accessory" | "dress" | "shoes";
  name: string;
  price: string;
  url: string;
  imageUrl: string;
  color?: string;
  description?: string;
  modesty?: 'modest' | 'standard';
  occasion?: string[];
  fit?: 'tight' | 'oversized' | 'standard';
  revealing?: boolean;
  priceValue?: number;
  styleId?: string;
}

export interface LookbookStyle {
  outfitName: string;
  items: LookbookItem[];
}

// 100% Clothes-Only & Product-Only Photography (strictly garments, footwear, accessories - zero people or human parts)
const FREE_IMAGES: Record<string, string[]> = {
  top: [
    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80", // white t-shirt flat lay
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80", // black t-shirt flat lay
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=80", // knit sweater flat lay
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80", // tailored blazer on wooden hanger
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80", // textured knit sweater flat lay
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80", // clean white cotton tee flat lay
    "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80", // folded button down shirt flat lay
    "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80", // dark shirt on wooden hanger
    "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=600&q=80", // linen shirt flat lay
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80"  // crewneck sweatshirt flat lay
  ],
  bottom: [
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80", // folded blue denim jeans flat lay
    "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80", // tailored trousers flat lay
    "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=600&q=80", // folded chinos flat lay
    "https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=600&q=80"  // relaxed trousers flat lay
  ],
  shoes: [
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80", // white sneakers product shot
    "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80", // square toe pumps product shot
    "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80", // leather dress shoes product shot
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80", // chunky sneakers product shot
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80", // lifestyle sneakers flat lay
    "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80", // leather boots product shot
    "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=600&q=80", // chelsea boots product shot
    "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=600&q=80", // sandals studio shot
    "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=600&q=80"  // suede chelsea boots product shot
  ],
  accessory: [
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80", // leather handbag product shot
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80", // sunglasses product shot
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80", // gold pendant necklace on pedestal
    "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80", // classic watch product shot
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80", // leather tote bag product shot
    "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80", // leather belt product shot
    "https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&w=600&q=80", // folded wool scarf
    "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=600&q=80"  // watch on stone pedestal
  ],
  dress: [
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80", // slip dress on wooden hanger
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=600&q=80"  // linen wrap dress on wooden hanger
  ]
};

const STYLE_PALETTES: Record<string, string[]> = {
  minimalist: ["#ECE5DD", "#D8CEBE", "#1A1918", "#7D756C", "#9A8C7D", "#4A4643", "#F5F3EF"],
  urban: ["#171717", "#2D3748", "#4A5568", "#718096", "#E2E8F0", "#C53030", "#3182CE"],
  evening: ["#0F0E17", "#1E1A29", "#3E2723", "#880E4F", "#D4AF37", "#4A148C", "#C5A880"],
  bohemian: ["#A0522D", "#CD853F", "#D2691E", "#BC8F8F", "#8FBC8F", "#DEB887", "#D4A373"],
  quietLuxury: ["#E7E0D3", "#8C7A6B", "#383431", "#5C554E", "#C9B097", "#FAF7F2", "#1C1C1C"]
};

const ITEM_NAME_TEMPLATES: Record<string, Record<string, string[]>> = {
  minimalist: {
    top: ["Clean Minimalist Cotton Tee", "Relaxed Organic Linen Shirt", "Fine-Gauge Ribbed Mockneck", "Structured Tailored Blazer", "Minimalist Cashmere Crewneck", "Boxy Pima Cotton T-Shirt"],
    bottom: ["Tailored Wide-Leg Trousers", "Straight Cut Cotton Chinos", "Structured Wool Pleated Slacks", "Minimalist High-Rise Linen Pants", "Raw Edge Straight Pants"],
    shoes: ["Minimalist Low Leather Sneakers", "Clean Block Heel Square Pumps", "Polished Suede Chelsea Boots", "Sleek Ankle Loafers", "Minimalist Leather Slides"],
    accessory: ["Structured Pebble Leather Tote", "Modern Geometric Metal Necklace", "Classic Slim Leather Belt", "Minimalist Acetate Sunglasses", "Soft Wool Lightweight Scarf"],
    dress: ["Bias-Cut Satin Slip Dress", "Structured Column Midi Dress", "Minimalist Belted Linen Dress", "Ribbed Knit Sleeveless Dress"]
  },
  urban: {
    top: ["Heavyweight Oversized Graphic Tee", "Utility Multi-Pocket Cargo Overshirt", "Drop-Shoulder Fleece Hoodie", "Distressed Denim Trucker Jacket", "Relaxed Boxy Camp Shirt"],
    bottom: ["Relaxed Tapered Cargo Pants", "Washed Selvedge Baggy Denim", "Utility Pleated Skate Trousers", "Industrial Hardware Pants", "Relaxed Heavy Twill Bottoms"],
    shoes: ["Chunky Lug Sole Street Sneakers", "Platform Combat Boots", "Retro Leather Streetwear Trainers", "Urban Vibram Sole Loafers", "All-Weather Technical Sneakers"],
    accessory: ["Crossbody Utility Sling Bag", "Industrial Metal Buckle Belt", "Chunky Chain Link Choker", "Matte Black Oversized Shades", "Technical Corduroy Cap"],
    dress: ["Structured Utility Shirt Dress", "Oversized Streetwear T-Shirt Dress", "Hooded Fleece Casual Dress", "Asymmetric Cargo Detail Midi Dress"]
  },
  evening: {
    top: ["Liquid Silk Halter Top", "Sheer Draped Evening Blouse", "Tailored Velvet Tuxedo Blazer", "Sculptural Draped Corset Top", "Sparkle Textured Satin Camisole"],
    bottom: ["Wide-Leg High-Waist Tuxedo Pants", "Liquid Satin High-Rise Maxi Skirt", "Sequined Tailored Trousers", "Draped Crepe Evening Slacks", "Velvet Flare Trousers"],
    shoes: ["Strappy Stiletto Metallic Sandals", "Pointed Toe Satin Evening Pumps", "Crystal Embellished Mule Heels", "Sculptural Heel Evening Sandal", "Sleek Patent Leather Pumps"],
    accessory: ["Crystal Mesh Evening Clutch", "Gilded Chandelier Drop Earrings", "Layered Fine Sparkle Choker", "Liquid Gold Cuff Bracelet", "Silk Organza Wrap"],
    dress: ["Floor-Length Liquid Silk Gown", "Draped Velvet Column Evening Dress", "Sequined Backless Slip Gown", "Architectural Off-Shoulder Cocktail Dress"]
  },
  bohemian: {
    top: ["Embroidered Gauze Peasant Blouse", "Chunky Artisan Hand-Knit Sweater", "Vintage Wash Linen Tunic", "Crochet Detail Sleeveless Top", "Layered Textured Cotton Blouse"],
    bottom: ["Tiered Floral Gauze Maxi Skirt", "Flared Corduroy Vintage Pants", "Wide-Leg Washed Linen Pants", "Artisan Patchwork Denim Bottom", "Relaxed Crinkle Gauze Trousers"],
    shoes: ["Burnished Suede Ankle Booties", "Woven Leather Artisan Slides", "Lace-Up Espadrille Wedge Sandals", "Distressed Leather Western Boots", "Hand-Tooled Clog Mules"],
    accessory: ["Tooled Leather Saddle Bag", "Layered Turquoise & Brass Necklace", "Hammered Brass Bangle Set", "Woven Straw Fedora", "Vintage Paisley Silk Bandana"],
    dress: ["Tiered Bohemian Floral Maxi Dress", "Embroidered Peasant Midi Dress", "Vintage Paisley Silk Wrap Dress", "Off-Shoulder Crinkle Cotton Gown"]
  },
  quietLuxury: {
    top: ["Pure Cashmere Mockneck Sweater", "Italian Silk Crepe de Chine Shirt", "Double-Faced Wool Camel Blazer", "Ultra-Fine Merino Polo Knit", "Tailored Poplin Button-Down"],
    bottom: ["Pleated Virgin Wool Trousers", "Tailored Off-White Flannel Slacks", "Pressed Crease Gabardine Pants", "Fluid Heavy Silk Charmeuse Skirt", "Tailored Wool-Silk Blend Chinos"],
    shoes: ["Handcrafted Napa Leather Loafers", "Supple Suede Driving Shoes", "Understated Leather Riding Boots", "Classic Kidskin Low Pumps", "Minimalist Cashmere-Lined Mules"],
    accessory: ["Smooth Calfskin Top-Handle Bag", "Minimalist 18K Gold Vermeil Band", "Understated Classic Leather Watch", "Grade-A Cashmere Wrap Shawl", "Fine Saddle Stitch Belt"],
    dress: ["Architectural Wool Knit Day Dress", "Tailored Belted Trench Midi Dress", "Fluid Silk Satin Column Gown", "Minimalist Cashmere-Blend Sweater Dress"]
  }
};

const OCCASIONS: Record<string, string[][]> = {
  minimalist: [["casual", "office"], ["casual"], ["office", "semi-formal"]],
  urban: [["casual"], ["casual", "streetwear"], ["party", "casual"]],
  evening: [["fancy", "semi-formal"], ["fancy", "evening"], ["party"]],
  bohemian: [["casual"], ["casual", "weekend"], ["party", "casual"]],
  quietLuxury: [["office", "semi-formal"], ["casual", "semi-formal"], ["fancy", "office"]]
};

function getRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomPrice(min = 28, max = 180): { formatted: string; val: number } {
  const val = Math.floor(Math.random() * (max - min) + min) + 0.90;
  return { formatted: `$${val.toFixed(2)}`, val };
}

// Procedural generator for an item that is royalty-free and requires no license or allowance
export function generateRandomItem(
  category: "top" | "bottom" | "shoes" | "accessory" | "dress",
  styleKey: string = "minimalist",
  customIndex?: number
): LookbookItem {
  const images = FREE_IMAGES[category] || FREE_IMAGES.top;
  const image = customIndex !== undefined ? images[customIndex % images.length] : getRandom(images);
  
  const styleTemplates = ITEM_NAME_TEMPLATES[styleKey] || ITEM_NAME_TEMPLATES.minimalist;
  const names = styleTemplates[category] || ITEM_NAME_TEMPLATES.minimalist[category];
  const name = customIndex !== undefined ? names[customIndex % names.length] : getRandom(names);

  const colors = STYLE_PALETTES[styleKey] || STYLE_PALETTES.minimalist;
  const color = getRandom(colors);

  const priceObj = getRandomPrice(category === 'accessory' ? 24 : 39, category === 'shoes' || category === 'dress' ? 195 : 125);
  const occasions = getRandom(OCCASIONS[styleKey] || OCCASIONS.minimalist);

  const modesty = (category === 'bottom' || category === 'shoes' || Math.random() > 0.4) ? 'modest' : 'standard';
  const fit = getRandom<LookbookItem['fit']>(['standard', 'oversized', 'tight']);
  const revealing = modesty === 'standard' && fit === 'tight' && Math.random() > 0.6;

  return {
    category,
    name,
    price: priceObj.formatted,
    priceValue: priceObj.val,
    imageUrl: image,
    url: `https://www.google.com/search?q=${encodeURIComponent(name)}+fashion`,
    color,
    description: `A versatile ${category} crafted with fine materials, designed with a ${styleKey} aesthetic. Pair effortlessly with matching wardrobe pieces.`,
    modesty,
    occasion: occasions,
    fit,
    revealing,
    styleId: styleKey
  };
}

// Build a generous pool of royalty-free items for each style
function buildStylePool(styleKey: string, outfitName: string): LookbookStyle {
  const items: LookbookItem[] = [];

  const categories: ("top" | "bottom" | "shoes" | "accessory" | "dress")[] = [
    "top", "top", "top", "top", "top",
    "bottom", "bottom", "bottom", "bottom",
    "shoes", "shoes", "shoes", "shoes",
    "accessory", "accessory", "accessory", "accessory",
    "dress", "dress", "dress"
  ];

  categories.forEach((cat, index) => {
    items.push(generateRandomItem(cat, styleKey, index));
  });

  return {
    outfitName,
    items
  };
}

export const LOOKBOOK: Record<string, LookbookStyle> = {
  minimalist: buildStylePool("minimalist", "Minimalist Luxe Set"),
  urban: buildStylePool("urban", "Urban Edge Curation"),
  evening: buildStylePool("evening", "Evening Elegance Collection"),
  bohemian: buildStylePool("bohemian", "Boho Dream Ensemble"),
  quietLuxury: buildStylePool("quietLuxury", "Quiet Luxury Wardrobe")
};

export function getStyleKey(styleName: string): string | undefined {
  if (!styleName) return undefined;
  const lowerName = styleName.toLowerCase();
  
  if (lowerName.includes("minimalist")) return "minimalist";
  if (lowerName.includes("urban")) return "urban";
  if (lowerName.includes("evening")) return "evening";
  if (lowerName.includes("boho") || lowerName.includes("bohemian")) return "bohemian";
  if (lowerName.includes("quiet") || lowerName.includes("luxury")) return "quietLuxury";

  return Object.keys(LOOKBOOK).find(k => {
    const lowerKey = k.toLowerCase();
    return lowerKey === lowerName || lowerName.includes(lowerKey) || lowerKey.includes(lowerName);
  });
}
