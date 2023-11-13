// import { toast } from '@/components/ui/use-toast'
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'

// const UpdatePayRates = () => {
//   const { idPayRates } = useParams()
//   const [payRatesData, setPayRatesData] = useState({
//     idPay_Rates: '',
//     Pay_Rate_Name: '',
//     Value: '',
//     Tax_Percentage: '',
//     Pay_Type: '',
//     Pay_Amount: '',
//     PT_Level_C: ''
//   })

//   const handleChange = e => {
//     const { name, value } = e.target
//     setPayRatesData({ ...payRatesData, [name]: value })
//   }

//   const navigate = useNavigate()

//   useEffect(() => {
//     document.title = 'PayRates | Update'
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:8081/pay_rates/${idPayRates}`
//         )
//         setPayRatesData(response.data)
//       } catch (error) {
//         console.error('Error fetching payRates data:', error)
//         toast({
//           title: 'Error',
//           description: 'Error fetching payRates data',
//           variant: 'error'
//         })
//       }
//     }

//     fetchData()
//   }, [idPayRates])

//   const handleUpdatePayRates = async e => {
//     e.preventDefault()
//     try {
//       const response = await axios.put(
//         `http://localhost:8081/pay_rates/${payRatesData.idPay_Rates}`,
//         payRatesData
//       )
//       if (response.status === 200) {
//         console.log('PayRates updated successfully')
//         toast({
//           title: 'Success',
//           description: 'PayRates updated successfully',
//           variant: 'success'
//         })
//         navigate('/pay-rates')
//       } else {
//         console.error('Error updating PayRates')
//         toast({
//           title: 'Error',
//           description: 'Error updating PayRates',
//           variant: 'error'
//         })
//       }
//     } catch (error) {
//       console.error('Error updating PayRates:', error)
//       toast({
//         title: 'Error',
//         description: 'Error updating PayRates',
//         variant: 'error'
//       })
//     }
//   }

//   return (
//     <div className="flex flex-col items-center justify-center w-full p-4 mt-10">
//       <div className="p-4">
//         <h2 className="items-center mx-auto mb-4 text-2xl font-semibold text-center">
//           Update PayRates
//         </h2>
//         <form onSubmit={handleUpdatePayRates}>
//           <div className="mb-4">
//             <label htmlFor="idPay_Rates" className="flex mb-3">
//               IdPayRates:
//             </label>
//             <input
//               type="text"
//               id="idPay_Rates"
//               name="idPay_Rates"
//               placeholder="Enter employee number"
//               value={payRatesData.idPay_Rates}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded outline-none"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="Pay_Rate_Name" className="flex mb-3">
//               Pay_Rate_Name:
//             </label>
//             <input
//               type="text"
//               id="Pay_Rate_Name"
//               placeholder="Enter Pay Rate Name"
//               name="Pay_Rate_Name"
//               value={payRatesData.Pay_Rate_Name}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded outline-none"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="Value" className="flex mb-3">
//               Value:
//             </label>
//             <input
//               type="text"
//               placeholder="Enter values"
//               id="Value"
//               name="Value"
//               value={payRatesData.Value}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded outline-none"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="Tax_Percentage" className="flex mb-3">
//               Tax Percentage:
//             </label>
//             <input
//               type="text"
//               placeholder="Enter tax percentage"
//               id="Tax_Percentage"
//               name="Tax_Percentage"
//               value={payRatesData.Tax_Percentage}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded outline-none"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="Pay_Type" className="flex mb-3">
//               Pay Type:
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Pay Type"
//               id="Pay_Type"
//               name="Pay_Type"
//               value={payRatesData.Pay_Type}
//               onChange={handleChange}
//               required
//               className="p-2 border border-gray-300 rounded outline-none w-96"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="Pay_Amount" className="flex mb-3">
//               Pay Amount:
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Pay Amount"
//               id="Pay_Amount"
//               name="Pay_Amount"
//               value={payRatesData.Pay_Amount}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded outline-none"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="PT_Level_C" className="flex mb-3">
//               PT Level C:
//             </label>
//             <input
//               type="text"
//               placeholder="Enter PT Level C"
//               id="PT_Level_C"
//               name="PT_Level_C"
//               value={payRatesData.PT_Level_C}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded outline-none"
//             />
//           </div>

//           <button
//             type="submit"
//             className="flex justify-center px-4 py-2 mx-auto mt-10 text-white bg-blue-500 rounded w-52 hover:bg-blue-600"
//           >
//             Update PayRates
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }
// export default UpdatePayRates
