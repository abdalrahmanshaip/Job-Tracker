'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import logo from '../../assets/Moraware-Logo-horizontal.webp'
import Iamge from 'next/image'
import { AppWindow, ChartSpline, Layers } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
const Sidebar = () => {
  const pathName = usePathname()
  const links = [
    {
      label: 'Add jop',
      href: '/add-jop',
      icons: <Layers />,
    },
    {
      label: 'Jops',
      href: '/jops',
      icons: <AppWindow />,
    },
    {
      label: 'stats',
      href: '/stats',
      icons: <ChartSpline />,
    },
  ]
  return (
    <aside className='py-4 px-8 bg-muted h-full'>
      <Iamge
        src={logo}
        alt='logo'
        className='mx-auto max-w-40'
      />
      <div className='flex flex-col mt-20 gap-y-4'>
        {links.map((link) => {
          return (
            <Button
              asChild
              key={link.href}
              variant={pathName === link.href ? 'default' : 'link'}
            >
              <Link
                href={link.href}
                className='flex items-center gap-x-2'
              >
                {link.icons} <span className='capitalize'>{link.label}</span>
              </Link>
            </Button>
          )
        })}
      </div>
    </aside>
  )
}

export default Sidebar
