import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from '@/components/ui/use-toast'
import { useNavigate } from 'react-router-dom'

interface UserData {
  User_ID: string
  User_Name: string
  Email: string
  Password: string
  Active: string
}
const CreateUser = () => {
  const [userData, setUserData] = useState<UserData>({
    User_ID: '',
    User_Name: '',
    Email: '',
    Password: '',
    Active: ''
  })
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Users | Create'
  }, [])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:8081/users', userData)
      if (response.status === 201) {
        console.log('User created successfully')
        toast({
          title: 'Success',
          description: 'User created successfully',
          variant: 'success'
        })
        navigate('/users')
      } else {
        console.error('Error creating user')
        toast({
          title: 'Error',
          description: 'Error creating user',
          variant: 'error'
        })
      }
    } catch (error) {
      console.error('Error creating user:', error)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 mt-10">
      <div className="">
        <h2 className="items-center mx-auto mb-4 text-2xl font-semibold text-center">
          Create User
        </h2>
        <form onSubmit={handleSubmit}>
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
            <label htmlFor="Email" className="flex mb-3">
              Email:
            </label>
            <input
              type="email"
              id="Email"
              name="Email"
              value={userData.Email}
              onChange={handleChange}
              required
              placeholder="Enter your Email"
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
              placeholder="Enter your Password"
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
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
            Create Users
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateUser
