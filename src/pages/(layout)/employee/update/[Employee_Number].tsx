import { toast } from '@/components/ui/use-toast'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateEmployee = () => {
  const { Employee_Number } = useParams()
  const [employeeData, setEmployeeData] = useState({
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
    document.title = 'Employee | Update'

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/employee/${Employee_Number}`
        )
        setEmployeeData(response.data)
      } catch (error) {
        console.error('Error fetching employee data:', error)
        toast({
          title: 'Error',
          description: 'Error fetching employee data',
          variant: 'error'
        })
      }
    }

    fetchData()
  }, [Employee_Number])

  const handleChange = e => {
    const { name, value } = e.target
    setEmployeeData({ ...employeeData, [name]: value })
  }

  const handleUpdate = async e => {
    e.preventDefault()

    try {
      const response = await axios.put(
        `http://localhost:8081/employee/${employeeData.Employee_Number}`,
        employeeData
      )

      if (response.status === 200) {
        console.log('Employee updated successfully')
        toast({
          title: 'Success',
          description: 'Employee updated successfully',
          variant: 'success'
        })
        navigate('/employee')
      } else {
        console.error('Error updating Employee')
        toast({
          title: 'Error',
          description: 'Error updating Employee',
          variant: 'error'
        })
      }
    } catch (error) {
      console.error('Error updating Employee:', error)
      toast({
        title: 'Error',
        description: 'Error updating Employee',
        variant: 'error'
      })
    }
  }
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 mt-10">
      <div className="p-4">
        <h2 className="items-center mx-auto mb-4 text-2xl font-semibold text-center">
          Update Employee
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label htmlFor="Employee_Number" className="flex mb-3">
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
              className="p-2 border border-gray-300 rounded outline-none w-96"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="idEmployee" className="flex mb-3">
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
            <label htmlFor="First_Name" className="flex mb-3">
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
            <label htmlFor="Last_Name" className="flex mb-3">
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
            <label htmlFor="SSN" className="flex mb-3">
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
            <label htmlFor="Pay_Rate" className="flex mb-3">
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
            <label htmlFor="PayRates_id" className="flex mb-3">
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
            <label htmlFor="Vacation_Days" className="flex mb-3">
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
            <label htmlFor="Paid_To_Date" className="flex mb-3">
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
            <label htmlFor="Paid_Last_Year" className="flex mb-3">
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
            className="flex justify-center px-4 py-2 mx-auto mt-10 text-white bg-blue-500 rounded w-52 hover:bg-blue-600"
          >
            Update Employee
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateEmployee
