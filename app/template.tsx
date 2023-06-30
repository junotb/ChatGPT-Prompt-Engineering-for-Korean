import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Navigator from '@/components/Navigator';

const Template = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <Header />
      <main className="flex h-[calc(100vh-var(--header-height)-var(--footer-height))]">
        <Navigator />
        {children}
      </main>
      <Footer />
    </>
  )
};

export default Template;