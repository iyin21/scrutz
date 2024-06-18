import { Layout, Button, Input } from "@components/index"
import { BiSearch } from "react-icons/bi"
import CampaignTable from "./components/campaignTable"
import { useGetCampaigns } from "@hooks/campaign.hook"
import { CgSpinner } from "react-icons/cg"
import Logo from "@assets/icons/logo.svg"

const Campaign = () => {
    const { data, isLoading } = useGetCampaigns()
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
                <div className="mr-10">
                    <p className="font-semibold md:text-2lg text-lg mb-6 text-primary-100 font-workSans">
                        All Campaigns
                    </p>
                    <div className="flex justify-between mb-6">
                        <div className="flex gap-4">
                            <Button variant="border">All ()</Button>
                            <Button variant="border">Inactive ()</Button>
                            <Button variant="border">Active ()</Button>
                        </div>
                        <Input
                            placeholder="Search..."
                            className="  w-[200px] xl:w-[300px] p-4 h-[50px] text-[12px] text-grey-100 "
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
                    <CampaignTable data={data || []} />
                </div>
            )}
        </Layout>
    )
}
export default Campaign
