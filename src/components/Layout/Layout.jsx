import { Outlet } from "react-router-dom"
import { Suspense } from "react"
import { Navbar } from "../Navbar/Navbar"

export const Layout = () => {
    return (<>
        <Navbar />
        <Suspense fallback={null}>
          <Outlet></Outlet>
        </Suspense>
    </>)
}