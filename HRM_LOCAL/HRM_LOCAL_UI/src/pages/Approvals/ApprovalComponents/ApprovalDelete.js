// import React from 'react'

// const ApproveDelete = () => {
//     console.log(props.deleteClient)
   
    
//     const deleteuser=async()=>{
//         try{
//             const res =await axios.delete(`/client/deleteclient/${props.deleteClient.clientId}`)
//             console.log(res)
//             if(res.data.status){
//                 props.func();
//             }
//         }
//         catch(error){
//             console.log(error)
//         }
        
//         // .then((res)=>{
//         //     console.log(res)
            
//         //     if (res.data.status) {
//         //         props.func();

//         //       } else {
//         //         console.log("Props not send");
//         //       }
//         // }).catch((err)=>{
//         //     console.log(err)
//         //     console.log("Not deleted")
//         // })
//         props.handleClosed()
//     }
//   return (
//     <div>
//         <Row>
//             <Row> Are You Sure You want to delete {props.deleteClient.firstName}</Row>
//             <Row>
//                 <Col><Button onClick={deleteuser}>Yes</Button></Col>
                
//             </Row>

//         </Row>
       
        
        
//     </div>
//   )
// }

// export default ApproveDelete
