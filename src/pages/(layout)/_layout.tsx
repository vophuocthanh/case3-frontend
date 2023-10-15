import Header from '@/layouts/Header'
import Slidebar from '@/layouts/Slidebar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="">
      <Header />
      <div className="flex">
        <Slidebar></Slidebar>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  )
}
