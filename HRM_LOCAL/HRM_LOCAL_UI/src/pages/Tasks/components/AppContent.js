import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/modules/app.module.scss';
import TodoItem from './TodoItem';

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function AppContent() {
  //const todoList = useSelector((state) => state.todo.todoList);
  //const filterStatus = useSelector((state) => state.todo.filterStatus);

  // const sortedTodoList = [...todoList];
  // sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

 const filteredTodoList = (() => {
  
    if (filterStatus === 'open') {
      return true;
    }
    return item.status === filterStatus;
  });
 const data = useSelector((state)=>state.todos.taskList)
console.log(data)

  return (
    <motion.div
      className={styles.content__wrapperr}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {data && data.length > 0 ? (
          data.map((todo) => (
            // <motion.div key={todo.id} variants={child}>
            <TodoItem key={todo.id} todo={todo} />
            // </motion.div>
          ))
        ) : (
          <motion.p variants={child} className={styles.emptyTextt}>
            No Todos
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default AppContent;