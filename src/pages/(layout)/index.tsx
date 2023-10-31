import React, { useEffect } from 'react'
import SummaryChart from './_components/SummaryChart'

const DashBoard = () => {
  useEffect(() => {
    document.title = 'Dashboard | Dashboard'
  }, [])
  return (
    <div className="w-full">
      <SummaryChart />
      <p className="mt-10 text-xl font-semibold text-center">
        Biểu đồ tượng trưng
      </p>
    </div>
  )
}

export default DashBoard
