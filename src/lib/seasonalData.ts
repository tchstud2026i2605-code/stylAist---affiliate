
export interface SeasonalInfo {
  season: string;
  celebrities: string[];
  palette: string[];
  explanation: string;
  prototypeColors: {
    skin: string[];
    hair: string[];
    eye: string[];
  };
}

export const SEASONAL_DATA: Record<string, SeasonalInfo> = {
  "Light Spring": {
    season: "Light Spring",
    celebrities: ["Amanda Seyfried", "Blake Lively"],
    palette: ["#FFF6E5", "#FFE3D1", "#F3D3B4", "#FFFACD", "#FFD700", "#FFB6C1", "#98FB98", "#87CEEB"],
    explanation: "Light Spring is sunny, light, and delicate. Your best colors are sunny, playful, and clear with gentle golden undertones.",
    prototypeColors: {
      skin: ["#FFF6E5", "#FFE3D1", "#F3D3B4"],
      hair: ["#F3E5AB", "#E6A884", "#B07C49"],
      eye: ["#7BC8C4", "#A8E6CF", "#C5A059"],
    }
  },
  "True Spring": {
    season: "True Spring",
    celebrities: ["Amy Adams", "Jessica Chastain"],
    palette: ["#FFDFB0", "#F4C38E", "#DCA163", "#FF4500", "#FFD700", "#32CD32", "#FF69B4", "#DAA520"],
    explanation: "True Spring is characterized by absolute warmth. You radiate in pure, saturated, sunny colors with clear golden undertones.",
    prototypeColors: {
      skin: ["#FFDFB0", "#F4C38E", "#DCA163"],
      hair: ["#DE9F4D", "#CB6D35", "#8A5229"],
      eye: ["#A3B86C", "#997D3B", "#7D4F27"],
    }
  },
  "Bright Spring": {
    season: "Bright Spring",
    celebrities: ["Emma Stone", "Julianne Moore"],
    palette: ["#FFFDF0", "#ECC59D", "#A56F3F", "#FF007F", "#FFD700", "#00FF00", "#00FFFF", "#FF4500"],
    explanation: "Bright Spring is high-contrast and vivid. Your features are striking and look spectacular in the most energetic, saturated colors.",
    prototypeColors: {
      skin: ["#FFFDF0", "#ECC59D", "#A56F3F"],
      hair: ["#B55021", "#5C3818", "#1A110B"],
      eye: ["#00B4D8", "#2EC4B6", "#533E2D"],
    }
  },
  "Light Summer": {
    season: "Light Summer",
    celebrities: ["Margot Robbie", "Reese Witherspoon"],
    palette: ["#B0C4DE", "#D8BFD8", "#F08080", "#AFEEEE", "#DB7093", "#E6E6FA", "#B0E0E6", "#DDA0DD"],
    explanation: "Light Summer features are cool, soft, and delicate. Muted pastel tones with blue or pink undertones complement your features perfectly.",
    prototypeColors: {
      skin: ["#FFF0F5", "#FADADD", "#E8D7CE"],
      hair: ["#EEDC82", "#D2B48C", "#C0C0C0"],
      eye: ["#B0E0E6", "#A1CAF1", "#9FAF9E"],
    }
  },
  "True Summer": {
    season: "True Summer",
    celebrities: ["Emily Blunt", "Allison Williams"],
    palette: ["#F5E1D3", "#E3C2B0", "#C49B85", "#4682B4", "#6495ED", "#C71585", "#708090", "#191970"],
    explanation: "True Summer is defining cool essence. You lack warmth and shine in medium-depth, icy, and refreshing cool tones.",
    prototypeColors: {
      skin: ["#F5E1D3", "#E3C2B0", "#C49B85"],
      hair: ["#7A6B58", "#5A4D41", "#3D342E"],
      eye: ["#5C7B8F", "#708090", "#535E55"],
    }
  },
  "Soft Summer": {
    season: "Soft Summer",
    celebrities: ["Jennifer Aniston", "Dakota Johnson"],
    palette: ["#AF9B93", "#C59AA2", "#9E8FA9", "#7F8B9C", "#8B9C90", "#8E7E7A", "#5B8A88", "#4B6561"],
    explanation: "Soft Summer is muted, blended, and smoky. You look radiant in 'dusty' or 'smoked' colors that mirror your subtle, low-contrast features.",
    prototypeColors: {
      skin: ["#EAD2C4", "#D5BCB0", "#BFA598"],
      hair: ["#968370", "#77685D", "#4E433C"],
      eye: ["#6F7E7A", "#5B676D", "#635147"],
    }
  },
  "Soft Autumn": {
    season: "Soft Autumn",
    celebrities: ["Gigi Hadid", "Gisèle Bündchen"],
    palette: ["#F9E4B7", "#E3C193", "#CBB089", "#DEB887", "#BDB76B", "#CD853F", "#556B2F", "#8B4513"],
    explanation: "Soft Autumn is muted, warm, and gentle. Your coloring is best suited for soft, earthy tones and warm neutrals.",
    prototypeColors: {
      skin: ["#F9E4B7", "#F3DCBE", "#E8CEB3", "#E3C193", "#CBB089", "#B8936E"],
      hair: ["#A88052", "#8F6239", "#704221", "#5C4028", "#4A3628"],
      eye: ["#6F7547", "#848B60", "#9E8852", "#6E5536", "#5F6B56", "#7A694B"],
    }
  },
  "True Autumn": {
    season: "True Autumn",
    celebrities: ["Julia Roberts", "Debra Messing"],
    palette: ["#E8B87D", "#D09B5E", "#9E6E38", "#8B4513", "#DA1B00", "#556B2F", "#FF8C00", "#DAA520"],
    explanation: "True Autumn is rich, golden, and spicy. Your features command attention in deep, saturated earthy warmth.",
    prototypeColors: {
      skin: ["#F7DCB9", "#ECC094", "#E8B87D", "#D09B5E", "#9E6E38", "#7A4D27"],
      hair: ["#964B00", "#803010", "#59260B", "#4A2209", "#3A1B07"],
      eye: ["#4E6126", "#556B2F", "#78582B", "#8B5A2B", "#4A3319", "#6A5323"],
    }
  },
  "Dark Autumn": {
    season: "Dark Autumn",
    celebrities: ["Zendaya", "Eva Mendes"],
    palette: ["#C68E4F", "#946132", "#5C3A21", "#450702", "#1B3022", "#661414", "#8B4513", "#3D2B1F"],
    explanation: "Dark Autumn is rich, deep, and warm. You look stunning in heavy, saturated earthy tones with high depth.",
    prototypeColors: {
      skin: ["#F5DEC9", "#E8C8A3", "#DDB187", "#C68E4F", "#946132", "#5C3A21"],
      hair: ["#3D2314", "#2B160A", "#1A0D05", "#160C07", "#2E1C12"],
      eye: ["#3B441B", "#4A3B22", "#3E2723", "#2D1A10", "#283318", "#533D20"],
    }
  },
  "Dark Winter": {
    season: "Dark Winter",
    celebrities: ["Lupita Nyong'o", "Viola Davis"],
    palette: ["#F0E2D5", "#A67B5B", "#42281D", "#4A0413", "#191970", "#004953", "#2E0854", "#121212"],
    explanation: "Dark Winter is deep, cool, and crisp. Your features are dark but very clear, best in the deepest jewel tones.",
    prototypeColors: {
      skin: ["#F0E2D5", "#A67B5B", "#42281D"],
      hair: ["#211510", "#170F0D", "#0B0706"],
      eye: ["#2B1D16", "#1C2826", "#1F2421"],
    }
  },
  "True Winter": {
    season: "True Winter",
    celebrities: ["Anne Hathaway", "Brooke Shields"],
    palette: ["#FFF9F2", "#EAD8C7", "#4A2E2B", "#0000FF", "#FF0000", "#008080", "#C0C0C0", "#2F2F2F"],
    explanation: "True Winter is absolute coolness and very high contrast. You look best in pure, icy, and saturated jewel tones paired with stark neutrals.",
    prototypeColors: {
      skin: ["#FFF9F2", "#EAD8C7", "#4A2E2B"],
      hair: ["#1C1C1C", "#0A0A0A", "#EAEAEA"],
      eye: ["#104E8B", "#006400", "#4B0082"],
    }
  },
  "Bright Winter": {
    season: "Bright Winter",
    celebrities: ["Courtney Cox", "Megan Fox"],
    palette: ["#FFFDF9", "#DFCDBC", "#5C3E35", "#FF00FF", "#00FFFF", "#FF0000", "#1D4ED8", "#FFFFFF"],
    explanation: "Bright Winter is striking, jewel-like brightness. You shine in neon-adjacent, vivid colors that bridge the gap to Spring.",
    prototypeColors: {
      skin: ["#FFFDF9", "#DFCDBC", "#5C3E35"],
      hair: ["#121212", "#2D2421", "#F5F5F5"],
      eye: ["#0077B6", "#480CA8", "#00A896"],
    }
  }
};


