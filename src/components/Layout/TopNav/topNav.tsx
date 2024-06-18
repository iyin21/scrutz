import { Input } from "@components/index"
import { BiSearch } from "react-icons/bi"
import Avatar from "@assets/icons/avatar.svg"
import { FiChevronDown } from "react-icons/fi"
import { HiMenuAlt2 } from "react-icons/hi"

//import { useState } from "react"
//import { useMediaQuery } from "@mantine/hooks"
import NotificationIcon from "@assets/icons/notificationIcon.svg"

const TopNav = ({
    setOpenSideBar,
}: {
    setOpenSideBar: (val: boolean) => void
}) => {
    return (
        <nav
            className={`w-full px-2 sm:pl-6 md:pl-20  sm:pr-10 py-4 justify-between  flex items-center`}
        >
            <HiMenuAlt2
                    size={28}
                    onClick={() => setOpenSideBar(true)}
                    className={`lg:hidden block cursor-pointer`}
                />

            <Input
                placeholder="Search for anything..."
                className=" hidden sm:block sm:w-[200px] xl:w-[300px] p-4  text-[12px] text-grey-100 "
            />

            <div className="flex place-self-end sm:mr-6  items-center">
                <img
                    src={NotificationIcon}
                    alt="Message"
                    className="border-r border-[#F0F4F4] pr-2 cursor-pointer"
                />

                <img src={Avatar} alt="" className="sm:mx-2 mt-2" />
                <p className="text-md">Big Tech</p>
                <FiChevronDown
                    color="#247B7B"
                    size="22px"
                    className="cursor-pointer"
                />
            </div>
        </nav>
    )
}

export default TopNav
