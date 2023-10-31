import { toast } from '@/components/ui/use-toast'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface EmployeeData {
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

const CreateEmployee = () => {
  const [employeeData, setEmployeeData] = useState<EmployeeData>({
    Employee_Number: '',
    idEmployee: '',
    Last_Name: '',
    First_Name: '',
    SSN: '',
    Pay_Rate: '',
    PayRates_id: '',
    Vacation_Days: '',
    Paid_To_Date: '',
    Paid_Last_Year: ''
  })

  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Employee | Create'
  }, [])

  const handleChange = e => {
    const { name, value } = e.target
    setEmployeeData({ ...employeeData, [name]: value })
  }

  const handleCreate = async e => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:8081/employee',
        employeeData
      )
      if (response.status === 201) {
        console.log('Employee created successfully')
        toast({
          title: 'Success',
          description: 'Employee created successfully',
          variant: 'success'
        })
        navigate('/employee')
      } else {
        console.error('Error creating Employee')
        toast({
          title: 'Error',
          description: 'Error creating Employee',
          variant: 'error'
        })
      }
    } catch (error) {
      console.error('Error creating employee:', error)
      toast({
        title: 'Error',
        description: 'Error creating employee',
        variant: 'error'
      })
    }
  }

  return (
    <div className="p-4 flex flex-col justify-center items-center w-full mt-10">
      <div className="p-4">
        <h2 className="mb-4 mx-auto text-center items-center text-2xl font-semibold">
          Create Employee
        </h2>
        <form onSubmit={handleCreate}>
          <div className="mb-4">
            <label htmlFor="Employee_Number" className="mb-3 flex">
              Employee Number:
            </label>
            <input
              type="text"
              id="Employee_Number"
              name="Employee_Number"
              placeholder="Enter employee number"
              value={employeeData.Employee_Number}
              onChange={handleChange}
              required
              className="w-96 p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="idEmployee" className="mb-3 flex">
              IdEmployee:
            </label>
            <input
              type="text"
              id="idEmployee"
              placeholder="Enter idEmployee"
              name="idEmployee"
              value={employeeData.idEmployee}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="First_Name" className="mb-3 flex">
              First_Name:
            </label>
            <input
              type="text"
              placeholder="Enter first name"
              id="First_Name"
              name="First_Name"
              value={employeeData.First_Name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Last_Name" className="mb-3 flex">
              Last_Name:
            </label>
            <input
              type="text"
              placeholder="Enter last name"
              id="Last_Name"
              name="Last_Name"
              value={employeeData.Last_Name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="SSN" className="mb-3 flex">
              SSN:
            </label>
            <input
              type="text"
              placeholder="Enter ssn"
              id="SSN"
              name="SSN"
              value={employeeData.SSN}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Pay_Rate" className="mb-3 flex">
              Pay_Rate:
            </label>
            <input
              type="text"
              placeholder="Enter Pay Rate"
              id="Pay_Rate"
              name="Pay_Rate"
              value={employeeData.Pay_Rate}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="PayRates_id" className="mb-3 flex">
              PayRates_id:
            </label>
            <input
              type="text"
              placeholder="Enter Pay Rate id"
              id="PayRates_id"
              name="PayRates_id"
              value={employeeData.PayRates_id}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Vacation_Days" className="mb-3 flex">
              Vacation_Days:
            </label>
            <input
              type="text"
              placeholder="Enter vacation days"
              id="Vacation_Days"
              name="Vacation_Days"
              value={employeeData.Vacation_Days}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Paid_To_Date" className="mb-3 flex">
              Paid_To_Date:
            </label>
            <input
              type="text"
              placeholder="Enter Paid_To_Date"
              id="Paid_To_Date"
              name="Paid_To_Date"
              value={employeeData.Paid_To_Date}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Paid_Last_Year" className="mb-3 flex">
              Paid_Last_Year:
            </label>
            <input
              type="text"
              placeholder="Enter Paid_Last_Year"
              id="Paid_Last_Year"
              name="Paid_Last_Year"
              value={employeeData.Paid_Last_Year}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <button
            type="submit"
            className="px-4 mt-10 mx-auto flex py-2 text-white w-52 justify-center bg-blue-500 rounded hover:bg-blue-600"
          >
            Create Employee
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateEmployee
