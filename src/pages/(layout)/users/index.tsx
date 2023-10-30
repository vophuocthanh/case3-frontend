import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import Create from '@/components/create/Create'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Edit, Trash } from 'lucide-react'
import { Avatar } from '@/components/ui/Avatar'
import { DataTable } from '@/components/ui/DataTable'
import { toast } from '@/components/ui/use-toast'
import UpdateUser from './update'

export interface User {
  User_id: string
  User_Name: string
  Email: string
  Password: string
  Active: string
}

const users = () => {
  const [user, setUser] = useState<User | null>(null)
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('http://localhost:8081/users')
        setData(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])
  const deleteUserMutation = async User_id => {
    try {
      const response = await axios.delete(
        `http://localhost:8081/users/${User_id}`
      )
      if (response.status === 204) {
        console.log('User deleted successfully')
      } else {
        console.error('Error deleting user')
      }
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }

  const columns = useMemo(
    () => [
      {
        header: 'UserId',
        accessorKey: 'UserId.User_id',
        cell: column => <span>{column?.row?.original?.User_ID}</span>
      },
      {
        header: 'Email',
        accessorKey: 'email.Email',
        cell: column => {
          return <span>{column?.row?.original?.Email}</span>
        }
      },
      {
        header: 'Password',
        accessorKey: 'password.Password',
        cell: column => <span>{column?.row?.original?.Password}</span>
      },
      {
        header: 'UserName',
        accessorKey: 'UserName.User_name',
        cell: column => <span>{column?.row?.original?.User_Name}</span>
      },
      {
        header: 'Active',
        accessorKey: 'active',
        cell: column => {
          return <span>{column?.row?.original?.Active}</span>
        }
      },
      {
        header: () => <div className="text-center">Action</div>,
        accessorKey: 'action',
        cell: column => (
          <div className="flex gap-2 justify-center">
            <Button variant="outline" className="h-8 w-8 p-0">
              <Link to="/users/update">
                <Edit
                  className="cursor-pointer"
                  onClick={() => {
                    setUser(column.row.original)
                  }}
                ></Edit>
              </Link>
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => {
                deleteUserMutation(column.row.original.User_id)
              }}
            >
              <Trash className="cursor-pointer text-red-500" />
            </Button>
          </div>
        )
      }
    ],
    []
  )
  return (
    <div className="w-full p-3">
      <div className=" flex justify-between items-center mb-10">
        <h2 className="text-2xl font-semibold">Users List</h2>
        <Link to="/users/create">
          <Button>Create</Button>
        </Link>
      </div>
      {/* <table>
        <thead>
          <th>Active</th>
          <th>Email</th>
          <th>Password</th>
          <th>User_id</th>
          <th>User_name</th>
        </thead>
        <tbody>
          {data.map(d => (
            <tr key={d.User_id}>
              <td>{d.Active}</td>
              <td>{d.Email}</td>
              <td>{d.Password}</td>
              <td>{d.User_ID}</td>
              <td>{d.User_Name}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default users
