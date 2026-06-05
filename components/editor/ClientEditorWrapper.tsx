"use client";

import dynamic from "next/dynamic";
import { MockupConfig } from "@/lib/mockups";

const DynamicMockupEditor = dynamic(() => import("@/components/editor/MockupEditor"), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-4xl mx-auto aspect-square bg-slate-100 rounded-xl border border-slate-200 animate-pulse flex items-center justify-center">
      <span className="text-slate-400 font-medium">Loading Editor...</span>
    </div>
  ),
});

export default function ClientEditorWrapper({ config }: { config: MockupConfig }) {
  return <DynamicMockupEditor config={config} />;
}
