import { FC } from 'react'
import { Banner } from './common/components/banner/banner.component'
import { Header } from './common/components/hader/header.component'
import { Feed } from './modules/feed/components/feed/feed.component'

interface AppProps{}

export const App: FC<AppProps>=()=>{
  return(
    <div className='pb-16'>
      <Header />
      <Banner />
      <Feed />
    </div>
  )
} 