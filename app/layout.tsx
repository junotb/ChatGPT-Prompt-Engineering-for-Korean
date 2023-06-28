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
  const chapters: Chapter[] = [
    {name: 'Introduction', description: '', link: '/introduction'},
    {name: 'Guidance', description: '', link: '/guidance'},
    {name: 'Iterative', description: '', link: '/iterative'},
    {name: 'Inferring', description: '', link: '/inferring'},
    {name: 'Summarizing', description: '', link: '/summarizing'},
    {name: 'Transforming', description: '', link: '/transforming'},
    {name: 'Expanding', description: '', link: '/expanding'},
    {name: 'Chatbot', description: '', link: '/chatbot'},
    {name: 'Conclusion', description: '', link: '/conclusion'},
  ];

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
