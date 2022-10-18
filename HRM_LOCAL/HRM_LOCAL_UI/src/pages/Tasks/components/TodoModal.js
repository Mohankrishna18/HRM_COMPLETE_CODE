import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import toast from 'react-hot-toast';
import Moment from "moment";
import { addTodo ,getTodo,updateTodo ,deleteTodo} from '../actions/TaskAction';
//import { updateFilterStatus } from '../slices/todoslices';
import styles from '../styles/modules/modal.module.scss';
import Button from './Button';

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

function TodoModal({ type, modalOpen, setModalOpen, todo }) {
  const dispatch = useDispatch();
  console.log(type)
  console.log(todo)
  const task = type === "update" ? todo.taskTitle:""
  const tasktype = type ==="update" ? todo.taskType: ""
  const [projects, setprojects] = useState([]);
  const [taskTitle, settaskTitle] = useState(task);
  const [taskType , settaskType] = useState(tasktype);
  const [status, setStatus] = useState('closed');
  const [plannedStartDate, setplannedStartDate] = useState();
  const [plannedEndDate, setplannedEndDate] = useState();
 const[actualStartDate,setactualStartDate]=useState();
  const [estimatedHours, setestimatedHours] = useState();
  const [priority, setpriority] = useState();
  const [form, setForm] = useState({});
  
  const loadData = async () => {
    const res = await axios.get("/clientProjectMapping/getAllProjects");
    setprojects(res.data.data);
    console.log(res.data.data);
  };
  useEffect(() => {
    dispatch(getTodo())
    // if (type === 'update' && todo) {
    //   settaskTitle(todo.tasktitle);
    //   settaskType(todo.taskType);
    //   setplannedStartDate(todo.plannedstartdate);
    //   setplannedEndDate(todo.plannedenddate);
    //   setestimatedHours(todo.estimatehours);
    //   setpriority(todo.priority);
    //   setStatus(todo.status);
    // } else {
    //   settaskTitle('');
    //   setStatus('incomplete');
    // }
  }, [type,task,modalOpen,statu]);
 const statu = useSelector((state) => state.todos.status)
  const tasks = useSelector((state) => state.todos.taskList)
  console.log(tasks)
//console.log(todo)
  function setField(field, value) {
    setForm({ ...form, [field]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    if(type === "update"){
      const data ={
        projects: projects,
        taskType:taskType,
        taskTitle:taskTitle,
        estimatedHours:estimatedHours,
        status:status,
        priority:priority
      }
      console.log(data)
      dispatch(updateTodo(data,todo.taskId));
      console.log(form);
    }else{
      dispatch(addTodo(form))
    }

  
    // if (taskTitle === '') {
    //   toast.error('Please enter a title');
    //   return;
    // }
    
      //  if (type === 'add') {
      //    toast.success('Task added successfully');
      // }
    //   if (type === 'update') {
    //     if (todo.tasktitle !=='') {
    //     // dispatch(updateTodo(form));
    //       toast.success('Task Updated successfully');
    //     } else {
    //       toast.error('No changes made');
    //       return;
    //     }
    //   }
    //   setModalOpen(false);
     }
  
// const planneddate = Moment(todo.plannedStartDate).format("DD-MM-YYYY")
// console.log(planneddate)
  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          className={styles.wrapperr}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.containerr}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className={styles.closeButtonn}
              onKeyDown={() => setModalOpen(false)}
              onClick={() => setModalOpen(false)}
              role="button"
              tabIndex={0}
              // animation
              initial={{ top: 40, opacity: 0 }}
              animate={{ top: -10, opacity: 1 }}
              exit={{ top: 40, opacity: 0 }}
            >
              <MdOutlineClose />
            </motion.div>

            <form className={styles.formm} onSubmit={handleSubmit}>
              <h1 className={styles.formtaskTitlee} style={{textAlign:"center"}}>
                {type === 'update' ? 'Update':'Add' } Task
              </h1>
              <label htmlFor="type">
                Project *
                <select
                  id="type"
                  defaultValue={type === "update" ? todo.project:"" }
                  onChange={
                    type === "update"
                    ?(e) => setprojects(e.target.value)
                   : (e) =>setField('project', e.target.value) }
                >
                  <option>Select project</option>
                   {projects.map((project) => (
                   <option value={project.projectName}>
                   {project.projectName}
                   </option>
               ))}

                </select>
              </label>
              <label htmlFor="type">
                Task Type*
                <select
                  id="type"
                  defaultValue={type === "update" ? todo.taskType:"" }
                  onChange={
                    type === "update"
                    ?(e) => settaskType(e.target.value)
                   : (e) =>setField('taskType', e.target.value) }
                >
                  <option >Select taskType</option>
                  <option value="Analysis           ">Analysis</option>
                  <option value="Development        ">Development</option>
                  <option value="Code Review        ">Code Review</option>
                  <option value="Unit Testing       ">Unit Testing</option>
                  <option value="Code Integration   ">Code Integration</option>
                  <option value="Integration Testing">Integration Testing</option>
                  <option value="Design Review      ">Design Review</option>
                  <option value="TestCase Creation  ">TestCase Creation</option>
                  <option value="Testcase Review    ">Testcase Review</option>
                  <option value="Testcase Execution ">Testcase Execution</option>
                  <option value="Deployment         ">Deployment</option>
                  <option value="others             ">others</option>
                </select>
              </label><br/>
              <label htmlFor="taskTitle" style={{width:"100%"}}>
                Task Title*
                <input
                  id="taskTitle"
                 // value={data.taskTitle}
                  defaultValue={type === "update" ? todo.taskTitle : ""}
                  onChange={
                    type === "update"
                    ?(e) =>settaskTitle(e.target.value)
                   : (e) => setField('taskTitle', e.target.value)}
                />
              </label><br/>
              <label htmlFor="plannedStartDate">
                Planned Start Date*
                <input
                  type="date"
                  id="plannedStartDate"
                  value={plannedStartDate}
                  onChange={(e) => setField('plannedStartDate', e.target.value)}
                />
              </label>
              <label htmlFor="plannedEndDate">
                Planned End Date*
                <input
                  type="date"
                  id="plannedEndDate"
                  value={plannedEndDate}
                  onChange={(e) => setField('plannedEndDate', e.target.value)}
                />
              </label>
              <label htmlFor="actualStartDate">
                Actual Start Date*
                <input
                  type="date"
                  id="actualstartdate"
                  value={actualStartDate}
                  onChange={(e) => setField('actualStartDate', e.target.value)}
                />
              </label>
              <label htmlFor="estimatedHours">
                Estimated Hours*
                <input
                  type="text"
                  id="estimatedHours"
                  defaultValue={type === "update" ?  todo.estimatedHours:""}
                  onChange={
                    type === "update"
                    ?(e) => setestimatedHours(e.target.value)
                   : (e) => setField('estimatedHours', e.target.value)}
                />
              </label>
              <label htmlFor="type">
              Priority
                <select
                  id="type"
                  value={priority}
                  onChange={(e) => setpriority(e.target.value)}
                >
                  <option>P1</option>
                  <option>P2</option>
                  <option>P3</option>
                </select>
              </label>
              <label htmlFor="status">
                Status
                <select
                  id="status"
                  defaultValue={type === "update" ?  todo.status:""}
                  onChange={
                    type === "update"
                    ?(e) =>setStatus(e.target.value)
                   : (e) => setField('status', e.target.value) }
                >
                  <option value="Open      " >Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Closed    " >Closed</option>
                  <option value="On Hold   " >On Hold</option>
                </select>
              </label>
              <div className={styles.buttonContainerr}>
                <Button type="submit" style={{backgroundColor:"rgba(210, 143, 56, 0.621)"}}  >
                  {type === 'add' ? 'Submit Task' : 'Update Task'}
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

export default TodoModal;