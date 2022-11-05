import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClasses } from '../../../../utils/getClasses';
import Button, { SelectButton } from './Button';
import styles from '../../../.././styles/modules/app.module.scss';
import RoleModal from './RoleModel';


function RoleHeader() {
  const [modalOpen, setModalOpen] = useState(false);
//   const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
//   const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const dispatch = useDispatch();

  return (
    <div className={styles.appHeader}>
      <Button variant="warning" onClick={() => setModalOpen(true)} 
          style={{ backgroundColor: "#f5896e",
          borderColor: "#f5896e",height:'1000', width : '1000px'}}
      >
        +Add Role
      </Button>
      <RoleModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default RoleHeader;
