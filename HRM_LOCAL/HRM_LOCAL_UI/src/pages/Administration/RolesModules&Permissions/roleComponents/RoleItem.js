import { format } from 'date-fns';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import React, { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../slices/roleSlice';
import styles from '../Styles1/modules/roleItem.module.scss';
import { getClasses } from '../utils/getClasses';
import RoleModal from './RoleModal';
import axios from '../../../../Uri';


const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function RoleItem({ role }) {
  const dispatch = useDispatch();

  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [dataVal, setDataVal] = useState([]);
  const [useData, setUseData] = useState([]);

  const handleDelete = (e) => {
    dispatch(deleteTodo(role.id));
    toast.success('Module Deleted Successfully');

  };

  const handleToggle = () => {

  };

  const handleUpdate = (e) => {
    setUpdateModalOpen(true);
  };

  let nameofemp = "";

  useEffect(() => {

    // const fetchRoles = axios.get("/user/getAllRoles")
    //   .then((res) => {
    //     // setInput('');
    //     console.log(res.data.data);
    //     setDataVal(res.data.data)
    //     // .catch((err) => console.log(err));
    //   })
     const fetchRoles = axios.get("/user/getAllRoles")
      .then((res) => {
        setDataVal(res.data.data)
        // .catch((err) => console.log(err));
      })

  }, [])

  return (
    <>
      <div>
        {
          dataVal.map((y) => (

            < motion.div className={styles.item} variants={child} >
              <div className={styles.roleDetails}>
                <div className={styles.texts}>
                  {/* {
                      dataVal.map((y) => (
                        <p key={y.roleId} > {y.roleName} </p>
                      ))
                    } */}
                  {y.roleName}

                  <p className={styles.time}>
                    {format(new Date(role.time), 'p, MM/dd/yyyy')}
                  </p>

                </div>
              </div>

              <div className={styles.roleActions}>
                <div
                  className={styles.icon}
                  onClick={() => handleDelete()}
                  onKeyDown={() => handleDelete()}
                  tabIndex={0}
                  role="button"
                >

                  <MdDelete />
                </div>
                <div
                  className={styles.icon}
                  onClick={() => handleUpdate()}
                  onKeyDown={() => handleUpdate()}
                  tabIndex={0}
                  role="button"
                >
                  <MdEdit />
                </div>
              </div>

            </motion.div>
          ))
        }
        <RoleModal
          type="update"
          modalOpen={updateModalOpen}
          setModalOpen={setUpdateModalOpen}
          role={role}
        />

      </div>
    </>
  );
}

export default RoleItem;
