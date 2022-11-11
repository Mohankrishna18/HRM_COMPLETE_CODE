import axios from "axios";



const Url = axios.create({


   // baseURL: 'http://15.206.247.212:6065'

   baseURL: 'http://localhost:6065',
//  baseURL:"http://65.1.40.113:6065"



});
                                                                                                 
export default Url; 
