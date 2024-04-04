'use client';
import { Logo } from "@/components/Logo";
import clsx from "clsx";
import Link from "next/link";

function FooterLink({
  href,
  children,
  ...others
}: {
  href: string,
  children: React.ReactNode
  [x: string]: any
}) {
  return <Link
    className={clsx(
      "dark:text-slate-400 hover:text-brand-primary-500 hover:dark:text-slate-200",
      others?.className
    )}
    href={href}
    {...others}
    >
    {children}
  </Link>
}

export function Footer() {
  return (
    <footer className='relative'>
      <div className="absolute inset-0  bg-slate-50 dark:bg-zinc-900 dark:text-slate-100 text-slate-500"></div>

      <div className="relative max-w-7xl mx-auto py-14">
        <div className="grid lg:grid-cols-4 grid-cols-2 px-8 md:px-0 gap-6">
          <div className="gap-3 text-sm">
            <div className="font-bold mb-2 text-slate-700 dark:text-slate-50">Getting Started</div>
            <ul className='flex flex-col gap-1 '>
              <li><FooterLink href='#'>Instalation</FooterLink></li>
              <li><FooterLink href='#'>Editor Setup</FooterLink></li>
              <li><FooterLink href='#'>Using With Preprocessors</FooterLink></li>
              <li><FooterLink href='#'>Optimizing for Production</FooterLink></li>
              <li><FooterLink href='#'>Browser Support</FooterLink></li>
              <li><FooterLink href='#'>Upgrade Guide</FooterLink></li>
              <li><FooterLink href='#'>Optimizing for Production</FooterLink></li>
            </ul>
          </div>

          <div className="gap-3 text-sm">
            <div className="font-bold mb-2 text-slate-700 dark:text-slate-50">Community</div>
            <ul className='flex flex-col gap-1 dark:text-slate-400'>
              <li><FooterLink href='#'>Instalation</FooterLink></li>
              <li><FooterLink href='#'>Browser Support</FooterLink></li>
              <li><FooterLink href='#'>Editor Setup</FooterLink></li>
              <li><FooterLink href='#'>Optimizing for Production</FooterLink></li>
              <li><FooterLink href='#'>Using With Preprocessors</FooterLink></li>
              <li><FooterLink href='#'>Optimizing for Production</FooterLink></li>
              <li><FooterLink href='#'>Upgrade Guide</FooterLink></li>
            </ul>
          </div>

          <div className="gap-3 text-sm">
            <div className="font-bold mb-2 text-slate-700 dark:text-slate-50">Core Concept</div>
            <ul className='flex flex-col gap-1 dark:text-slate-400'>
              <li><FooterLink href='#'>Optimizing for Production</FooterLink></li>
              <li><FooterLink href='#'>Browser Support</FooterLink></li>
              <li><FooterLink href='#'>Editor Setup</FooterLink></li>
              <li><FooterLink href='#'>Using With Preprocessors</FooterLink></li>
              <li><FooterLink href='#'>Optimizing for Production</FooterLink></li>
              <li><FooterLink href='#'>Instalation</FooterLink></li>
              <li><FooterLink href='#'>Upgrade Guide</FooterLink></li>
            </ul>
          </div>

          <div className="gap-3 text-sm">
            <div className="font-bold mb-2 text-slate-700 dark:text-slate-50">Customization</div>
            <ul className='flex flex-col gap-1 dark:text-slate-400'>
              <li><FooterLink href='#'>Using With Preprocessors</FooterLink></li>
              <li><FooterLink href='#'>Optimizing for Production</FooterLink></li>
              <li><FooterLink href='#'>Upgrade Guide</FooterLink></li>
              <li><FooterLink href='#'>Editor Setup</FooterLink></li>
              <li><FooterLink href='#'>Optimizing for Production</FooterLink></li>
              <li><FooterLink href='#'>Instalation</FooterLink></li>
              <li><FooterLink href='#'>Browser Support</FooterLink></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl border-t border-slate-300 dark:border-slate-600 pt-8 pb-12 px-8 md:px-0">
        <Logo size='lg'></Logo>
      </div>

    </footer>
  );
}
