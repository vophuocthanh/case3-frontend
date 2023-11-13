import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from '@/components/ui/use-toast'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateUser = () => {
  const { userId } = useParams()
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
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/users/${userId}`
        )
        setUserData(response.data)
      } catch (error) {
        console.error('Error fetching user data:', error)
        toast({
          title: 'Error',
          description: 'Error fetching user data',
          variant: 'error'
        })
      }
    }

    fetchData()
  }, [userId])

  const handleUpdate = async e => {
    e.preventDefault()
    try {
      const response = await axios.put(
        `http://localhost:8081/users/${userId}`,
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
    <div className="flex flex-col items-center justify-center w-full p-4 mt-10">
      <div className="">
        <h2 className="items-center mx-auto mb-4 text-2xl font-semibold text-center">
          Update Users
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label htmlFor="User_ID" className="flex mb-3">
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
              className="p-2 border border-gray-300 rounded outline-none w-96"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Email" className="flex mb-3">
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
            <label htmlFor="Password" className="flex mb-3">
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
            <label htmlFor="User_Name" className="flex mb-3">
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
              className="p-2 border border-gray-300 rounded outline-none w-96"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Active" className="flex mb-3">
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
            className="flex justify-center px-4 py-2 mx-auto mt-10 text-white bg-blue-500 rounded w-52 hover:bg-blue-600"
          >
            Update Users
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser
