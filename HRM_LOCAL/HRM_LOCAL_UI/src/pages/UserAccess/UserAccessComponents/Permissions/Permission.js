import React from "react";
import { useForm } from "react-hook-form";
import  "./permission.css";
import  "./index.css";
const Permission = () => {
    // handle events 
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // handle submit 
    const onSubmit = data => alert(JSON.stringify(data));

  return (
    <React.Fragment>
      <section>
       <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white w-auto h-auto pb-10 mt-16 mx-5 rounded-lg sm:w-full md:w-4/5 md:mx-auto lg:w-2/5 lg:mx-auto">
            {/* header section */}
            <div>
              <p>
                Permissions
              </p>
            </div>

            {/* body section */}
            <div>
              <table className="min-w-full ">
                <thead className="bg-indigo-500 text-white">
                  <tr>
                    <th></th>
                    <th>
                      Module Name
                    </th>
                    <th>
                      View
                    </th>
                    <th>
                      Edit
                    </th>
                    <th>
                      Delete
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="bg-gray-100">
                    <td className="text-left py-4 px-4 uppercase font-bold text-2xl">
                      EmployeeTimeSheet
                    </td>
                    <td className=" text-center ">
                      <input
                        type="checkbox"
                        value="view"
                        className="w-8 h-8"
                        {...register("maths", {
                             required: {
                                 value:true,
                                 message:'Maths is required'
                             } 
                            }
                             )}
                      />
                    </td>
                    <td className=" text-center ">
                      <input
                        type="checkbox"
                        value="edit"
                        className="w-8 h-8"
                        {...register("maths", {
                            required: {
                                value:true,
                                message:'Maths is required'
                            } 
                           }
                            )}
                      />
                    </td>
                    <td className=" text-center ">
                      <input
                        type="checkbox"
                        value="delete"
                        className="w-8 h-8"
                        {...register("maths", {
                            required: {
                                value:true,
                                message:'Maths is required'
                            } 
                           }
                            )}
                      />
                    </td>
                  </tr>
                  <div className="mx-4">
                  {errors.maths && <span className='text-sm text-red-500'>{errors.maths.message}</span>}
                  </div>

                  {/* science section */}
                  <tr className="bg-gray-200">
                    <td className="text-left py-4 px-4 uppercase font-bold text-2xl">
                      science
                    </td>
                    <td className=" text-center ">
                      <input
                        type="checkbox"
                        value="monday"
                        className="w-8 h-8"
                        {...register("science", {
                            required: {
                                value:true,
                                message:'Science is required'
                            } 
                           }
                            )}
                      />
                    </td>
                    <td className=" text-center ">
                      <input
                        type="checkbox"
                        value="wednesday"
                        className="w-8 h-8"
                        {...register("science", {
                            required: {
                                value:true,
                                message:'Science is required'
                            } 
                           }
                            )}
                      />
                    </td>
                    <td className=" text-center ">
                      <input
                        type="checkbox"
                        value="friday"
                        className="w-8 h-8"
                        {...register("science", {
                            required: {
                                value:true,
                                message:'Science is required'
                            } 
                           }
                            )}
                      />
                    </td>
                  </tr>
                  <div className="mx-4">
                  {errors.science && <span className='text-sm text-red-500'>{errors.science.message}</span>}
                  </div>

                  {/* english section */}
                  <tr className="bg-gray-100">
                    <td className="text-left py-4 px-4 uppercase font-bold text-2xl">
                      English
                    </td>
                    <td className=" text-center ">
                      <input
                        type="checkbox"
                        value="monday"
                        className="w-8 h-8"
                        {...register("english", {
                            required: {
                                value:true,
                                message:'English is required'
                            } 
                           }
                            )}
                      />
                    </td>
                    <td className=" text-center ">
                      <input
                        type="checkbox"
                        value="wednesday"
                        className="w-8 h-8"
                        {...register("english", {
                            required: {
                                value:true,
                                message:'English is required'
                            } 
                           }
                            )}
                      />
                    </td>
                    <td className=" text-center ">
                      <input
                        type="checkbox"
                        value="friday"
                        className="w-8 h-8"
                        {...register("english", {
                            required: {
                                value:true,
                                message:'English is required'
                            } 
                           }
                            )}
                      />
                    </td>
                  </tr>
                  <div className="mx-4">
                  {errors.english && <span className='text-sm text-red-500'>{errors.english.message}</span>}
                  </div>

                  {/* art section */}
                  <tr className="bg-gray-200">
                    <td className="text-left py-4 px-4 uppercase font-bold text-2xl">
                      art
                    </td>
                    <td className=" text-center ">
                      <input
                        type="checkbox"
                        value="monday"
                        className="w-8 h-8"
                        {...register("art", {
                            required: {
                                value:true,
                                message:'Art is required'
                            } 
                           }
                            )}
                      />
                    </td>
                    <td className=" text-center ">
                      <input
                        type="checkbox"
                        value="wednesday"
                        className="w-8 h-8"
                        {...register("art", {
                            required: {
                                value:true,
                                message:'Art is required'
                            } 
                           }
                            )}
                      />
                    </td>
                    <td className=" text-center ">
                      <input
                        type="checkbox"
                        value="friday"
                        className="w-8 h-8"
                        {...register("art", {
                            required: {
                                value:true,
                                message:'Art is required'
                            } 
                           }
                            )}
                      />
                    </td>
                  </tr>
                  <div className="mx-4">
                  {errors.art && <span className='text-sm text-red-500'>{errors.art.message}</span>}
                  </div>
                </tbody>
              </table>

              {/* submit section */}
              <div className="flex justify-center items-center mt-10">
                <input 
                type="submit" 
                value="Submit"
                className="w-1/3 h-10 bg-indigo-500 text-white font-bold rounded-lg" />
              </div>
            </div>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};

export default Permission;
