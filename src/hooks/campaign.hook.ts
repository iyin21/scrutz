import {
    fetchCampaign,
    createCampaign,
    fetchSingleCampaign,
    updateCampaign,
    deleteCampaign,
} from "@services/campaign"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { showNotification } from "@mantine/notifications"

const useGetCampaigns = () => {
    const result = useQuery({
        queryKey: ["campaigns"],
        queryFn: () => fetchCampaign(),
    })
    return result
}

const useCreateCampaign = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: createCampaign,
        onSuccess: () => {
            queryClient
                .invalidateQueries({
                    queryKey: ["campaigns"],
                })
                .finally(() => false)
        },
        onError: (err: any) => {
            showNotification({
                title: "Error",
                message: err.message|| "An error occurred",
                color: "red",
            })
        },
    })
    return mutation
}

const useGetSingleCampaign = ({id}:{id: string}) => {
    const result = useQuery({
        queryKey: ["singlecampaign", id],
        queryFn: () => fetchSingleCampaign(id),
    })
    return result
}

const useUpdateCampaign = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: updateCampaign,
        onSuccess: () => {
            showNotification({
                title: "Success",
                message: "Campaign updated succesfully",
                color: "green",
            })
            queryClient
                .invalidateQueries({
                    queryKey: ["campaigns"],
                })
                .finally(() => false)
        },
        onError: (err: any) => {
            showNotification({
                title: "Error",
                message: err.message|| "An error occurred",
                color: "red",
            })
        },
    })
    return mutation
}
const useDeleteCampaign = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: deleteCampaign,
        onSuccess: () => {
        
            queryClient
                .invalidateQueries({
                    queryKey: ["campaigns"],
                })
                .finally(() => false)
            
        },
        onError: (err: any) => {
            showNotification({
                title: "Error",
                message:  err.message|| "An error occurred",
                color: "red",
            })
        },
    })
    return mutation
}
export {
    useGetCampaigns,
    useCreateCampaign,
    useGetSingleCampaign,
    useUpdateCampaign,
    useDeleteCampaign,
}
