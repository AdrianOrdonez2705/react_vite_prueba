import { Provider } from "@/components/ui/provider"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import App from "./App.tsx"
import LandingPage from "./pages/LandingPage.tsx"
import "leaflet/dist/leaflet.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/landing-page",
    element: <LandingPage />,
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
)
