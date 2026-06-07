import { generateToolMetadata } from '@/lib/metadata'
import { seoData } from '@/lib/seo-data'
import { generateSoftwareSchema } from '@/lib/seo'

export async function generateMetadata() {
  const toolData = seoData.clusters.find(c => c.id === 'color')?.tools.find(t => t.id === 'rgb-to-hsl')

  if (!toolData) {
    return {}
  }

  return generateToolMetadata({
    toolName: toolData.name,
    cluster: 'color',
    primaryAction: toolData.primaryAction,
    inputType: toolData.inputType,
    outputType: toolData.outputType,
    keyBenefit: toolData.keyBenefit,
    slug: toolData.slug,
  })
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const toolData = seoData.clusters.find(c => c.id === 'color')?.tools.find(t => t.id === 'rgb-to-hsl')

  const schema = toolData ? generateSoftwareSchema({
    name: toolData.name,
    description: `Easily ${toolData.primaryAction} ${toolData.inputType} to ${toolData.outputType} online. ${toolData.keyBenefit}.`,
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/tools/color/rgb-to-hsl`
  }) : null

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      )}
      {children}
    </>
  )
}