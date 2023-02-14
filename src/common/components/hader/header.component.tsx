import clsx from 'clsx'
import {FC} from 'react'
import { NavLink, Link } from 'react-router-dom'
interface HeaderProps {}

export const Header: FC<HeaderProps>=()=>{
  const navLinkClasses = ({isActive}: {isActive: boolean})=> clsx('py-navItem',{
    'text-black/30': !isActive,
    'text-black/80': isActive
  })

  return(
  <header>
    <nav className="px-2 py-4">
      <div className="max-w-screen-xl items-center flex justify-between mx-auto">
        <Link to="/" className='font-titillium text-2xl mr-8 text-conduit-green'>
          conduit
        </Link>
        <ul className='pl-0 mb-0 list-none flex'>
          <li>
            <NavLink to="/" className={navLinkClasses}>
              Home
            </NavLink>
          </li>
          <li className='ml-4'>
            <NavLink to="/sign-in" className={navLinkClasses}>
              Sign in
            </NavLink>
          </li>
          <li className='ml-4'>
            <NavLink to="/sign-up" className={navLinkClasses}>
              Sign up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  )
}