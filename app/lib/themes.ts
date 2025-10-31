export interface Theme {
  id: string;
  name: string;
  category: "customizable" | "curated";
  colors: {
    background: string;
    backgroundSecondary?: string;
    primary: string;
    secondary: string;
    accent: string;
    border: string;
    text: string;
    textSecondary: string;
  };
  fonts?: {
    heading?: string;
    body?: string;
  };
}

export const themes: Theme[] = [
  {
    id: "default",
    name: "Default",
    category: "curated",
    colors: {
      background: "#000000",
      backgroundSecondary: "#1a1a1a",
      primary: "#ffffff",
      secondary: "#000000",
      accent: "#ffffff",
      border: "#333333",
      text: "#ffffff",
      textSecondary: "#999999",
    },
  },
  {
    id: "agate",
    name: "Agate",
    category: "curated",
    colors: {
      background:
        "linear-gradient(135deg, #1a4d4d 0%, #2d7a5e 50%, #c8ff00 100%)",
      primary: "#c8ff00",
      secondary: "#1a4d4d",
      accent: "#c8ff00",
      border: "#2d7a5e",
      text: "#ffffff",
      textSecondary: "#c8ff00",
    },
  },
  {
    id: "air",
    name: "Air",
    category: "curated",
    colors: {
      background: "#f5f5f5",
      backgroundSecondary: "#ffffff",
      primary: "#000000",
      secondary: "#ffffff",
      accent: "#000000",
      border: "#e0e0e0",
      text: "#000000",
      textSecondary: "#666666",
    },
  },
  {
    id: "astrid",
    name: "Astrid",
    category: "curated",
    colors: {
      background: "radial-gradient(circle at center, #4a4a4a 0%, #000000 100%)",
      primary: "#ffffff",
      secondary: "#1a1a1a",
      accent: "#888888",
      border: "#333333",
      text: "#ffffff",
      textSecondary: "#aaaaaa",
    },
  },
  {
    id: "aura",
    name: "Aura",
    category: "curated",
    colors: {
      background: "#e8e4d9",
      backgroundSecondary: "#f5f3ed",
      primary: "#8b7355",
      secondary: "#f5f3ed",
      accent: "#8b7355",
      border: "#d4cfc1",
      text: "#4a4035",
      textSecondary: "#8b7355",
    },
  },
  {
    id: "bliss",
    name: "Bliss",
    category: "curated",
    colors: {
      background: "#f0f0f0",
      backgroundSecondary: "#ffffff",
      primary: "#000000",
      secondary: "#ffffff",
      accent: "#000000",
      border: "#d0d0d0",
      text: "#000000",
      textSecondary: "#666666",
    },
  },
  {
    id: "blocks",
    name: "Blocks",
    category: "curated",
    colors: {
      background: "linear-gradient(180deg, #6b2dd6 0%, #d946ef 100%)",
      backgroundSecondary: "#d946ef",
      primary: "#ffffff",
      secondary: "#6b2dd6",
      accent: "#d946ef",
      border: "#8b3de0",
      text: "#ffffff",
      textSecondary: "#f0d9ff",
    },
  },
  {
    id: "bloom",
    name: "Bloom",
    category: "curated",
    colors: {
      background:
        "linear-gradient(135deg, #c41e3a 0%, #5b47d9 50%, #4169e1 100%)",
      backgroundSecondary: "#5b47d9",
      primary: "#ffffff",
      secondary: "#c41e3a",
      accent: "#4169e1",
      border: "#7059e0",
      text: "#ffffff",
      textSecondary: "#e0d9ff",
    },
  },
  {
    id: "breeze",
    name: "Breeze",
    category: "curated",
    colors: {
      background: "linear-gradient(180deg, #e293d3 0%, #ffc9e8 100%)",
      backgroundSecondary: "#ffc9e8",
      primary: "#000000",
      secondary: "#ffc9e8",
      accent: "#e293d3",
      border: "#f0b3dc",
      text: "#000000",
      textSecondary: "#8b4f7a",
    },
  },
  {
    id: "encore",
    name: "Encore",
    category: "curated",
    colors: {
      background: "linear-gradient(180deg, #1a1a1a 0%, #4a2c1a 100%)",
      backgroundSecondary: "#2a2010",
      primary: "#d4a574",
      secondary: "#1a1a1a",
      accent: "#d4a574",
      border: "#4a2c1a",
      text: "#ffffff",
      textSecondary: "#d4a574",
    },
  },
  {
    id: "grid",
    name: "Grid",
    category: "curated",
    colors: {
      background: "#e8e5a0",
      backgroundSecondary: "#ffffff",
      primary: "#000000",
      secondary: "#ffffff",
      accent: "#d4a574",
      border: "#c8c58f",
      text: "#000000",
      textSecondary: "#666666",
    },
  },
  {
    id: "groove",
    name: "Groove",
    category: "curated",
    colors: {
      background:
        "linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 25%, #4ecdc4 75%, #5c7cfa 100%)",
      primary: "#ffffff",
      secondary: "#ff6b6b",
      accent: "#4ecdc4",
      border: "#ee5a6f",
      text: "#ffffff",
      textSecondary: "#fff5f5",
    },
  },
  {
    id: "haven",
    name: "Haven",
    category: "curated",
    colors: {
      background: "#8b7355",
      backgroundSecondary: "#f5f3ed",
      primary: "#f5f3ed",
      secondary: "#6b5745",
      accent: "#d4cfc1",
      border: "#a08872",
      text: "#ffffff",
      textSecondary: "#f5f3ed",
    },
  },
  {
    id: "lake",
    name: "Lake",
    category: "curated",
    colors: {
      background: "#1a1d29",
      backgroundSecondary: "#252938",
      primary: "#ffffff",
      secondary: "#1a1d29",
      accent: "#4a5568",
      border: "#2d3748",
      text: "#ffffff",
      textSecondary: "#a0aec0",
    },
  },
  {
    id: "mineral",
    name: "Mineral",
    category: "curated",
    colors: {
      background: "#faf8f3",
      backgroundSecondary: "#ffffff",
      primary: "#8b7355",
      secondary: "#ffffff",
      accent: "#d4a574",
      border: "#e8e4d9",
      text: "#4a4035",
      textSecondary: "#8b7355",
    },
  },
  {
    id: "nourish",
    name: "Nourish",
    category: "curated",
    colors: {
      background:
        "linear-gradient(135deg, #5a6b2f 0%, #8b9556 50%, #d4e89f 100%)",
      primary: "#ffffff",
      secondary: "#5a6b2f",
      accent: "#d4e89f",
      border: "#7a8b45",
      text: "#ffffff",
      textSecondary: "#d4e89f",
    },
  },
  {
    id: "rise",
    name: "Rise",
    category: "curated",
    colors: {
      background:
        "linear-gradient(135deg, #d4573b 0%, #e8926f 50%, #5c9fd9 100%)",
      primary: "#ffffff",
      secondary: "#d4573b",
      accent: "#5c9fd9",
      border: "#e07a5e",
      text: "#ffffff",
      textSecondary: "#fff5f2",
    },
  },
  {
    id: "sweat",
    name: "Sweat",
    category: "curated",
    colors: {
      background:
        "linear-gradient(135deg, #1a1a3e 0%, #d946ef 50%, #3b82f6 100%)",
      primary: "#ffffff",
      secondary: "#1a1a3e",
      accent: "#d946ef",
      border: "#5b47d9",
      text: "#ffffff",
      textSecondary: "#e0d9ff",
    },
  },
  {
    id: "tress",
    name: "Tress",
    category: "curated",
    colors: {
      background:
        "linear-gradient(135deg, #4a3f2a 0%, #6b5d42 50%, #d4c4a0 100%)",
      primary: "#ffffff",
      secondary: "#4a3f2a",
      accent: "#d4c4a0",
      border: "#6b5d42",
      text: "#ffffff",
      textSecondary: "#d4c4a0",
    },
  },
  {
    id: "twilight",
    name: "Twilight",
    category: "curated",
    colors: {
      background:
        "linear-gradient(180deg, #4a4a6a 0%, #7a6b9a 50%, #d4b3e8 100%)",
      primary: "#ffffff",
      secondary: "#4a4a6a",
      accent: "#d4b3e8",
      border: "#7a6b9a",
      text: "#ffffff",
      textSecondary: "#d4b3e8",
    },
  },
  {
    id: "vox",
    name: "Vox",
    category: "curated",
    colors: {
      background: "#8b0000",
      backgroundSecondary: "#a50000",
      primary: "#ffffff",
      secondary: "#8b0000",
      accent: "#ff4444",
      border: "#a50000",
      text: "#ffffff",
      textSecondary: "#ffcccc",
    },
  },
];

export const getThemeById = (id: string): Theme | undefined => {
  return themes.find((theme) => theme.id === id);
};

export const getThemesByCategory = (
  category: "customizable" | "curated"
): Theme[] => {
  return themes.filter((theme) => theme.category === category);
};

export const defaultTheme =
  themes.find((theme) => theme.id === "default") || themes[0];
