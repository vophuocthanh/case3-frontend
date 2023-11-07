import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Edit, Trash } from 'lucide-react'
import { DataTable } from '@/components/ui/DataTable'
import { toast } from '@/components/ui/use-toast'

export interface User {
  User_ID: string
  User_Name: string
  Email: string
  Password: string
  Active: string
}

const users = () => {
  const [, setUser] = useState<User | null>(null)
  const [data, setData] = useState([])
  useEffect(() => {
    document.title = 'Dashboard | Users'
  }, [])
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
  const deleteUserMutation = async User_ID => {
    try {
      const response = await axios.delete(
        `http://localhost:8081/users/${User_ID}`
      )
      if (response.status === 204) {
        console.error('Error deleting user')
        toast({
          title: 'Error',
          description: 'Error deleting user',
          variant: 'error'
        })
        const updatedData = data.filter(user => user.User_ID !== User_ID)
        setData(updatedData)
      } else {
        console.log('User deleted successfully')
        toast({
          title: 'Success',
          description: 'User deleted successfully',
          variant: 'success'
        })
      }
    } catch (error) {
      console.error('Error deleting user:', error)
      toast({
        title: 'Error',
        description: 'Error deleting user',
        variant: 'error'
      })
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
          <div className="flex justify-center gap-2">
            <Button variant="outline" className="w-8 h-8 p-0">
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
              className="w-8 h-8 p-0"
              onClick={() => {
                deleteUserMutation(column.row.original.User_ID)
              }}
            >
              <Trash className="text-red-500 cursor-pointer" />
            </Button>
          </div>
        )
      }
    ],
    []
  )
  return (
    <div className="w-full p-3 mt-10">
      <div className="flex items-center justify-between mb-10 ">
        <h2 className="text-2xl font-semibold">Users List</h2>
        <Link to="/users/create">
          <Button>Create User</Button>
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default users
