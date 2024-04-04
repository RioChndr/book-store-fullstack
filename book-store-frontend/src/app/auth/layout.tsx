import { ThemeToggle } from "@/components/ThemeToggle"
import React from "react"

export default function AuthLayout({
    children
}: {
    children: React.ReactNode
}){
    return (
        <div className="relative flex min-h-screen flex-1 flex-col justify-center items-center md:py-0 py-24">
            <div className="absolute inset-0 bg-grid-zinc-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-zinc-400/[0.05]"
                style={{
                    maskImage: 'radial-gradient(black, transparent 90%)',
                    WebkitMaskImage: 'radial-gradient(black, transparent 90%)',
                  }}
            ></div>
            <div className="absolute right-3 top-3">
                <ThemeToggle />
            </div>
            {children}
        </div>
    )
}