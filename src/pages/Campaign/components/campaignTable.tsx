import { Table } from "@mantine/core"
import { CampaignResponse } from "@/types/api/campaign.type"
import dayjs from "dayjs"
import { campaignStatus } from "../utils/campaign.util"
import ViewIcon from "@assets/icons/view.svg"
import EditIcon from "@assets/icons/edit.svg"
import DeleteIcon from "@assets/icons/delete.svg"
import { useNavigate } from "react-router-dom"

interface CampaignTableInterface {
    data: CampaignResponse[]
    handleOpenDeleteModal: (data: CampaignResponse) => void
}
const CampaignTable = ({
    data,
    handleOpenDeleteModal,
}: CampaignTableInterface) => {
    const navigate = useNavigate()
    const rows = data.map((item, index) => (
        <Table.Tr
            key={index}
            className="text-[#666666]  group "
            style={{
                fontSize: "14px",
                fontWeight: 500,
            }}
        >
            <Table.Td>{index + 1 + "."}</Table.Td>
            <Table.Td>{item.campaignName}</Table.Td>
            <Table.Td>{dayjs(item.startDate).format("DD/MM/YYYY")}</Table.Td>
            <Table.Td>{campaignStatus(item.campaignStatus)}</Table.Td>
            <Table.Td className="flex gap-x-4">
                <img
                    src={ViewIcon}
                    alt=""
                    className="cursor-pointer"
                    onClick={() => navigate(`/campaign/${item.id}`)}
                />{" "}
                <img
                    src={EditIcon}
                    alt=""
                    className="cursor-pointer"
                    onClick={() => navigate(`/campaign/${item.id}`)}
                />{" "}
                <img
                    src={DeleteIcon}
                    alt=""
                    className="cursor-pointer"
                    onClick={() => handleOpenDeleteModal(item)}
                />
            </Table.Td>
        </Table.Tr>
    ))
    const tableHead = [
        "S/N",
        "Campaign Name",
        "Start Date",
        "Status",
        "Actions",
    ]
    return (
        <Table
            style={{
                fontFamily: "nunito",
                fontSize: "14",
                fontWeight: "semi-",
            }}
            className=" min-w-[500px]"
            verticalSpacing="md"
            data-testid="table-data"
            role="grid"
            withRowBorders={true}
        >
            <Table.Thead className=" w-full  bg-[#F0F4F4] font-bold">
                <Table.Tr className="">
                    {tableHead.map((item, index) => (
                        <Table.Th
                            key={index}
                            style={{
                                borderBottom: "1px",
                                color: "#455454",
                                fontSize: "14px",
                                fontWeight: 700,
                            }}
                        >
                            {item}
                        </Table.Th>
                    ))}
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    )
}

export default CampaignTable
