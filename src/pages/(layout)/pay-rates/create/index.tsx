import { toast } from '@/components/ui/use-toast'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface PayRatesData {
  idPay_Rates: string
  Pay_Rate_Name: string
  Value: string
  Tax_Percentage: string
  Pay_Type: string
  Pay_Amount: string
  PT_Level_C: string
}

const CreatePayRates = () => {
  const [payRatesData, setPayRatesData] = useState<PayRatesData>({
    idPay_Rates: '',
    Pay_Rate_Name: '',
    Value: '',
    Tax_Percentage: '',
    Pay_Type: '',
    Pay_Amount: '',
    PT_Level_C: ''
  })

  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'PayRates | Create'
  }, [])

  const handleChange = e => {
    const { name, value } = e.target
    setPayRatesData({ ...payRatesData, [name]: value })
  }

  const handleCreate = async e => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:8081/pay_rates',
        payRatesData
      )
      if (response.status === 201) {
        console.log('PayRates created successfully')
        toast({
          title: 'Success',
          description: 'PayRates created successfully',
          variant: 'success'
        })
        navigate('/pay_rates')
      } else {
        console.error('Error creating PayRates')
        toast({
          title: 'Error',
          description: 'Error creating PayRates',
          variant: 'error'
        })
      }
    } catch (error) {
      console.error('Error creating pay rates:', error)
      toast({
        title: 'Error',
        description: 'Error creating pay rates',
        variant: 'error'
      })
    }
  }

  return (
    <div className="p-4 flex flex-col justify-center items-center w-full mt-10">
      <div className="p-4">
        <h2 className="mb-4 mx-auto text-center items-center text-2xl font-semibold">
          Update PayRates
        </h2>
        <form onSubmit={handleCreate}>
          <div className="mb-4">
            <label htmlFor="idPay_Rates" className="mb-3 flex">
              IdPayRates:
            </label>
            <input
              type="text"
              id="idPay_Rates"
              name="idPay_Rates"
              placeholder="Enter employee number"
              value={payRatesData.idPay_Rates}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Pay_Rate_Name" className="mb-3 flex">
              Pay_Rate_Name:
            </label>
            <input
              type="text"
              id="Pay_Rate_Name"
              placeholder="Enter Pay Rate Name"
              name="Pay_Rate_Name"
              value={payRatesData.Pay_Rate_Name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Value" className="mb-3 flex">
              Value:
            </label>
            <input
              type="text"
              placeholder="Enter values"
              id="Value"
              name="Value"
              value={payRatesData.Value}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Tax_Percentage" className="mb-3 flex">
              Tax Percentage:
            </label>
            <input
              type="text"
              placeholder="Enter tax percentage"
              id="Tax_Percentage"
              name="Tax_Percentage"
              value={payRatesData.Tax_Percentage}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Pay_Type" className="mb-3 flex">
              Pay Type:
            </label>
            <input
              type="text"
              placeholder="Enter Pay Type"
              id="Pay_Type"
              name="Pay_Type"
              value={payRatesData.Pay_Type}
              onChange={handleChange}
              required
              className="w-96 p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Pay_Amount" className="mb-3 flex">
              Pay Amount:
            </label>
            <input
              type="text"
              placeholder="Enter Pay Amount"
              id="Pay_Amount"
              name="Pay_Amount"
              value={payRatesData.Pay_Amount}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="PT_Level_C" className="mb-3 flex">
              PT Level C:
            </label>
            <input
              type="text"
              placeholder="Enter PT Level C"
              id="PT_Level_C"
              name="PT_Level_C"
              value={payRatesData.PT_Level_C}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>

          <button
            type="submit"
            className="px-4 mt-10 mx-auto flex py-2 text-white w-52 justify-center bg-blue-500 rounded hover:bg-blue-600"
          >
            Create PayRates
          </button>
        </form>
      </div>
    </div>
  )
}
export default CreatePayRates
