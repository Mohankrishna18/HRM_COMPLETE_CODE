import { style } from '@mui/system'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import AppContent from './components/AppContent'
import AppHeader from './components/AppHeader'
import PageTitle from './components/PageTitle'

const reduxMain = () => {
  return (
    <>
    <div className='containerr'>
        <PageTitle>Tasks</PageTitle>
        <div className={style.app__wrapperr}>
            <AppHeader/>
          
            <AppContent/>
        </div>
    </div>
    <Toaster
    position='bottom-right'
    toastOptions={{
        style:{
            fontSize:'1.4rem'
        },
    }}
    />
      
    </>
  )
}

export default reduxMain
