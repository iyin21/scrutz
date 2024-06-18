import { CampaignResponse, CampaignRequest } from "@/types/api/campaign.type"

import axiosInstance from "."

const ENDPOINT = "/Campaign"

export const fetchCampaign = async () => {
    const response = await axiosInstance.get<CampaignResponse[]>(ENDPOINT)
    return response.data
}

export const createCampaign = async (data: CampaignRequest) => {
    const response = await axiosInstance.post<CampaignResponse>(ENDPOINT, data)
    return response.data
}

export const fetchSingleCampaign= async(id:string)=>{
    const response =await axiosInstance.get<CampaignResponse>(ENDPOINT +`/${id}`);
    return response.data
}

export const updateCampaign= async({id, ...data}: CampaignRequest &{id:string})=>{
    const response= await axiosInstance.put<CampaignResponse>(
        ENDPOINT+`/${id}`, {...data, id}
    );
    return response.data
}

export const deleteCampaign= async({id}:{id:number})=>{
    const response  =axiosInstance.delete(ENDPOINT+`/${id}`);
    return response
}