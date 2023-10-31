import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from '@/components/ui/use-toast'
import { useNavigate } from 'react-router-dom'

const UpdateUser = () => {
  const [userData, setUserData] = useState({
    User_ID: '',
    User_Name: '',
    Email: '',
    Password: '',
    Active: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Users | Update'
  }, [])

  const handleUpdate = async e => {
    e.preventDefault()
    try {
      const response = await axios.put(
        `http://localhost:8081/users/${userData.User_ID}`,
        userData
      )
      if (response.status === 200) {
        console.log('User updated successfully')
        toast({
          title: 'Success',
          description: 'User updated successfully',
          variant: 'success'
        })
        navigate('/users')
      } else {
        console.error('Error updating user')
        toast({
          title: 'Error',
          description: 'Error updating user',
          variant: 'error'
        })
      }
    } catch (error) {
      console.error('Error updating user:', error)
      toast({
        title: 'Error',
        description: 'Error updating user',
        variant: 'error'
      })
    }
  }

  return (
    <div className="p-4 flex flex-col justify-center items-center w-full mt-10">
      <div className="">
        <h2 className="mb-4 mx-auto text-center items-center text-2xl font-semibold">
          Update Users
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label htmlFor="User_ID" className="mb-3 flex">
              User ID:
            </label>
            <input
              type="text"
              id="User_ID"
              name="User_ID"
              value={userData.User_ID}
              onChange={handleChange}
              required
              placeholder="Enter User ID"
              className="w-96 p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="User_Name" className="mb-3 flex">
              User Name:
            </label>
            <input
              type="text"
              id="User_Name"
              name="User_Name"
              value={userData.User_Name}
              onChange={handleChange}
              required
              placeholder="Enter User Name"
              className="w-96 p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Email" className="mb-3 flex">
              Email:
            </label>
            <input
              type="email"
              id="Email"
              name="Email"
              placeholder="Enter your Email"
              value={userData.Email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Password" className="mb-3 flex">
              Password:
            </label>
            <input
              type="password"
              id="Password"
              name="Password"
              value={userData.Password}
              onChange={handleChange}
              required
              placeholder="Enter your Password"
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Active" className="mb-3 flex">
              Active:
            </label>
            <input
              type="text"
              id="Active"
              name="Active"
              value={userData.Active}
              onChange={handleChange}
              required
              placeholder="Enter your Active"
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <button
            type="submit"
            className="px-4 mt-10 mx-auto flex py-2 text-white w-52 justify-center bg-blue-500 rounded hover:bg-blue-600"
          >
            Update Users
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser
