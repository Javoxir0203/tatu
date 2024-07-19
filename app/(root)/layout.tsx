import { ReactNode } from 'react'

function Layout({ children }: { children: ReactNode }) {
	return <main>{children}</main>
}

export default Layout
