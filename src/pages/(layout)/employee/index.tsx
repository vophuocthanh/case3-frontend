import { Button } from '@/components/ui/Button'
import { DataTable } from '@/components/ui/DataTable'
import axios from 'axios'
import { Edit, Trash } from 'lucide-react'
import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

interface Employee {
  Employee_Number: string
  idEmployee: string
  Last_Name: string
  First_Name: string
  SSN: string
  Pay_Rate: string
  PayRates_id: string
  Vacation_Days: string
  Paid_To_Date: string
  Paid_Last_Year: string
}

const EmployeePage = () => {
  const [employee, setEmployee] = useState<Employee | null>(null)
  const [data, setData] = useState([])
  useEffect(() => {
    const getDataEmployee = async () => {
      try {
        const res = await axios.get('http://localhost:8081/employee')
        setData(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getDataEmployee()
  }, [])
  useEffect(() => {
    document.title = 'Dashboard | Employee'
  }, [])
  const columns = useMemo(
    () => [
      {
        header: 'EmployeeNumber',
        accessorKey: 'EmployeeNumber.Employee_Number',
        cell: column => <span>{column?.row?.original?.Employee_Number}</span>
      },
      {
        header: 'IdEmployee',
        accessorKey: 'IdEmployee.idEmployee',
        cell: column => {
          return <span>{column?.row?.original?.idEmployee}</span>
        }
      },
      {
        header: 'Name',
        accessorKey: 'Name',
        cell: column => (
          <p>
            {column.row.original.First_Name +
              ' ' +
              column.row.original.Last_Name}
          </p>
        )
      },
      {
        header: 'SSN',
        accessorKey: 'ssn.SSN',
        cell: column => <span>{column?.row?.original?.SSN}</span>
      },
      {
        header: 'PayRates',
        accessorKey: 'PayRates.Pay_Rate',
        cell: column => {
          return <span>{column?.row?.original?.Pay_Rate}</span>
        }
      },
      {
        header: 'PayRatesID',
        accessorKey: 'PayRatesID.PayRates_id',
        cell: column => {
          return <span>{column?.row?.original?.PayRates_id}</span>
        }
      },
      {
        header: 'VacationDays',
        accessorKey: 'VacationDays.Vacation_Days',
        cell: column => {
          return <span>{column?.row?.original?.Vacation_Days}</span>
        }
      },
      {
        header: 'PaidToDate',
        accessorKey: 'PaidToDate.Paid_To_Date',
        cell: column => {
          return <span>{column?.row?.original?.Paid_To_Date}</span>
        }
      },
      {
        header: 'PaidLastYear',
        accessorKey: 'PaidLastDate.Paid_Last_Year',
        cell: column => {
          return <span>{column?.row?.original?.Paid_Last_Year}</span>
        }
      },
      {
        header: () => <div className="text-center">Action</div>,
        accessorKey: 'action',
        cell: column => (
          <div className="flex justify-center gap-2">
            <Button variant="outline" className="w-8 h-8 p-0">
              <Link to="/employee/update">
                <Edit
                  className="cursor-pointer"
                  onClick={() => {
                    setEmployee(column.row.original)
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
        <h1 className="text-3xl font-medium">Employee List</h1>
        <Link to="/employee/create">
          <Button>Create Employee</Button>
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default EmployeePage
