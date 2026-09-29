
export interface OutfitItem {
  category: string;
  name: string;
  url: string;
  imageUrl: string;
  price: string;
  color?: string;
  description?: string;
  styleId?: string;
  modesty?: 'modest' | 'standard';
  occasion?: string[];
  fit?: 'tight' | 'oversized' | 'standard';
  revealing?: boolean;
  priceValue?: number;
}

export interface OutfitFilters {
  maxPrice?: number;
  dislikedColors: string[];
  modesty: 'any' | 'modest';
  occasion: 'casual' | 'fancy' | 'semi-formal' | 'any';
  fit: 'any' | 'tight' | 'oversized' | 'standard' | 'revealing';
  excludeRevealing: boolean;
}

export interface Outfit {
  outfitName: string;
  description: string;
  items: OutfitItem[];
}

const SEASONAL_PALETTES: Record<string, string[]> = {
  "Light Spring": ["#FFF4E6", "#FFE8D6", "#B8E0D2", "#D6E5FA", "#FFFACD", "#E0FFFF", "#FAFAD2", "#FFE4E1"],
  "True Spring": ["#FFD700", "#FF8C00", "#32CD32", "#FF69B4", "#FFA500", "#00FF00", "#FFFF00", "#FF4500"],
  "Bright Spring": ["#FF1493", "#00FF7F", "#00BFFF", "#FFFF00", "#7FFF00", "#FF00FF", "#00FFFF", "#FFD700"],
  "Light Summer": ["#F0F8FF", "#FFF0F5", "#E6E6FA", "#F0FFFF", "#F5F5F5", "#B0E0E6", "#ADD8E6", "#E0FFFF"],
  "True Summer": ["#4682B4", "#5F9EA0", "#B22222", "#000080", "#191970", "#4169E1", "#6495ED", "#0000CD"],
  "Soft Summer": ["#778899", "#BC8F8F", "#D8BFD8", "#F5F5DC", "#C0C0C0", "#BDB76B", "#BC8F8F", "#8FBC8F"],
  "Soft Autumn": ["#8B4513", "#CD853F", "#556B2F", "#A0522D", "#DEB887", "#D2B48C", "#B8860B", "#BDB76B"],
  "True Autumn": ["#D2691E", "#B22222", "#808000", "#8B0000", "#A52A2A", "#8B4513", "#556B2F", "#6B8E23"],
  "Dark Autumn": ["#2F4F4F", "#556B2F", "#8B4513", "#191970", "#334433", "#4A0404", "#123123", "#000000"],
  "Dark Winter": ["#000080", "#4B0082", "#000000", "#191970", "#00008B", "#483D8B", "#2F4F4F", "#000000"],
  "True Winter": ["#000000", "#FFFFFF", "#FF0000", "#0000FF", "#800080", "#00FFFF", "#FF00FF", "#C0C0C0"],
  "Bright Winter": ["#FF00FF", "#00FF00", "#FFFF00", "#00FFFF", "#FF1493", "#0000FF", "#FFFFFF", "#000000"]
};

function normalizeSeason(season: string): string {
  const s = season.toLowerCase();
  if (s.includes("light spring")) return "Light Spring";
  if (s.includes("true spring")) return "True Spring";
  if (s.includes("bright spring")) return "Bright Spring";
  if (s.includes("light summer")) return "Light Summer";
  if (s.includes("true summer")) return "True Summer";
  if (s.includes("soft summer")) return "Soft Summer";
  if (s.includes("soft autumn")) return "Soft Autumn";
  if (s.includes("true autumn")) return "True Autumn";
  if (s.includes("dark autumn")) return "Dark Autumn";
  if (s.includes("dark winter")) return "Dark Winter";
  if (s.includes("true winter")) return "True Winter";
  if (s.includes("bright winter")) return "Bright Winter";
  if (s.includes("spring")) return "True Spring";
  if (s.includes("summer")) return "True Summer";
  if (s.includes("autumn")) return "True Autumn";
  if (s.includes("winter")) return "True Winter";
  return "True Winter";
}

// Helper to calculate color similarity
function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function colorDistance(hex1: string, hex2: string): number {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);
  if (!rgb1 || !rgb2) return 1000;
  return Math.sqrt(
    Math.pow(rgb1.r - rgb2.r, 2) +
    Math.pow(rgb1.g - rgb2.g, 2) +
    Math.pow(rgb1.b - rgb2.b, 2)
  );
}

