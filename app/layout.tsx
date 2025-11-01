import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Sora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _sora = Sora({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yadav.Dev - Full Stack & Discord Bot Developer",
  description: "Coding is my language, love is my framework❤️‍🩹.",
  generator: "v0.app",
  openGraph: {
    title: "Yadav.Dev - Full Stack & Discord Bot Developer",
    description: "Coding is my language, love is my framework❤️‍🩹.",
    url: "https://yadavdev.vercel.app/",
    siteName: "Yadav.Dev",
    images: [
      {
        url: "/placeholder.jpg", // this image is inside public/
        width: 1200,
        height: 630,
        alt: "Yadav.Dev Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yadav.Dev - Full Stack & Discord Bot Developer",
    description: "Coding is my language, love is my framework❤️‍🩹.",
    images: ["/placeholder.jpg"], // same image for Twitter preview
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
