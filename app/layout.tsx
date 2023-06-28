import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ChatGPT Prompt Engineering for Developers',
  description: 'ChatGPT Prompt Engineering for Developers',
}

type Chapter = {
  name: string,
  description: string,
  link: string,
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
        <main className="flex justify-center items-center h-[calc(100vh-var(--header-height)-var(--footer-height))]">{children}</main>
        <Footer />
      </body>
    </html>
  )
};

export default RootLayout;
