import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { AlignLeft, AppWindow, Layers } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const LinksDropdown = () => {
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
      icons: <Layers />,
    },
  ]
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className='lg:hidden'
      >
        <Button
          variant={'outline'}
          size={'icon'}
        >
          <AlignLeft />
          <span className='sr-only'>Toggle links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-52 lg:hidden'
        align='start'
        sideOffset={25}
      >
        {links.map((link) => (
          <DropdownMenuItem key={link.href}>
            <Link href={link.href} className='flex items-center gap-x-2'>
              {link.icons} <span className='capitalize'>{link.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LinksDropdown
