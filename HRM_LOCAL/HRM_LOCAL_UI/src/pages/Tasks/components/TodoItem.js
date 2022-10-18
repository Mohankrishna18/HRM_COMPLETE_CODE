import { format } from 'date-fns';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import React, { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {  updateTodo } from '../slices/todoslices';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../../../utils/getClasses';
import CheckButton from './CheckButton';
import TodoModal from './TodoModal';
import { addTodo ,getTodo,deleteTodo} from '../actions/TaskAction';

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0, 
    opacity: 1,
  },
};

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
 
  useEffect(() => {
    dispatch(getTodo())
    if (todo.status === 'closed') {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, []);
  const tasks = useSelector((state) => state.todos.taskList)
  console.log(tasks)
  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({ ...todo, status: checked ? 'closed' : 'open' })
    );
  };

  console.log(tasks)

  const handleDelete = () => {
    console.log(todo)
    dispatch(deleteTodo(todo.taskId));
    //toast.success('Todo Deleted Successfully');
  };

  const handleUpdate = () => {
    dispatch(updateTodo(todo));
    setUpdateModalOpen(true);
  };

  return (
    <>
      <motion.div className={styles.itemm} variants={child}>
        <div className={styles.todoDetailss}>
          <CheckButton checked={checked} handleCheck={handleCheck} />
          
          <div className={styles.textss}>
            <p
              className={getClasses([
                styles.todoTextt,
                todo.status === 'open' && styles['todoText--closed'],
              ])}
            >
           <span style={{paddingRight:"200px",textAlign:"center"}}>  {todo.taskTitle}</span> 
           <span style={{paddingRight:"200px",textAlign:"center"}}>  {todo.status}</span>
            <span style={{paddingRight:"200px"}}>  {todo.estimatedHours}</span> 
           <span style={{paddingRight:"200px",float:"right"}} > {todo.taskType}</span>
           {/* <span style={{paddingRight:"200px",textAlign:"center"}}>  {todo.estimatedHours}</span>  */}
           
            </p>
            
            {/* <p className={styles.time}>
              {format(new Date(todo.time), 'p, MM/dd/yyyy')}
            </p>  */}
          </div>
        </div>
        <div className={styles.todoActionss}>
          <div
            className={styles.iconn}
            onClick={handleDelete}
            onKeyDown={() => handleDelete()}
            tabIndex={0}
            role="button"
          >
            <MdDelete />
          </div>
          <div
            className={styles.iconn}
            onClick={handleUpdate}
            onKeyDown={() => handleUpdate()}
            tabIndex={0}
            role="button"
          >
            <MdEdit />
          </div>
        </div>
      </motion.div>
      <TodoModal
        type="update"
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
        todo={todo}
      />
      
    </>
  );
}

export default TodoItem;