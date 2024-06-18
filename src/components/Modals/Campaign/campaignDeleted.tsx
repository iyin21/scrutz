import { Modal } from "@mantine/core"
import { Button } from "@components/index"
import { useNavigate } from "react-router-dom"

export interface CampaignDeletedModalProps {
    opened: boolean
    setOpened: React.Dispatch<React.SetStateAction<boolean>>
    campaignName:string
}

const CampaignDeletedModal = ({
    opened,
    setOpened,
    campaignName
}: CampaignDeletedModalProps) => {
    const navigate=useNavigate()
    return (
        <Modal
            opened={opened}
            withCloseButton={false}
            onClose={() => {
                setOpened(false)
            }}
            size="500px"
            centered
            radius={8}
            closeOnClickOutside={false}
            className="font-nunito"
            classNames={{
                body: " p-14",
            }}
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
        >
            <p className="text-lg font-semibold mb-4 text-center">
                Campaign Deleted
            </p>
            <hr className="border-[#F0F4F4]" />
            <p className="text-[#666666] text-md gont-medium mt-10 text-center">
                {campaignName} campaign has been deleted
            </p>
            <div className="flex justify-center">
                <Button
                    variant="primary"
                    className="font-syne mt-10 outline-none"
                    onClick={() =>{setOpened(false); navigate("/campaign")}}
                >
                    Go Back to campaign list
                </Button>
            </div>
        </Modal>
    )
}

export default CampaignDeletedModal
