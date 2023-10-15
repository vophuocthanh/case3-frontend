import {
  IconBuilding,
  IconDashboard,
  IconMessage,
  IconPerson,
  IconProfile,
  IconStar
} from '@/components/icons'
import React from 'react'

// Your React component code here

export const sidebarLinks = [
  {
    title: 'Dashboard',
    icon: <IconDashboard />,
    path: '/'
  },
  {
    title: 'Users',
    icon: <IconPerson />,
    path: '/users'
  },
  {
    title: 'Agent',
    icon: <IconBuilding />,
    path: '/agent'
  },
  {
    title: 'Review',
    icon: <IconStar />,
    path: '/review'
  },
  {
    title: 'Message',
    icon: <IconMessage />,
    path: '/message'
  },
  {
    title: 'My Profile',
    icon: <IconProfile />,
    path: '/my-profile'
  }
]
