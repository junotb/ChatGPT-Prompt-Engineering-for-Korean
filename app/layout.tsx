import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Navigator from '@/components/Navigator';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ChatGPT Prompt Engineering for Developers in Korean',
  description: 'ChatGPT Prompt Engineering for Developers in Korean',
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
        <main className="flex h-[calc(100vh-var(--header-height)-var(--footer-height))]">
          <Navigator />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
};

export default RootLayout;
