
import axios from 'axios';

export class ClientService {

    register(data)
    {
        return axios.post("http://192.168.100.47:8000/api/register",data,{
            headers:{
                Accept: "application/json",
                'content-type': 'multipart/form-data',
            }

        }
        )
    }

   

    User(token)
    {
        return axios.get("http://192.168.100.47:8000/api/user",{
            headers:{
            Accept: "application/json",
            Authorization:'Bearer'+token}
        })
    }
    GetTes(token)
    {
        return axios.get("http://192.168.100.47:8000/api/gettest",{
            headers: { 
                'Accept': 'application/json', 
                'Authorization': 'Bearer '+ token
              }
        })
    }
    GetImage(data)
    {
        return axios.get("http://192.168.100.47:8000/api/getimage/"+data,{
            headers:{
                Accept: "application/json",
                'content-type': 'multipart/form-data',
            }

        }
        )
    }
     

}
export default new ClientService()