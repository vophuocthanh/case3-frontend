import {
  IconBuilding,
  IconDashboard,
  IconPerson,
  IconStar
} from '@/components/icons'
import React from 'react'

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
    title: 'Employee',
    icon: <IconBuilding />,
    path: '/employee'
  },
  {
    title: 'PayRates',
    icon: <IconStar />,
    path: '/pay-rates'
  }
]
