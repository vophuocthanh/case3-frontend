import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Checkbox } from '@/components/ui/Checkbox'
import { useNavigate } from '@/router'
import { useState } from 'react'
import axios from 'axios'
import { toast } from '@/components/ui/use-toast'
import { Link } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [email] = useState('') // Fixed: Use state to manage email
  const [password] = useState('') // Fixed: Use state to manage password

  async function onSubmit(e) {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:8081/login', {
        email,
        password
      })
      console.log(response)
      toast({
        title: 'Success',
        description: 'Login successfully',
        variant: 'success'
      })
      navigate('/')
    } catch (error) {
      console.error(error) // Changed: Log error to console
      toast({
        title: 'Error',
        description: 'Login failed',
        variant: 'error'
      })
    }
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col items-center w-1/4" onSubmit={onSubmit}>
        <div className="mb-4 text-center">
          <h2 className="mb-4 text-3xl font-semibold">Sign In</h2>
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
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </div>
        <Button className="w-48" type="submit">
          Sign In
        </Button>
      </form>
    </div>
  )
}
