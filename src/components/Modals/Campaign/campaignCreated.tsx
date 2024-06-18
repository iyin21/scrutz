import { Modal } from "@mantine/core"
import { Button } from "@components/index"
import SuccessIcon from "@assets/icons/successIcon.svg"
import { useNavigate } from "react-router-dom"

export interface CampaignCreatedModalProps {
    opened: boolean
    setOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const CampaignCreatedModal = ({
    opened,
    setOpened,
}: CampaignCreatedModalProps) => {
    const navigate = useNavigate()
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
                body: "p-4 py-10",
            }}
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
        >
            <div className="flex justify-center my-6">
                <img src={SuccessIcon} alt="" />
            </div>
            <p className="text-md font-medium text-[#666666] mb-10 text-center">
                Campaign Successfully Created!
            </p>
            <div className="flex justify-center">
                <Button
                    variant="primary"
                    className="font-syne outline-none text-sm"
                    onClick={() => navigate("/campaign")}
                >
                    Go Back to campaign list
                </Button>
            </div>
        </Modal>
    )
}

export default CampaignCreatedModal
