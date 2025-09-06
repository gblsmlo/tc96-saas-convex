import type { ReactNode } from 'react'
import AppLayout from '@/modules/app/layout/app-layout'

export default function Layout({ children }: { children: ReactNode }) {
	return <AppLayout>{children}</AppLayout>
}
