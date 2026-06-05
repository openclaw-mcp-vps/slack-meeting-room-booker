import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RoomBot — Book Meeting Rooms from Slack',
  description: 'Slack bot that detects meeting scheduling conversations and automatically suggests and books available conference rooms for your team.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6288333e-c182-4e12-b756-f7a29b5813cb"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
