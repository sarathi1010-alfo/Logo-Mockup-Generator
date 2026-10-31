import { Metadata } from 'next'

export interface ToolMetadataProps {
  toolName: string
  cluster: string
  primaryAction: string
  inputType: string
  outputType: string
  keyBenefit: string
  slug: string
}

export function generateToolMetadata({
  toolName,
  cluster,
  primaryAction,
  inputType,
  outputType,
  keyBenefit,
  slug,
}: ToolMetadataProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mockbrand.alfo.online'
  const url = `${baseUrl}/tools/${cluster.toLowerCase()}/${slug}`

  const title = `${toolName} - Free Online ${primaryAction} | ToolSite`
  const description = `Easily ${primaryAction} ${inputType} to ${outputType} online. ${keyBenefit}. Fast, secure, and easy to use.`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: 'ToolSite',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}