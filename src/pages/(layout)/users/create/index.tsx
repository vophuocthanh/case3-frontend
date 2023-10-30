import React, { useState } from 'react'
import axios from 'axios'
import { toast } from '@/components/ui/use-toast'
import { useNavigate } from 'react-router-dom'

interface UserData {
  User_Name: string
  Email: string
  Password: string
  Active: string
}
const CreateUser = () => {
  const [userData, setUserData] = useState<UserData>({
    User_Name: '',
    Email: '',
    Password: '',
    Active: ''
  })
  const navigate = useNavigate()

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
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-semibold">Create User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="User_Name">User Name:</label>
          <input
            type="text"
            id="User_Name"
            name="User_Name"
            value={userData.User_Name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            id="Email"
            name="Email"
            value={userData.Email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            id="Password"
            name="Password"
            value={userData.Password}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Active">Active:</label>
          <input
            type="text"
            id="Active"
            name="Active"
            value={userData.Active}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Create
        </button>
      </form>
    </div>
  )
}

export default CreateUser
