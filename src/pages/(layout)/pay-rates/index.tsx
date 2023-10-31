import { Button } from '@/components/ui/Button'
import { DataTable } from '@/components/ui/DataTable'
import axios from 'axios'
import { Edit, Trash } from 'lucide-react'
import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const PayRatesPage = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getDataEmployee = async () => {
      try {
        const res = await axios.get('http://localhost:8081/pay_rates')
        setData(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getDataEmployee()
  }, [])
  useEffect(() => {
    document.title = 'Dashboard | PayRates'
  }, [])
  const columns = useMemo(
    () => [
      {
        header: 'IDPayRates',
        accessorKey: 'IDPayRates.idPay_Rates',
        cell: column => <span>{column?.row?.original?.idPay_Rates}</span>
      },
      {
        header: 'PayRateName',
        accessorKey: 'PayRateName.Pay_Rate_Name',
        cell: column => {
          return <span>{column?.row?.original?.Pay_Rate_Name}</span>
        }
      },
      {
        header: 'Value',
        accessorKey: 'Vale',
        cell: column => <span>{column?.row?.original?.Value}</span>
      },
      {
        header: 'TaxPercentage',
        accessorKey: 'TaxPercentage.Tax_Percentage',
        cell: column => <span>{column?.row?.original?.Tax_Percentage}</span>
      },
      {
        header: 'PayType',
        accessorKey: 'PayType.Pay_Amount',
        cell: column => {
          return <span>{column?.row?.original?.Pay_Amount}</span>
        }
      },
      {
        header: 'PTLevelC',
        accessorKey: 'PTLevelC.PT_Level_C',
        cell: column => {
          return <span>{column?.row?.original?.PT_Level_C}</span>
        }
      },
      {
        header: () => <div className="text-center">Action</div>,
        accessorKey: 'action',
        cell: column => (
          <div className="flex justify-center gap-2">
            <Button variant="outline" className="w-8 h-8 p-0">
              <Link to="/pay-rates/update">
                <Edit
                  className="cursor-pointer"
                  onClick={() => {
                    // setUser(column.row.original)
                  }}
                ></Edit>
              </Link>
            </Button>
            <Button
              variant="outline"
              className="w-8 h-8 p-0"
              onClick={() => {
                // deleteUserMutation(column.row.original.User_id)
              }}
            >
              <Trash className="text-red-500 cursor-pointer" />
            </Button>
          </div>
        )
      }
    ],
    []
  )
  return (
    <div className="w-full p-5 mt-10">
      <div className="mb-10 flex justify-between">
        <h1 className="text-3xl font-medium">PayRates List</h1>
        <Link to="/pay-rates/create">
          <Button className="mt-5">Create PayRates</Button>
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default PayRatesPage
