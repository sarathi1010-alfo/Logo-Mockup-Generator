import React, { ReactNode } from 'react'

export interface GeneratorProps {
  title: string
  description: string
  sidebar: ReactNode
  preview: ReactNode
}

export function Generator({ title, description, sidebar, preview }: GeneratorProps) {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Controls */}
        <div className="w-full md:w-1/3 bg-white shadow sm:rounded-lg p-6">
          {sidebar}
        </div>

        {/* Preview Area */}
        <div className="w-full md:w-2/3 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 flex items-center justify-center min-h-[400px]">
          {preview}
        </div>
      </div>
    </div>
  )
}