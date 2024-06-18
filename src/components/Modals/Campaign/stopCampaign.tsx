import { Modal } from "@mantine/core"
import { Button } from "@components/index"
import { useDeleteCampaign } from "@hooks/campaign.hook"
import { useEffect } from "react"

export interface StopCampaignModalProps {
    opened: boolean
    setOpened: React.Dispatch<React.SetStateAction<boolean>>
    id: number
    campaignName: string
    setOpenDeletedModal: React.Dispatch<React.SetStateAction<boolean>>
}

const StopCampaignModal = ({
    opened,
    setOpened,
    id,
    campaignName,
    setOpenDeletedModal,
}: StopCampaignModalProps) => {
    const { mutate, isPending, isSuccess } = useDeleteCampaign()

    useEffect(() => {
        if (isSuccess) {
            setOpened(false)
            setOpenDeletedModal(true)
        }
    }, [isSuccess])
    return (
        <Modal
            opened={opened}
            withCloseButton={false}
            onClose={() => {
                setOpened(false)
            }}
            size="520px"
            centered
            radius={8}
            //closeOnClickOutside={false}
            className="font-nunito"
            classNames={{
                body: "p-10 py-10",
            }}
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
        >
            <p className="text-lg font-semibold my-4 text-center">
                Stop Campaign
            </p>
            <hr className="border-[#F0F4F4]" />
            <p className="text-[#666666] mt-6 text-center my-10 px-4">
                Are You sure you want to delete {campaignName} campaign? This
                action cannot be undone.
            </p>
            <div className="flex justify-center gap-x-4 mb-6">
                <Button
                    variant="black"
                    className="font-semibold px-6"
                    onClick={() => {
                        setOpened(false)
                    }}
                >
                    Cancel
                </Button>
                <Button
                    variant="red"
                    className="!text-white-100"
                    onClick={() => mutate({ id: id })}
                >
                    {isPending ? "Deleting..." : "Delete Campaign"}
                </Button>
            </div>
        </Modal>
    )
}

export default StopCampaignModal
