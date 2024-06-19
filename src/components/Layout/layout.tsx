import Sidebar from "./sidebar/sidebar"
import TopNav from "./TopNav/topNav"
import { useState, ReactNode } from "react"
import { Drawer } from "@mantine/core"
import { AiOutlineClose } from "react-icons/ai"
import { Input } from "@components/index"

interface Props {
    
    children: ReactNode
}
const Layout = ({ children }: Props) => {
    const [openSideBar, setOpenSideBar] = useState(false)
    return (
        <div className="h-screen relative">
            <div className="w-full lg:w-[calc(100%-288px)]  fixed right-0 z-20 bg-[#FFFFFA]  border-b border-[#F0F4F4]">
                <TopNav setOpenSideBar={setOpenSideBar} />
            </div>
            <div className="relative lg:pl-72 h-screen ">
                <div className="hidden lg:block fixed left-0 lg:w-72 h-screen overflow-y-auto no-scrollbar">
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
                                    color="black"
                                    size="24px"
                                />
                            </div>
                            <Input
                                placeholder="Search for anything..."
                                className=" sm:hidden block sm:w-[200px] xl:w-[300px] p-4  text-[12px] text-grey-100 "
                            />
                            <hr className="text-gray-100 mt-5" />
                        </div>
                        <div className="w-full h-3/4 md:h-[500px] overflow-y-auto md:pt-[75px]">
                            <Sidebar />
                        </div>
                    </Drawer>
                </>
                <main className="bg-[#FFFFFA] w-full h-full overflow-y-auto pt-36 px-4  lg:px-20 py-6">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout
