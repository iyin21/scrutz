

export interface CampaignResponse {
    id: number
    campaignName: string
    campaignDescription: string
    startDate: Date
    endDate: Date
    digestCampaign: string
    linkedKeywords: string[]
    dailyDigest: string
    campaignStatus: string
}

export interface CampaignRequest{
    campaignName: string
    campaignDescription: string
    startDate: string
    endDate: string
    digestCampaign: boolean
    linkedKeywords: string[]
    dailyDigest: string
    
}