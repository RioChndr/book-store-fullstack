'use client';
import { Logo } from '@/components/Logo'
import clsx from 'clsx'
import Head from 'next/head'
import Link from 'next/link'
import styles from './page.module.css'
import { ThemeToggle } from '@/components/ThemeToggle'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react';
import { Footer } from '@/components/Footer';
import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import { fetcher } from '@/lib/fetcher';
import { useScroll } from 'framer-motion';

function Header() {
  const mode: string = 'dot'
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <header className='relative'>
      <div className="px-4 sm:px-6 md:px-8 z-0">
        <div className="relative pt-6 lg:pt-8 flex items-center justify-between text-zinc-700 font-semibold text-sm leading-6 dark:text-zinc-200">
          <Logo className='dark:text-brand-primary-500 text-zinc-800' />
          <div className="items-center md:flex hidden">
            <nav>
              <ul className='flex items-center gap-x-8'>
                <li>
                  <Link href="#" className="hover:text-primary-500 dark:hover:text-primary-400">
                    Docs
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-500 dark:hover:text-primary-400"
                  >
                    Components
                  </a>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-500 dark:hover:text-primary-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-500 dark:hover:text-primary-400">
                    Showcase
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="border-l border-zinc-700 ml-6 pl-6 dark:border-zinc-300 flex gap-3 items-center">
              <ThemeToggle />
              <Link
                href="/auth/login"
                className="bg-zinc-900 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-50 text-white font-semibold h-8 px-3 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-primary-500 dark:highlight-white/20 dark:hover:bg-primary-400"
              >
                Login
              </Link>
            </div>
          </div>
        </div>


      </div>
    </header>
  )
}

type ResultApiBookList = {
  list: { id: string, title: string, author: string, point: string, cover: string, tags: string[] }[], count: number
}

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })

  const [isMax, setIsMax] = useState(false)
  const { data, size, setSize, isLoading } = useSWRInfinite<ResultApiBookList>((pageIndex, previousPageIndex: ResultApiBookList) => {
    // reached the end
    if (previousPageIndex && previousPageIndex.list.length === 0) {
      setIsMax(true)
      return null
    }

    // first page, we don't have `previousPageData`
    if (pageIndex === 0) return `/api/v1/book/list?limit=10`
    return `/api/v1/book/list?lastId=${previousPageIndex.list.at(-1)?.id}&limit=12`
  }, fetcher)

  scrollYProgress.on('change', (latest) => {
    if (latest > 0.8 && !isMax) {
      setSize(size + 1)
    }
  })



  return (
    <>
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content="Template new sites cool by RioChndr"
        />
        <meta
          key="og:title"
          property="og:title"
          content="Template new sites cool by RioChndr"
        />
        <title>Template new sites cool by RioChndr</title>
      </Head>
      <div className="overflow-hidden bg-white dark:bg-zinc-900">
        <Header></Header>

        <div className="container m-auto py-28">
          <h2 className='text-3xl font-bold'>
            List Book
          </h2>
          <div className="">
            list catalog book, you can find your favorite book here
          </div>
        </div>

        <div ref={ref} id="list-book" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-14 container m-auto pb-24'>
          {data?.map(row => row.list.map(v => <div className="w-72 bg-white dark:bg-zinc-800 dark:text-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl m-auto">
            <a href="#">
              <img src={v.cover}
                alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">{v.author}</span>
                <p className="text-lg font-bold text-black dark:text-white truncate block capitalize">{v.title}</p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-yellow-400 cursor-auto my-3">P {v.point}</p>
                  <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg></div>
                </div>
              </div>
            </a>
          </div>))}

          {isLoading && <div className="col-span-4 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900 dark:border-zinc-900"></div>
          </div>
          }

          {isMax && <div className="col-span-4 flex justify-center items-center">
            <div className="text-center">
              <p className="text-lg font-semibold">No more data</p>
            </div></div>}

        </div>

      </div>
      <Footer />
    </>
  )
}
