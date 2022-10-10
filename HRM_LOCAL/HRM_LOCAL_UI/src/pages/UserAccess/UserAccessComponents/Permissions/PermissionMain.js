import React,{useEffect} from "react";
import { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from 'framer-motion';

import styles from "../../../../styles/modules/app.module.scss";
import SelectTableComponent from "./SelectionTable";
import RoleTitle from "../Role/RoleTitle";
import { useSelector,useDispatch } from "react-redux";
import { getModuleAction } from "../../../../redux/actions/UserAccessActions";

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

const PermissionMain = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getModuleAction());
  }, []);
  const moduleList = useSelector((state) => state.roles.moduleList.data);
  
  console.log(moduleList);
  return (
    <div>
      <>
        <div>
          <RoleTitle>Modules & Permissions</RoleTitle>
          {/* <motion.div
            className={styles.content__wrapper}
            variants={container}
            initial="hidden"
            animate="visible"
          > */}
            {moduleList && moduleList.length > 0 ? (
              <div className={styles.app__wrapper}>
                <SelectTableComponent />
              </div>
            ) : (
              <motion.p variants={child} className={styles.emptyText}>
                No Roles
              </motion.p>
            )}
          {/* </motion.div> */}
        </div>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              fontSize: "1.4rem",
            },
          }}
        />
      </>
    </div>
  );
};

export default PermissionMain;
