import { format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import "./Role.css";
import styles from "../../../../styles/modules/todoItem.module.scss";
import RoleModal from "./RoleModel";
import {
  deleteRole,
  getRoleModuleAccess,
  getActiveRole,
} from "../../../../redux/actions/UserAccessActions";

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Role({ todo }, { id }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const roleList = useSelector((state) => state.roles.roleList.data);
  console.log(roleList);
  const [selected, setSelected] = useState(0);
  const [roleId,setRoleId]= useState()

  const [active, setActive] = useState(roleList[0].roleId);
  useEffect(() => {
    dispatch(getRoleModuleAccess(active));
    dispatch(getActiveRole(active));
  }, []);

  const handleClick = (e) => {
    setSelected(e);
    console.log(selected);
    console.log(e);
    // dispatch(getRoleModuleAccess(selected));
    // dispatch(getActiveRole(selected));
  };

  const handleDelete = () => {
    dispatch(deleteRole(todo.roleId));
    toast.success("Role Deleted Successfully");
  };

  const handleUpdate = (todo) => {
    setUpdateModalOpen(true);
    console.log(todo)
    setRoleId(todo)
  };

  return (
    <>
      <AnimatePresence>
        {roleList && roleList.length > 0 ? (
          roleList.map((todo, index) => (
            <>
              <motion.div
                className={
                  selected === index
                    ? styles.activeItem
                    : selected != todo.roleId
                    ? styles.item
                    : styles.item
                }
                variants={child}
                key={index}
                //  value={todo.roleId}
                onClick={() => {
                  console.log(todo.roleId);
                  setActive(todo.roleId);
                  console.log(active);
                  dispatch(getRoleModuleAccess(todo.roleId));
                  dispatch(getActiveRole(todo.roleId));
                  setSelected(index);
                }}
              >
                <div className={styles.todoDetails}>
                  <div className={styles.texts}>
                    <p>{todo.roleName}</p>
                  </div>
                </div>
                <div className={styles.todoActions}>
                  <div
                    className={styles.icon}
                    onClick={() => {
                      dispatch(deleteRole(todo.roleId));
                      toast.success("Role Deleted Successfully");
                    }}
                    onKeyDown={() => handleDelete()}
                    tabIndex={todo.roleId}
                    role="button"
                  >
                    <MdDelete />
                  </div>
                  <div
                    className={styles.icon}
                    onClick={() => handleUpdate(todo)}
                    onKeyDown={() => handleUpdate(todo)}
                    tabIndex={index}
                    role="button"
                  >
                    <MdEdit />
                  </div>
                </div>
                <RoleModal
                type="update"
                modalOpen={updateModalOpen}
                setModalOpen={setUpdateModalOpen}
                todo={roleId}
              />
              </motion.div>

             
            </>
          ))
        ) : (
          <motion.p variants={child} className={styles.emptyText}>
            No Roles
          </motion.p>
        )}
      </AnimatePresence>
    </>
  );
}

export default Role;
