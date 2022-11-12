import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import Card from 'react-bootstrap/Card'
import Grid from '@mui/material/Grid'
import axios from '../../Uri'
import { FiEdit } from 'react-icons/fi'
import { BsFillEyeFill } from 'react-icons/bs'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Button, Col, Modal, Row, Stack } from 'react-bootstrap'
//import ApprovalUpdateForm from "./ApprovalUpdateForm";
import AddProject from './UserstoryComponents/AddUserstory'
import ProjectsView from './UserstoryComponents/UserstoryView'
import ProjectUpdate from './UserstoryComponents/UserstoryUpdate'
import DeleteProject from './UserstoryComponents/DeleteUserstory'
// import TaskMain from "./UserstoryComponents/EmployeeTimesheet/TaskMain"
import TaskMain from './UserstoryComponents/TaskMain'
import Radio from '@mui/material/Radio'

function UserStorymain() {
  const [show, setShow] = useState(false)
  const [viewShow, setViewShow] = useState(false)
  const [UserStory, setUserStory] = useState('')
  const [projectId, setProjectId] = useState()
  const [projectName, setProjectName] = useState('')
  const [userStoryId, setUserStoryId] = useState(0)

  const handleClose = () => setShow(false)
  const viewHandleClose = () => setViewShow(false)

  const handleShow = () => setShow(false)
  const viewHandleShow = () => setShow(false)

  const [updateOnboard, setUpdateOnboard] = useState({})
  const [viewOnboard, setViewOnboard] = useState({})

  const [data, setData] = useState([])
  const [addStatus, setAddStatus] = useState(false)
  const [updateStatus, setUpdateStatus] = useState(false)
  const [viewStatus, setViewStatus] = useState(false)
  const [deleteOnboard, setDeleteOnboard] = useState({})
  const [deleteProjects, setDeleteProjects] = useState(false)
  const [deleteStatus, setDeleteStatus] = useState(false)
  const [value1,setValue1]=useState()
  const deleteHandleClose = () => setDeleteProjects(false)
  

  const pull_dataAdd = () => {
    setAddStatus(!addStatus)
  }

  const pull_dataUpdate = () => {
    setUpdateStatus(!updateStatus)
  }

  const pull_dataDelete = () => {
    setDeleteStatus(!deleteStatus)
    // console.log("Delete");
  }

  useEffect(() => {
    loadData()
  }, [addStatus, updateStatus, deleteStatus])
  // useEffect(() => {
  //   loadData();
  // }, [viewStatus]);

  const loadData = async (e) => {
    const response = await axios.get('/userStory/getAllUserStory')
    setData(response.data.data)
    console.log(response.data.data)
  }

  // const rows=data
  // let radioChecked = [rows[0].Id];
  const [columns, setColumns] = useState([
    // {
    //   title: "Action",
    //   render: (rowData) =>
    //     <div>
    //       <Stack direction="horizontal" gap={3}>
    //         <Radio checked={1} value={rowData.storyId} />
    //       </Stack>
    //     </div>

    // },
    {
      field: 'radiobutton',
      headerName: '',
      //width: 200,
      render: (rowData) => (
        <input
          type="radio"
          name="radio"
          style={{ height: '23px', width: '23px' }}
          onChange={() => {
            console.log(rowData)
            setUserStory(rowData.storyId)
            console.log(rowData.projectName)
            setProjectName(rowData.projectName)
            console.log(rowData.storyId)
            setProjectId(rowData.projectId)
            console.log(rowData.projectId)
            setValue1(rowData.storyTitle)
            console.log(rowData.storyTitle)
            
          }}
        />
      ),
    },
    {
      title: 'Story Id',
      field: 'storyId',
      type: 'number',
    },
    {
      title: 'Project Name',
      field: 'projectName',
    },
    {
      title: 'Story Title',
      field: 'storyTitle',
    },
    {
      title: 'Priority',
      field: 'priority',
    },
    {
      title: 'Estimated Hours',
      field: 'estimatedHours',
    },
    // {
    //   title: "Actual Hours",
    //   field: "actualHours",
    // },
    // {
    //   title: 'project Id',
    //   field: 'projectId',
    // },
    // {
    //   title: 'Remaining Hours',
    //   field: 'remainingHours',
    //   width: 100,
    // },
    {
      title: 'Start Date',
      field: 'startDate',
      type: 'date',
      dateSetting: { locale: 'en-GB' },
    },
    {
      title: 'End Date',
      field: 'endDate',
      type: 'date',
      dateSetting: { locale: 'en-GB' },
    },

    {
      title: 'Status',
      field: 'status',
    },
    {
      title: 'Actual Start Date',
      field: 'assignedDate',
      type: 'date',
      dateSetting: { locale: 'en-GB' },
    },
    {
      title: 'Action',
      render: (rowData) => (
        <div>
          <Stack direction="horizontal" gap={3}>
            <Button
              variant="info"
              onClick={(event) => {
                setShow(true)
                console.log(rowData)
                setUpdateOnboard(rowData)
                setProjectName(rowData.projectName)
                console.log(rowData)
                setProjectId(rowData.projectId)
                console.log(rowData.projectId)
               
              }}
            >
              {/* Edit */}
              <FiEdit />
            </Button>{' '}
            <Button
              variant="danger"
              onClick={(event) => {
                setDeleteProjects(true)
                console.log(rowData)
                setDeleteOnboard(rowData)
              }}
            >
              {/* Delete */}
              <RiDeleteBin6Line />
            </Button>
          </Stack>
        </div>
      ),
    },
  ])
  // const [selectionModel, setSelectionModel] = React.useState(radioChecked);
  // radioChecked = selectionModel;

  // const selectedRow = rows.filter((item) => {
  //   return item.Id === selectionModel[0];
  // });
  return (
    <div>
      {/* <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        selectionModel={selectionModel}
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
      /> */}
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e",paddingTop:"5px",paddingBottom:"5px",color:"white" }}>
          <Modal.Title>Edit Userstory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProjectUpdate
            updateOnboard={updateOnboard}
            func={pull_dataUpdate}
            handleClose={handleClose}
          />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
      <Modal show={viewShow} onHide={viewHandleClose} size="lg">
        <Modal.Header closeButton style={{ backgroundColor: '#f5896e' }}>
          <Modal.Title>Onboarding Form</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>
          <ProjectsView
            viewOnboard={viewOnboard}
            // func={pull_data}
            viewHandleClose={viewHandleClose}
          />
        </Modal.Body> */}
        <Modal.Footer>
          <Button variant="secondary" onClick={viewHandleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>

      <Modal
        show={deleteProjects}
        onHide={deleteHandleClose}
        size="md"
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: '#f5896e', color: 'white' }}
        >
          <Modal.Title>Delete userstory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DeleteProject
            deleteOnboard={deleteOnboard}
            func={pull_dataDelete}
            deleteHandleClose={deleteHandleClose}
          />
        </Modal.Body>
      </Modal>

      <Card
        style={{
          paddingTop: '20px',
          paddingRight: '10px',
          paddingLeft: '10px',
          paddingBottom: '10px',
        }}
      >
        <Card.Body>
          <Row>
            <Col>
              <Card.Title>UserStory</Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">
                Dashboard / Userstory{" "}
              </Card.Subtitle> */}
            </Col>
            <Col>
              <AddProject func={pull_dataAdd} />
            </Col>
          </Row>
        </Card.Body>

        <Grid style={{ borderBlockEndWidth: '2px' }}>
          <MaterialTable
            title=""
            columns={columns}
            style={{ color: 'black', fontSize: '14px'}}
            data={data}
            editable={{}}
            options={{
              headerStyle: {
                // backgroundColor: "#FFC47A",
                background: "#f5896e",
                fontSize:"13px",
                paddingBottom:"4px",
                paddingTop:"8px",
                color: "white",

  // height: "50px",
  // position: "absolute",
  // left: "10%",
  // marginLeft: "-3px",
  // top: "0",
              },
            rowStyle: {
                fontSize: 14,
            },

              addRowPosition: 'first',

              actionsColumnIndex: -1,

              //grouping: true,

              exportButton: true,
            }}
            onSelectionChange={(rows) => {
              rows.map((item) => {
                console.log(item.storyId)
                console.log(item)
                setUserStory(item.storyId)
                //console.log(item.projectId);
                setProjectId(item.projectId)
              })
            }}
            selectModel="multiple"
            onSearchChange={(e) => {
              console.log(e)
            }}
          />
        </Grid>
        <TaskMain
          UserStory={UserStory}
          projectName={projectName}
          projectId={projectId}
          value1={value1}
        />
      </Card>
    </div>
  )
}
export default UserStorymain
