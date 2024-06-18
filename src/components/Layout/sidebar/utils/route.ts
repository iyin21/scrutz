import CampaignIcon from "../assets/campaign"
import MarketIcon from "../assets/market"
import OverviewIcon from "../assets/overview" 
import SettingsIcon from "../assets/settings"

//import useAuth from "@hooks/auth/useAuth"

export const routes = [
    { name: "Overview", Icon: OverviewIcon, link: "/overview" },
    {
        name: "Campaign",
        Icon: CampaignIcon,
        link: "/campaign",
    },
    {
        name: "Market Intelligence",
        Icon: MarketIcon,
        link: "/market_intelligence",
    },
    {
        name: "Account Settings",
        Icon: SettingsIcon,
        link: "/account_settings",
    },
    
    
]
