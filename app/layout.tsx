import type { Metadata } from 'next'
import './globals.css'
import Sidebar from './Sidebar'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Sidebar/>
          <div className="dashboard">
            <div className='bg-blur'></div>
              {children}
          </div>
        </body>
    </html>
  )
}