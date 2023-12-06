import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Checkbox } from '@/components/ui/Checkbox'
import { useNavigate } from '@/router'
import { useState } from 'react'
import axios from 'axios'
import { toast } from '@/components/ui/use-toast'

export default function Login() {
  const navigate = useNavigate()
  const [email] = useState('')
  const [password] = useState('')
  function onSubmit(e) {
    e.preventDefault()
    const getDataLogin = async () => {
      try {
        const response = await axios.post('http://localhost:8081/login', {
          email,
          password
        })
        console.log(response)
        toast({
          title: 'Success',
          description: 'Register account successfully',
          variant: 'success'
        })
        navigate('/login')
      } catch (error) {
        console.log(error)
        toast({
          title: 'Error',
          description: 'Login failed',
          variant: 'error'
        })
      }
    }
    console.log(email, password)
    getDataLogin()
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col items-center w-1/4" onSubmit={onSubmit}>
        <div className="mb-4 text-center">
          <h2 className="mb-4 text-3xl font-semibold">Register</h2>
          <p className="text-gray-400">Sign in to stay connected.</p>
        </div>
        <Input placeholder="Email" className="mb-4" name="Email" />
        <Input
          placeholder="Password"
          className="mb-4"
          type="password"
          name="password"
        />
        <div className="flex justify-between w-full mb-6">
          <label className="text-gray-400">
            <Checkbox />
            <span className="ml-2">Remember Me</span>
          </label>
        </div>
        <Button className="w-48" type="submit">
          Register
        </Button>
      </form>
    </div>
  )
}
