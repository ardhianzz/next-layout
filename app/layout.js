import { Inter } from 'next/font/google'
import '@/style/globals.css'
import { SessionProvider } from '@/utils/SessionContext'
import LoginMiddleware from "@/middleware/LoginMiddleware";

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
          <LoginMiddleware>
            {children}  
          </LoginMiddleware>
        </body>
      </SessionProvider>
    </html>
  )
}
