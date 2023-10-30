import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { IconSearch } from '../components/icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/DropdownMenu'
import { Skeleton } from '@/components/ui/skeleton'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
interface Props {
  // user: User
  isToggler: boolean
  onToggle: () => void
  loading?: boolean
}

export default function Header({ loading }: Props) {
  const navigate = useNavigate()
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
  const logout = () => {
    // localStorage.removeItem('access_token')
    navigate('/login')
  }
  return (
    <div className="flex items-center justify-between px-5 py-4">
      <div className="flex items-center gap-[82px] flex-1">
        {/* <Logo /> */}
        {/* <h1 className="text-2xl font-semibold text-primary">sậhuhdajks</h1> */}
        <image
          xlinkHref="https://wall.vn/wp-content/uploads/2019/11/hinh-nen-minions-de-thuong-3.jpg"
          alt="Nhom-3"
          className="object-cover w-[100px] h-[50px]"
        />

        <Search />
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex space-x-4">
                  {loading ? (
                    <>
                      <Skeleton className="w-12 h-12 rounded-full" />
                      <div className="space-y-2 w-max">
                        <Skeleton className="h-4" />
                        <Skeleton className="h-4" />
                      </div>
                    </>
                  ) : (
                    <>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback></AvatarFallback>
                      </Avatar>
                      {data.map(user => (
                        <div className="w-max" key={user.User_id}>
                          {/* <h2 className="text-slate-800">{user.User_Name}</h2> */}
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={logout} className="cursor-pointer">
                    <LogOut className="w-4 h-4 mr-2" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </TooltipTrigger>
          <TooltipContent>Account</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

function Search() {
  return (
    <div className=" px-[10px] rounded-lg bg-grayf4 flex items-center gap-2 flex-[0_1_405px] h-[38px]">
      <IconSearch></IconSearch>
      <input
        type="text"
        className="w-full text-xs font-normal bg-transparent outline-none text-primary placeholder:text-gray80"
        placeholder="Search Property, Customer etc"
      />
    </div>
  )
}
