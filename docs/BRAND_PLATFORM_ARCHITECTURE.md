# MockBrand: Next-Gen Brand Visualization Platform Architecture

This document outlines the architecture and implementation plan for transforming MockBrand from a simple mockup utility into a premium "visual brand presentation platform".

## 1. UI/UX Design System (Cinematic & Trust-Building)

**Design Philosophy:** Cinematic, polished, modern SaaS. The interface must inspire trust and convey a high-end emotional "Wow Factor".
**Reference Aesthetics:** Framer, Canva, Renderforest, Mockey, Apple Product Pages.

### Core Principles
- **Dark Mode Default with Deep Contrasts:** Rich blacks, deep slates, and subtle glowing accents to make user brand assets pop.
- **Glassmorphism & Depth:** Soft drop shadows, frosted glass panels (`backdrop-blur`), and layered z-index structures to create an immersive, deep environment.
- **Micro-Interactions:** Fluid animations (Framer Motion) on hover states, smooth page transitions, and elegant loading skeletons.
- **Cinematic Previews:** Edge-to-edge imagery where possible. Removing borders and letting the mockup fill the canvas to increase realism.
- **Typography:** High-end sans-serif fonts (Geist, Inter, or SF Pro) with strong hierarchy. Large, evocative headings.

### Layout Structure
- **Persistent Creative Workspace Sidebar:** Collapsible navigation housing saved projects, mood boards, brand kits, and export history.
- **Hero Presentation Area:** A large, central stage for viewing the active mockup or scene with minimal UI clutter around it.
- **Contextual Floating Action Bars (FABs):** Toolbars that appear only when an element is selected or hovering, keeping the primary view clean.
- **"Theater Mode":** A full-screen mode specifically for presenting the Brand Presentation Mode/Pitch Deck without UI distractions.

## 2. Core Logic Pseudo-Code

### Perspective Mapping (Smart Perspective Placement)
To map a 2D logo onto a 3D-like surface realistically without external APIs.

```javascript
// Pseudo-code for calculating perspective matrix transformation using Fabric.js
function applyPerspectiveMapping(logoElement, mockupLayerData) {
  // mockupLayerData contains the 4 corner points of the target surface in the mockup
  const targetCorners = mockupLayerData.perspectiveCorners;

  // Calculate transformation matrix to warp the rectangular logo to the 4 corner polygon
  const matrix = calculatePerspectiveMatrix(
    { width: logoElement.width, height: logoElement.height },
    targetCorners
  );

  logoElement.set({
    transformMatrix: matrix,
    // Apply environmental lighting adjustments
    globalCompositeOperation: mockupLayerData.blendMode || 'multiply',
    opacity: mockupLayerData.opacity || 0.9,
    shadow: new fabric.Shadow({
       color: mockupLayerData.shadowColor,
       blur: mockupLayerData.shadowBlur,
       offsetX: mockupLayerData.shadowOffsetX,
       offsetY: mockupLayerData.shadowOffsetY
    })
  });

  return logoElement;
}
```

### Mood Adaptation (Mockup Mood System)
Applying rule-based heuristics to adjust the styling based on the selected mood.

```javascript
// Pseudo-code for Mood-based heuristics
const MOOD_PROFILES = {
  luxury: { filters: ['high-contrast', 'desaturate'], lighting: 'dramatic', overlay: 'gold-tint' },
  startup: { filters: ['brighten', 'saturate'], lighting: 'soft', overlay: 'clean-white' },
  cyberpunk: { filters: ['neon-glow', 'high-contrast'], lighting: 'dark', overlay: 'magenta-cyan' },
  minimal: { filters: ['grayscale-bg'], lighting: 'flat', overlay: 'none' }
};

function applyMood(sceneContext, moodProfileId) {
  const profile = MOOD_PROFILES[moodProfileId];

  // Apply Canvas or CSS filters to the background image
  sceneContext.background.applyFilters(profile.filters);

  // Adjust logo blending based on lighting
  sceneContext.logoLayer.setLighting(profile.lighting);

  // Provide AI-ish Layout Suggestion
  if (moodProfileId === 'luxury' && sceneContext.logo.hasBrightColors) {
     ui.showSuggestion("Luxury brands often benefit from monochrome or metallic logo variants on this background.");
  }
}
```

## 3. Data Models

