import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppContent from './roleComponents/AppContent';
import AppHeader from './roleComponents/AppHeader';
import PageTitle from './moduleComponents/PageTitle';
import styles from './Styles/modules/app.module.scss';
//madhuri cahnges
function ModuleAccess() {
  return (
    <>
      <div className="container">
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
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
  );
}

export default ModuleAccess;
