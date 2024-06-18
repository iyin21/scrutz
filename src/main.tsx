import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"

import "@mantine/core/styles.css"
import { MantineProvider, createTheme } from "@mantine/core"
import "./styles/global.scss"
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const theme = createTheme({
    /** Put your mantine theme override here */
})
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false, // default: true
        },
    },
})
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <MantineProvider theme={theme}>
                    <App />
                </MantineProvider>
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>
)
