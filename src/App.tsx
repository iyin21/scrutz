import { Route, Routes, Navigate } from "react-router-dom"
import Overview from "@pages/Overview"
import Campaign from "@pages/Campaign"
import CreateCampaign from "@pages/CreateCampaign"
import CampaignInformation from "@pages/CampaignInformation"
import MarketIntelligence from "@pages/MarketIntelligence"
import AccountSettings from "@pages/AccountSettings"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/overview" />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/campaign" element={<Campaign />} />
            <Route path="/campaign/new" element={<CreateCampaign />} />
            <Route path="/campaign/:id" element={<CampaignInformation />} />
            <Route path="/market_intelligence" element={<MarketIntelligence />} />
            <Route path="/account_settings" element={<AccountSettings />} />
        </Routes>
    )
}

export default App
