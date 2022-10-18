import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';
import { updateFilterStatus } from '../slices/todoslices';

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);
 //const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
  const [filterStatus, setFilterStatus] = useState("");
  const dispatch = useDispatch();

  const updateFilter = (e) => {
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  };

  return (
    <div className={styles.appHeaderr} >
      <Button onClick={() => setModalOpen(true)} style={{backgroundColor:"burlywood"}}>
        Add Task
      </Button>
      <SelectButton
        id="status"
        onChange={(e) => updateFilter(e)}
      value={filterStatus}
      >
        <option value="Open" onClick={() => dispatch(updateFilterStatus("Open"))}>Open</option>
        <option value="Closed" onClick={() => dispatch(updateFilterStatus("Closed"))}>Closed</option>
     {/* <option value="In Progress">In Progress</option>
       
        <option value="On Hold">On Hold</option> */}
      </SelectButton>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;