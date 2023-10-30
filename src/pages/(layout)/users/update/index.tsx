import React, { useState } from 'react'
import axios from 'axios'

const UpdateUser = () => {
  const [userData, setUserData] = useState({
    User_id: '',
    User_Name: '',
    Email: '',
    Password: '',
    Active: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const handleUpdate = async e => {
    e.preventDefault()

    try {
      const response = await axios.put(
        `http://localhost:8081/users/${userData.User_id}`,
        userData
      )

      if (response.status === 200) {
        console.log('User updated successfully')
      } else {
        console.error('Error updating user')
      }
    } catch (error) {
      console.error('Error updating user:', error)
    }
  }

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-semibold">Update User</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label htmlFor="User_id">User ID:</label>
          <input
            type="text"
            id="User_id"
            name="User_id"
            placeholder="Enter user id"
            value={userData.User_id}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="User_Name">User Name:</label>
          <input
            type="text"
            id="User_Name"
            placeholder="Enter user name"
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
            placeholder="Enter email"
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
            placeholder="Enter password"
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
            placeholder="Enter active"
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
          Update
        </button>
      </form>
    </div>
  )
}

export default UpdateUser
