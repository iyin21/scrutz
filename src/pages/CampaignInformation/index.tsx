import { Layout } from "@components/index"
import { FaArrowLeft } from "react-icons/fa6"
import {
    FormControls,
    Button,
    StopCampaignModal,
    CampaignDeletedModal,
} from "@components/index"
import { Formik, Form } from "formik"
import { useGetSingleCampaign, useUpdateCampaign } from "@hooks/campaign.hook"
import { useParams, useNavigate } from "react-router-dom"
import { CgSpinner } from "react-icons/cg"
import Logo from "@assets/icons/logo.svg"
import { campaignValidationSchema } from "@utils/validationSchema"
import { useState, useEffect } from "react"

const CampaignInformation = () => {
    const { id } = useParams<string>()
    const navigate = useNavigate()
    const { isLoading, data } = useGetSingleCampaign({ id: id || "" })
    const { isPending, mutate, isSuccess } = useUpdateCampaign()

    const [openStopCampaignModal, setOpenStopCampaignModal] = useState(false)
    const [openCampaignDeletedModal, setOpenCampaignDeletedModal] =
        useState(false)

    useEffect(()=>{
        if(isSuccess){
            navigate("/campaign")
        }
    },[isSuccess])    
    return (
        <Layout>
            <CampaignDeletedModal
                opened={openCampaignDeletedModal}
                setOpened={setOpenCampaignDeletedModal}
                campaignName={data?.campaignName || ""}
            />
            <StopCampaignModal
                opened={openStopCampaignModal}
                setOpened={setOpenStopCampaignModal}
                id={Number(id) || 0}
                campaignName={data?.campaignName || ""}
                setOpenDeletedModal={setOpenCampaignDeletedModal}
            />
            {isLoading ? (
                <div className="h-full w-full flex items-center justify-center">
                    <img
                        src={Logo}
                        alt=""
                        className="animate-pulse "
                        width={80}
                    />
                    <CgSpinner className="animate-spin text-black-100 text-2lg " />
                </div>
            ) : (
                <div className="mr-20">
                    <div
                        className="flex cursor-pointer mb-4"
                        onClick={() => navigate(-1)}
                    >
                        <FaArrowLeft size="22px" color="#333333" />
                        <p className="text-[#333333] text-lg ml-2">Back</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-workSans text-primary-100  font-bold text-2lg">
                            Campaign Information
                        </p>
                        <div className="flex bg-[#EDF0F0] p-2 rounded">
                            <p className="border-r border-gray-100 pr-2">
                                Campaign Status
                            </p>
                            <p className="text-green-100 pl-2">
                                {data?.campaignStatus}
                            </p>
                        </div>
                    </div>
                    <Formik
                        initialValues={{
                            campaignName: data?.campaignName || "",
                            campaignDescription:
                                data?.campaignDescription || "",
                            startDate: data?.startDate || "",
                            endDate: data?.endDate || "",
                            digestCampaign: data?.digestCampaign || "",
                            linkedKeywords: data?.linkedKeywords || [],
                            dailyDigest: data?.dailyDigest || "",
                        }}
                        validationSchema={campaignValidationSchema}
                        onSubmit={(values) =>
                            mutate({
                                ...values,
                                digestCampaign:
                                    values.digestCampaign === "Yes"
                                        ? true
                                        : false,
                                id: id || "",
                            })
                        }
                    >
                        {({ values }) => (
                            <Form className="py-4 mt-3 font-nunito">
                                <div className="mb-6">
                                    <FormControls
                                        label={
                                            <p className="font-medium text-[#666666]">
                                                Campaign Name{" "}
                                                <span className="text-[#EF2D2B]">
                                                    *
                                                </span>
                                            </p>
                                        }
                                        control="input"
                                        name="campaignName"
                                        placeholder="e.g The Future is now"
                                        classNames={{
                                            mainRoot: "px-2 w-full",
                                            input: "text-black-100 text-[14px]",
                                        }}
                                        labelClassName="text-[#666666]"
                                    />
                                </div>
                                <div className="mb-6">
                                    <FormControls
                                        label="Campaign Description"
                                        control="textarea"
                                        name="campaignDescription"
                                        placeholder="Please add a description to your campaign"
                                        labelClassName="text-[#666666]"
                                    />
                                </div>
                                <div className="flex gap-8 mb-6 w-full">
                                    <div className="w-[50%]">
                                        <FormControls
                                            label={
                                                <p className="font-medium text-[#666666]">
                                                    Start Date{" "}
                                                    <span className="text-[#EF2D2B]">
                                                        *
                                                    </span>
                                                </p>
                                            }
                                            currentDate={data?.startDate}
                                            control="date"
                                            name="startDate"
                                            placeholder="dd/mm/yyy"
                                            labelClassName="text-[#666666]"
                                        />
                                    </div>
                                    <div className="w-[50%]">
                                        <FormControls
                                            label={
                                                <p className="font-medium text-[#666666]">
                                                    End Date{" "}
                                                    <span className="text-[#EF2D2B]">
                                                        *
                                                    </span>
                                                </p>
                                            }
                                            control="date"
                                            name="endDate"
                                            placeholder="dd/mm/yyy"
                                            labelClassName="text-[#666666]"
                                            currentDate={data?.endDate}
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <FormControls
                                        label="Kindly select how often you want to receive daily digest"
                                        control="select"
                                        name="digestCampaign"
                                        placeholder="e.g The Future is now"
                                        classNames={{
                                            mainRoot: "px-2 w-full",
                                            input: "text-black-100 text-[14px]",
                                        }}
                                        labelClassName="text-[#666666]"
                                    >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </FormControls>
                                </div>
                                <div className="mb-6">
                                    <FormControls
                                        label={
                                            <p className="font-medium text-[#666666]">
                                                Linked Keywords{" "}
                                                <span className="text-[#EF2D2B]">
                                                    *
                                                </span>
                                            </p>
                                        }
                                        control="tag"
                                        name="linkedKeywords"
                                        placeholder="To add keywords, type your keyword and press enter"
                                        classNames={{
                                            mainRoot: "px-2 w-full",
                                            input: "text-black-100 text-[14px]",
                                        }}
                                        labelClassName="text-[#666666]"
                                        value={values.linkedKeywords}
                                    />
                                </div>

                                <div className="mb-6">
                                    <FormControls
                                        label="Kindly select how often you want to receive daily digest"
                                        control="select"
                                        name="dailyDigest"
                                        placeholder="e.g The Future is now"
                                        classNames={{
                                            mainRoot: "px-2 w-full",
                                            input: "text-black-100 text-[14px]",
                                        }}
                                        labelClassName="text-[#666666]"
                                    >
                                        <option
                                            value=""
                                            disabled
                                            selected
                                            hidden
                                        >
                                            Select
                                        </option>
                                        <option value="monthly">Monthly</option>
                                        <option value="weekly">Weekly</option>
                                    </FormControls>
                                </div>
                                <div className="flex gap-6 my-10">
                                    <Button
                                        variant="red"
                                        className="px-12 !text-white-100"
                                        type="button"
                                        onClick={() => setOpenStopCampaignModal(true)}
                                    >
                                        Stop Campaign
                                    </Button>
                                    <Button
                                        variant="border"
                                        className="px-12 "
                                        type="submit"
                                        disabled={isPending}
                                    >
                                        {isPending
                                            ? "Editing..."
                                            : "Edit Information"}
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            )}
        </Layout>
    )
}
export default CampaignInformation
