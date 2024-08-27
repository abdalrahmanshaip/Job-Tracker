import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  getKindeServerSession,
  LoginLink,
  LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/server'
import Image from 'next/image'

const ImageUser = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession()

  const user = await getUser()
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Image
            src={user?.picture!}
            alt={'user iamge'}
            width={40}
            height={40}
            className='rounded-full cursor-pointer'
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuItem asChild>
            <LogoutLink className='cursor-pointer font-bold'>
              Log out
            </LogoutLink>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default ImageUser
