import './globals.css'

import { Providers } from '@components/providers'
import type { Metadata } from 'next'
import { fontFamily } from '@/config/setup'

export const metadata: Metadata = {
	title: 'tc96 SaaS Starters',
	description:
		'An app boilerplate using Next.js, Tailwind CSS, Radix UI and more.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${fontFamily.sans.className} antialiased`}>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
