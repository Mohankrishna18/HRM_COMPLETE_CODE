import React from "react";
import { useEffect,useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/esm/Button';
import {MdDelete} from  'react-icons/md'
import {axios} from 'axios'
import { toast } from 'react-toastify';
const Delete =()=> {
    const [show, setShow] = useState(false);

    const [status,setStatus]= useState("")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const notify=()=>toast(" Deleted successful");
    const handlechnge=()=>{
      // axios.delete(
      //   ``)
      //     .then(res => {
      //     console.log(res);
      //     console.log(res.data);
      //     })
  notify()
    }
     

    return (
      <>
        <Button  className="rounded-pill" variant="white" onClick={handleShow}> <MdDelete/>
          Delete
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Action </Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure want to delete data</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handlechnge} type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Delete;