function getItemPrice(item: OutfitItem): number {
  if (item.priceValue !== undefined) return item.priceValue;
  if (!item.price) return 0;
  const matches = item.price.match(/(\d+(\.\d+)?)/);
  return matches ? parseFloat(matches[1]) : 0;
}

export function pickOutfitDeterministic(season: string, styleItems: OutfitItem[], filters?: OutfitFilters): Outfit {
  const canonicalSeason = normalizeSeason(season);
  const palette = SEASONAL_PALETTES[canonicalSeason];

  // Apply filters
  let filteredItems = styleItems;
  if (filters) {
    filteredItems = styleItems.filter(item => {
      // Basic Price filter: individual items shouldn't exceed the total budget
      if (filters.maxPrice && getItemPrice(item) > filters.maxPrice) return false;
      
      // Color filter
      if (item.color && filters.dislikedColors.some(c => colorDistance(item.color!, c) < 20)) return false;
      
      // Modesty filter
      if (filters.modesty === 'modest') {
        if (item.modesty === 'modest') return true;
        
        const nameLower = item.name.toLowerCase();
        const descLower = (item.description || "").toLowerCase();
        
        const modestKeywords = ['long', 'maxi', 'midi', 'trousers', 'pants', 'turtleneck', 'skirt', 'sweater', 'blazer', 'cardigan'];
        const isActuallyModest = modestKeywords.some(k => nameLower.includes(k) || descLower.includes(k));
        
        const revealingKeywords = ['crop', 'mini', 'short sleeve', 'strapless', 'halter', 'sleeveless', 'bra', 'bikini', 'cutoff'];
        const isExplicitlyRevealing = revealingKeywords.some(k => nameLower.includes(k) || descLower.includes(k)) || item.revealing;
        
        if (!isActuallyModest || isExplicitlyRevealing) return false;
      }

      // Occasion filter
      if (filters.occasion !== 'any') {
        const itemOccasions = item.occasion || [];
        // If item has no explicit occasion, don't filter it out for 'casual' as it's a safe bet
        if (itemOccasions.length === 0) {
          if (filters.occasion !== 'casual') return false;
        } else if (!itemOccasions.includes(filters.occasion)) {
          return false;
        }
      }

      // Fit filter
      if (filters.fit !== 'any' && item.fit && item.fit !== filters.fit) return false;

      // Revealing filter
      if (filters.excludeRevealing && item.revealing) return false;

      return true;
    });

    // If we filtered too aggressively, fallback to less strict filtering
    if (filteredItems.length < 5) filteredItems = styleItems;
  }
  
  // Find out how many styles we are blending
  const styleIds = Array.from(new Set(filteredItems.map(i => i.styleId).filter(Boolean))) as string[];
  const isBlending = styleIds.length > 1;

  // Scorer: lower is better
  const scoreItem = (item: OutfitItem) => {
    if (!item.color) return 50 + Math.random() * 20; 
    const distances = palette.map(p => colorDistance(item.color!, p));
    // High randomness factor to ensure "Regenerate" feels different
    return Math.min(...distances) + Math.random() * 50; 
  };

  const categories = {
    top: filteredItems.filter(i => i.category === "top").sort((a,b) => scoreItem(a) - scoreItem(b)),
    bottom: filteredItems.filter(i => i.category === "bottom").sort((a,b) => scoreItem(a) - scoreItem(b)),
    accessory: filteredItems.filter(i => i.category === "accessory").sort((a,b) => scoreItem(a) - scoreItem(b)),
    dress: filteredItems.filter(i => i.category === "dress").sort((a,b) => scoreItem(a) - scoreItem(b)),
    shoes: filteredItems.filter(i => i.category === "shoes").sort((a,b) => scoreItem(a) - scoreItem(b))
  };

  // Top choices for each category
  const topChoices = {
    top: categories.top.slice(0, 15),
    bottom: categories.bottom.slice(0, 15),
    accessory: categories.accessory.slice(0, 15),
    dress: categories.dress.slice(0, 15),
    shoes: categories.shoes.slice(0, 15)
  };

  let selectedItems: OutfitItem[] = [];
  let name = "";
  let desc = "";

  // Helper to pick items with total budget check
  const pickWithBudget = (pool1: OutfitItem[], pool2: OutfitItem[], pool3: OutfitItem[]) => {
    if (pool1.length === 0 || pool2.length === 0 || pool3.length === 0) return null;
    
    // Try to find a combination within budget
    for (let i = 0; i < 20; i++) {
      const itm1 = pool1[Math.floor(Math.random() * pool1.length)];
      const itm2 = pool2[Math.floor(Math.random() * pool2.length)];
      const itm3 = pool3[Math.floor(Math.random() * pool3.length)];
      
      const totalPrice = getItemPrice(itm1) + getItemPrice(itm2) + getItemPrice(itm3);
      
      if (!filters?.maxPrice || totalPrice <= filters.maxPrice) {
        return [itm1, itm2, itm3];
      }
    }
    
    // Fallback if no combination found: pick the cheapest ones
    const sortedPool1 = [...pool1].sort((a, b) => getItemPrice(a) - getItemPrice(b));
    const sortedPool2 = [...pool2].sort((a, b) => getItemPrice(a) - getItemPrice(b));
    const sortedPool3 = [...pool3].sort((a, b) => getItemPrice(a) - getItemPrice(b));
    return [sortedPool1[0], sortedPool2[0], sortedPool3[0]];
  };

  // Decide Structure: (Top, Bottom, Shoes) OR (Dress, Accessory, Shoes)
  const canDoDress = topChoices.dress.length > 0 && topChoices.accessory.length >= 1 && topChoices.shoes.length >= 1;
  const canDoStandard = topChoices.top.length > 0 && topChoices.bottom.length > 0 && topChoices.shoes.length >= 1;

  const useDressStructure = canDoDress && (!canDoStandard || Math.random() > 0.5);

  if (useDressStructure) {
    const combo = pickWithBudget(topChoices.dress, topChoices.accessory, topChoices.shoes);
    if (combo) {
      selectedItems = combo;
      const dress = combo[0];
      name = `${canonicalSeason} ${dress.styleId || ''} Evening`;
      desc = `A refined look featuring a ${dress.name} paired with curated accessories, optimized for your ${canonicalSeason} palette. Total: $${(getItemPrice(combo[0]) + getItemPrice(combo[1]) + getItemPrice(combo[2])).toFixed(2)}`;
    }
  } 
  
  // If we didn't get standard items or choice failed, try standard
  if (selectedItems.length === 0 && canDoStandard) {
    const combo = pickWithBudget(topChoices.top, topChoices.bottom, topChoices.shoes);
    if (combo) {
      selectedItems = combo;
      const top = combo[0];
      name = isBlending ? `Blended ${styleIds.join(' & ')} Selection` : `${canonicalSeason} ${top.styleId || ''} Daily`;
      desc = isBlending 
        ? `A curated fusion of ${styleIds[0]} and ${styleIds[1]} pieces, unified by ${canonicalSeason} coloring. Total: $${(getItemPrice(combo[0]) + getItemPrice(combo[1]) + getItemPrice(combo[2])).toFixed(2)}`
        : `A harmonized look centered on the ${top.name}, selected for your individual coloring. Total: $${(getItemPrice(combo[0]) + getItemPrice(combo[1]) + getItemPrice(combo[2])).toFixed(2)}`;
    }
  }

  // Final fallback if everything else failed: force one of the structures
  if (selectedItems.length === 0) {
    if (topChoices.top.length > 0 && topChoices.bottom.length > 0 && topChoices.shoes.length > 0) {
       selectedItems = [
         topChoices.top[0], 
         topChoices.bottom[0], 
         topChoices.shoes[0]
       ];
    } else if (topChoices.dress.length > 0 && topChoices.accessory.length > 0 && topChoices.shoes.length > 0) {
       selectedItems = [
         topChoices.dress[0], 
         topChoices.accessory[0], 
         topChoices.shoes[0]
       ];
    } else {
      // Emergency: just 3 items, try to pick one of each if possible but this is unlikely to be reached
      const sorted = [...styleItems].sort(() => 0.5 - Math.random());
      selectedItems = sorted.slice(0, 3);
    }
    name = `${canonicalSeason} Essential`;
    desc = `A versatile mix of pieces selected to complement your ${canonicalSeason} features.`;
  }

  return {
    outfitName: name,
    description: desc,
    items: selectedItems
  };
}
