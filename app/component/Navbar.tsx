import ImageUser from './ImageUser'
import LinksDropdown from './LinksDropdown'
import { ThemeToggle } from './ThemeToggle'

const Navbar = () => {
  return (
    <nav className='bg-muted py-4 px-4 sm-px-16 lg:px-14 flex items-center justify-between'>
      <div>
        <LinksDropdown />
      </div>
      <div className='flex items-center gap-x-4'>
        <ThemeToggle />
        <ImageUser />
      </div>
    </nav>
  )
}

export default Navbar
