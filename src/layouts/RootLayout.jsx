import { Outlet } from "react-router-dom"

export default function RootLayout() {
  return (
    <div className="lg:bg-[hsl(235,18%,26%)] lg:h-screen lg:flex"><Outlet/></div>
  )
}
