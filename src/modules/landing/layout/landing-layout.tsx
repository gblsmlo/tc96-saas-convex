import type { ReactNode } from 'react'

export default function LandingLayout({ children }: { children: ReactNode }) {
	return <div className="bg-red-500">{children}</div>
}
