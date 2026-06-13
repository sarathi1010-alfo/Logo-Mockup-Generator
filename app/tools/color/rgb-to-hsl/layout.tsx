import { seoData } from '@/lib/seo-data'
import { resolveMetadata } from '@/lib/seo/resolveMetadata'
import { buildToolMeta } from '@/lib/seo/metaFactories'
import { JsonLd } from '@/components/JsonLd'
import { buildSoftwareApplicationSchema, buildBreadcrumbSchema } from '@/lib/seo/buildSchema'

export async function generateMetadata() {
  const toolData = seoData.clusters.find(c => c.id === 'color')?.tools.find(t => t.id === 'rgb-to-hsl')

  if (!toolData) {
    return {}
  }

  return resolveMetadata(buildToolMeta(toolData, 'color'))
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const toolData = seoData.clusters.find(c => c.id === 'color')?.tools.find(t => t.id === 'rgb-to-hsl')

  const meta = toolData ? buildToolMeta(toolData, 'color') : null;

  return (
    <>
      {meta && <JsonLd schema={buildSoftwareApplicationSchema(meta)} />}
      {meta?.breadcrumbs && <JsonLd schema={buildBreadcrumbSchema(meta.breadcrumbs)} />}
      {children}
    </>
  )
}