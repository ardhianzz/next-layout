import { Inter } from 'next/font/google'
import '@/style/globals.css'
import { SessionProvider } from '@/utils/SessionContext'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Starter Layout',
  description: 'By Nur Ardhiansyah',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={inter.className}>
            {children}  
        </body>
      </SessionProvider>
    </html>
  )
}
