'use client'

import React, { useState } from 'react'
import { Converter } from '@/components/tools/Converter'

export default function RgbToHslPage() {
  const [r, setR] = useState<number>(0)
  const [g, setG] = useState<number>(0)
  const [b, setB] = useState<number>(0)

  // Math conversion logic
  const rNorm = r / 255
  const gNorm = g / 255
  const bNorm = b / 255

  const max = Math.max(rNorm, gNorm, bNorm)
  const min = Math.min(rNorm, gNorm, bNorm)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case rNorm: h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0); break
      case gNorm: h = (bNorm - rNorm) / d + 2; break
      case bNorm: h = (rNorm - gNorm) / d + 4; break
    }
    h /= 6
  }

  const hDeg = Math.round(h * 360)
  const sPct = Math.round(s * 100)
  const lPct = Math.round(l * 100)

  const hsl = `hsl(${hDeg}, ${sPct}%, ${lPct}%)`

  return (
    <Converter
      title="RGB to HSL Color Converter"
      description="Convert RGB color values to HSL format easily and quickly."
    >
      <article className="space-y-6">
        <h1 className="sr-only">RGB to HSL Color Converter</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* R */}
          <div>
            <label htmlFor="r" className="block text-sm font-medium text-gray-700">Red (0-255)</label>
            <input
              type="number"
              id="r"
              value={r}
              onChange={(e) => setR(Math.max(0, Math.min(255, parseInt(e.target.value) || 0)))}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          {/* G */}
          <div>
            <label htmlFor="g" className="block text-sm font-medium text-gray-700">Green (0-255)</label>
            <input
              type="number"
              id="g"
              value={g}
              onChange={(e) => setG(Math.max(0, Math.min(255, parseInt(e.target.value) || 0)))}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          {/* B */}
          <div>
            <label htmlFor="b" className="block text-sm font-medium text-gray-700">Blue (0-255)</label>
            <input
              type="number"
              id="b"
              value={b}
              onChange={(e) => setB(Math.max(0, Math.min(255, parseInt(e.target.value) || 0)))}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Result</h3>
          <div className="mt-4 flex items-center gap-4">
            <div
              className="w-16 h-16 rounded-md shadow-inner border border-gray-200"
              style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
            />
            <div className="flex-1">
              <input
                type="text"
                readOnly
                value={hsl}
                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-50 font-mono text-lg"
              />
            </div>
            <button
              onClick={() => navigator.clipboard.writeText(hsl)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Copy
            </button>
          </div>
        </div>

        {/* Internal Linking */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <h3 className="text-lg font-medium text-gray-900">Explore More Color Tools</h3>
          <ul className="mt-4 space-y-2 list-disc list-inside text-indigo-600">
            <li><a href="/tools/color" className="hover:underline">View all Color Tools</a></li>
            <li><a href="/tools/color/hex-to-rgb" className="hover:underline">HEX to RGB Converter</a></li>
            <li><a href="/tools/color/hsl-to-hex" className="hover:underline">HSL to HEX Converter</a></li>
          </ul>
        </div>

        {/* SEO How it works section */}
        <div className="mt-12 prose prose-indigo max-w-none">
          <h2>How it works</h2>
          <p>
            This tool mathematically converts the Red, Green, and Blue (RGB) color space values into Hue, Saturation, and Lightness (HSL).
            This is extremely useful for developers and designers who need to translate colors from image editors (which often use RGB) to web formats like CSS where HSL provides more intuitive control over color manipulation.
          </p>

          <h2>Frequently Asked Questions</h2>
          <dl className="space-y-6 mt-6">
            <div>
              <dt className="text-base font-medium text-gray-900">What is RGB?</dt>
              <dd className="mt-2 text-sm text-gray-500">RGB stands for Red, Green, and Blue. It is a color model primarily used for displaying images in electronic systems, such as televisions and computers.</dd>
            </div>
            <div>
              <dt className="text-base font-medium text-gray-900">What is HSL?</dt>
              <dd className="mt-2 text-sm text-gray-500">HSL stands for Hue, Saturation, and Lightness. It represents colors in a way that is more intuitive to human perception, making it easier to adjust properties like brightness or vividness.</dd>
            </div>
            <div>
              <dt className="text-base font-medium text-gray-900">Why convert RGB to HSL?</dt>
              <dd className="mt-2 text-sm text-gray-500">Converting RGB to HSL allows for easier programmatic manipulation of color attributes. For instance, creating a lighter shade of a color is as simple as increasing the Lightness value in HSL, which is mathematically complex in RGB.</dd>
            </div>
          </dl>
        </div>
      </article>
    </Converter>
  )
}