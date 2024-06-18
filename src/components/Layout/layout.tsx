import Sidebar from "./sidebar/sidebar"
import TopNav from "./TopNav/topNav"
import { useState, ReactNode } from "react"
import { Drawer } from "@mantine/core"
import { AiOutlineClose } from "react-icons/ai"
import Logo from "@assets/icons/logo.svg"

interface Props {
    //pageTitle: string
    children: ReactNode
}
const Layout = ({ children }: Props) => {
    const [openSideBar, setOpenSideBar] = useState(false)
    return (
        <div className="h-screen relative">
            <div className="w-full md:w-[calc(100%-288px)]  fixed right-0 z-20 bg-[#FFFFFA] md:pb-0 border-b border-[#F0F4F4]">
                <TopNav setOpenSideBar={setOpenSideBar} />
            </div>
            <div className="relative md:pl-72 h-screen ">
                <div className="hidden md:block fixed left-0 md:w-72 h-screen overflow-y-auto">
                    <Sidebar />
                </div>
                <>
                <Drawer
                    opened={openSideBar}
                    onClose={() => setOpenSideBar(false)}
                    size="75%"
                    styles={{
                        content: {
                            background: "#F0F4F4",
                        },
                    }}
                    withCloseButton={false}
                >
                    <div className="px-4 mt-7 ">
                        <div className="flex items-center justify-end mb-6">
                            <AiOutlineClose
                                className="cursor-pointer"
                                onClick={() => setOpenSideBar(false)}
                                color="white"
                                size="24px"
                            />
                        </div>
                        <img src={Logo} alt="Scrutz" className="w-fit" />
                        <hr className="text-neutral-5 mt-5" />
                    </div>
                    <div className="w-full h-3/4 md:h-[500px] overflow-y-auto md:pt-[75px]">
                        <Sidebar />
                    </div>
                </Drawer>
                </>
                <main className="bg-[#FFFFFA] w-full h-full overflow-y-auto md:pt-36  lg:px-20 py-6">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout
