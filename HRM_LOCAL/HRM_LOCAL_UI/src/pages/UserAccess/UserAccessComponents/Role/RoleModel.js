import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import toast from 'react-hot-toast';
import Button from './Button';
import styles from '../../../../styles/modules/modal.module.scss';
import {createRole,updateRole} from "../../../../redux/actions/UserAccessActions";

const dropIn = {
    hidden: {
      opacity: 0,
      transform: 'scale(0.9)',
    },
    visible: {
      transform: 'scale(1)',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      transform: 'scale(0.9)',
      opacity: 0,
    },
  };

  function RoleModal({type, modalOpen, setModalOpen, todo}) {
    const dispatch = useDispatch();
    const [roleName, setRoleName] = useState('');
    const [status, setStatus] = useState(false);
// console.log(props.todo)
// const {type,todo,modalOpen} =props
// console.log(todo.roleId,todo.roleName);
  
useEffect(() => {
  if (type === 'update' && todo) {
    setRoleName(todo.roleName);
    setStatus(todo.status);
  } else {
    setRoleName('');
    setStatus(false);
  }
}, [type, todo, modalOpen]);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (roleName === '') {
        toast.error('Please enter a Role');
        return;
      }
      if (roleName) {
        if (type === 'add') {
          dispatch(
            createRole({
              roleName,
              status:true,
            })
          );
          toast.success('Role added successfully');
        }
        if (type === 'update') {
          if (todo.roleName !== roleName) {
            dispatch(updateRole(todo.roleId,{...todo,roleName }));
            toast.success('Role Updated successfully');
          } else {
            toast.error('No changes made');
            return;
          }
        }
        setModalOpen(false);
      }
    };
  
    return (
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className={styles.wrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.container}
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className={styles.closeButton}
                onKeyDown={() => setModalOpen(false)}
                onClick={() => setModalOpen(false)}
                role="button"
                tabIndex={0}
                animation
                initial={{ top: 40, opacity: 0 }}
                animate={{ top: -10, opacity: 1 }}
                exit={{ top: 40, opacity: 0 }}
              >
                <MdOutlineClose />
              </motion.div>
  
              <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                <h1 className={styles.formTitle}>
                  {type === 'add' ? 'Add' : 'Update'} ROLE
                </h1>
                <label htmlFor="Role Name">
                  Role Name
                  <input
                    type="text"
                    id="roleName"
                    value={roleName}
                    onChange={(e) => setRoleName(e.target.value)}
                  />
                </label>

                <div className={styles.buttonContainer}>
                  <Button type="submit" variant="primary">
                    {type === 'add' ? 'Add Role' : 'Update Role'}
                  </Button>
                  <Button variant="secondary" onClick={() => setModalOpen(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
  
  export default RoleModal;