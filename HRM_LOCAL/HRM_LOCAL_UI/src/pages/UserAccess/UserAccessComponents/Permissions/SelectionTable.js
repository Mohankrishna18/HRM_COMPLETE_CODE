import React, { useState } from "react";
import { connectAdvanced } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { createRMA,getModuleAction } from "../../../../redux/actions/UserAccessActions";
import toast from "react-hot-toast";
import axios from "../../../../Uri";
const Users = [
  {
    id: 1,
    selected: false,
    moduleName: "Employee Profile",
    editAccess: false,
    viewAccess: false,
    deleteAccess: false,
  },
  {
    id: 2,
    selected: false,
    moduleName: "Approval",
    editAccess: false,
    viewAccess: false,
    deleteAccess: false,
  },
  {
    id: 3,
    selected: false,
    moduleName: "Leaves",
    editAccess: false,
    viewAccess: false,
    deleteAccess: false,
  },
  {
    id: 4,
    selected: false,
    moduleName: "Clients",
    editAccess: false,
    viewAccess: false,
    deleteAccess: false,
  },
  {
    id: 5,
    selected: false,
    moduleName: "Leads",
    editAccess: false,
    viewAccess: false,
    deleteAccess: false,
  },
];

const SelectTableComponent = () => {
  const dispatch = useDispatch();
  const moduleList = useSelector((state) => state.roles.moduleList.data);
  console.log(moduleList);
  const [List, setList] = useState(moduleList);
  const [MasterChecked, setMasterChecked] = useState(false);
  const [SelectedList, setSelectedList] = useState([]);
  const [editA,setEdit]=useState(false);
  console.log(SelectedList);
  const activeRole = useSelector((state) => state.roles.role);
  console.log(activeRole);
  const status = useSelector((state) => state.roles.rolemoduleCreation);
  console.log(status);


  // Select/ UnSelect Table rows
  const onMasterCheck = (e) => {
    let tempList = List;
    // Check/ UnCheck All Items
    tempList.map((user) => (user.selected = e.target.checked));
    //Update State
    setMasterChecked(e.target.checked);
    // setList(tempList);
    setSelectedList(List.filter((e) => e.selected));

  };

  // Event to get selected rows(Optional)
  const getSelectedRows = () => {
    const dataList = List.filter((e) => e.selected);
    // setSelectedList(List.filter((e) => e.selected))
    console.log(dataList);
    axios
      .post(`/login/createAllModuleAccess`, dataList)
      .then((response) => {  
        toast.success(response.data.message);
         setList(response.data.data);
         setEdit(false)
        // dispatch(getModuleAction());
            })
      .catch((err) => {
        toast.error("Something Went Wrong");
      });
    // dispatch(createRMA(data))
  };

  // Update List Item's state and Master Checkbox State
  const onItemCheck = (e, item) => {
    let tempList = List;
    tempList.map((user) => {
      if (user.moduleId === item.moduleId) {
        user.selected = e.target.checked;
        user.roleId = activeRole;
        // user.roleId=activeRole
      }
      return user;
    });
    //To Control Master Checkbox State
    const totalItems = List.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    // Update State

    setMasterChecked(totalItems === totalCheckedItems);
    // setList(tempList);
    setSelectedList(List.filter((e) => e.selected));
  };
  const onEditCellCheck = (e,item) => {
    let tempList = List;
    tempList.map((user) => {
      if (user.moduleId === item.moduleId) {
        user.editAccess = e.target.checked;
      }
      return user;
    });
  };
  const onViewCellCheck = (e,item) => {
    let tempList = List;
    tempList.map((user) => {
      if (user.moduleId === item.moduleId) {
        user.viewAccess = e.target.checked;
      }
      return user;
    });
  };

  const onDeleteCellCheck = (e,item) => {
    let tempList = List;
    tempList.map((user) => {
      if (user.moduleId === item.moduleId ) {
        user.deleteAccess = e.target.checked
      }
      return user;
    });
  };

  return (
    <div >
      <div className="row">
        <div className="col-md-12">
          <table className="table">
            <thead
              style={{
                background: "#ccc6c6",
                fontSize: "0.9rem",
                height: "50px",
                fontWeight: "10px",
              }}
            >
              <tr>
                <th scope="col">
                  {/* <input
                    type="checkbox"
                    className="form-check-input"
                    style={{ fontSize: "20px", cursor: "pointer" }}
                    checked={MasterChecked}
                    id="mastercheck"
                    onChange={(e) => onMasterCheck(e)}
                  /> */}
                </th>
                <th scope="col">Module Name</th>
                <th scope="col">Edit</th>
                <th scope="col">View</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {List.map((user) => (
                <tr
                  key={user.moduleId}
                  // className={user.selected ? "selected" : ""}
                >
                  <th scope="row">
                    <input
                      type="checkbox"
                      checked={user.selected}
                      style={{ fontSize: "20px", cursor: "pointer" }}
                      className="form-check-input"
                      id="rowcheck{user.moduleId}"
                      onChange={(e) => onItemCheck(e, user)}
                    />
                  </th>
                  <td>{user.moduleName}</td>

                  <td>
                    <input
                      type="checkbox"
                      checked={user.editAccess}
                      className="form-check-input"
                        // id="rowcheck{user.moduleId}"
                      style={{ cursor: "pointer" }}
                      id="rowcheck{user.moduleId}"
                      onChange={(e) => {
                        setEdit(true)
                        onEditCellCheck(e, user)
                        onItemCheck(e, user)
                      
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                        checked={user.viewAccess}
                      className="form-check-input"
                      style={{ cursor: "pointer" }}
                      id="rowcheck{user.moduleId}"

                      onChange={(e) =>{
                        onViewCellCheck(e, user)
                        onItemCheck(e, user)
                      } }
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={user.deleteAccess}
                      className="form-check-input"
                      style={{ cursor: "pointer" }}
                      id="rowcheck{user.moduleId}"
                      onChange={(e) => {onDeleteCellCheck(e, user)
                        onItemCheck(e, user)
                      }
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="btn btn-primary"
            style={{ backgroundColor: "#f5896e",
            borderColor: "#f5896e",float: "right" }}
            onClick={() => {
              getSelectedRows();
              // dispatch(createRMA(createRMList));
            }}
          >
            {/* Get Selected Items {SelectedList.length}  */}
            Submit
          </button>
          {/* <div className="row">
              <b>All Row Items:</b>
              <code>{JSON.stringify(List)}</code>
            </div>
            <div className="row">
              <b>Selected Row Items(Click Button To Get):</b>
              <code>{JSON.stringify(SelectedList)}</code>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default SelectTableComponent;
