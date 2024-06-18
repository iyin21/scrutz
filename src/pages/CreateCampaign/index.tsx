import { Layout, CampaignCreatedModal } from "@components/index"
import { FormControls, Button } from "@components/index"
import { Formik, Form } from "formik"
import { useCreateCampaign } from "@hooks/campaign.hook"
import { campaignValidationSchema } from "@utils/validationSchema"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const CreateCampaign = () => {
    const navigate = useNavigate()

    const [openCampaignCreated, setOpenCampaignCreated] = useState(false)
    const { isPending, mutate, isSuccess } = useCreateCampaign()

    useEffect(() => {
        if (isSuccess) {
            setOpenCampaignCreated(true)
        }
    }, [isSuccess])
    return (
        <Layout>
            <CampaignCreatedModal
                opened={openCampaignCreated}
                setOpened={setOpenCampaignCreated}
            />
            <p className="font-workSans text-primary-100  font-bold text-2lg">
                Create New Campaign
            </p>
            <Formik
                initialValues={{
                    campaignName: "",
                    campaignDescription: "",
                    startDate: "",
                    endDate: "",
                    digestCampaign: false,
                    linkedKeywords: [],
                    dailyDigest: "",
                }}
                validationSchema={campaignValidationSchema}
                onSubmit={(values) => mutate(values)}
            >
                {() => (
                    <Form className="py-4 mt-3 font-nunito md:mr-20">
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
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <FormControls
                                labelName="Want to receive daily digest about the campaign?"
                                control="switch"
                                name="digestCampaign"
                            />
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
                                <option value="" disabled selected hidden>
                                    Select
                                </option>
                                <option value="monthly">Monthly</option>
                                <option value="weekly">Weekly</option>
                            </FormControls>
                        </div>
                        <div className="flex gap-6 my-10">
                            <Button
                                variant="border"
                                className="px-16 "
                                type="button"
                                onClick={() => navigate(-1)}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="primary"
                                className="px-10 "
                                type="submit"
                                disabled={isPending}
                            >
                                {isPending ? "Creating..." : "Create Campaign"}
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </Layout>
    )
}

export default CreateCampaign
