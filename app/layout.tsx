import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Raleway, Rubik } from 'next/font/google'
// import Store from '@/Context/store'
import localFont from 'next/font/local';

const pacifico = localFont({
  src: '/fonts/Pacifico-Regular.ttf',
  variable: '--font-pacifico',
  display: 'swap',
})

const luckiestGuy = localFont({
  src: '/fonts/LuckiestGuy-Regular.ttf',
  variable: '--font-luckiest-guy',
  display: 'swap',
})

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chikodi Obu',
  description: 'This is the official portfolio website of Chikodi Obu.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className} px-10 md:px-20 pt-7 h-screen bg-[#F2F5F9] dark:bg-[#1d232a]`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
