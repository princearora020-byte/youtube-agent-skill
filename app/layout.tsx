import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  title: 'YouTube Agent Skill - Claude Skills for YouTube Creators',
  description: 'Eleven Claude skills that run a YouTube channel. Free, MIT, no signup, no API key, nothing to connect.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
