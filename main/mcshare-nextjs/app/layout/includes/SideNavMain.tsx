import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import MenuItem from "./MenuItem"
import ClientOnly from "@/app/compornents/ClientOnly"
import MenuItemFollow from "./MenuItemFollow"


export default function SideNavMain() { 
    const pathname = usePathname()


    return (
        <>
            <div
                id="SideNavMain" 
                className={`
                    fixed z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r w-[75px] overflow-auto
                    ${pathname === '/' ? 'lg:w-[310px]' : 'lg:w-[220px]'}
                `}
            >
                <div className="lg:w-full w-[55px] mx-auto">
                    <Link href="/">
                        <MenuItem 
                            iconString="For You" 
                            colorString={pathname == '/' ? '#00000' : ''} 
                            sizeString="25"
                        />
                    </Link>
                    <div className="border-b lg:ml-4 mt-2" />
                    <MenuItem iconString="Following" colorString="#00a960" sizeString="25"/>
                    <div className="border-b lg:ml-4 mt-2" />
                    <MenuItem iconString="Monthly SSG MCs" colorString="#e6b422" sizeString="25"/>
                    <div className="border-b lg:ml-4 mt-2" />
                    <MenuItem iconString="PIM Colloseum LIVE" colorString="#00000" sizeString="25"/>

                    <div className="border-b lg:ml-2 mt-2" />
                    <h3 className="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">Suggested accounts</h3>

                    <div className="lg:hidden block pt-3" />
                    <ClientOnly>
                        <div className="cursor-pointer">
                            <MenuItemFollow user={{id: "1", name: "Test user", image: "https://placehold.co/50"}} /> 
                        </div>
                    </ClientOnly>
                    <button className="lg:block hidden text-[#6495ed] pt-1.5 pl-2 text-[13px]">See all</button>

                    {/* {true ?(
                        <div>
                            <div className="border-b lg:ml-2 mt-2" />
                            <h3 className="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">follower accounts</h3>

                            <div className="lg:hidden block pt-3" />
                            <ClientOnly>
                                <div className="cursor-pointer">
                                    <MenuItemFollow user={{id: "1", name: "Test user", image: "https://placehold.co/50"}} /> 
                                </div>
                            </ClientOnly>
                            <button className="lg:block hidden text-[#6495ed] pt-1.5 pl-2 text-[13px]">See more</button>
                        </div>
                    )   :null} */}

                    <div className="lg:block hidden border-b lg:ml-2 mt-2" />

                    <div className="lg:block hidden text-[11px] text-gray-500">
                        <p className="pt-4 px-2"> if you have any question, you can contact below things.</p>
                        <p className="pt-4 px-2"> (e-mail) --@---.com</p>
                        <p className="pt-4 px-2"> (TEL) ####-####-####</p>
                    </div>

                </div>
            </div>
        </>
    )

}