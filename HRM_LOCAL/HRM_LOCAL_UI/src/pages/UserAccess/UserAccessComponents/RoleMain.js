import React from 'react'


import { Toaster } from 'react-hot-toast';
import RoleContent from './Role/RoleContent';
import RoleHeader from './Role/RoleHeader';
import RoleTitle from './Role/RoleTitle';
import styles from '../../../styles/modules/app.module.scss';
const RoleMain = () => {
  return (
    <>
<div className="role_container">
        <RoleTitle>Roles & Permissions</RoleTitle>
        <div className={styles.app__wrapper}>
          <RoleHeader />
          <br/>
          <RoleContent />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </>
  )
}

export default RoleMain
