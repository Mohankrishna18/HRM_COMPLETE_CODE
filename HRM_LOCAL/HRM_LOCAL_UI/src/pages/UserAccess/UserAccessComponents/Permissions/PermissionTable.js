import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import "./permission.css";
import "./index.css";
import Button from "../Role/Button";
import styles from "../../../../styles/modules/modal.module.scss";

const PermissionTable = () => {
  const [form,setForm]=useState([])
  const [module,setModule]=useState([])
  // handle events
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // handle submit
  function setField(field, value) {
    setForm({
      ...form,

      [field]: value,

    });
  }
  function setData(field, value) {
    setModule({
      ...module, 
      [field]:value,
    });
  }
  const onSubmit = (data) =>
  {
    console.log(module)
    console.log(form)
    console.log(data);
  } 

  const listData = useSelector((state) => state.roles.userAccessList);
  // console.log(listData);
  return (
    <React.Fragment>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th className={styles.text_Header}>Module Name</th>
                    <th className={styles.text_Header}>View</th>
                    <th className={styles.text_Header}>Edit</th>
                    <th className={styles.text_Header}>Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {listData && listData.length > 0 ? (
                    listData.map((data) => (
                      <tr className="bg-gray-100">
                        <td className={styles.texts} value={data.moduleName}>
                          {data.moduleName}
                        </td>
                        <td className={styles.texts} value={data.editAccess}>
                          <input
                            type="checkbox"
                            value={data.editAccess}
                            className="w-8 h-8"
                            onClick={(e) => {
                              setData("ModuleName",data.moduleName)
                              setField("Edit",e.target.value);
                              console.log(data.moduleName);
                              console.log("Edit", e.target.value);
                            }}
                            {...register("edit", {
                              required: {
                                value: true,
                                message: "Edit is required",
                              },
                            })}
                          />
                        </td>
                        <td className=" text ">
                          <input
                            type="checkbox"
                            value={data.viewAccess}
                            className="w-8 h-8"
                            onClick={(e) => {
                              setData("ModuleName",data.moduleName)
                              setField("View",e.target.value);
                              console.log(data.moduleName);
                              console.log("View", e.target.value);
                            }}
                            {...register("View", {
                              required: {
                                value: true,
                                message: "View is required",
                              },
                            })}
                          />
                        </td>
                        <td className=" text ">
                          <input
                            type="checkbox"
                            value={data.deleteAccess}
                            className="w-8 h-8"
                            onClick={(e) => {
                              setData("ModuleName",data.moduleName)
                              setField("Delete",e.target.value);
                              console.log(data.moduleName);
                              // console.log("View", e.target.value);
                            }}
                            {...register("delete", {
                              required: {
                                value: true,
                                message: `${data.moduleName} is required`,
                              },
                            })}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <div></div>
                  )}
                </tbody>
              </table>

              {/* submit section */}
              <div>
                <div className={styles.buttonContainer}>
                  <Button type="submit" variant="primary" onClick={onSubmit}>
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};

export default PermissionTable;
