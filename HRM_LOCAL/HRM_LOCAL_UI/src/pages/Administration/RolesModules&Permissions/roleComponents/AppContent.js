import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../Styles1/modules/app.module.scss';
import RoleItem from './RoleItem';

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
  const roleList = useSelector((state) => state.role.roleList);
  const filterStatus = useSelector((state) => state.role.filterStatus);

  const sortedRoleList = [...roleList];
  sortedRoleList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredRoleList = sortedRoleList.filter((item) => {
    if (filterStatus === 'all') {
      return true;
    }
    return item.status === filterStatus;
  });

  return (
    <motion.div
      className={styles.content__wrapper}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {filteredRoleList && filteredRoleList.length > 0 ? (
          filteredRoleList.map((role) => (
            // <motion.div key={todo.id} variants={child}>
            <RoleItem key={role.id} role={role} />
            // </motion.div>
          ))
        ) : (
          <motion.p variants={child} className={styles.emptyText}>
            No Modules
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default AppContent;
