import type { Metadata } from 'next'
import './globals.css'

import PageWrapper from '@/components/layout/PageWrapper'

export const metadata: Metadata = {
  title: 'Alfie Atkinson | Front-End Developer',
  description: "Alfie Atkinson's personal website and portfolio",
  keywords: [
    'front-end developer',
    'web developer',
    'software engineer',
    'Alfie Atkinson',
  ],
  authors: [{ name: 'Alfie Atkinson' }],
  creator: 'Alfie Atkinson',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  )
}

export default RootLayout
