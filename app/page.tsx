import Image from 'next/image'
import Logo from '../assets/Moraware-Logo-horizontal.webp'
import LandingImg from '../assets/istockphoto-1134480086-612x612.jpg'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
export default function Home() {
  return (
    <div>
      <header className='max-w-6xl mx-auto px-4 sm:px-8 py-6'>
        <Image
          className='max-w-xs'
          src={Logo}
          alt='logo'
        />        
      </header>
      <section className='max-w-6xl mx-auto px-4 sm:px-8 py-6 h-[500px] -mt-20 grid grid-flow-col lg:grid-cols-[1fr, 600px] items-center'>
        <div>
          <h1 className='capitalize text-4xl md:text-7xl font-bold'>
            <span className='text-primary'>effortless</span> jop managment
          </h1>
          <p className='leading-loose max-w-md mt-4'>
            Create, manage, and track your job applications in one place.
          </p>
          <Button
            className='mt-4'
            asChild
          >
            <Link href={'/add-jop'}>Get Started</Link>
          </Button>
        </div>
        <Image
          src={LandingImg}
          alt='landing iamge'
          className='hidden lg:block min-w-56'
        />
      </section>
    </div>
  )
}
