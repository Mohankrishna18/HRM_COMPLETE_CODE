import { AnimatePresence, motion } from "framer-motion";
// import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../../.././styles/modules/app.module.scss";
import Role from "./Role";
import { getRole } from "../../../../redux/actions/UserAccessActions";

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

function RoleContent() {
  const roleList = useSelector((state) => state.roles.roleList.data);
  // console.log(roleList);
  const [selected, setSelected] = useState(0);
  const dispatch = useDispatch();
  const [index, setIndex] = useState();

  useEffect(() => {
    dispatch(getRole());
  }, []);



  return (
    <motion.div
      className={styles.content__wrapper}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {roleList && roleList.length > 0 ? (<Role />)
      : (
        <motion.p variants={child} className={styles.emptyText}>
          No Roles
        </motion.p>
      )}

    </motion.div>
  );
}

export default RoleContent;
