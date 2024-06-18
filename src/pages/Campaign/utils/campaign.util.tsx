
export const campaignStatus = (role: string) => {
    switch (role) {
        case "Inactive":
            return (
                <p className="text-red-100 text-2sm font-syne font-bold">
                    INACTIVE
                </p>
            )
        case "Active":
            return (
                <p className="text-green-100 text-2sm font-syne font-bold">
                    ACTIVE
                </p>
            )
        default:
            return <p className="font-syne">Unknown Status</p>
    }
}
