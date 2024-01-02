'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Footer from '@/components/ui/footer'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <>
      <main className="grow">
        {children}
      </main>

      <div className="text-sm text-gray-600 mr-4 max-w-xs my-4 text-center">
        <span>
          &copy; KaruVault.com All rights reserved.
        </span>
      </div>
      {/* <Footer /> */}
    </>
  )
}
