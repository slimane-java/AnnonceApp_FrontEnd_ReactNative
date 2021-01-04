
import axios from 'axios';

export class AdminService {

    register(token)
    {
        return axios.post("http://192.168.100.47:8000/api/addAdmin",null,{
            headers:{
                Accept: "application/json",
                'Authorization': 'Bearer '+ token
                
            }

        }
        )
    }

   

   
     

}
export default new AdminService()