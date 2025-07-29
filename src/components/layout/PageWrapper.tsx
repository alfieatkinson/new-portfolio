import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default PageWrapper
