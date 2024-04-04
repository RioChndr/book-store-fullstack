'use client';
import { Footer } from '@/components/FooterAdmin'
import { Header } from '@/components/Header'
import { Logo } from '@/components/Logo'
import { Navigation } from '@/components/Navigation'
import { SectionProvider } from '@/components/SectionProvider';
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function LayoutDashboard({
    children
}: { children: React.ReactNode }) {
    return (<SectionProvider sections={[]}>
        <div className="h-full lg:ml-72 xl:ml-80">
            <motion.header
                layoutScroll
                className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
            >
                <div className="contents relative lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 xl:w-80 lg:dark:border-white/10">
                    <div className="hidden lg:flex">
                        <Link href="/" aria-label="Home">
                            <Logo className="text-brand-primary-500 dark:text-white w-full" size='sm' />
                        </Link>
                    </div>
                    <Header />
                    <Navigation className="hidden lg:mt-10 lg:block" />
                </div>
            </motion.header>
            <div className="relative flex h-full flex-col px-4 pt-14 sm:px-6 lg:px-8">
                <div className="absolute inset-0 bg-grid-zinc-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-zinc-400/[0.05]"
                    style={{
                        maskImage: 'linear-gradient(to bottom, black, transparent 30%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 30%)',
                    }}
                ></div>
                <main className="relative flex-auto py-6">{children}</main>
                <div className="relative">
                    <Footer />
                </div>
            </div>
        </div>
    </SectionProvider>)
}