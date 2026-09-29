import { LookbookItem, LOOKBOOK, getStyleKey } from "./lookbook";
import { pickOutfitDeterministic, OutfitFilters } from "./outfitEngine";

export interface OutfitItem {
  category: string;
  name: string;
  url: string;
  imageUrl: string;
  price: string;
  color?: string;
  description?: string;
  styleId?: string;
}

export interface Outfit {
  outfitName: string;
  description: string;
  items: OutfitItem[];
}

export async function generateOutfitRecommendations(season: string, styles: string | string[], filters?: OutfitFilters): Promise<Outfit> {
  try {
    const styleArray = Array.isArray(styles) ? styles : styles.split(',').map(s => s.trim());
    
    let allItems: LookbookItem[] = [];
    const matchedStyleKeys: string[] = [];

    styleArray.forEach(styleName => {
      const styleKey = getStyleKey(styleName);
      if (styleKey && LOOKBOOK[styleKey]) {
        const itemsWithStyle = LOOKBOOK[styleKey].items.map(item => ({
          ...item,
          styleId: styleKey
        }));
        allItems = [...allItems, ...itemsWithStyle];
        matchedStyleKeys.push(styleKey);
      }
    });

    if (allItems.length === 0) {
      allItems = LOOKBOOK.minimalist.items.map(item => ({
        ...item,
        styleId: 'minimalist'
      }));
      matchedStyleKeys.push('minimalist');
    }

    // Use deterministic logic
    const result = pickOutfitDeterministic(season, allItems as any[], filters);
    return result;
  } catch (error) {
    console.error("Outfit generation error:", error);
    throw new Error("Failed to generate your personalized outfit. Please try again.");
  }
}
