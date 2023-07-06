import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ChatGPT Prompt Engineering for Korean',
  description: 'ChatGPT Prompt Engineering for Developers in Unofficial Korean version',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={inter.className}
      >{children}</body>
    </html>
  )
};

export default RootLayout;
