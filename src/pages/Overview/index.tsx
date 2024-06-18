import { Button, Layout } from "@components/index"
import { FiChevronDown } from "react-icons/fi"
import EmptyImage from "@assets/images/emptyImage.png"
import { FaPlus } from "react-icons/fa6"
import CalendarIcon from "@assets/icons/calendarIcon.svg"
import { CiExport } from "react-icons/ci"
import { useNavigate } from "react-router-dom"

const Overview = () => {
    const navigate=useNavigate()
    return (
        <Layout>
            <div className="">
                <div className="sm:flex justify-between">
                    <div>
                        <p className="font-generalSans font-bold md:text-xl text-2lg text-primary-100">
                            Overview
                        </p>
                    </div>

                    <div className="place-content-end flex  sm:mt-0 mt-6 gap-4">
                        <div className="border border-gray-100 rounded p-2 flex items-center text-2sm">
                            <img src={CalendarIcon} alt="" />
                            <h6 className="px-2 border-r border-[#ECECEC] border-gray-100 mr-2 text-[#333333]">
                                Date Range
                            </h6>
                            <h6 className="text-[#666666]">
                                Nov 1, 2022 - Nov 7, 2022.
                            </h6>
                            <FiChevronDown
                                color="#247B7B"
                                size="22px"
                                className="cursor-pointer ml-2"
                            />
                        </div>
                        <Button variant="blue">
                            <CiExport
                                color="#247B7B"
                                size="22px"
                                className="mr-2"
                            />
                            Export
                        </Button>
                    </div>
                </div>
                <div className=" mt-12">
                    <div className="flex justify-center ">
                        <img src={EmptyImage} alt="" />
                    </div>
                    <h6 className="font-semibold text-black-100 my-6 text-center text-md">
                        No activity yet. Create anew campaign to get started
                    </h6>
                    <div className="flex justify-center mb-8">
                        <Button variant="primary" onClick={()=>navigate("/campaign/new")}>
                            <FaPlus color="white" className="mr-4" />
                            New Campaign
                        </Button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Overview
