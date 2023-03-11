import { FC } from 'react'
import { Header } from './common/components/header/header.component'
import { Route, Routes } from 'react-router-dom'
import { GlobalFeedPage } from './modules/feed/pages/global-feed-page'
import { ProfilePage } from './modules/profile/pages/profile.page'
import { ArticalePage } from './modules/feed/pages/artical.page'
import { SignUpPage } from './modules/auth/pages/sign-up.page'
import { SignInPage } from './modules/auth/pages/sign-in.page'

interface AppProps{}

export const App: FC<AppProps>=()=>{
  return(
    <div className='pb-16'>
      <Header />
      <Routes>
        <Route path="/" element={<GlobalFeedPage />}/>
        <Route path="/:profile" element={<ProfilePage/>} />
        <Route path="/:profile/favorites" element={<ProfilePage/>} />
        <Route path="/articale/:slug" element={<ArticalePage/>}/>
        <Route path="sign-up" element={<SignUpPage/>}/>
        <Route path="sign-in" element={<SignInPage/>}/>
      </Routes>
    </div>
  )
} 