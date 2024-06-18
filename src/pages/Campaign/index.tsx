import { Layout, Button, Input, Pagination } from "@components/index"
import { BiSearch } from "react-icons/bi"
import CampaignTable from "./components/campaignTable"
import { useGetCampaigns } from "@hooks/campaign.hook"
import { CgSpinner } from "react-icons/cg"
import Logo from "@assets/icons/logo.svg"
import { useState, useMemo } from "react"

let pageSize = 7
const Campaign = () => {
    const { data, isLoading } = useGetCampaigns()
    const [currentPage, setCurrentPage] = useState(1)
    const paginatedData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize
        const lastPageIndex = firstPageIndex + pageSize
        return data?.slice(firstPageIndex, lastPageIndex)
    }, [currentPage, data])
    return (
        <Layout>
            {isLoading ? (
                <div className="h-full w-full flex items-center justify-center">
                    <img
                        src={Logo}
                        alt=""
                        className="animate-pulse "
                        width={80}
                    />
                    <CgSpinner className="animate-spin text-black-100 text-2lg ml-2 " />
                </div>
            ) : (
                <div className="md:mr-10">
                    <p className="font-semibold md:text-2lg text-lg mb-6 text-primary-100 font-workSans">
                        All Campaigns
                    </p>
                    <div className="sm:flex justify-between mb-6">
                        <div className="flex gap-4">
                            <Button variant="border">All ({data?.length||0})</Button>
                            <Button variant="border">Inactive ({data?.filter((item)=>item.campaignStatus==="Inactive").length||0})</Button>
                            <Button variant="border">Active ({data?.filter((item)=>item.campaignStatus==="Active").length||0})</Button>
                        </div>
                        <Input
                            placeholder="Search..."
                            className="  w-[200px] xl:w-[300px] p-4  text-[12px] text-grey-100 mt-6 sm:mt-0"
                            suffixIcon={
                                <BiSearch
                                    size="22px"
                                    color="#666666"
                                    className="mr-2"
                                />
                            }
                        />
                    </div>
                    <div></div>
                    <CampaignTable data={paginatedData || []} />
                    <Pagination
                            page={currentPage}
                            total={Math.ceil(
                                (data?.length || 0) / pageSize
                            )}
                            onChange={(pageNumber) =>
                                setCurrentPage(pageNumber)
                            }
                            recordPerpage={pageSize}
                            boundaries={1}
                            totalRecords={data?.length || 0}
                            count={paginatedData?.length || 0}
                        />
                </div>
            )}
        </Layout>
    )
}
export default Campaign
