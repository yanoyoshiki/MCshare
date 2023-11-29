import React from "react"
import { usePathname } from "next/navigation"
import TopNav from "./includes/TopNav"

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    const handleSearchName = (event: {target: {value: string}}) => {
        console.log(event.target.value)
    }

    return (
      	<>
            <TopNav />
			<div className={`flex justify-between mx-auto w-full lg:px-2.5 px-0 ${pathname == '/' ? 'max-w-[1140px]' : ''}`}>
				{children}
			</div>
      	</>
    )
}