import React, { ReactNode } from 'react'

export interface ConverterProps {
  title: string
  description: string
  children: ReactNode
}

export function Converter({ title, description, children }: ConverterProps) {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          {children}
        </div>
      </div>
    </div>
  )
}