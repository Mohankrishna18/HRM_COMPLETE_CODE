import React , {useState, useEffect} from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import axios from "../Uri";


const AvtarComponent = (props) => {
  const [imge, setImge] = useState([]);

  useEffect(() => {
    axios
        .get(`/emp/files/${props.data.employeeId}`)
        .then((response) => {
            console.log(response.data);
            setImge(response.data)
        })
        .catch((error) => {
            console.log(error);

            console.log("something wrong");
        });
}, []);

console.log(imge);

  console.log(props.data); 
  return (
    <div >
            <ListItem>
            <ListItemAvatar>   
                <Avatar src={`data:image/jpeg;base64,${imge.url}`}/>    
            </ListItemAvatar>
            <ListItemText primary={props.data.fullName} secondary={props.data.designationName} />
          </ListItem>
         
       

    </div>
  );
};
 export default AvtarComponent;

