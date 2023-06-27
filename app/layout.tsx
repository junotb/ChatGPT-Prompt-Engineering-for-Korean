import Head from 'next/head';
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'ChatGPT Prompt Engineering for Developers',
  description: 'ChatGPT Prompt Engineering for Developers',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="h-[calc(100vh-var(--header-height)-var(--footer-height))]">{children}</main>
        <Footer />
      </body>
    </html>
  )
};

export default RootLayout;
