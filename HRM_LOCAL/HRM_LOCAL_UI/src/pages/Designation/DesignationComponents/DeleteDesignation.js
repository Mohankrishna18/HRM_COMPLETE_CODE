
// import React, { useState } from "react";
// import { Button, Form, Modal } from "react-bootstrap";
// import { MdDelete } from "react-icons/md";

// const DeleteDesignation = () => {
//   const [deleteDesignation, setDeleteDesignation] = useState(false);

//   const handleClose = () => setDeleteDesignation(false);
//   const handleShow = () => setDeleteDesignation(true);

//   return (
//     <div>
//       <Button className="rounded-pill" variant="white" onClick={handleShow}>
//         {" "}
//         <MdDelete />
//         Delete
//       </Button>
//       <Modal show={deleteDesignation} onHide={handleClose} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Delete Designation</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form role="form">
//             <Form.Group className="mb-3">
//               <Form.Label>Are you sure want to delete?</Form.Label>
//             </Form.Group>
//             <Button
//               variant="outline-warning"
//               type="submit"
//               style={{
//                 borderRadius: "25px",
//                 backgroundColor: "#ff9b44",
//                 color: "#F4F8F6",
//               }}
//             >
//               Delete
//             </Button>
//             <Button
//               variant="outline-warning"
//               type="submit"
//               style={{
//                 borderRadius: "25px",
//                 backgroundColor: "#ff9b44",
//                 color: "#F4F8F6",
//               }}
//             >
//               Cancel
//             </Button>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default DeleteDesignation;

import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { MdDelete } from "react-icons/md";

const DeleteDesignation = () => {
  const [deleteDesignation, setDeleteDesignation] = useState(false);

  const handleClose = () => setDeleteDesignation(false);
  const handleShow = () => setDeleteDesignation(true);

  return (
    <div>
      <Button className="rounded-pill" variant="white" onClick={handleShow}>
        {" "}
        <MdDelete />
        Delete
      </Button>
      <Modal show={deleteDesignation} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Designation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form role="form">
            <Form.Group className="mb-3">
              <Form.Label>Are you sure want to delete?</Form.Label>
            </Form.Group>
            <Button
              variant="outline-warning"
              type="submit"
              style={{
                borderRadius: "25px",
                backgroundColor: "#ff9b44",
                color: "#F4F8F6",
              }}
            >
              Delete
            </Button>
            <Button
              variant="outline-warning"
              type="submit"
              style={{
                borderRadius: "25px",
                backgroundColor: "#ff9b44",
                color: "#F4F8F6",
              }}
            >
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DeleteDesignation;

