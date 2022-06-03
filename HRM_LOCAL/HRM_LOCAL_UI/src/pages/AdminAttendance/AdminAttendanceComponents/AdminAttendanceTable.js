import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css'
import Pagination from 'react-bootstrap/Pagination'
import { TiTick } from "react-icons/ti";
import { TiTimes } from "react-icons/ti";
import MaterialTable from "material-table";
import { Grid } from "@mui/material";


//import inputdata from './Inputdata';
const EmpTable = (props) => {

    const columns = [
        {
            title: "Employee ID",
            field: "employeeId",
            type: "text",
            headerStyle: {
               // backgroundColor: "#f0451a",
                color: "white",
            },
        },
        {
            title: "Employee Name",
            field: "firstName",
            type: "text",
            headerStyle: {
               // backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "1",
            field: "id",
            type: "text",
            headerStyle: {
               // backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "2",
            field: "price",
            headerStyle: {
                //backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "3",
            field: "checkInDate",
            headerStyle: {
                //backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "4",
            field: "checkOutDate",
            headerStyle: {
                //backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "5",
            field: "bedId",
            headerStyle: {
               // backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "6",
            field: "dueAmount",
            headerStyle: {
              //  backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "7",
            field: "dueAmount",
            headerStyle: {
              //  backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "8",
            field: "dueAmount",
            headerStyle: {
              //  backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "9",
            field: "dueAmount",
            headerStyle: {
              //  backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "10",
            field: "dueAmount",
            headerStyle: {
              //  backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "11",
            field: "dueAmount",
            headerStyle: {
              //  backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "12",
            field: "dueAmount",
            headerStyle: {
              //  backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "13",
            field: "dueAmount",
            headerStyle: {
              //  backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "14",
            field: "dueAmount",
            headerStyle: {
              //  backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "15",
            field: "dueAmount",
            headerStyle: {
              //  backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "16",
            field: "dueAmount",
            headerStyle: {
              //  backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "17",
            field: "dueAmount",
            headerStyle: {
              //  backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "18",
            field: "dueAmount",
            headerStyle: {
              //  backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "19",
            field: "dueAmount",
            headerStyle: {
              //  backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "20",
            field: "dueAmount",
            headerStyle: {
              //  backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "21",
            field: "dueAmount",
            headerStyle: {
              //  backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "22",
            field: "dueAmount",
            headerStyle: {
              //  backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "23",
            field: "dueAmount",
            headerStyle: {
              //  backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "24",
            field: "dueAmount",
            headerStyle: {
              //  backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "25",
            field: "dueAmount",
            headerStyle: {
              //  backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "26",
            field: "dueAmount",
            headerStyle: {
              //  backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "27",
            field: "dueAmount",
            headerStyle: {
              //  backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "28",
            field: "dueAmount",
            headerStyle: {
              //  backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "29",
            field: "dueAmount",
            headerStyle: {
              //  backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "30",
            field: "dueAmount",
            headerStyle: {
              //  backgroundColor: "#1E90FF",
                color: "white",
            },
        },
    ];



    // useEffect(() => {
    // axios 
    // .get("https://fakestoreapi.com/products")
    // .then((res) => {
    // setData(res.data); 
    // console.log(res.data);
    // }) 
    // .catch((err) => {
    // console.log(err);
    // // toast.error("Server Error")
    // });
    // }, []);
    // const obje = { createdBy: userId };

    // const emps=[
    // {a1: <TiTick style={{color: "#55CE63", fontSize:"25"}}/>, employee: "Lebron", a2: <TiTick style={{color: "#55CE63", fontSize:"25"}}/> ,a3:"" ,a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:"",a24:"",a25:"",a26:"",a27:"",a28:"",a29:"",a30:"",a31:""},
    // {a1: <TiTimes style={{color: "#F62D51", fontSize:"25"}}/>, employee: "Russell estbrook",a2: "",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:"",a24:"",a25:"",a26:"",a27:"",a28:"",a29:"",a30:"",a31:""},
    // {a1: <TiTick style={{color: "#55CE63", fontSize:"25"}}/>, employee: "Janes Harden", a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:"",a24:"",a25:"",a26:"",a27:"",a28:"",a29:"",a30:"",a31:""},
    // {a1: <TiTick style={{color: "#55CE63", fontSize:"25"}}/>, employee: "Jennifer Johnson", a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:"",a24:"",a25:"",a26:"",a27:"",a28:"",a29:"",a30:"",a31:""},
    // {a1: <TiTick style={{color: "#55CE63", fontSize:"25"}}/>, employee: "Natalie Robinson", a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:"",a24:"",a25:"",a26:"",a27:"",a28:"",a29:"",a30:"",a31:""},
    // {a1: <TiTick style={{color: "#55CE63", fontSize:"25"}}/>, employee: "John Ferguson", a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:"",a24:"",a25:"",a26:"",a27:"",a28:"",a29:"",a30:"",a31:""},
    // {a1: <TiTick style={{color: "#55CE63", fontSize:"25"}}/>, employee: "Samuel Patterson", a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:"",a24:"",a25:"",a26:"",a27:"",a28:"",a29:"",a30:"",a31:""},
    // {a1: <TiTick style={{color: "#55CE63", fontSize:"25"}}/>, employee: "Jasmine James", a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:"",a24:"",a25:"",a26:"",a27:"",a28:"",a29:"",a30:"",a31:""},
    // {a1: <TiTick style={{color: "#55CE63", fontSize:"25"}}/> , employee: "Patricia Hamilton", a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:"",a24:"",a25:"",a26:"",a27:"",a28:"",a29:"",a30:"",a31:""},
    // {a1: <TiTick style={{color: "#55CE63", fontSize:"25"}}/>, employee: "Michael Hensley", a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:"",a24:"",a25:"",a26:"",a27:"",a28:"",a29:"",a30:"",a31:""},
    // {a1: "", employee: "Elijah Fisher", a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:"",a24:"",a25:"",a26:"",a27:"",a28:"",a29:"",a30:"",a31:""},
    // {a1: "", employee: "Justin Wright", a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:"",a24:"",a25:"",a26:"",a27:"",a28:"",a29:"",a30:"",a31:""},
    // {a1: "", employee: "Paula Reyes", a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:"",a24:"",a25:"",a26:"",a27:"",a28:"",a29:"",a30:"",a31:""},
    // {a1: "", employee: "Gail Grant", a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:"",a24:"",a25:"",a26:"",a27:"",a28:"",a29:"",a30:"",a31:""},
    // {a1: "", employee: "Pearl Chang", a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:"",a24:"",a25:"",a26:"",a27:"",a28:"",a29:"",a30:"",a31:""},
    // {a1: "", employee: "Hanna Ponce", a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:"",a24:"",a25:"",a26:"",a27:"",a28:"",a29:"",a30:"",a31:""},
    // {a1: "", employee: "Nikki ", a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:"",a24:"",a25:"",a26:"",a27:"",a28:"",a29:"",a30:"",a31:""},
    // {a1: "", employee: "Stephens", a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:"",a24:"",a25:"",a26:"",a27:"",a28:"",a29:"",a30:"",a31:""},
    // {a1: "", employee: "Marvel", a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:"",a24:"",a25:"",a26:"",a27:"",a28:"",a29:"",a30:"",a31:""},
    // {a1: "", employee: "Brett Woodland", a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:"",a24:"",a25:"",a26:"",a27:"",a28:"",a29:"",a30:"",a31:""},
    // {a1: "", employee: "Jammy Harden", a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:"",a24:"",a25:"",a26:"",a27:"",a28:"",a29:"",a30:"",a31:""},
    // {a1: "", employee: "Jane Stephens", a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:"",a24:"",a25:"",a26:"",a27:"",a28:"",a29:"",a30:"",a31:""},
    // {a1: "", employee: "Lorenzo Snow", a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:"",a24:"",a25:"",a26:"",a27:"",a28:"",a29:"",a30:"",a31:""},
    // {a1: "", employee: "Corrine", a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:"",a24:"",a25:"",a26:"",a27:"",a28:"",a29:"",a30:"",a31:""},
    // {a1: "", employee: "Annie Crame", a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:"",a24:"",a25:"",a26:"",a27:"",a28:"",a29:"",a30:"",a31:""},
    // {a1: "", employee: "Luka Doncic",a2: "",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:"",a24:"",a25:"",a26:"",a27:"",a28:"",a29:"",a30:"",a31:""}]
    // const renderedtable=(emp, index)=>{
    // return (
    // <tr key={index}>
    // <td>{emp.employee}</td>
    // <td>{emp.a1} </td>
    // <td>{emp.a2} </td>
    // <td>{emp.a3} </td>
    // <td>{emp.a4}</td>
    // <td>{emp.a5}</td>
    // <td>{emp.a6}</td>
    // <td>{emp.a7}</td>
    // <td>{emp.a8}</td>
    // <td>{emp.a9}</td>
    // <td>{emp.a10}</td>
    // <td>{emp.a11}</td>
    // <td>{emp.a12}</td>
    // <td>{emp.a13}</td>
    // <td>{emp.a14}</td>
    // <td>{emp.a15}</td>
    // <td>{emp.a16}</td>
    // <td>{emp.a17}</td>
    // <td>{emp.a18}</td>
    // <td>{emp.a19}</td>
    // <td>{emp.a20}</td>
    // <td>{emp.a21}</td>
    // <td>{emp.a22}</td>
    // <td>{emp.a23}</td>
    // <td>{emp.a24}</td>
    // <td>{emp.a25}</td>
    // <td>{emp.a26}</td>
    // <td>{emp.a27}</td>
    // <td>{emp.a28}</td>
    // <td>{emp.a29}</td>
    // <td>{emp.a30}</td>
    // <td>{emp.a31}</td>



    // </tr>
    // )
    // }


    return (
        <div className='scroll' style={{ paddingBottom: '30px' }}>
            {/* <Table striped bordered hover >
<thead>
<tr>
<th>Employee</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>5</th>
<th>6</th>
<th>7</th>
<th>8</th>
<th>9</th>
<th>10</th>
<th>11</th>
<th>12</th>
<th>13</th>
<th>14</th>
<th>15</th>
<th>16</th>
<th>17</th>
<th>18</th>
<th>19</th>
<th>20</th>
<th>21</th>
<th>22</th>
<th>23</th>
<th>24</th>
<th>25</th>
<th>26</th>
<th>27</th>
<th>28</th>
<th>29</th>
<th>30</th>
<th>31</th>
</tr>
</thead>
<tbody >
{emps.map(renderedtable)}



</tbody>
</Table> */}


            <Grid xs={12}>
                <MaterialTable
                    title="All Employees Attendance"
                    // data={data}
                    sx={{ color: "white" }}
                    columns={columns}
                    options={{
                        exportButton: true,
                        pageSize: 20,
                        actionsColumnIndex: -1,
                        grouping: true,
                        addRowPosition: "first",
                        headerStyle: {
                            backgroundColor: "#ff7214",
                            color: "white",
                            fontSize: "15px",
                            //height: "10px",
                            //fontWeight: 'bold'
                        },
                        rowStyle: {
                            fontSize: 16,
                        },
                    }}
                />
            </Grid>

        </div>
    )
}




export default EmpTable;