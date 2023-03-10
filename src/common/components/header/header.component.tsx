import { FC } from 'react'
import clsx from 'clsx'
import { NavLink, Link } from 'react-router-dom'
import { Container } from '../container/container.components'
import { useAuth } from '../../../modules/auth/hooks/use-auth'
interface HeaderProps {}

export const Header: FC<HeaderProps>=()=>{
  const { isLoggedIn, logOut } = useAuth()

  const navLinkClasses = ({isActive}: {isActive: boolean})=> 
  clsx('py-navItem hover:text-black/60 hover:no-underline',{
    'text-black/30': !isActive,
    'text-black/80': isActive
  })

  return(
  <header>
    <nav className='px-2 py-4'>
      <Container>
        <div className='items-center flex justify-between'>
          <Link to='/' className='font-titillium text-2xl mr-8 text-conduit-green'>
            conduit
          </Link>
          <ul className='pl-0 mb-0 list-none flex'>
            <li>
              <NavLink to='/' className={navLinkClasses} end>
                Home
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li className='ml-4'>
                <NavLink to="/" className={navLinkClasses} onClick={logOut}>
                  Log out 
                </NavLink>
              </li>
            ) : (
              <>
                <li className='ml-4'>
                  <NavLink to="/sign-in" className={navLinkClasses}>
                    Sign in
                  </NavLink>
                </li>
                <li className='ml-4'>
                  <NavLink to='/sign-up' className={navLinkClasses}>
                    Sign up
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </Container>
    </nav>
  </header>
  )
}