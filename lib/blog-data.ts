export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  content: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-is-a-logo-mockup',
    title: 'The Complete Guide to Logo Mockups — Everything You Need to Know',
    description: 'Learn what a logo mockup is, why it is essential for client presentations, and how to create photorealistic mockups instantly.',
    date: '2026-06-26',
    author: 'MockBrand Editorial Team',
    category: 'Fundamentals',
    content: `
      <h2>The best way to present a logo is by using a realistic mockup because it helps clients visualize the brand in the real world, increasing approval rates and perceived value.</h2>
      <p>A logo mockup is a template that allows you to showcase your logo design in a realistic environment, such as on a coffee cup, a storefront, or a business card. Instead of presenting a flat, 2D logo on a white background, mockups provide context and scale.</p>

      <h3>Why You Need Logo Mockups for Client Presentations</h3>
      <ul>
        <li><strong>Context:</strong> Shows how the logo works in practical applications.</li>
        <li><strong>Professionalism:</strong> Elevates your presentation and makes your work look premium.</li>
        <li><strong>Client Understanding:</strong> Helps non-designers visualize the final product.</li>
      </ul>

      <h3>How to Choose the Right Mockup for Your Logo</h3>
      <p>When selecting a mockup, consider the brand's industry and target audience. A coffee shop logo belongs on a mug or storefront, while a tech startup logo might look best on a laptop or smartphone screen.</p>

      <p>With MockBrand, you can instantly preview your logo across dozens of high-quality mockups without needing Photoshop or complex software.</p>
    `,
  },
  {
    slug: 'coffee-cup-logo-mockup-guide',
    title: 'Coffee Cup Logo Mockup — Complete Guide & Best Practices',
    description: 'Discover how to create the perfect coffee cup logo mockup for cafes, roasters, and restaurants.',
    date: '2026-06-27',
    author: 'MockBrand Editorial Team',
    category: 'Mockup Types',
    content: `
      <h2>The best coffee cup mockups feature realistic lighting, natural shadows, and proper curvature to make your brand identity look authentic and premium.</h2>
      <p>Whether you're designing for a local café, a national coffee chain, or a boutique roaster, presenting your logo on a realistic coffee cup mockup is essential. It bridges the gap between digital design and physical reality.</p>

      <h3>What Makes a Great Coffee Cup Mockup</h3>
      <ul>
        <li><strong>Photorealism:</strong> The texture of the cup (matte vs. glossy) should match the brand vibe.</li>
        <li><strong>Lighting and Shadow:</strong> Proper lighting ensures the logo doesn't look flat or "pasted on."</li>
        <li><strong>Perspective:</strong> The logo must curve naturally around the cylindrical shape of the cup.</li>
      </ul>

      <h3>Best Use Cases</h3>
      <p>Coffee cup mockups are not just for coffee shops. They are great for corporate branding, tech startup swag, and lifestyle brands looking to showcase a cozy, relatable image.</p>
    `,
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
