import { Outlet } from "react-router-dom"
import DashbordHeader from "../Shared/DashboardHeader"
import FooterSection from "../Shared/Footer"

const DashboardLayout = () => {
  return (
    <>
     <DashbordHeader/> 
      <Outlet/>
      <FooterSection/>
    </>
  )
}

export default DashboardLayout
