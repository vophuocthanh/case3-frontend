import React, { useEffect, useState } from 'react'
import SummaryChart from './_components/SummaryChart'
import axios from 'axios'

const DashBoard = () => {
  const [data, setData] = useState([])
  const [dataEmployee, setDataEmployee] = useState([])
  const [dataPayRates, setDataPayRates] = useState([])
  const [totalPayRate, setTotalPayRate] = useState(0)
  useEffect(() => {
    document.title = 'Dashboard | Dashboard'
  }, [])
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('http://localhost:8081/users')
        setData(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])
  useEffect(() => {
    const getDataEmployee = async () => {
      try {
        const res = await axios.get('http://localhost:8081/employee')
        setDataEmployee(res.data)
        const total = res.data.reduce(
          (acc, employee) => acc + parseFloat(employee.Pay_Rate),
          0
        )
        setTotalPayRate(total)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    getDataEmployee()
  }, [])

  useEffect(() => {
    const getDataEmployee = async () => {
      try {
        const res = await axios.get('http://localhost:8081/pay_rates')
        setDataPayRates(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getDataEmployee()
  }, [])
  return (
    <div className="w-full overflow-scroll">
      <SummaryChart />
      <p className="mt-6 text-xl font-semibold text-center">
        Biểu đồ tượng trưng
      </p>

      <div className="flex gap-4 m-10">
        <div className="p-6 bg-pink-100 rounded w-80">
          <h1 className="text-2xl font-bold ">
            {data.length} User ở trên hệ thống
          </h1>
        </div>
        <div className="p-6 bg-pink-100 rounded w-80">
          <h1 className="text-2xl font-bold ">
            Tổng employee trên hệ thống: {dataEmployee.length}
          </h1>
        </div>
        <div className="p-6 bg-pink-100 rounded w-80">
          <h1 className="text-2xl font-bold ">
            Tổng số tiền ở employee: ${totalPayRate.toFixed(2)}
          </h1>
        </div>
        <div className="p-6 bg-pink-100 rounded w-80">
          <h1 className="text-2xl font-bold ">
            Tổng số Pay Rates: {dataPayRates.length}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
