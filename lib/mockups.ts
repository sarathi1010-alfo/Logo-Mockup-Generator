export interface MockupConfig {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  layers: {
    background: string;
    overlay?: string;
    shadow?: string;
  };
  transform: {
    width: number;
    height: number;
    top: number;
    left: number;
    angle?: number;
    scale?: number;
  };
  recommendedBlend?: string;
  seo: {
    title: string;
    description: string;
  };
  variations?: {
    id: string;
    name: string;
    color: string;
    background?: string;
    overlay?: string;
  }[];
}

export const mockups: MockupConfig[] = [
  {
    slug: "coffee-cup",
    title: "Coffee Cup Mockup",
    category: "packaging",
    tags: ["coffee", "cup", "packaging"],
    layers: {
      background: "/mockups/coffee-cup/bg.png",
      overlay: "/mockups/coffee-cup/overlay.png",
    },
    transform: {
      width: 400,
      height: 400,
      top: 300,
      left: 400,
      angle: 0,
    },
    seo: {
      title: "Coffee Cup Logo Mockup",
      description: "Preview your logo on a realistic coffee cup.",
    },
    variations: [
      {
        id: "default",
        name: "Default",
        color: "#ffffff",
      },
      {
        id: "dark",
        name: "Dark Moody",
        color: "#2a2a2a",
      },
      {
        id: "kraft",
        name: "Kraft Paper",
        color: "#d4b895",
      },
    ],
  },
  {
    slug: "tshirt",
    title: "T-Shirt Mockup",
    category: "apparel",
    tags: ["tshirt", "apparel", "clothing"],
    layers: {
      background: "/mockups/tshirt/bg.png",
      overlay: "/mockups/tshirt/overlay.png",
    },
    transform: {
      width: 300,
      height: 300,
      top: 250,
      left: 350,
      angle: 0,
    },
    seo: {
      title: "T-Shirt Logo Mockup",
      description: "Preview your logo on a realistic t-shirt.",
    },
    variations: [
      {
        id: "default",
        name: "White",
        color: "#ffffff",
      },
      {
        id: "black",
        name: "Black",
        color: "#1a1a1a",
      },
      {
        id: "navy",
        name: "Navy",
        color: "#1c2b4d",
      },
    ],
  },
];

export function getMockupBySlug(slug: string): MockupConfig | undefined {
  return mockups.find((m) => m.slug === slug);
}
