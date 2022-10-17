import React from "react";
import Cards from "./Cards/Cards"
//import Tables from "./Tables"
import CRMTabs from "./Tabs/CRMTabs";


 //import clientMaterialTable from "./ClientMaterialTable/clientMaterialTable";
//import ClientMaterial from "./ClientMaterialTable/clientMaterialTable";
// import SuperAdminTabs from "./Tabs/CRMTabs";
const AdminDashBoard = () => {
  return (
    <div className="scroll">


      
        <Cards />
        <br /><br/>
        <CRMTabs/>
        <br></br>
        {/* <ClientMaterial/> */}
       {/* <Tables/>  */}
    


    </div>
  );
};

export default AdminDashBoard;
