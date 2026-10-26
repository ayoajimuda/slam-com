import { Anton, Barlow_Condensed } from 'next/font/google'
import TransitionShell from '@/components/TransitionShell'
import './globals.css'

const anton = Anton({ weight: '400', subsets: ['latin'], variable: '--font-anton', display: 'swap' })
const barlow = Barlow_Condensed({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-barlow', display: 'swap' })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${anton.variable} ${barlow.variable}`}>
      <body>
        <TransitionShell>{children}</TransitionShell>
      </body>
    </html>
  )
}
