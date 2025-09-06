import type { ReactNode } from 'react'
import LandingLayout from '@/modules/landing/layout/landing-layout'

export default function Layout({ children }: { children: ReactNode }) {
	return <LandingLayout>{children}</LandingLayout>
}
