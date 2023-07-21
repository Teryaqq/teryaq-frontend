import Styles from '@/components/Styles'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Teryaq',
    description: 'Teryaq is a group of students who are totally immersed in health and its sectors',
    keywords: ["drugs", "reasearch", "JU students", "diseases", "pharmacy", "parma research"],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <Styles />
            <body className={`${inter.className}`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