```typescript
// Core Data Models

type BrandKit = {
  id: string;
  userId: string;
  name: string;
  logos: { primary: string, secondary: string, icon: string }; // URLs to stored assets
  colors: { primary: string, secondary: string, accent: string, background: string };
  typography: { headingFont: string, bodyFont: string };
  defaultMood: string; // e.g., 'minimal'
};

type MockupScene = {
  id: string;
  title: string;
  slug: string;
  category: 'packaging' | 'device' | 'apparel' | 'storefront' | 'social';
  tags: string[]; // for SEO and searching
  assets: {
    backgroundUrl: string;
    depthMapUrl?: string; // For advanced lighting/perspective
    videoTemplateUrl?: string; // For video mockups
  };
  smartLayers: Array<{
    id: string;
    type: 'logo' | 'text' | 'color-fill';
    perspectiveCorners: [{x: number, y: number}, {x: number, y: number}, {x: number, y: number}, {x: number, y: number}];
    blendMode: string;
    lightingConfig: any;
  }>;
};

type UserProject = {
  id: string;
  userId: string;
  name: string;
  brandKitId: string;
  savedScenes: Array<{
    sceneId: string;
    customizations: any; // Overrides applied by user
    previewThumbnailUrl: string;
  }>;
  createdAt: Date;
  updatedAt: Date;
};

type SceneCollection = {
  id: string;
  title: string; // e.g., "One-Click Startup Launch Pack"
  description: string;
  sceneIds: string[];
  layoutType: 'grid' | 'presentation' | 'carousel';
};
```

## 4. PWA and Mobile-First Considerations

- **Responsive Canvas:** The core Fabric.js workspace must flawlessly scale down to mobile viewports. Utilize pinch-to-zoom and pan gestures for precision editing on touch screens.
- **PWA Installation:** Configure `manifest.json` and service workers to allow users to "Install App" on their home screens, reinforcing the "platform" positioning.
- **Offline Capabilities:** Cache recent Brand Kits, base fonts, and core UI assets so the app loads instantly, even on poor connections.
- **Mobile Export Flow:** Optimize the export process for mobile native sharing (using the Web Share API to easily push mockups directly to Instagram, Slack, etc.).
- **Bottom Navigation/Sheets:** On mobile, move complex sidebars into bottom drawer sheets that easily swipe away.

## 5. SEO Page Template Architecture

Programmatic SEO (pSEO) is central to dominating creator search traffic.

**URL Structure:**
- `/mockups/[category]` (e.g., `/mockups/business-card`)
- `/mockups/[category]/[slug]` (e.g., `/mockups/iphone/15-pro-minimal-desk`)
- `/use-case/[audience]-branding` (e.g., `/use-case/startup-branding`)

**SEO Page Template Architecture (`app/mockups/[category]/page.tsx`):**
1. **Dynamic Meta Tags:** Generated via `lib/metadata.ts` injecting highly specific long-tail keywords ("Free Realistic [Category] Mockup Generator").
2. **JSON-LD Schema:** `SoftwareApplication` schema for the tool itself, and `FAQPage` schema addressing common questions about the category.
3. **Hero Section:** Highly relevant H1 and immediate access to the tool with a pre-loaded category-specific default image.
4. **Interactive Component:** The mockup generator configured specifically for the category (reducing friction).
5. **Gallery / Inspiration:** "Trending [Category] Mockups created by the community" (User-generated content for constant fresh DOM updates).
6. **Internal Linking Grid:** Links to related clusters (`/mockups/packaging`, `/mockups/apparel`) to distribute link equity.

## 6. Phased Roadmap

### Phase 1: Core Realism & The Scene Engine (Highest ROI)
*Establish the baseline quality needed for premium positioning.*
1. Build the "Brand Scene Engine" component to replace simple object mockups.
2. Implement Smart Perspective Placement (Fabric.js transforms, blend modes, shadows).
3. Redesign Homepage & UI to the new cinematic, dark-mode/glassmorphism design language.

### Phase 2: Workflows & Automation
*Transition from tool to platform.*
1. Implement Smart Brand Kits (upload logo/colors once, apply everywhere).
2. Launch "One-Click Startup Launch Pack" (Collection generation).
3. Build the persistent Mockup Workspace (save projects, folders).

### Phase 3: Emotional Wow Factor & Growth Loops
*Drive viral sharing and massive traffic.*
1. Develop Video Mockups (CSS animations/canvas recording for rotating elements/scrolling sites).
2. Implement Mood-Based Mockups (rule-based lighting/filter shifting).
3. Roll out the massive Programmatic SEO generation for hundreds of specific use-cases.
4. Launch the Public Showcase Gallery (User Generated Content engine).

### Phase 4: Ecosystem Expansion
*Lock users into the suite.*
1. Seamless API/Data integration with BrandForge, PaletteFlow, and FontFusion.
2. Build the Brand Presentation Mode (Pitch deck generation).
3. Print-On-Demand ready high-res export pipelines.
